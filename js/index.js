const products = [
    { productName: 'Product 1', productPrice: 170, productQuantity: 1 },
    { productName: 'Product 2', productPrice: 120, productQuantity: 5 },
    { productName: 'Product 3', productPrice: 180, productQuantity: 3 },
    { productName: 'Product 4', productPrice: 200, productQuantity: 2 },
    { productName: 'Product 5', productPrice: 250, productQuantity: 1 },
];

function createCartTable() {
    let rows = products.map((product, productIndex) =>
        `<tr>
        <td>${product.productName}</td>
        <td>${product.productPrice} $</td>
        <td><i class="fa-solid fa-plus btn btn-success btn-sm me-3" onClick="addQuantity(${productIndex})"></i>${product.productQuantity}
        <i class="fa-solid fa-minus btn btn-danger btn-sm ms-3" onClick="reduceQuantity(${productIndex})"></i></td>
        <td>${Number(product.productPrice) * Number(product.productQuantity)}</td>
        <td><i class="fa-solid fa-trash-can text-danger" onClick="deleteProduct(${productIndex})"></i></td>
      </tr>`
    );

    document.querySelector('tbody').innerHTML = rows.join('');
}

//add event listeners to sort icons
document.querySelector('.fa-arrow-down-a-z').addEventListener('click', function () {
    sortProductName(true);
})
document.querySelector('.fa-arrow-down-z-a').addEventListener('click', function () {
    sortProductName(false);
})


// // sort productName function
// function sortProductName(direction) {
//     if (direction) {
//         products.sort()
//         createCartTable();
//     }
//     else {
//         products.sort().reverse()
//         createCartTable();
//     };
// }

//delete product from shopping cart
// function deleteProduct(productIndex) {
//     products.splice(productIndex, 1);
//     createCartTable();
// }

//Add product Quantity 
function addQuantity(productIndex) {
    products[productIndex].productQuantity++;
    createCartTable();
}
//Reduce product Quantity 
function reduceQuantity(productIndex) {

    if (products[productIndex].productQuantity > 1) {
        products[productIndex].productQuantity--;
        createCartTable();
    };
}