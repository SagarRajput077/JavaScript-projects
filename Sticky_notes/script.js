let text = document.getElementById("text_area");
let btn = document.getElementById("add_button");
let color = document.getElementById("color");
let notes = document.getElementById("notes_container");
let hide = document.getElementById("headline");

function addNotes() {
    if(text.value===""){
        alert("Enter Your Notes !")
        return;
    }

    hide.innerText="";
    let div = document.createElement("div");
    let p = document.createElement("p");
    let cross_btn = document.createElement("button");

    div.appendChild(p);
    div.appendChild(cross_btn);
    notes.appendChild(div);

    cross_btn.innerText = "X";
    p.innerText = text.value;
    div.style.backgroundColor = color.value;
    text.value = "";

    div.style.width = "200px"; 
    div.style.height = "200px"; 
    div.style.boxShadow = "0px 0px 10px rgba(0, 0, 0, 0.5)"; 

    cross_btn.style.width = "40px";
    cross_btn.style.height="30px";

    cross_btn.addEventListener('click',function(){
        div.style.display="none";
    })
}

btn.addEventListener('click', addNotes);
