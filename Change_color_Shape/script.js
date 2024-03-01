
var isTriangle = false;
var chShape = document.getElementById("change-shape");
var colors = document.getElementById("change-color");
chShape.addEventListener("click",changeShape);


let color = (a,b,c)=>`rgb(${a},${b},${c})`;

colors.addEventListener('click',function(){
    let randomR = Math.floor(Math.random()*256);
    let randomG = Math.floor(Math.random()*256);
    let randomB = Math.floor(Math.random()*256);
    circle.style.backgroundColor = color(randomR,randomG,randomB);
})
function changeShape()
{
  if(!isTriangle)
  {
    var i = document.getElementsByClassName("inner")[0];
    i.className = "triangle-bottomleft";
    isTriangle = true;
  }
  else
  {
    var i = document.getElementsByClassName("triangle-bottomleft")[0];
    i.className = "inner";
    isTriangle = false;
  }
}