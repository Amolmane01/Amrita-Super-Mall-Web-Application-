const categoryFloorTableBody = document.getElementById("category-floor-table-body");
const categoryFloorForm = document.getElementById("category-floor-form");

let categoriesFloors = [];

// Load Categories & Floors into the Table
function loadCategoriesFloors() {
  categoryFloorTableBody.innerHTML = "";
  categoriesFloors.forEach((item, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${item.category}</td>
      <td>${item.floor}</td>
      <td>
        <button class="edit" onclick="editCategoryFloor(${index})">Edit</button>
        <button class="delete" onclick="deleteCategoryFloor(${index})">Delete</button>
      </td>
    `;
    categoryFloorTableBody.appendChild(row);
  });
}

// Add New Category & Floor
categoryFloorForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const categoryName = document.getElementById("category-name").value.trim();
  const floorNumber = document.getElementById("floor-number").value;

  if (categoryName && floorNumber) {
    categoriesFloors.push({ category: categoryName, floor: floorNumber });
    loadCategoriesFloors();
    categoryFloorForm.reset();
    showMessage("Category & Floor added successfully!", "success");
  } else {
    showMessage("Please fill out all fields!", "error");
  }
});

// Edit Category & Floor
function editCategoryFloor(index) {
  const item = categoriesFloors[index];
  if (item) {
    document.getElementById("category-name").value = item.category;
    document.getElementById("floor-number").value = item.floor;

    // Remove the old item and update the form
    categoriesFloors.splice(index, 1);
    loadCategoriesFloors();
  }
}

// Delete Category & Floor
function deleteCategoryFloor(index) {
  categoriesFloors.splice(index, 1);
  loadCategoriesFloors();
  showMessage("Category & Floor deleted successfully!", "success");
}

// Show Messages
function showMessage(message, type) {
  alert(message);
}

// Initial Load
loadCategoriesFloors();



// this sending to floor wise

