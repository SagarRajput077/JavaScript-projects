var calculate = document.getElementById("calculate");
var mydate = document.getElementById("mydate");
var age = document.getElementById("Age");

function calage(){
    const AgeValue = mydate.value;
    if(AgeValue===""){
        alert("Enter You Date of birth");
    }
    else{
        const newage = getAge(AgeValue);
        age.innerText = `Your Age is ${newage} ${newage > 1 ? "Years" : "Year"} old`;
    }

} 

function getAge(AgeValue){
    const TodayDate = new Date();
    const AgeDate = new Date(AgeValue);
    let myage = TodayDate.getFullYear() - AgeDate.getFullYear();
    const month = TodayDate.getMonth() - AgeDate.getMonth();
    
    if(month < 0 || (month === 0 && TodayDate.getDate() < AgeDate.getDate())) {
        myage--;
    }
    return myage;
}

calculate.addEventListener('click', calage);
