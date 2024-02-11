const { resetProducts,  addProduct, removeProduct, getProducts, getProduct, updateProduct} = require('./product');

beforeEach(() => {
    resetProducts();
});





//errores creacion producto

describe('addProduct', () => {
    it('should throw an error if the product already exists', () => {
        addProduct('ProductoExistente');
      
        expect(() => addProduct('ProductoExistente')).toThrow('El producto ya existe');
    });

    it('should throw an error if the product name is not defined', () => {
        expect(() => addProduct()).toThrow('El nombre del producto no está definido');
    });

    it('should throw an error if the product price is not defined', () => {
        expect(() => addProduct('ProductoSinPrecio')).toThrow('El precio del producto no está definido');
    });
});

//errores eliminar producto
describe('removeProduct', () => {
    it('should throw an error if the product no  exists', () => {
        expect(() => removeProduct('removeProduct')).toThrow('El producto no existe');
    });
      
});

//errores obtener  producto
describe('getProduct', () => {
    it('should throw an error if the product cant get', () => {
        addProduct('getProduct');
      
        expect(() => getProduct('getProduct')).toThrow('El producto no existe');
    });
          
});



//errores actualizar producto
describe('updateProduct', () => {
    it('should throw an error if the product no update', () => {
        updateProduct('updateProduct');
      
        expect(() => updateProduct('updateProduct')).toThrow('El producto no puede actualizarse');
    });
    it('should throw an error if the product name is not defined', () => {
       expect(() => addProduct()).toThrow('El nombre del producto no está definido');
    });   
    it('should throw an error if the product price is not defined', () => {
        expect(() => addProduct('ProductoSinPrecio')).toThrow('El precio del producto no está definido');
    });

});
