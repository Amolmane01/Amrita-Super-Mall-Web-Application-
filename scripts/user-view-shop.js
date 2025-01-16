const shopSelect = document.getElementById("shop-select");
const shopInfo = document.getElementById("shop-info");

// Sample shop data
const shops = [
  { id: 1, name: "Tech World", location: "First Floor", category: "Electronics", description: "Your one-stop destination for gadgets and electronics." },
  { id: 2, name: "Fashion Fiesta", location: "Second Floor", category: "Fashion", description: "Latest trends in fashion for men, women, and kids." },
  { id: 3, name: "Book Haven", location: "Third Floor", category: "Books", description: "A paradise for book lovers with a wide range of genres." },
  { id: 4, name: "Home Essentials", location: "Fourth Floor", category: "Home", description: "All you need to beautify and organize your home." },
  { id: 5, name: "Toy Kingdom", location: "Fifth Floor", category: "Toys", description: "The best toys for kids of all ages." },
];

// Populate shop dropdown
function populateShops() {
  shops.forEach((shop) => {
    const option = document.createElement("option");
    option.value = shop.id;
    option.textContent = shop.name;
    shopSelect.appendChild(option);
  });
}

// Display shop details
function displayShopDetails(shopId) {
  const shop = shops.find((s) => s.id == shopId);
  if (shop) {
    shopInfo.innerHTML = `
      <h3>${shop.name}</h3>
      <p><strong>Location:</strong> ${shop.location}</p>
      <p><strong>Category:</strong> ${shop.category}</p>
      <p><strong>Description:</strong> ${shop.description}</p>
    `;
  } else {
    shopInfo.innerHTML = `<p>No shop found. Please try again.</p>`;
  }
}

// Event listener for shop selection
shopSelect.addEventListener("change", (e) => {
  const selectedShopId = e.target.value;
  if (selectedShopId) {
    displayShopDetails(selectedShopId);
  } else {
    shopInfo.innerHTML = `<p>Please select a shop to view its details.</p>`;
  }
});

// Initial load
populateShops();

// view shop as choose a shop
// References
const shopselect = document.getElementById('shop-select');
const shopinfo = document.getElementById('shop-info');

// Load shops and populate the dropdown
function loadShops() {
    const shops = JSON.parse(localStorage.getItem('shops')) || [];

    // Clear existing options
    shopselect.innerHTML = '<option value="">Choose a Shop</option>';

    // Add shop options to the dropdown
    shops.forEach((shop, index) => {
        const option = document.createElement('option');
        option.value = index; // Use index as value to identify the shop
        option.textContent = shop.name;
        shopselect.appendChild(option);
    });
}

// Display selected shop details
shopselect.addEventListener('change', function () {
    const selectedIndex = this.value;
    const shops = JSON.parse(localStorage.getItem('shops')) || [];

    if (selectedIndex === "") {
        shopInfo.innerHTML = '<p>Please select a shop to view its details.</p>';
        return;
    }

    const shop = shops[selectedIndex];

    // Display shop details
    shopinfo.innerHTML = `
        <h3>${shop.name}</h3>
        <p><strong>Location:</strong> ${shop.location}</p>
        <p><strong>Category:</strong> ${shop.category}</p>
    `;
});

// Initialize the page
document.addEventListener('DOMContentLoaded', loadShops);






