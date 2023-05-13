const prices = [11.99, 13.99, 199.99, 455.99, 26.99, 11.99];

// let total = 0;
// for (let price of prices) {
//     total += price;
// }
// console.log(total);


const total = prices.reduce((total, price) => {
    return total + price
})

const minPrice = prices.reduce((min, price) => {
    if (price < min) {
        return price
    }
    return min;
})