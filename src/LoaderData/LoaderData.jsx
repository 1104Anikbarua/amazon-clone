import { getShoppingCart } from "../../utilities/fakedb";

const loaderData = async () => {
    const loadedProduct = await fetch('http://localhost:5000/products')
    const products = await loadedProduct.json();
    // console.log(loadedProduct, products)
    const storedCart = getShoppingCart();
    const cartProduct = [];
    for (const id in storedCart) {
        const storedProducts = products.find(product => product._id === id)
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