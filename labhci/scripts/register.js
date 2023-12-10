var errorLine = document.getElementById("error-line");

function formValidation(e){
    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let password = document.getElementById("password").value;
    let confirm = document.getElementById("confirm").value;
    let gender = document.getElementById('gender').value;
    let tnc = document.getElementById('tnc').value;

    console.log('name')
    console.log('email')
    console.log('password')
    console.log('confirm')
    console.log('phone')
    console.log('gender')
    console.log('tnc')

    let hasUppercase = false;
    let hasLowercase = false;
    let hasNumber = false;

    for(let i=0;i<password.length;i++){
        if(password[i]>='A' && password[i]<='Z'){
            hasUppercase = true;
        }
        else if(password[i]>='a' && password[i]<='z'){
            hasLowercase = true;
        }
        else if(password[i]>='0' && password[i]<='9'){
            hasNumber =true;
        }
    }

    let emailArr = email.split('@');
    let domain = emailArr[1];

    if(name == ""){
        errorLine.innerHTML = "Name is empty";
    }
    else if(email == ""){
        errorLine.innerHTML = "Email is empty";
    }
    else if(domain != "gmail.com"){
        errorLine.innerHTML = "Domain email must used gmail.com";
    }
    else if(password == ""){
        errorLine.innerHTML = "Password is empty";
    }
    else if(hasUppercase == false){
        errorLine.innerHTML = "Password must have at least 1 upper case";
    }
    else if(hasLowercase == false){
        errorLine.innerHTML = "Password must have at least 1 lower case";
    }
    else if(hasNumber == false){
        errorLine.innerHTML = "Password must have at least 1 number";
    }
    else if(password.length < 8){
        errorLine.innerHTML = "Password must have at least 8 characters";
    }
    else if(password != confirm){
        errorLine.innerHTML = "Password does not match";
    }
    else if(phone == ""){
        errorLine.innerHTML = "Phone Number is empty";
    }
    else if(phone.length < 10){
        errorLine.innerHTML = "Phone Number must be at least 10 numbers";
    }
    else if(gender == ""){
        errorLine.innerHTML = "Gender is empty";
    }
    else if(tnc == ""){
        errorLine.innerHTML = "You must agree to terms & condition";
    }
    else{
        alert("Register Success");
        errorLine.innerHTML = "";
    }
}