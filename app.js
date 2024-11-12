// shows the selected links you are currently selected in the nav links
const ActivePage = window.location.pathname;
const navLinks = document.querySelectorAll('nav a').forEach(link => {
    if(link.href.includes(`${ActivePage}`)){
        link.classList.add('active');
    }
});

 // Filter selection function
 filterSelection("all");

 function filterSelection(c) {
   var x, i;
   x = document.getElementsByClassName("filter-product");
   if (c == "all") c = ""; // If "all" is selected, show all products.

   for (i = 0; i < x.length; i++) {
     removeClass(x[i], "show");
     if (x[i].className.indexOf(c) > -1) addClass(x[i], "show");
   }
 }

 function addClass(element, name) {
   var i, arr1, arr2;
   arr1 = element.className.split(" ");
   arr2 = name.split(" ");
   for (i = 0; i < arr2.length; i++) {
     if (arr1.indexOf(arr2[i]) == -1) {
       element.className += " " + arr2[i];
     }
   }
 }

 function removeClass(element, name) {
   var i, arr1, arr2;
   arr1 = element.className.split(" ");
   arr2 = name.split(" ");
   for (i = 0; i < arr2.length; i++) {
     while (arr1.indexOf(arr2[i]) > -1) {
       arr1.splice(arr1.indexOf(arr2[i]), 1);
     }
   }
   element.className = arr1.join(" ");
 }

 // Toggle active class for radio buttons
 var btnContainer = document.getElementById("btncontainer");
 var btns = btnContainer.getElementsByClassName("Input1");
 for (var i = 0; i < btns.length; i++) {
   btns[i].addEventListener("click", function () {
     var current = document.getElementsByClassName("active");
     current[0].className = current[0].className.replace(" active", "");
     this.className += " active";
   });
 }
// Function to search products
function searchProducts() {
    var input, filter, productItems, productName, i, card;
    
    // Get the search input and filter value
    input = document.getElementById('SearchItem');
    filter = input.value.toUpperCase();
  
    // Get all product items (divs with class 'col')
    productItems = document.getElementsByClassName('col');
    
    // Loop through all product items
    for (i = 0; i < productItems.length; i++) {
      card = productItems[i].getElementsByClassName('card-body')[0];
      
      // Get the product name from the card title
      productName = card.getElementsByClassName('card-title')[0].textContent || card.getElementsByClassName('card-title')[0].innerText;
  
      // If the product name matches the search filter, show it, otherwise hide it
      if (productName.toUpperCase().indexOf(filter) > -1) {
        productItems[i].style.display = "";
      } else {
        productItems[i].style.display = "none";
      }
    }
  }