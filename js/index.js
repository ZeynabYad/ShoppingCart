const products = [
    {
        productId: 1001,
        productName: "Tropicana Apple Juice",
        productPrice: 35,
        productImageSrc: "TropicanaAppleJuice.jpg",
    },
    {
        productId: 1002,
        productName: "McCafe Medium Coffee",
        productPrice: 45,
        productImageSrc: "McCafeMediumCoffee.jpg",
    },
    {
        productId: 1003,
        productName: "KitKat Wafer",
        productPrice: 20,
        productImageSrc: "KitKatWafer.jpg",
    },
    {
        productId: 1004,
        productName: "Lays Potato Chips",
        productPrice: 25,
        productImageSrc: "LaysPotatoChips.jpg",
    },
    {
        productId: 1005,
        productName: "Cheetos Puffs Cheese",
        productPrice: 20,
        productImageSrc: "CheetosPuffsCheese.jpg",
    },
    {
        productId: 1006,
        productName: "Little Debbie Nutty Bars",
        productPrice: 20,
        productImageSrc: "LittleDebbieNuttyBars.jpg",
    },
    {
        productId: 1007,
        productName: "Quest Chocolate Cookie",
        productPrice: 20,
        productImageSrc: "QuestChocolateCookie.jpg",
    },
    {
        productId: 1008,
        productName: "Green Mountain Coffee",
        productPrice: 20,
        productImageSrc: "GreenMountainCoffee.jpg",
    },
    {
        productId: 1009,
        productName: "Haribo Gold Bears",
        productPrice: 20,
        productImageSrc: "HariboGoldBears.jpg",
    },
    {
        productId: 1010,
        productName: "Dansk Danish Cookie",
        productPrice: 20,
        productImageSrc: "DanskDanishCookie.jpg",
    },
    {
        productId: 1011,
        productName: "Godiva Truffles Chocolate Gift Box",
        productPrice: 20,
        productImageSrc: "GodivaTrufflesChocolateGiftBox.jpg",
    },
    {
        productId: 1012,
        productName: "chocolate waffle Ice Cream",
        productPrice: 20,
        productImageSrc: "chocolatecoveredwaffleIceCream.jpg",
    },

]
let shoppingCart = [];
let currentArray=shoppingCart;

//function createCartTable
function fillProductContainer() {
    let cards = products.map(
        (product, productIndex) =>
            `<div class="col"  id=${product.productId}>
            <div class="card h-100">
              <img
                src="images/${product.productImageSrc}"
                class="card-img-top"
                alt="${product.productName}"
              />
              <div class="card-body text-center">
                <p class="card-title">${product.productName}</p>
                <p class="card-text">Price: $${product.productPrice}</p>
                <input
                  type="button"
                  class="btn btn-sm btn-success"
                  value="Add to Cart"
                  onClick="addToCart(${productIndex})"
                />
              </div>
            </div>
          </div>`
    );
    document.querySelector("#productContainer").innerHTML = cards.join("");
    document.querySelector("#basketCount").innerHTML = shoppingCart.length;

}

//function addToCart
function addToCart(...args) {

    let productIndex = shoppingCart.findIndex(productObject => productObject.productId === products[args[0]].productId)

    if (productIndex === -1) {
        shoppingCart.push(products[args[0]]);
        shoppingCart[shoppingCart.length - 1].productQuantity = 1;
    }
    else {
        shoppingCart[productIndex].productQuantity++;
    }

    document.querySelector("#basketCount").innerHTML = shoppingCart.length;
    createCartTable(currentArray);
}

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
          <td class="fw-bold"><i class="fa-solid fa-minus btn btn-warning btn-sm me-3" onClick="reduceQuantity(${itemIndex})"></i>
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
function deleteProduct(productIndex) {
    currentArray.splice(productIndex, 1);
    createCartTable(currentArray);
}