function countVeg(arr, str) {
  if (!arr.length) return 0;
  console.log(arr, str);
  let sum = 0;
  arr.forEach((x) => {
    if (x.type === str) {
      sum += x.quantity;
    }
  });

  return sum;
}

module.exports = countVeg;
