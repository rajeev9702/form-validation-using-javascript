function validateform(){
let name = document.getElementById('name').value;
let email = document.getElementById('email').value;
let password = document.getElementById('password').value;
let errormessage = document.getElementById('error-message');

if( name.trim() === '' || email.trim() === '' || password.trim() === ''){
    errormessage.textContent = 'all fields are required';
}
else{
    confirmMessage.style.color = 'red';
    confirmMessage.textContent = 'password do not match';
}

}