
let formElement = document.querySelector("form");

formElement.addEventListener("submit",e =>{
	let nameDetails = e.target.elements.fname.value;
    let email = e.target.elements.email.value;
    let phoneNumber = e.target.elements.phone.value;
    let password = e.target.elements.password.value;
    
    // setting validation for full name
 let nameRequire = /.+\s.+/;
if(!nameRequire.test(nameDetails)){
   	let nameMessage = document.getElementById("paraOne");
   	nameMessage.textContent = "name MUST contain first and last name.";
   	nameMessage.style.color = "#cf000f";}

   // setting validation for email
    let mailRequire = /.+@.+\..+/;
if(!mailRequire.test(email)){
   	let mailMessage = document.getElementById("paraTwo");
   	mailMessage.textContent = "email MUST contain @ and domain name.";
   	mailMessage.style.color = "#cf000f";}

   // setting validation for phone number
    let phoneCheck = /\+\d{14}$/;
if(!phoneCheck.test(phoneNumber)){
   	let phoneMessage = document.getElementById("paraThree");
   	phoneMessage.textContent = "phone number MUST start with + and be 14 digits.";
   	phoneMessage.style.color = "#cf000f";}

// setting validation for password
 if(password.length < 6){
   	let nameMessage = document.getElementById("paraFour");
   	nameMessage.textContent = "password Must be more than 6 characters.";
   	nameMessage.style.color = "#cf000f";}
   	
    e.preventDefault();
})