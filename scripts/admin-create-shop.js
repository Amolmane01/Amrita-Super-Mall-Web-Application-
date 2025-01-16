document.getElementById("shop-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const shopName = document.getElementById("shop-name").value.trim();
  const shopLocation = document.getElementById("shop-location").value.trim();
  const shopCategory = document.getElementById("shop-category").value;
  const shopDescription = document.getElementById("shop-description").value.trim();

  // Basic validation
  if (!shopName || !shopLocation || !shopCategory) {
    showMessage("Please fill out all required fields!", "error");
    return;
  }

  // Simulate saving the shop details
  const shopDetails = {
    name: shopName,
    location: shopLocation,
    category: shopCategory,
    description: shopDescription,
  };

  console.log("Shop created:", shopDetails);
  showMessage("Shop details created successfully!", "success");

  // Clear the form
  document.getElementById("shop-form").reset();
});

// Function to show messages
function showMessage(message, type) {
  const messageDiv = document.getElementById("message");
  messageDiv.textContent = message;
  messageDiv.style.color = type === "success" ? "green" : "red";
}



 