const shopContainer = document.getElementById("shop-container");
const filterForm = document.getElementById("shop-filter-form");
const filterCategory = document.getElementById("filter-category");
const filterLocation = document.getElementById("filter-location");

// Sample shop data
const shops = [
  { name: "Tech World", location: "First Floor", category: "Electronics" },
  { name: "Fashion Fiesta", location: "Second Floor", category: "Fashion" },
  { name: "Book Haven", location: "Third Floor", category: "Books" },
  { name: "Gadget Galaxy", location: "Ground Floor", category: "Electronics" },
  { name: "Home Essentials", location: "Fourth Floor", category: "Home" },
  { name: "Toy Kingdom", location: "Fifth Floor", category: "Toys" },
];

// Function to load filtered shops into the container
function loadShops(filteredShops) {
  shopContainer.innerHTML = ""; // Clear existing content
  if (filteredShops.length === 0) {
    shopContainer.innerHTML = `<p>No shops match your filters.</p>`;
    return;
  }

  filteredShops.forEach((shop) => {
    const shopCard = document.createElement("div");
    shopCard.classList.add("shop-card");
    shopCard.innerHTML = `
      <h3>${shop.name}</h3>
      <p>Location: ${shop.location}</p>
      <p>Category: ${shop.category}</p>
    `;
    shopContainer.appendChild(shopCard);
  });
}

// Function to filter shops based on user input
function applyFilters(event) {
  event.preventDefault();

  const category = filterCategory.value;
  const location = filterLocation.value.trim().toLowerCase();

  const filteredShops = shops.filter((shop) => {
    const matchesCategory = category === "" || shop.category === category;
    const matchesLocation = location === "" || shop.location.toLowerCase().includes(location);
    return matchesCategory && matchesLocation;
  });

  loadShops(filteredShops);
}

// Attach event listener to the form
filterForm.addEventListener("submit", applyFilters);

// Load all shops initially
loadShops(shops);



// filter shops as category and location
// References
const filterform = document.getElementById('shop-filter-form');
const shopcontainer = document.getElementById('shop-container');

// Load shops from localStorage
function loadShops(filters = {}) {
    const shops = JSON.parse(localStorage.getItem('shops')) || [];

    // Apply filters
    const filteredShops = shops.filter(shop => {
        const matchesCategory = !filters.category || shop.category.toLowerCase() === filters.category.toLowerCase();
        const matchesLocation = !filters.location || shop.location.toLowerCase().includes(filters.location.toLowerCase());
        return matchesCategory && matchesLocation;
    });

    // Display filtered shops
    shopContainer.innerHTML = '';
    if (filteredShops.length > 0) {
        filteredShops.forEach(shop => {
            const shopDiv = document.createElement('div');
            shopDiv.className = 'shop';
            shopDiv.innerHTML = `
                <h3>${shop.name}</h3>
                <p>Location: ${shop.location}</p>
                <p>Category: ${shop.category}</p>
            `;
            shopContainer.appendChild(shopDiv);
        });
    } else {
        shopContainer.innerHTML = '<p>No shops found.</p>';
    }
}

// Handle filter form submission
filterForm.addEventListener('submit', function (event) {
    event.preventDefault();

    // Get filter values
    const category = document.getElementById('filter-category').value;
    const location = document.getElementById('filter-location').value;

    // Apply filters
    loadShops({ category, location });
});

// Initialize the page
document.addEventListener('DOMContentLoaded', () => loadShops());
