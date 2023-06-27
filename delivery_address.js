window.onload = function(){
    var addressForm = document.getElementById("address-form");
  
    addressForm.addEventListener("submit", function(event){
      event.preventDefault();
  
      var addressInput = document.getElementById("address-input").value;
      var cityInput = document.getElementById("city-input").value;
      var zipInput = document.getElementById("zip-input").value;
  
      var deliveryDetails = {
        address: addressInput,
        city: cityInput,
        zip: zipInput
      };
  
      localStorage.setItem("deliveryDetails", JSON.stringify(deliveryDetails));
  
      window.location.href = "payment.html";
    });
};