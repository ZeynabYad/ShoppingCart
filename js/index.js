const products = [
    "product 1",
    "product 2",
    "product 3",
    "product 4",
    "product 5",
];

//create shopping cart table from products array

function createCartTable() {
    let cardContent = "";
    products.forEach(function (productName, productIndex) {
        cardContent += `<tr>
        <td>${productName}</td>
        <td><i class="fa-solid fa-trash-can text-danger" onClick="deleteProduct(${productIndex})"></i></td>
      </tr>`
    });
    document.querySelector('tbody').innerHTML = cardContent;
}

//add event listeners to sort icons
document.querySelector('.fa-arrow-down-a-z').addEventListener('click', function () {
    sortProductName(true);
})
document.querySelector('.fa-arrow-down-z-a').addEventListener('click', function () {
    sortProductName(false);
})

//delete product from shopping cart
function deleteProduct(productIndex) {
    products.splice(productIndex, 1);
    createCartTable();
}

//sort productName function
function sortProductName(direction) {
    if (direction) {
        products.sort()
        createCartTable();
    }
    else {
        products.sort().reverse()
        createCartTable();
    };
}