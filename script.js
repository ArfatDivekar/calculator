let result = document.querySelector("#result");
let buttons = document.querySelectorAll("button");

buttons.forEach((item) =>{
    item.onclick = () => {

        if (item.id == "allClear"){
            result.innerText = "";
        } 
        else if (item.id == "backspace"){
            let string = result.innerText.toString();
            result.innerText = string.substr(0, string.length - 1);
        }
        else if (result.innerText != "" && item.id == "equal"){
            result.innerText = eval(result.innerText);
        }
        else if(result.innerText == "" && item.id == "equal"){
            result.innerText = "Empty!";
            setTimeout(() => (result.innerText = ""),2000);
        }
        else{
            result.innerText += item.id;
        }
    };
});

const toggler = document.querySelector("#toggler");
const calculator = document.querySelector(".calculator");
const indicator = document.querySelector(".indicator");

let isDark = false;
toggler.onclick = () => {
    calculator.classList.toggle("dark");
    toggler.classList.toggle("active");
    isDark = !isDark;
  };
  

// const calculator = document.getElementsByClassName('calculator')
// const toggle =document.getElementById('toggler')
// toggle.onclick = function (){
//     toggle.classList.toggle('active');
//     calculator.classList.toggle('active')
// }