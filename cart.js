let cart = JSON.parse(localStorage.getItem("cart")) || [];

// ADD TO CART
function addToCart(name, price) {
  let product = { name: name, price: price, qty: 1 };

  let existing = cart.find(item => item.name === name);

  if (existing) {
    existing.qty++;
  } else {
    cart.push(product);
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  alert(name + " added to cart 🛒");
}

// DISPLAY CART
function displayCart() {
  let cartItems = document.getElementById("cartItems");
  if (!cartItems) return; // important

  let total = 0;
  cartItems.innerHTML = "";

  cart.forEach((item, index) => {
    total += item.price * item.qty;

    cartItems.innerHTML += `
      <div class="cart-item">
        <span>${item.name} (x${item.qty})</span>
        <span>$${item.price * item.qty}</span>
        <i class="fa fa-trash" onclick="removeItem(${index})"></i>
      </div>
    `;
  });

  document.getElementById("total").innerText = total;
}

// REMOVE ITEM
function removeItem(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  displayCart();
}

// RUN displayCart when page loads
window.onload = displayCart;
