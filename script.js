let btn = document.getElementById("dark");
let body = document.getElementById("body");
let introName = document.getElementById("home-name");
let mainHeading = document.querySelector(".name");
let secondHeading = document.getElementsByTagName("h2");
let heading = document.getElementsByTagName("h1");
let proja1 = document.querySelector(".proj1 a");
let proja2 = document.querySelector(".proj2 a");
let proja3 = document.querySelector(".proj3 a");
let proja4 = document.querySelector(".proj4 a");
let first = document.querySelector(".tom");
let second = document.querySelector("#about-me");

function h1Color(col){
    for(let i = 0; i < heading.length; i++){
            heading[i].style.color = col;
        }
}
function h2Color(col){
    for(let i = 0; i < secondHeading.length; i++){
            secondHeading[i].style.color = col;
        }
}
let isDark = true;
function myFunc(){
    if(isDark === false){
        body.style.background = "rgb(36, 35, 35)";
        body.style.color = "white";
        mainHeading.style.color = "#2196F3";
        introName.style.color = "red";
        proja1.style.color = "white";
        proja2.style.color = "white";
        proja3.style.color = "white";
        proja4.style.color = "white";
        h2Color("#2196F3");
        h1Color("#2196F3");
        first.setAttribute("class", "tom");
        second.setAttribute("id", "about-me");

        isDark = true;
    }else{
        body.style.background = "#ffffff";
        body.style.color = "black";
        mainHeading.style.color = "red";
        introName.style.color = "#2196F3";
        proja1.style.color = "black";
        proja2.style.color = "black";
        proja3.style.color = "black";
        proja4.style.color = "black";
        h2Color("red");
        h1Color("red");
        first.setAttribute("class", "firstTom");
        second.setAttribute("id", "secondAbout-me")
        
        isDark = false;
    }
}
