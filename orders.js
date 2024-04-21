// Function to add an item to the cart and update the orders page
function addToCart(itemName, price) {
    const tableBody = document.getElementById("orders-body");
    const newRow = document.createElement("tr");
    newRow.innerHTML = `
        <td>${itemName}</td>
        <td>${price}</td>
        <td><input type="number" class="quantity-input" value="1" min="1"></td>
        <td class="total">0</td>
    `;
    tableBody.appendChild(newRow);

    // Update total
    updateTotal();
}

// Function to update the total amount
function updateTotal() {
    let totalAmount = 0;
    const totalCells = document.querySelectorAll(".total");
    totalCells.forEach(cell => {
        const quantity = parseInt(cell.parentElement.querySelector(".quantity-input").value);
        const price = parseFloat(cell.previousElementSibling.textContent);
        const total = quantity * price;
        cell.textContent = total.toFixed(2);
        totalAmount += total;
    });
    document.getElementById("total-amount").textContent = totalAmount.toFixed(2);
}

// Event listener for quantity change
document.addEventListener("input", function(event) {
    if (event.target.classList.contains("quantity-input")) {
        updateTotal();
    }
});

// Event listener for DOMContentLoaded
document.addEventListener("DOMContentLoaded", function() {
    // Your code here
});
