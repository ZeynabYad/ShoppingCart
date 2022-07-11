const products = [
    {
        productName: "Tropicana Apple Juice",
        productPrice: 35,
        productQuantity: 1,
        productImageSrc: "TropicanaAppleJuice.jpg",
    },
    {
        productName: "McCafe Medium Coffee",
        productPrice: 45,
        productQuantity: 5,
        productImageSrc: "McCafeMediumCoffee.jpg",
    },
    {
        productName: "KitKat Wafer",
        productPrice: 20,
        productQuantity: 3,
        productImageSrc: "KitKatWafer.jpg",
    },
    {
        productName: "Lays Potato Chips",
        productPrice: 25,
        productQuantity: 2,
        productImageSrc: "LaysPotatoChips.jpg",
    },
    {
        productName: "Cheetos Puffs Cheese",
        productPrice: 20,
        productQuantity: 1,
        productImageSrc: "CheetosPuffsCheese.jpg",
    },
];
let currentArray=products;
//function createCartTable
function createCartTable(array) {
    let rows = array.map(
        (item, itemIndex) =>
            `<tr class='align-middle'>
          <th>${itemIndex + 1}</th>
          <th><img width="80" height="80" src="images/${item.productImageSrc
            }"></th>
          <td class='text-start'>${item.productName}</td>
          <td>$${item.productPrice}</td>
          <td class="fw-bold"><i class="fa-solid fa-minus btn btn-warning btn-sm me-3" onClick="reduceQuantity(${array,itemIndex})"></i>
          ${item.productQuantity}
          <i class="fa-solid fa-plus btn btn-success btn-sm ms-3" onClick="addQuantity(${itemIndex})"></i></td>
          <td class="fw-bold">$${Number(item.productPrice) * Number(item.productQuantity)
            }</td>
          <td><i class="fa-solid fa-trash-can text-danger" onClick="deleteProduct(${itemIndex})"></i></td>
        </tr>`
    );
    document.querySelector("tbody").innerHTML = rows.join("");
    calculateOrderTotal(array);
}

// Add Eventlistener to SearchBtn
document.querySelector("#searchBtn").addEventListener("click", doSearch);
document.querySelector("#keyword").addEventListener("keyup", doSearch);

function doSearch() {
    let keyword = document.querySelector("#keyword").value.toLowerCase();
    const searchResult = products.filter((item) => item.productName.toLowerCase().includes(keyword))
    createCartTable(searchResult);
    currentArray=searchResult;
}

//add event listeners to sort icons
document
    .querySelector(".fa-arrow-down-a-z")
    .addEventListener("click", function () {
        sortProductName(currentArray,true);
    });
document
    .querySelector(".fa-arrow-up-z-a")
    .addEventListener("click", function () {
        sortProductName(currentArray,false);
    });

// sort productName function
function sortProductName(array,direction) {
    if (direction) {
        array.sort(function (a, b) {
            let fa = a.productName.toLowerCase();
            let fb = b.productName.toLowerCase();
            if (fa < fb) return -1;
            if (fa > fb) return 1;
            return 0;
        });
        createCartTable(array);
    } else {
        array.sort(function (a, b) {
            let fa = a.productName.toLowerCase();
            let fb = b.productName.toLowerCase();
            if (fa > fb) return -1;
            if (fa < fb) return 1;
            return 0;
        });
        createCartTable(array);
    }
}

// delete product from shopping cart
function deleteProduct(array,productIndex) {
    array.splice(productIndex, 1);
    createCartTable(array);
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
    }
}

//function calculateOrderTotal to calculate sum order
function calculateOrderTotal(array) {
    let sum = array.reduce(
        (accumulator, currentProduct) =>
            accumulator +
            currentProduct.productPrice * currentProduct.productQuantity,
        0
    );
    document.querySelector("tfoot").innerHTML = `<tr>
<td colspan=""></td>
<td colspan="3"><button class='btn btn-primary'>Continue Check out</button></td>
<td colspan=""></td>
<td class="fw-bold" colspan="">TOTAL: $${sum}</td>
<td colspan=""></td>
<tr>`;
}


