const shopContainer = document.getElementById("shop-container");
const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");

// Sample list of shops
const shops = [
  { name: "Tech World", location: "First Floor", category: "Electronics" },
  { name: "Fashion Fiesta", location: "Second Floor", category: "Fashion" },
  { name: "Book Haven", location: "Third Floor", category: "Books" },
  { name: "Gadget Galaxy", location: "Ground Floor", category: "Electronics" },
  { name: "Home Essentials", location: "Fourth Floor", category: "Home" },
  { name: "Toy Kingdom", location: "Fifth Floor", category: "Toys" },
];

// Function to load shops into the container
function loadShops(filteredShops = shops) {
  shopContainer.innerHTML = ""; // Clear existing content
  if (filteredShops.length === 0) {
    shopContainer.innerHTML = `<p>No shops found.</p>`;
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

// Function to handle search
function searchShops() {
  const query = searchInput.value.trim().toLowerCase();
  const filteredShops = shops.filter(
    (shop) =>
      shop.name.toLowerCase().includes(query) ||
      shop.category.toLowerCase().includes(query)
  );
  loadShops(filteredShops);
}

// Event listeners
searchButton.addEventListener("click", searchShops);
searchInput.addEventListener("keyup", (e) => {
  if (e.key === "Enter") searchShops();
});

// Load all shops initially
loadShops();
