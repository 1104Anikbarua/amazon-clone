import { getShoppingCart } from "../../utilities/fakedb";

const loaderData = async () => {
    const loadedProduct = await fetch('products.json')
    const products = await loadedProduct.json();
    // console.log(loadedProduct, products)
    const storedCart = getShoppingCart();
    const cartProduct = [];
    for (const id in storedCart) {
        const storedProducts = products.find(product => product.id === id)
        // console.log(storedProducts)
        if (storedProducts) {
            const quantity = storedCart[id];
            storedProducts.quantity = quantity;
            cartProduct.push(storedProducts)
        }
    }
    // console.log(cartProduct)
    return cartProduct;
}
export default loaderData;