let results = document.getElementById("result");
const window1 = window;

function displayEmoji(data=emojiList){

    results.innerHTML="";

    data.forEach(obj=>{
        const card = document.createElement("div");
        card.setAttribute("class","card");

        const emojiImg = document.createElement("div");
        const emojiName = document.createElement("div");
        const emojiDesc = document.createElement("div");

        emojiImg.setAttribute("class","img");
        emojiName.setAttribute("class","name");
        emojiImg.innerText = obj.emoji;
        emojiName.innerText = obj.aliases[0].toUpperCase();

        card.appendChild(emojiImg);
        card.appendChild(emojiName);

        results.appendChild(card);
    })
}
function getdata(event) {
    const query = event.target.value;
    const filteredData = emojiList.filter((singleEmoji) => {
        if (singleEmoji.tags.find((ele) => ele === query)) {
            return true;
        }
        if (singleEmoji.aliases.find((ele) => ele === query)) {
            return true;
        }
        if (singleEmoji.description.indexOf(query) !== -1) {
            return true;
        }

    })

    displayEmoji(filteredData);
}


window.addEventListener("load", () => {
    displayEmoji();
})

const userInput = document.getElementById("inputspace");
userInput.addEventListener("input", getdata)