window.onload = function(){
    var confirmPaymentButton = document.getElementById("confirm-payment");
  
    confirmPaymentButton.addEventListener("click", function(){
      alert("Payment confirmed! Thank you for shopping.");
      localStorage.removeItem("cart");
      localStorage.removeItem("deliveryDetails");
      window.location.href = "dogshop.html";
    });
};