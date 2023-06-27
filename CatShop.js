window.onload = function(){
    var addToCartButtons = document.getElementsByClassName("add-to-cart");
  
    for(var i = 0; i < addToCartButtons.length; i++) {
      addToCartButtons[i].addEventListener("click", addToCart);
    }
  
    function addToCart(){
      var item = this.parentNode;
      var itemName = item.querySelector("h2").textContent;
      var itemPrice = item.querySelector("p").textContent.split(": ")[1];
      var itemQuantity = item.querySelector("input").value;
  
      var cartItem = {
        name: itemName,
        price: itemPrice,
        quantity: itemQuantity
      };
  
      var cart = JSON.parse(localStorage.getItem("cart")) || [];
      cart.push(cartItem);
      localStorage.setItem("cart", JSON.stringify(cart));
      alert("Item added to cart!");
    }
    
    var buyButton = document.getElementById("buy-button");
    buyButton.addEventListener("click", function(){
      window.location.href = "address.html";
    });
};
  