/**
 *  Esta funcion calcula el precio total de los productos del carrito
 * @param {Array} products cartProduct: Array de objetos
 * @returns {Number} Total Price del carrito
 */

const totalPrice = (products) => {
    let sum = 0;
    products.forEach((product) => {sum += product.price});
    return sum;
}
export { totalPrice }