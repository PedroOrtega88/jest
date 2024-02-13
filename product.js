// DOCUMENTACIÓN JEST
// https://jestjs.io/es-ES/docs/getting-started

let products = [];
let id = 0;


function resetProducts() {
   products = [];
   id = 0;
}


function getProducts() {
    return products;

}

function addProduct(name, price) {
    if (!name || !price) {
        throw new Error('El nombre y el precio del producto son obligatorios');
    
    } 
    if (products.find(product => product.name === name)) {
        throw new Error('Este prodicto ya existe')
    }
    
    products.push({name, price, id: id++});
    return products
}




function getProduct(id) {
    const product = products.find(product => product.id === id);
    if (!product) {
        throw new Error('El producto no existe');
    }
    return product;
}

/*
function removeProduct(id) {
    const product = products.removeProduct (product => product.id === id);
    if (!product) {
        throw new Error('El producto no existe');
    }
    products.splice;

}

function updateProduct {
    const product = products.removeProduct (product => product.id === id);
    if (!product) {
        throw new Error('El producto no existe');
    }
    products.updateProduct;

}

*/

module.exports = {
    resetProducts,
    addProduct,
   // removeProduct,
    getProducts,
   // updateProduct
};








function getProduct(id) {
    const product = products.find(product => product.id === id);
    if (!product) {
        throw new Error('products not exist');
    }
    return product;
}










