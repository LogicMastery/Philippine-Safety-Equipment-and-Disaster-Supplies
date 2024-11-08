function sendPurchaseEmail() {
    // Get form values
    const name = document.getElementById('customerName').value;
    const email = document.getElementById('customerEmail').value;
    const phone = document.getElementById('customerPhone').value;
    const message = document.getElementById('customerMessage').value;
    
    // Get product details
    const productName = document.getElementById('productName').innerText.split(': ')[1];
    const productPrice = document.getElementById('productPrice').innerText.split(': ')[1];
    const qty = document.getElementById('productQty').value;
    
    const formData = {
        name,
        email,
        phone,
        message,
        productName,
        productPrice,
        qty
    };

    // Send data to the Node.js backend (using Fetch API)
    fetch('http://localhost:3000/send-email', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        alert('Purchase request sent successfully!');
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('Failed to send email.');
    });
}