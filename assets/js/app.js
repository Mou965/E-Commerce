import { getProduct, createProduct, deleteProduct, editProduct, updateProduct } from "./crud.js";

// import { printCart } from "./ui.js" 

getProduct();


window.getProduct = getProduct;
window.createProduct = createProduct;
window.deleteProduct = deleteProduct;
window.editProduct = editProduct;
window.updateProduct = updateProduct;

// window.printCart = printCart;
// window.getId = getId;
// window.getPrice = getPrice;
// window.getCartProduct = getCartProduct;

// addCart, getCartProduct, getId, getPrice