// Menu items
const menuItems = {
    "Birria Beef Tacos": 20,
    "BBQ Jerk Chicken Dumpling Burger": 20,
    "Tacos/Burger": 30,
    "Oreo/Lotus Biscoffapple Crumble": 5,
    "Blue/Pink Sprinke Cake": 5,
    "Ice Blue Raspberry Lemonade": 5,
    "Cherry": 5,
    "Pink Lychee Sherbet": 5,
    "Grape": 5
  };
  
  // Cart to store ordered items
  let cart = [];
  
  // Function to add item to cart
  function addToCart(item) {
    cart.push(item);
    updateCart();
  }
  
  // Function to update cart display
  function updateCart() {
    const cartElement = document.getElementById('cart');
    cartElement.innerHTML = '';
    let total = 0;
  
    cart.forEach(item => {
      const li = document.createElement('li');
      li.textContent = `${item}: £${menuItems[item]}`;
      cartElement.appendChild(li);
      total += menuItems[item];
    });
  
    const totalElement = document.getElementById('total');
    totalElement.textContent = `Total: £${total}`;
  }
  
  // Function to place order
  function placeOrder() {
    if (cart.length === 0) {
      alert('Your cart is empty!');
      return;
    }
  
    // Here you would typically send the order to a server
    // For this example, we'll just show an alert
    alert('Thank you for your order! Your food will be ready soon.');
    cart = [];
    updateCart();
  }
  
  // Event listener for when the DOM is fully loaded
  document.addEventListener('DOMContentLoaded', function() {
    const menuSection = document.getElementById('menu');
  
    // Populate menu items
    for (let item in menuItems) {
      const div = document.createElement('div');
      div.className = 'menu-item';
      div.innerHTML = `
        <h3>${item}</h3>
        <p>£${menuItems[item]}</p>
        <button onclick="addToCart('${item}')">Add to Cart</button>
      `;
      menuSection.appendChild(div);
    }
  
    // Add event listener to the order button
    const orderButton = document.getElementById('place-order');
    orderButton.addEventListener('click', placeOrder);
  });