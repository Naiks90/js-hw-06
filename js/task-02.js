// function deleteNth(arr, n) {
//   // ...
// }

const arr = [1, 1, 3, 3, 7, 2, 2, 2, 2];
const n = 3;
//1, 1 , 1 , 3 , 3 , 3 , 7, 7 , 7 , 2, 2, 2
const b = arr.reduce(function (arrNumbers, number, index, arr) {
  if (!arrNumbers.includes(number)) {
    let i = 0;
    while (i < n) {
      arrNumbers.push(number);
      i += 1;
    }
  }
  return arrNumbers;
}, []);

// const a = b.reduce(function (arrNumbers, number, index, arr) {
//   arrNumbers.push(b);
//   return arrNumbers;
// }, []);

console.log(b);
