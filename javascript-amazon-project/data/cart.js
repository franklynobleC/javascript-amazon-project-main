export const cart = []

/**
 * The function addToCart checks if a product with a given productId already exists in the cart,
 * and if so, increments its quantity by 1; otherwise, it adds the product to the cart with a
 * quantity of 1.
 * @param productId - The `productId` parameter is the unique identifier of the product that you
 * want to add to the cart.
 */
export function addToCart (productId) {
  let matchingItem
  cart.forEach(cartProduct => {
    if (productId === cartProduct.productId) {
      //  product.quantity++
      matchingItem = cartProduct
      console.log(cartProduct.quantity)
    }
  })
  if (matchingItem) {
    matchingItem.quantity += 1
  } else {
    cart.push({
      productId: productId,
      quantity: 1
    })
  }
}
