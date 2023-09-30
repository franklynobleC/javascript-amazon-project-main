export let cart = JSON.parse(localStorage.getItem('cart'))
if (!cart) {
  cart = [
    {
      productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
      quantity: 2
    },
    {
      productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
      quantity: 1
    }
  ]
}

function saveToStorage () {
  localStorage.setItem('cart', JSON.stringify(cart))
}

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
    }
  })
  /* The code block `if (matchingItem) { ... } else { ... }` is checking if a product with the given
 `productId` already exists in the cart. */
  if (matchingItem) {
    matchingItem.quantity += 1
  } else {
    cart.push({
      productId: productId,
      quantity: 1
    })
  }
  saveToStorage()
}
/*
//save to  localStorage
local storage  can  only save       strings  so  convert to  string using  stringify
 */

/*the function removes a product from the cart based on its productId.
  @param productId - The `productId` parameter is the unique identifier of the product that needs to
  be removed from the cart.
 */

export function removeFromCart (productId) {
  let newCart = []
  cart.forEach((cartProduct, index) => {
    if (productId !== cartProduct.productId) {
      newCart.push(cartProduct)
    }
  })
  cart = newCart
}

saveToStorage()
