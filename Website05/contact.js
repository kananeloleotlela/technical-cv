//a function to get rid of the preloader

window.addEventListener('load',() => {
    const preload = document.querySelector('.preload');
    preload.classList.add('preload-finish');
});

//submit button responsive function
function validate(){
  var name = document.getElementById("name").value;
  var surname = document.getElementById("surname").value;
  var phone = document.getElementById("phone").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;
  var error_message = document.getElementById("error_message");
  
  error_message.style.padding = "10px";
  
  var text;
  if(name.length < 2){
    text = "Please Enter valid Name";
    error_message.innerHTML = text;
    return false;
  }
  if(surname.length < 2){
    text = "Please Enter Correct Surname";
    error_message.innerHTML = text;
    return false;
  }
  if(isNaN(phone) || phone.length != 10){
    text = "Please Enter valid Phone Number";
    error_message.innerHTML = text;
    return false;
  }
  if(email.indexOf("@") == -1 || email.length < 6){
    text = "Please Enter valid Email";
    error_message.innerHTML = text;
    return false;
  }
  if(message.length <= 5){
    text = "Please Enter More Than 5 Characters";
    error_message.innerHTML = text;
    return false;
  }
  alert("Form Submitted Successfully!");
  return true;
}