//a function to get rid of the preloader

window.addEventListener('load',() => {
    const preload = document.querySelector('.preload');
    preload.classList.add('preload-finish');
});

//$('.contactform').submit(function(e){
   // var firstname = document.getElementsByName(name),
     //   lastname = document.getElementsByName(name),
     //   mobilenumber = document.getElementsByName(name),
     //   email = document.getElementsByName(name),
      //  message = document.getElementsByName(name);

       // if(firstname.value != "" || lastname.value != "" || mobilenumber.value != "" || email.value != "" || message.value != "" ){
         //   $.ajax({
         //       url: "https://formspree.io/kelendrialeokar@gmail.com",
         //       method: "POST",
         //       data: $(this).serialize(),
          //      dataType: "json"
         //
          //  e.preventDefault()
          //  $(this).get(0).reset()
          //  alert.success('Message sent')
       // }
//});

function submit(){
    var name = document.getElementById("name").value
    var surname = document.getElementById("surname").value
    var mobile = document.getElementById("mobile").value
    var email = document.getElementById("email").value
    var message = document.getElementById("message").value

    Email.send({
        Host: "smtp.yourisp.com",
        To: "kelendrialeokar@gmail.com",
        From: "kelendrialeokar@gmail.com",
        Subject: "Technical CV Submission",
        Body: name, surname, mobile, message
    }).then(function(message){
        alert("Mail sent successfully")
    });
}