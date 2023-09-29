import { cart } from '../data/cart.js'
/* The code you provided is a JavaScript forEach loop that iterates over each object in the `products`
  array. For each object, it creates an HTML string using template literals and assigns it to the
  `html` variable. The HTML string represents a product container with various elements such as an
  image, name, rating, price, quantity selector, and buttons. However, the `html` variable is not
  being used or displayed anywhere in the code you provided. */
let productHTML = ``

products.forEach(product => {
  //loop  through an array and  add  to  the  result  (productHTML)
  productHTML += ` <div class="product-container">
            <div class="product-image-container">
              <img class="product-image"
                src=${product.image}>
            </div>

            <div class="product-name limit-text-to-2-lines">
              ${product.name}
            {console.log(${product.name})}
            </div>

            <div class="product-rating-container">
              <img class="product-rating-stars"
                src="images/ratings/rating-${product.rating.stars * 10}.png">
              <div class="product-rating-count link-primary">
           ${product.rating.count}
              </div>
            </div>

            <div class="product-price">
         $${(product.priceCents / 100).toFixed(2)}
            </div>

            <div class="product-quantity-container">
              <select>
                <option selected value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
            </div>

            <div class="product-spacer"></div>

            <div class="added-to-cart">
              <img src="images/icons/checkmark.png">
              Added
            </div>

            <button class="add-to-cart-button button-primary js-add-to-cart"
            data-product-id="${product.id}">
              Add to Cart
            </button>
          </div>`
})

document.querySelector('.js-products-grid').innerHTML = productHTML
document.querySelectorAll('.js-add-to-cart').forEach(button => {
  button.addEventListener('click', () => {
    console.log('add  to clicked')
    /* `console.log(button.dataset)` is logging the `dataset` property of the `button` element to the
    console. The `dataset` property is an object that contains all the custom data attributes of the
    element. In this case, it is logging the custom data attribute `data-product-name` of the button
    element.*/
    const productId = button.dataset.productId
    let matchingItem
    cart.forEach(product => {
      if (productId === product.productId) {
        //  product.quantity++
        matchingItem = product
        console.log(product.quantity)
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

    /* The code `let catTotal = 0` initializes a variable `catTotal` to 0. */
    let catTotal = 0

    cart.forEach(item => {
      catTotal = catTotal + item.quantity
    })

    //put  the cart quantity on  the Page
    document.querySelector('.js-cart-total').innerHTML = catTotal
  })
})
