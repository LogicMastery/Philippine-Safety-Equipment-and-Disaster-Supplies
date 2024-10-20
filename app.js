// shows the selected links you are currently selected in the nav links
const ActivePage = window.location.pathname;
const navLinks = document.querySelectorAll('nav a').forEach(link => {
    if(link.href.includes(`${ActivePage}`)){
        link.classList.add('active');
    }
});

// Search a product items
// Figure out how to make it search for an item
const SearchProduct = () =>{
    const searchbox = document.getElementById('SearchItem').value.toUpperCase();
    const storeItems = document.getElementById('product-items');
    const product = document.querySelectorAll('.product');
    const pname = document.getElementsByTagName('h5')

    for(let i = 0; i < pname.length; i++){
        match = product[i].getElementsByTagName('h5')[0];
        txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
        }
    }