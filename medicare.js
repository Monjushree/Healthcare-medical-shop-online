
function addToCart(productName) {
    alert(productName + " has been added to your cart!");
}
function seeAll(productName) {
    alert(productName + " for more medicine");
}

function loadMoreProducts() {
    let contentArea = document.getElementById("content-area");
    let moreProducts = "";
    for (let i = 1; i <= 6; i++) {
        moreProducts += createProduct(`Medicine ${Math.floor(Math.random() * 100)}`, Math.floor(Math.random() * 500), "medicine1.jpg");
    }
    contentArea.innerHTML += `<div class="container">${moreProducts}</div>`;
}

    