function isEnoughCapacity(products, containerSize) {
    const values = Object.values(products)
    let totalQuantity = 0;
    // console.log(values);
    for (const value of values) {
        totalQuantity += value;
        
    }
    // console.log(totalQuantity);
    if (totalQuantity > containerSize) {
        return false;
    }
    return true;
 }



console.log(
  isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)
); // true

console.log(
  isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)
); // false

console.log(
  isEnoughCapacity({ apples: 1, lime: 5, tomatoes: 3 }, 14)
); // true

console.log(
  isEnoughCapacity({ apples: 18, potatoes: 5, oranges: 2 }, 7)
); // false