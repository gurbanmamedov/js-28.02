// 1.Напишите программу, которая удваивает каждый элемент массива чисел.

// const numArray = [1, 2, 3, 4, 5];

// const doubledArray = [];

// for (let i = 0; i < numArray.length; i++) {
//   doubledArray[i] = numArray[i] * 2;
// }

// console.log("NumArray =>", numArray);
// console.log("doubledArray =>", doubledArray);

//2. Напишите функцию, которая находит среднее значение чисел в массиве.

// const numArray = [1, 2, 3, 4, 5];
// let sum = 0;

// for (let i = 0; i < numArray.length; i++) {
//   sum += numArray[i];
// }

// const average = sum / numArray.length;

// console.log("average=>", average);

//3. Создайте программу, которая находит наименьшее значение в числовом массиве.

// const numArray = [1, 2, 3, 4, 5];

// let minNum = numArray[0];

// for (let i = 1; i < numArray.length; i++) {
//   if (numArray[i] < minNum) {
//     minNum = numArray[i];
//   }
// }

// console.log("Minimum number => ", minNum);

//4. Напишите функцию, которая находит наибольшее значение в числовом массиве.

// const numArray = [1, 2, 3, 4, 5];
// let maxNum = numArray[0];
// for (let i = 1; i < numArray.length; i++) {
//   if (numArray[i] > maxNum) {
//     maxNum = numArray[i];
//   }
// }

// console.log("max number => ", maxNum);

//5. Создайте программу, которая находит все четные числа в массиве и выводит их.

// const numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// for (let i = 0; i < numArray.length; i++) {
//   const num = numArray[i];
//   if (num % 2 === 0) {
//     console.log(num);
//   }
// }

//6. Напишите функцию, которая находит количество вхождений определенного числа в массиве.

// const num = 2;
// const numArray = [1, 2, 3, 4, 3, 5, 6, 3, 7];

// let count = 0;

// for (let i = 0; i < numArray.length; i++) {
//   if (numArray[i] === num) {
//     count++;
//   }
// }

// console.log(count);

//7.Создайте программу, которая находит сумму квадратов всех чисел в массиве.

// const numArray = [1, 2, 3, 4, 5];
// let sumSqr = 0;
// for (let i = 0; i < numArray.length; i++) {
//   const currentNum = numArray[i];
//   sumSqr += currentNum * currentNum;
// }

// console.log(sumSqr);

//8. Напишите функцию, которая находит индекс первого вхождения определенного числа в массиве.

// const numArray = [1, 2, 3, 4, 3, 5, 6, 3, 7];
// const num = 4;
// let index = -1;
// for (let i = 0; i < numArray.length; i++) {
//   if (numArray[i] === num) {
//     index = i;
//     break;
//   }
// }

// console.log(index);

//9.Создайте программу, которая переворачивает порядок элементов в массиве.

const numArray = [1, 2, 3, 4, 5];

for (let start = 0, end = numArray.length - 1; start < end; start++, end--) {
  const newNum = numArray[start];
  numArray[start] = numArray[end];
  numArray[end] = newNum;
}

console.log(numArray);
