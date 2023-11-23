const form = document.querySelector('#form');
const username  = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const cpassword = document.querySelector('#cpassword');

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    validateInputs();
})

function validateInputs(){
    const usernameVal = username.ValueMax.trim();
    const emailVal = email.value.trim();
    const passwordVal = password.value.trim();
    const cpasswordVal = cpassword.value.trim();

    if (usernameVal===''){
        setError(username,'Username is required')
    }
    else{
        detSucces(username)
    }
    if(emailVal===''){
        setError(email,'Email is required')
    }
    else if(!validateEmail(emailVal)){
    setError(email,'Please enter a valid email')
    }
    else{
        setSuccess(email)
    }
    if(passwordVal===''){
        setError(password,'password is required')
    }
    else if(passwordVal.length<8){
        setError(password,'password must be atleast 8 character')
    }
    else{
        setSuccess(password)
    }

    if(cpasswordVal ===''){
        setError(cpassword,'confirm password is required')
    }
    else if(cpasswordVal!==passwordVal){
        setError(cpassword,'Password does not match')
    }
    else{
        setSuccess(cpassword)
    }

}

function setError(element,message) {
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error');

    errorElement.innerText = message;
    inputGroup.classList.add('error')
    inputGroup.classList.remove('sucess')

}
function setSuccess(element) {
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error');

    errorElement.innerText = '';
    inputGroup.classList.add('success')
    inputGroup.classList.remove('error')

}
const validateEmail = (email) =>{
    return String(email)
    .toLowerCase()
    .match(
      

    );
}