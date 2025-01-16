const shops = [
  { id: 1, name: "Tech World", location: "First Floor", category: "electronics" },
  { id: 2, name: "Fashion Fiesta", location: "Second Floor", category: "fashion" },
  { id: 3, name: "Book Haven", location: "Third Floor", category: "books" },
];

const shopTableBody = document.getElementById("shop-table-body");
const editSection = document.getElementById("edit-shop");
const editForm = document.getElementById("edit-shop-form");
const cancelEditButton = document.getElementById("cancel-edit");

let currentEditShopId = null;

// Load shops into the table
function loadShops() {
  shopTableBody.innerHTML = "";
  shops.forEach((shop) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${shop.name}</td>
      <td>${shop.location}</td>
      <td>${capitalize(shop.category)}</td>
      <td>
        <button class="edit" onclick="editShop(${shop.id})">Edit</button>
        <button class="delete" onclick="deleteShop(${shop.id})">Delete</button>
      </td>
    `;
    shopTableBody.appendChild(row);
  });
}

// Capitalize the first letter of a string
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Edit shop details
function editShop(id) {
  const shop = shops.find((shop) => shop.id === id);
  if (shop) {
    currentEditShopId = id;
    document.getElementById("edit-shop-name").value = shop.name;
    document.getElementById("edit-shop-location").value = shop.location;
    document.getElementById("edit-shop-category").value = shop.category;

    editSection.style.display = "block";
  }
}

// Update shop details
editForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const updatedShop = {
    id: currentEditShopId,
    name: document.getElementById("edit-shop-name").value.trim(),
    location: document.getElementById("edit-shop-location").value.trim(),
    category: document.getElementById("edit-shop-category").value,
  };

  const index = shops.findIndex((shop) => shop.id === currentEditShopId);
  if (index !== -1) {
    shops[index] = updatedShop;
    loadShops();
    showMessage("Shop details updated successfully!");
  }

  editSection.style.display = "none";
});

// Cancel editing
cancelEditButton.addEventListener("click", () => {
  editSection.style.display = "none";
});

// Delete shop
function deleteShop(id) {
  const index = shops.findIndex((shop) => shop.id === id);
  if (index !== -1) {
    shops.splice(index, 1);
    loadShops();
    showMessage("Shop deleted successfully!");
  }
}

// Show success message
function showMessage(message) {
  alert(message);
}

// Load shops initially
loadShops();
