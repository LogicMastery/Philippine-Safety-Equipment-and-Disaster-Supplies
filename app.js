// shows the selected links you are currently selected in the nav links
const ActivePage = window.location.pathname;
const navLinks = document.querySelectorAll('nav a').forEach(link => {
    if(link.href.includes(`${ActivePage}`)){
        link.classList.add('active');
    }
});

// Search a product items
const SearchProduct = () =>{
    const searchbox = document.getElementById('SearchItem').value.toUpperCase();
    const storeItems = document.getElementById('product-list');
    const product = document.querySelectorAll('.product');
    const pname = document.getElementsByTagName('h5')

    for(let i=0; i < pname.length; i++){
        let match = product[i].getElementsByTagName('h2')[0];
        if(match){
            let textvalue = match.textContent || match.innerHTML;

            if(textvalue.toUpperCase().indexOf() > -1){
                product[i].style.display = "";
            }else{
                product[i].style.display = "none";
            }
        }
    }
}