window.onload = function(){
    var cartItemsContainer = document.getElementById("cart-items");
    var buyButton = document.getElementById("buy-button");
    
    buyButton.addEventListener("click", function(){
      window.location.href = "delivery_address.html";
    });
  
    var cart = JSON.parse(localStorage.getItem("cart")) || [];
  
    for(var i = 0; i < cart.length; i++){
      var cartItem = cart[i];
      var cartItemElement = document.createElement("div");
      cartItemElement.className = "cart-item";
      cartItemElement.innerHTML = `
        <h2>${cartItem.name}</h2>
        <p>Price: ${cartItem.price}</p>
        <input type="number" min="1" value="${cartItem.quantity}">
        <button class="remove-from-cart">Remove from Cart</button>
      `;
      cartItemsContainer.appendChild(cartItemElement);
    }
  
    var removeFromCartButtons = document.getElementsByClassName("remove-from-cart");
  
    for(var j = 0; j < removeFromCartButtons.length; j++){
      removeFromCartButtons[j].addEventListener("click", removeFromCart);
    }
  
    function removeFromCart(){
      var item = this.parentNode;
      var itemName = item.querySelector("h2").textContent;
  
      var cart = JSON.parse(localStorage.getItem("cart")) || [];
  
      for(var k = 0; k < cart.length; k++){
        if (cart[k].name === itemName){
          cart.splice(k, 1);
          break;
        }
      }
  
      localStorage.setItem("cart", JSON.stringify(cart));
      item.remove();
    }
};
  