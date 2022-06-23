const products = [
    "product 1",
    "product 2",
    "product 3",
    "product 4",
    "product 5",
];

//create shopping cart table from products array
function createCart() {
    let cardContent = "";
    for (const product in products) {
        cardContent += `<tr>
    <td>${products[product]}</td>
    <td><i class="fa-solid fa-trash-can text-danger" onClick="deleteProduct(${product})"></i></td>
  </tr>`;

    }
    document.querySelector('table').innerHTML = cardContent;
}
