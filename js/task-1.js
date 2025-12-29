function isEnoughCapacity(products, containerSize) {
  let totalobjnum = 0;
  const objnum = Object.values(products);

  for (const value of objnum) {
    // totalobjnum = totalobjnum + value;
    // if (totalobjnum >= containerSize) {
    totalobjnum = totalobjnum + value;
    // }
  }
  return totalobjnum <= containerSize;
}

console.log(isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)); // true

isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12); // false

isEnoughCapacity({ apples: 18, potatos: 5, oranges: 2 }, 7); // false
