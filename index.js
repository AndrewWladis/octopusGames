let counterDisplayElem = document.querySelector('.counter-display');
let counterMinusElem = document.querySelector('.counter-minus');
let counterPlusElem = document.querySelector('.counter-plus');
let count = 100;

updateDisplay();

counterPlusElem.addEventListener("click",()=>{
    count++;
    updateDisplay();
}) ;

counterMinusElem.addEventListener("click",()=>{
    count--;
    updateDisplay();
});

function updateDisplay(){
    counterDisplayElem.innerHTML = count;
};


let counterDisplayElem2 = document.querySelector('.counter-display2');
let counterMinusElem2 = document.querySelector('.counter-minus2');
let counterPlusElem2 = document.querySelector('.counter-plus2');
let count2 = 100;

updateDisplay();

counterPlusElem2.addEventListener("click",()=>{
    count2++;
    updateDisplay2();
}) ;

counterMinusElem2.addEventListener("click",()=>{
    count2--;
    updateDisplay2();
});

function updateDisplay2(){
    counterDisplayElem2.innerHTML = count2;
};