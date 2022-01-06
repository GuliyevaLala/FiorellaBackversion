
$(document).ready(function () {

if ($('.cart-items').children().length == 0) {
    $('.subtotal,.buttons').hide();
    $('.empty-cart').show();
}

if (localStorage.getItem('cart') == null) {
    localStorage.setItem('cart', JSON.stringify([]));
}

let addToCartButtons = document.getElementsByClassName('action');
for (let i = 0; i < addToCartButtons.length; i++) {
    let button = addToCartButtons[i];
    button.onclick = function () {
        if (localStorage.getItem('cart') == null) {
            localStorage.setItem('cart', JSON.stringify([]));
        }
        let cart = JSON.parse(localStorage.getItem('cart'));
        let shopItem = button.parentElement.parentElement;
        let name = shopItem.getElementsByClassName('name')[0].innerText;
        let price = shopItem.getElementsByClassName('price')[0].innerText;
        let src = shopItem.getElementsByTagName('img')[0].src;

        let existance = cart.find(obj => obj.name == name);
        if (existance === undefined) {
            cart.push({
                name: name,
                price: price,
                src: src,
                quantity: 1
            });

        }
        else {
            existance.quantity += 1;
        }
        localStorage.setItem('cart', JSON.stringify(cart));
        updateItemCount();
        updateProductQuantity();
        updateCartTotal();
        addToCart();
    }
}

updateItemCount();
updateProductQuantity();
updateCartTotal();
addToCart();

function updateItemCount() {
    let cart = JSON.parse(localStorage.getItem('cart'));
    let itemCount = 0;
    cart.forEach(element => {
        itemCount += element.quantity;
    });
    document.getElementById('item-count').innerText = itemCount;
}

function updateCartTotal() {
    let cart = JSON.parse(localStorage.getItem('cart'));
    let total = 0;
    cart.forEach(element => {
        let itemPrice = Number(element.price.replace('$', ''));
        let itemQuantity = element.quantity;
        total += (itemPrice * itemQuantity);
    });
    document.getElementsByClassName('total-price')[0].innerText = '$' + total;
    document.getElementsByClassName('amount')[0].innerText = '$' + total;
}

function updateProductQuantity() {
    let cart = JSON.parse(localStorage.getItem("cart"));
    let cartItems = document.getElementsByClassName('cart-items')[0];
    let cartItemNames = cartItems.getElementsByClassName('name');
    for (let product of cart) {
        for (let i = 0; i < cartItemNames.length; i++) {
            if (product.name == cartItemNames[i].innerText) {
                cartItemNames[i].nextElementSibling.innerText = product.quantity;
            }
        }
    }
}

function addToCart() {
    let cartItems = document.getElementsByClassName('cart-items')[0];
    let cart = JSON.parse(localStorage.getItem('cart'));
    cartItems.innerHTML = "";
    for (let product of cart) {
        let cartItem = document.createElement('div');
        cartItem.className = "cart-item";
        let image = document.createElement('div');
        image.className = "image";
        let img = document.createElement('img');
        img.setAttribute('src', product.src);
        image.append(img);
        let infoElement = document.createElement('div');
        infoElement.className = "info";
        let nameElement = document.createElement('p');
        nameElement.className = "name";
        nameElement.innerText = product.name;
        let quantityElement = document.createElement('span');
        quantityElement.className = "quantity";
        quantityElement.innerText = product.quantity;
        let priceElement = document.createElement('span');
        priceElement.className = "price";
        priceElement.innerText = product.price;
        let remove = document.createElement('i');
        remove.className = "fas fa-times remove";
        remove.onclick = function () {
            let parent = this.parentElement.parentElement;
            let removeName = parent.getElementsByClassName('name')[0].innerText;
            if (product.name == removeName) {
                let index = cart.indexOf(product);
                cart.splice(index, 1);
                localStorage.setItem('cart', JSON.stringify(cart));
                updateItemCount();
                updateProductQuantity();
                updateCartTotal();
            }

            if (cartItems.children.length == 0) {
                $('.subtotal,.buttons').hide();
                $('.empty-cart').show();
            }
        }
        infoElement.append(nameElement, quantityElement, priceElement, remove);
        cartItem.append(image, infoElement);
        cartItems.append(cartItem);
        if ($('.cart-items').children().length != 0) {
            $('.subtotal,.buttons').show();
            $('.empty-cart').hide();
        }
    }
}

$(".cart").hover(function(){
    let basket = JSON.parse(localStorage.getItem("cart"))
    if(basket.length == 0){

        $(".cardalert").css("opacity","100%")
        
    }
    else{
        $(".cart-total").css("height","250px")}
    }
   
    ,function(){
        $(".cardalert").css("opacity","0%")
        $(".cart-total").css("height","0px")
    }

    
)

$(".cart-total").hover(function(){
    $(".cart-total").css("height","250px")}
    ,function(){
        $(".cart-total").css("height","0px")
    }
)










// $('.cart').hover(function () {
//     if (localStorage.getItem('cart') == null) {
//         localStorage.setItem('cart', JSON.stringify([]));
//     }
//     updateItemCount();
//     updateProductQuantity();
//     updateCartTotal();
//     addToCart();
//     if ($('.cart-items').children().length != 0) {
//         $('.subtotal,.buttons').show();
//         $('.empty-cart').hide();
//     }
//     else {
//         $('.subtotal,.buttons').hide();
//         $('.empty-cart').show();
//     }
//     $('.cart-drop').stop(true, true).show();
// }, function () {
//     $('.cart-drop').stop(true, true).hide();
// });
})
