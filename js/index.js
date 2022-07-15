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
let shoppingCart=[];

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


