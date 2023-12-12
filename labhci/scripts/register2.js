var errorLine = document.getElementById("error-line");
errorLine.innerHTML = "";

function formValidation(e){
    e.preventDefault();
    var form = document.getElementById("regis-form");
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var password = document.getElementById("password").value;
    var confirm = document.getElementById("confirm").value;
    var male = document.getElementById('male').checked;
    var female = document.getElementById('female').checked;
    var tnc = document.getElementById('tnc').checked;
    var hasUppercase = false;
    var hasLowercase = false;
    var hasNumber = false;

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

    var emailArr = email.split('@');
    var domain = emailArr[1];

    if(name == ""){
        errorLine.innerHTML = "Username is empty";
    }
    else if(email == ""){
        errorLine.innerHTML = "Email is empty";
    }
    else if(domain != "gmail.com"){
        errorLine.innerHTML = "Domain email must used gmail.com";
    }
    else if(phone == ""){
        errorLine.innerHTML = "Phone Number is empty";
    }
    else if(phone.length < 10){
        errorLine.innerHTML = "Phone Number must be at least 10 numbers";
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
    else if(!male && !female){
        errorLine.innerHTML = "Gender is empty";
    }
    else if(tnc == ""){
        errorLine.innerHTML = "You must agree to terms & condition";
    }
    else{
        alert("Register Success");
        errorLine.innerHTML = "";
        window.location.replace('home.html');
    }
} 