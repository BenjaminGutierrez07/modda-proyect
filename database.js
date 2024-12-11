const database = {
    "nike260": {date:"2024-12-10", model:"Nike sport", size:"40", price:"$150"},
    "adidas320": {date:"2024-12-10", model:"Adidas color", size:"42", price:"$170"},
    "puma100": {date:"2024-12-10", model:"Puma simple", size:"39", price:"$100"}
}

function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// Get the scanned code from the URL
const scannedCode = getQueryParam('code');

// Check if the scanned code exists in the database
if (scannedCode && database[scannedCode]) {
    const item = database[scannedCode];
    const dataBody = document.getElementById('data-body');
    const row = `<tr>
                    <td>${item.date}</td>
                    <td>${item.model}</td>
                    <td>${item.size}</td>
                    <td>${item.price}</td>
                 </tr>`;
    dataBody.innerHTML += row; // Add the row to the table
} else {
    const dataBody = document.getElementById('data-body');
    dataBody.innerHTML = `<tr><td colspan="4">No data found for the scanned code.</td></tr>`;
}