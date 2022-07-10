const products = [
    { productName: 'Tropicana Apple Juice', productPrice: 35, productQuantity: 1, productImageSrc: 'TropicanaAppleJuice.jpg' },
    { productName: 'McCafe Medium Coffee', productPrice: 45, productQuantity: 5, productImageSrc: 'McCafeMediumCoffee.jpg' },
    { productName: 'KitKat Wafer', productPrice: 20, productQuantity: 3, productImageSrc: 'KitKatWafer.jpg' },
    { productName: 'Lays Potato Chips', productPrice: 25, productQuantity: 2, productImageSrc: 'LaysPotatoChips.jpg' },
    { productName: 'Cheetos Puffs Cheese', productPrice: 20, productQuantity: 1, productImageSrc: 'CheetosPuffsCheese.jpg' },
];

function createCartTable() {
    let rows = products.map((product, productIndex) =>
        `<tr class='align-middle'>
        <th>${productIndex + 1}</th>
        <th><img width="80" height="80" src="images/${product.productImageSrc}"></th>
        <td class='text-start'>${product.productName}</td>
        <td>$${product.productPrice}</td>
        <td class="fw-bold"><i class="fa-solid fa-minus btn btn-warning btn-sm me-3" onClick="reduceQuantity(${productIndex})"></i>
        ${product.productQuantity}
        <i class="fa-solid fa-plus btn btn-success btn-sm ms-3" onClick="addQuantity(${productIndex})"></i></td>
        <td class="fw-bold">$${Number(product.productPrice) * Number(product.productQuantity)}</td>
        <td><i class="fa-solid fa-trash-can text-danger" onClick="deleteProduct(${productIndex})"></i></td>
      </tr>`
    );

    document.querySelector('tbody').innerHTML = rows.join('');
    calculateOrderTotal();
}

//add event listeners to sort icons
document.querySelector('.fa-arrow-down-a-z').addEventListener('click', function () {
    sortProductName(true);
})
document.querySelector('.fa-arrow-up-z-a').addEventListener('click', function () {
    sortProductName(false);
})


// sort productName function
function sortProductName(direction) {
    if (direction) {
        products.sort(function (a, b) {
            let fa = a.productName.toLowerCase();
            let fb = b.productName.toLowerCase();
            if (fa < fb) return -1;
            if (fa > fb) return 1;
            return 0;
        })
        createCartTable();
    }
    else {
        products.sort(function (a, b) {
            let fa = a.productName.toLowerCase();
            let fb = b.productName.toLowerCase();
            if (fa > fb) return -1;
            if (fa < fb) return 1;
            return 0;
        })
        createCartTable();
    };
}

// delete product from shopping cart
function deleteProduct(productIndex) {
    products.splice(productIndex, 1);
    createCartTable();
}

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

//function calculateOrderTotal to calculate sum order
function calculateOrderTotal() {
    let sum = products.reduce((accumulator, currentProduct) => accumulator + (currentProduct.productPrice * currentProduct.productQuantity), 0);
    console.log(sum)
    document.querySelector('tfoot').innerHTML = 
    `<tr>
    <td colspan=""></td>
    <td colspan=""></td>
    <td colspan=""></td>
    <td colspan=""></td>
    <td colspan=""></td>
    <td class="fw-bold" colspan="">TOTAL: $${sum}</td>
    <td colspan=""></td>
    <tr>`;
}