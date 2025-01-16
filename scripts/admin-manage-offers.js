
const offerTableBody = document.getElementById("offer-table-body");
const offerForm = document.getElementById("offer-form");

let offers = JSON.parse(localStorage.getItem('offers')) || []; // Fetch offers from localStorage

// Load Offers into the Table
function loadOffers() {
  offerTableBody.innerHTML = "";  // Clear the existing table

  offers.forEach((offer, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${offer.title}</td>
      <td>${offer.description}</td>
      <td>${offer.validity}</td>
      <td>
        <button class="edit" onclick="editOffer(${index})">Edit</button>
        <button class="delete" onclick="deleteOffer(${index})">Delete</button>
      </td>
    `;
    offerTableBody.appendChild(row);
  });
}

// Add New Offer
offerForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const title = document.getElementById("offer-title").value.trim();
  const description = document.getElementById("offer-description").value.trim();
  const validity = document.getElementById("offer-validity").value;

  if (title && description && validity) {
    const newOffer = { title, description, validity };
    offers.push(newOffer);
    localStorage.setItem('offers', JSON.stringify(offers)); // Save to localStorage
    loadOffers(); // Reload the offers list
    offerForm.reset();
    showMessage("Offer added successfully!", "success");
  } else {
    showMessage("Please fill out all fields!", "error");
  }
});

// Edit Offer
function editOffer(index) {
  const offer = offers[index];
  if (offer) {
    document.getElementById("offer-title").value = offer.title;
    document.getElementById("offer-description").value = offer.description;
    document.getElementById("offer-validity").value = offer.validity;

    // Set the form in edit mode by storing the offer index
    offerForm.setAttribute("data-edit-index", index);
  }
}

// Delete Offer
function deleteOffer(index) {
  offers.splice(index, 1); // Remove the offer
  localStorage.setItem('offers', JSON.stringify(offers)); // Update localStorage
  loadOffers(); // Reload the offer list
  showMessage("Offer deleted successfully!", "success");
}

// Show Messages
function showMessage(message, type) {
  alert(message); // Simple alert to show messages
}

// Initial Load
loadOffers();
