let cartItems = [];

function addToCart(productName, price) {
    cartItems.push({ productName, price });
    updateCart();
}

function updateCart() {
    const cartList = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");

    cartList.innerHTML = "";
    let total = 0;

    cartItems.forEach(item => {
        const listItem = document.createElement("li");
        listItem.textContent = `${item.productName} - R${item.price.toFixed(2)}`;
        cartList.appendChild(listItem);

        total += item.price;
    });

    cartTotal.textContent = total.toFixed(2);
}

function checkout() {
    alert("Payment gateway integration would happen here!");
    cartItems = [];
    updateCart();
}
