const passwordBtn = document.getElementById("password-field")

const submit = document.getElementById("submit")

let result = document.querySelector(".result")


let password =
//const specialChar = [!,@,#,$,%,^,&,*];
submit.onclick = function () {
    password = passwordBtn.value;

    if (password.length >=8 ){
        result.innhtml = "Password is stong enogh lets proceed"
    
    } else {
       result.innerHTML= "password is weak try again"
       passwordBtn.style.border="2px solid red"
    }
}


