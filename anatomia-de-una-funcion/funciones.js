function calculateDiscountedPrice(price, discountPercentage) {
    const discount = (price * discountPercentage) / 100
    const priceWithDiscount = price - discount

    return priceWithDiscount

}

const originalPrice = 1000
const discountPercentage = 15
const finalPrice = calculateDiscountedPrice(originalPrice, discountPercentage)

console.log('OriginalPrice: $' + originalPrice)
console.log('Discount: $' + discountPercentage + '%')
console.log('Price with discount: $' + finalPrice)