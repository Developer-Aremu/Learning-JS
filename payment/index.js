const amounts = [200, 1000, 2000, 3000, 5000, 9999, 1_000_000_000];
let fundsViewsHolder = document.getElementById("fund-option");

let inputField = document.getElementById("inputText");

if (localStorage.getItem("value") != undefined && localStorage.getItem("value") != "") {
  inputField.value = localStorage.getItem("value");
}

const hello = (val) => {
  localStorage.setItem("value", val);
  inputField.value = val;
};
amounts.forEach(
  val =>
    (fundsViewsHolder.innerHTML += `<button onclick="hello(${val})">${val}</button>`)
);

const cancelInput = document.getElementById("cancel");
cancelInput.onclick = function () {
  inputField.value = "";
  localStorage.setItem("value", "");
};

const fundBtn = document.querySelector(".Fund");
fundBtn.onclick = () => {
  const fundAmount = inputField.value;
  localStorage.setItem("value", fundAmount);
  alert(`${fundAmount} has been added`);
};

const fundSuccesful = document.createElement("Div");
fundSuccesful.className = "fundSuccessful";
fundSuccesful.style.backgroundColor = "red";
document.append(fundSuccesful);

const alertElement = document.querySelector(".alert");
alertElement.append(fundSuccesful);
