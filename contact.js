document.getElementById("contactForm").addEventListener("submit", function(event){
    event.preventDefault();
    var form = event.target;
    var formData = new FormData(form);

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "/submit-contact-form");// change with backend node if added in future

    xhr.onreadystatechange = function(){
      if (xhr.readyState === 4){
        if (xhr.status === 200){
          document.getElementById("statusMessage").textContent = "Message sent successfully!";
          form.reset();
        } else {
          document.getElementById("statusMessage").textContent = "An error occurred while sending the message.";
        }
      }
    };

    xhr.send(formData);
  });