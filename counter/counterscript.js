// Getting Started with Javascript and doing it for real


const count = document.querySelector(".counts")
const decreamentBtn = document.querySelector(".Decreament");
const increamentBtn = document.querySelector(".Increament");
const resetBtn = document.querySelector(".Reset");

let countValue = 

console.log(count.textContent,increamentBtn,decreamentBtn,resetBtn);

increamentBtn.onclick = function addNumber () {
    let countValue = Number(count.innerHTML);
   count.innerHTML= countValue+1
}
decreamentBtn.onclick = function subtractNumber () {
    let countValue = Number(count.innerHTML);
    count.innerHTML = --countValue;
}

resetBtn.onclick = function resetNumber () {
    countValue = 0;
    count.innerHTML = countValue
}