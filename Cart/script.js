document.addEventListener("DOMContentLoaded", function() {
    let decreaseButtons = document.querySelectorAll(".decrease");
    let increaseButtons = document.querySelectorAll(".increase");
    let amounts = document.querySelectorAll(".product-amount");
    let prices = document.querySelectorAll(".product-price");
    let quantities = document.querySelectorAll(".quan");

    let totalAmount = 0;

    function updateAmount(itemIndex) {
        let itemPrice = parseFloat(prices[itemIndex].textContent);
        let itemQuantity = parseInt(quantities[itemIndex].textContent);
        let itemAmount = itemPrice * itemQuantity;
        amounts[itemIndex].textContent = itemAmount.toFixed(2);
    }

    increaseButtons.forEach((btn, index) => {
        btn.addEventListener('click', function() {
            let currQuantity = parseInt(quantities[index].textContent);
            currQuantity++;
            quantities[index].textContent = currQuantity;
            updateAmount(index);
            totalAmount += parseFloat(prices[index].textContent);
            document.getElementById("totalAmount").textContent = totalAmount.toFixed(2);
        });
    });

    decreaseButtons.forEach((btn, index) => {
        btn.addEventListener('click', function() {
            let currQuantity = parseInt(quantities[index].textContent);
            if(currQuantity > 0) {
                currQuantity--;
                quantities[index].textContent = currQuantity;
                updateAmount(index);
                totalAmount -= parseFloat(prices[index].textContent);
                document.getElementById("totalAmount").textContent = totalAmount.toFixed(2);
            }
        });
    });
});
