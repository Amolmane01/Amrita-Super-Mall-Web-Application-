const floorSelect = document.getElementById("floor-select");
const shopContainer = document.getElementById("shop-container");

// Sample shop data
const shops = [
  { name: "Tech World", floor: 1, category: "Electronics" },
  { name: "Fashion Fiesta", floor: 2, category: "Fashion" },
  { name: "Book Haven", floor: 3, category: "Books" },
  { name: "Gadget Galaxy", floor: 1, category: "Electronics" },
  { name: "Home Essentials", floor: 4, category: "Home" },
  { name: "Toy Kingdom", floor: 5, category: "Toys" },
];

// Populate floor options
function populateFloors() {
  const floors = [...new Set(shops.map((shop) => shop.floor))].sort((a, b) => a - b);
  floors.forEach((floor) => {
    const option = document.createElement("option");
    option.value = floor;
    option.textContent = `Floor ${floor}`;
    floorSelect.appendChild(option);
  });
}

// Load shops for selected floor
function loadShopsForFloor(floor) {
  shopContainer.innerHTML = ""; // Clear existing content
  const floorShops = shops.filter((shop) => shop.floor == floor);

  if (floorShops.length === 0) {
    shopContainer.innerHTML = `<p>No shops available on this floor.</p>`;
    return;
  }

  floorShops.forEach((shop) => {
    const shopCard = document.createElement("div");
    shopCard.classList.add("shop-card");
    shopCard.innerHTML = `
      <h3>${shop.name}</h3>
      <p>Category: ${shop.category}</p>
      <p>Floor: ${shop.floor}</p>
    `;
    shopContainer.appendChild(shopCard);
  });
}

// Event listener for floor selection
floorSelect.addEventListener("change", (e) => {
  const selectedFloor = e.target.value;
  if (selectedFloor) {
    loadShopsForFloor(selectedFloor);
  } else {
    shopContainer.innerHTML = `<p>Please select a floor to view shops.</p>`;
  }
});

// Initial load
populateFloors();








// floor wise as select floor
