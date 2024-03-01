const circle = document.getElementById("circle");
const change = document.getElementById("oval");

let toggle = false;

change.addEventListener('click', () => {
    if (!toggle) {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        change.style.backgroundColor = "white";
        circle.style.backgroundColor = "black"; 
        toggle = true;
        change.style.boxShadow="0px 0px 80px 0px white";
        circle.style.marginLeft = "90px";
    } else {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        change.style.backgroundColor = "black";
        circle.style.backgroundColor = "white"; 
        toggle = false;
        circle.style.marginLeft = "3px";
        change.style.boxShadow = "0px 0px 80px 0px black";
    }
});
