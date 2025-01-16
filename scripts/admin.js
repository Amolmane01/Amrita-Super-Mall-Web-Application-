
const form = document.getElementById('form');
const firstname_input = document.getElementById('firstname-input');
const email_input = document.getElementById('email-input');
const password_input = document.getElementById('password-input');
const repeat_password_input = document.getElementById('repeat-password-input');
const key_input = document.getElementById('key'); // Secret key input
const error_message = document.getElementById('error-message');

form.addEventListener('submit', (e) => {
  let errors = [];

  if(firstname_input){
    // If we have a firstname input then we are in the signup
    errors = getSignupFormErrors(firstname_input.value, email_input.value, password_input.value, repeat_password_input.value, key_input.value);
  }
  else{
    // If we don't have a firstname input then we are in the login
    errors = getLoginFormErrors(email_input.value, password_input.value);
  }

  if(errors.length > 0){
    // If there are any errors
    e.preventDefault();
    error_message.innerText = errors.join(". ");
  }
});

function getSignupFormErrors(firstname, email, password, repeatPassword, key){
  let errors = [];

  if(firstname === '' || firstname == null){
    //errors.push('Firstname is required');
    firstname_input.parentElement.classList.add('incorrect');
  }
  if(email === '' || email == null){
    //errors.push('Email is required');
    email_input.parentElement.classList.add('incorrect');
  }
  if(password === '' || password == null){
    //errors.push('Password is required');
    password_input.parentElement.classList.add('incorrect');
  }
  if(password.length < 5){
    //errors.push('Password must have at least 6 characters');
    password_input.parentElement.classList.add('incorrect');
  }
  if(password !== repeatPassword){
    //errors.push('Password does not match repeated password');
    password_input.parentElement.classList.add('incorrect');
    repeat_password_input.parentElement.classList.add('incorrect');
  }
  if(key !== '31052000'){
    //errors.push('Secret key is incorrect');
    key_input.parentElement.classList.add('incorrect');
  }

  return errors;
}

function getLoginFormErrors(email, password){
  let errors = [];

  if(email === '' || email == null){
    //errors.push('Email is required');
    email_input.parentElement.classList.add('incorrect');
  }
  if(password === '' || password == null){
    //errors.push('Password is required');
    password_input.parentElement.classList.add('incorrect');
  }

  return errors;
}

const allInputs = [firstname_input, email_input, password_input, repeat_password_input, key_input].filter(input => input != null);

allInputs.forEach(input => {
  input.addEventListener('input', () => {
    if(input.parentElement.classList.contains('incorrect')){
      input.parentElement.classList.remove('incorrect');
      error_message.innerText = '';
    }
  });
});

// Initialize users object
var users = JSON.parse(localStorage.getItem('users')) || {};

function signup() {
  const email = document.getElementById("email-input").value;
  const password = document.getElementById("password-input").value;
  const key = document.getElementById("key").value;

  if (email && password && key) {

    if (users[email]) {
      alert("Email is already registered. Please login.");
    } else {
      if (key !== '31052000') {  // Ensure the correct secret key value
        alert("Secret key is incorrect");
      } else {
        users[email] = password;
        localStorage.setItem('users', JSON.stringify(users)); // Save to localStorage
        alert("Signup successful! You can now log in.");
        console.log(users);
        document.getElementById("email-input").value = "";
        document.getElementById("password-input").value = "";
        document.getElementById("key").value = "";  // Clear the secret key input
      }
    }
  } else {
    alert("Please fill in all fields.");
  }
}

function login() {
  const email = document.getElementById("email-input").value;
  const password = document.getElementById("password-input").value;

  if (users[email] && users[email] === password) {
    window.location.href = "admin category wise details.html"; // Redirect to next page
  } else {
    alert("Invalid email or password. Please try again.");
  }
}

// Attach event listeners for signup and login
document.getElementById("signup-btn").addEventListener("click", signup);
document.getElementById("login-btn").addEventListener("click", login);

document.addEventListener('DOMContentLoaded', () => {
  const contentArea = document.getElementById('admin-action-content');

  document.getElementById('create-shop').addEventListener('click', () => {
    contentArea.innerHTML = `
      <h3>Create Shop Details</h3>
      <form id="create-shop-form">
        <label for="shop-name">Shop Name:</label>
        <input type="text" id="shop-name" required><br>
        <label for="shop-category">Category:</label>
        <input type="text" id="shop-category" required><br>
        <label for="shop-floor">Floor:</label>
        <input type="number" id="shop-floor" required><br>
        <button type="submit">Save Shop</button>
      </form>`;
  });

  document.getElementById('manage-shops').addEventListener('click', () => {
    contentArea.innerHTML = `
      <h3>Manage Shop Details</h3>
      <table>
        <thead>
          <tr>
            <th>Shop Name</th>
            <th>Category</th>
            <th>Floor</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody id="shops-table-body">
          <!-- Shop data will be loaded here -->
        </tbody>
      </table>`;
    loadShops();
  });

  document.getElementById('manage-offers').addEventListener('click', () => {
    contentArea.innerHTML = `
      <h3>Manage Offer Details</h3>
      <form id="offer-form">
        <label for="offer-title">Offer Title:</label>
        <input type="text" id="offer-title" required><br>
        <label for="shop-id">Shop ID:</label>
        <input type="text" id="shop-id" required><br>
        <label for="offer-details">Details:</label>
        <textarea id="offer-details" required></textarea><br>
        <button type="submit">Save Offer</button>
      </form>`;
  });

  document.getElementById('manage-categories').addEventListener('click', () => {
    contentArea.innerHTML = `
      <h3>Manage Category & Floor</h3>
      <form id="category-floor-form">
        <label for="category">Category:</label>
        <input type="text" id="category" required><br>
        <label for="floor">Floor:</label>
        <input type="number" id="floor" required><br>
        <button type="submit">Save</button>
      </form>`;
  });
});

function loadShops() {
  const tableBody = document.getElementById('shops-table-body');
  const shops = [
    { name: 'Shop 1', category: 'Clothing', floor: 1 },
    { name: 'Shop 2', category: 'Electronics', floor: 2 }
  ];
  tableBody.innerHTML = shops.map(shop =>
    `<tr>
      <td>${shop.name}</td>
      <td>${shop.category}</td>
      <td>${shop.floor}</td>
      <td><button>Edit</button><button>Delete</button></td>
    </tr>`
  ).join('');
}
