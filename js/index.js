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
    products.forEach(function (productName,productIndex) {
        cardContent += `<tr>
        <td>${productName}</td>
        <td><i class="fa-solid fa-trash-can text-danger" onClick="deleteProduct(${productIndex})"></i></td>
      </tr>`
    });
    document.querySelector('table').innerHTML = cardContent;

}


//delete product from shopping cart
function deleteProduct(productIndex) {
    products.splice(productIndex, 1);
    createCartTable();
}
