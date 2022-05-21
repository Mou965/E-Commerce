function printProduct(product) {
    // Identificar el contenedor
    const container = document.getElementById('product-container');
    // Generar el HTML
    let html = '';
    for(let i = 0; i < product.length; i++) {
        html += `<div class="col-md-6 col-lg-4 mt-3">
                    <div class="card">
                        <div class="text-center">
                            <div class="img-container">
                                <img src="${product[i].image}" alt="${product[i].name}">
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">${product[i].name}</h5>
                                <p class="card-text">$${product[i].price} US</p>
                                <div class="text-end">
                                    <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onclick="editProduct(${product[i].id})">
                                        <i class="fa-solid fa-square-pen"></i>
                                    </button>
                                    <button class="btn btn-danger" onclick="deleteProduct(${product[i].id})">
                                        <i class="fa-solid fa-trash-can">
                                    </i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`
    // Imprimir el HTML
    container.innerHTML = html;
    }
}

function printProductShop(product) {
    const containerShop = document.getElementById('product-container-p');
    let htmlShop = '';
    for(let i = 0; i < product.length; i++) {
        htmlShop += 
                `<div class="col-md-6 col-lg-4 mt-3">
                    <div class="card">
                        <div class="text-center">
                            <div class="img-container">
                                <img src="${product[i].image}" alt="${product[i].name}">
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">${product[i].name}</h5>
                                <p class="card-text">$${product[i].price} US</p>
                            </div>
                            <div class="text-end">
                                <button class="btn btn-success1 agregar-card" type="submit" onclick="getId(${product[i].id}),getPrice(${product[i].price})">
                                    Agregar al carrito
                                </button>
                            </div>
                        </div>
                    </div>
                </div>`
    }
    containerShop.innerHTML = htmlShop;
}
function printCart(product) {
    const cartView = document.getElementById('cartView'); 
    let htmlCart = '';
    for(let i = 0; i < product.length; i++){
        htmlCart += //html
                    `<div class="col-md-12">
                        <div class="card-cart">
                            <div class="text-center">
                                <div class="card-body-cart">
                                    <div class="img-container-cart">
                                        <img src="${product[i].img}" alt="${product[i].name}" class="img-container-cart">
                                    </div>
                                    <div>
                                        <h5 class="card-title-cart">${product[i].name}</h5>
                                        <p class="card-text-cart">$${product[i].price} US</p>
                                    </div>
                                </div>
                                <div class="button-cart">
                                    <div class="button-amount">
                                        <button class="btn-cart">
                                            <i class="fa-solid fa-minus"></i>
                                        </button>
                                        <h3 class="amout">${product[i].amount}</h3>
                                        <button class="btn-cart">
                                            <i class="fa-solid fa-plus"></i>
                                        </button>
                                    </div>
                                    <div>
                                        <button class="delete-p">
                                            <i class="fa-solid fa-trash-can"></i>
                                        </button>    
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>`
    }
    cartView.innerHTML = htmlCart;
}

export { printProduct, printProductShop, printCart };
// , printCart