const shopSelect = document.getElementById("shop-select");
const offersContainer = document.getElementById("offers-container");

// Sample shop and offer data
const shops = [
   { id: 1, name: "All Shops Discount" },
  
];

const offers = [
  
];

// Load shops into the dropdown
function loadShops() {
  shops.forEach((shop) => {
    const option = document.createElement("option");
    option.value = shop.id;
    option.textContent = shop.name;
    shopSelect.appendChild(option);
  });
}

// Load offers for the selected shop
function loadOffers(shopId) {
  offersContainer.innerHTML = ""; // Clear existing offers
  const shopOffers = offers.filter((offer) => offer.shopId == shopId);

  if (shopOffers.length === 0) {
    offersContainer.innerHTML = `<p>No offers available for this shop.</p>`;
    return;
  }

  shopOffers.forEach((offer) => {
    const offerCard = document.createElement("div");
    offerCard.classList.add("offer-card");
    offerCard.innerHTML = `
      <h3>${offer.title}</h3>
      <p>${offer.description}</p>
    `;
    offersContainer.appendChild(offerCard);
  });
}

// Event listener for shop selection
shopSelect.addEventListener("change", (e) => {
  const selectedShopId = e.target.value;
  if (selectedShopId) {
    loadOffers(selectedShopId);
  } else {
    offersContainer.innerHTML = `<p>Please select a shop to view offers.</p>`;
  }
});

// Initial load
loadShops();












document.addEventListener('DOMContentLoaded', () => {
    // Fetch the offers stored in localStorage
    const offers = JSON.parse(localStorage.getItem('offers')) || [];

    // Get the shop dropdown and offers container
    const shopSelect = document.getElementById('shop-select');
    const offersContainer = document.getElementById('offers-container');

    // Dynamically populate the shop dropdown
    const shops = [ ];  // Example: Add your shop names here
    shops.forEach(shop => {
        const option = document.createElement('option');
        option.value = shop;
        option.textContent = shop;
        shopSelect.appendChild(option);
    });

    // Listen for changes to the shop select dropdown
    shopSelect.addEventListener('change', (e) => {
        const selectedShop = e.target.value;
        displayOffersForShop(selectedShop);
    });

    // Function to display offers based on the selected shop
    function displayOffersForShop(shop) {
        // Clear the current offers
        offersContainer.innerHTML = '';

        // Filter the offers by shop (you can add logic to associate offers with shops)
        const filteredOffers = offers.filter(offer => {
            // Logic to associate offers with shops (modify as needed)
            return true;  // For now, it shows all offers for simplicity
        });

        if (filteredOffers.length > 0) {
            filteredOffers.forEach(offer => {
                const offerDiv = document.createElement('div');
                offerDiv.classList.add('offer');
                offerDiv.innerHTML = `
                    <h3>${offer.title}</h3>
                    <p>${offer.description}</p>
                    <p>${offer.validity}</p>
                `;
                offersContainer.appendChild(offerDiv);
            });
        } else {
            offersContainer.innerHTML = '<p>No offers available for this shop.</p>';
        }
    }
});
