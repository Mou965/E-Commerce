let cartProducts = [];
let id;
let price;
document.addEventListener('click', addCart);


function toggleCart() {
    const cart = document.getElementById('hidden');
    const fixedCart = document.getElementById('hidden');
    cart.classList.toggle('hidden');
    fixedCart.classList.toggle('fixedCart');
}
function addCart(e) {
    e.preventDefault();
    if(e.target.classList.contains('agregar-card')){
        const cart = e.target.parentElement.parentElement;
        getCartProduct(cart);
    }
}

function getId(idP){
    id = idP;
    return id;
}
function getPrice(priceP ){
    price = priceP;
    return price;
}

function getCartProduct(cart) {
    const getProduct = {
        id: id,
        img: cart.querySelector('img').src,
        name: cart.querySelector('h5').textContent,
        price: price,
        amount: 1
    }

    const exist =  cartProducts.some( cart => cart.id === getProduct.id);
        if(exist){
            const product = cartProducts.map( products => {
                if(products.id === getProduct.id) {
                    products.amount++;
                    return products;
                } else {
                    return products;
                }
            });
            cartProducts = [...product];
        } else {
            cartProducts = [...cartProducts, getProduct];
        }
    printCart(cartProducts);
        
}
export { toggleCart, addCart, getCartProduct, getId, getPrice};




