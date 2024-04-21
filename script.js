let search = document.querySelector('#serach-bar');
let searchbox = document.querySelector('.search-box');
let menubar = document.querySelector('#menu-bars');
let mynav = document.querySelector('.navbar');




search.onclick = () =>{
    searchbox.classList.toggle('active');
}

menubar.onclick = () =>{
    menubar.classList.toggle('fa-times')
    mynav.classList.toggle('active')
}





function addToCart(itemName, itemPrice, quantityInputId) {
    // Get the quantity input value
    // var itemQuantity = parseInt(document.querySelector(".quantity_input").value);
    var itemQuantity = parseInt(document.getElementById(quantityInputId).value);

    // Create an object to represent the item
    var item = {
      name: itemName,
      quantity: itemQuantity,
      price: itemPrice
    };
  
    // Get existing items from local storage or initialize an empty array
    var items = JSON.parse(localStorage.getItem("items")) || [];
  
    // Add the new item to the array
    items.push(item);
  
    // Save the updated array back to local storage
    localStorage.setItem("items", JSON.stringify(items));
  
    // Alert the user that the item has been saved
    alert("Item added to cart successfully!");
  }












































// let search = document.querySelector('#serach-bar');
// let searchbox =document.querySelector('.search-box');

// search.onclick = () =>{
//     searchbox.classList.toggle('active');
// }