// Bài Tập 1: Tìm tất cả số nguyên tố trong phạm vi 100

const START = 2,
  END = 100,
  outputPrimeArr = [];

const isPrime = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++)
    if (num % i === 0) return false;
  return true;
};

for (let i = START; i <= END; i++) {
  if (isPrime(i)) outputPrimeArr.push(i);
}
console.log(" **************** Bài tập 1: ****************");
console.log("outputPrimeArr", outputPrimeArr);

// Bài Tập 2:
// Cho 2 mảng
// arr1 = [1,2,3,4,5,6,7]
// arr2 = [1,2,3,9]
// Output: là 1 mảng chứa tất cả các phần tử chung của 2 mảng trên

const arr1 = [1, 2, 3, 4, 5, 6, 7];
const arr2 = [1, 2, 3, 9];

const arrOutput = arr1.filter((el) => arr2.includes(el));
console.log(" **************** Bài tập 2: ****************");
console.log("arrOutput", arrOutput);

// Bài Tập 3:
// Palindrome Number
// Given an integer x, return true if x is palindrome integer.
// An integer is a palindrome when it reads the same backward as forward.
// For example, 121 is a palindrome while 123 is not.

const isPalindromeInterger = (number) => {
  if (isNaN(number)) return false;
  const reverseNumber = String(number).split("").reverse().join("");
  if (Number(reverseNumber) === number) return true;
  return false;
};

console.log(" **************** Bài tập 3: ****************");
console.log(isPalindromeInterger("1997"));
console.log(isPalindromeInterger(121));
console.log(isPalindromeInterger(123));
console.log(isPalindromeInterger(2332));
console.log(isPalindromeInterger(1234321));

// Bài Tập 4:
//	Tính tổng các số fibonaci từ số thứ 1 đến số thứ 1.000.000
//	Dãy fibonaci đầy đủ: 1,1,2,3,5,8,13,....

const countFibonaci = (n) => {
  if (n === 0 || isNaN(n) || n === 1) return 0;
  const result = [0, 1];
  let count = 1;
  for (let i = 2; i < n; i++) {
    count += result[i - 2] + result[i - 1];
    result.push(result[i - 2] + result[i - 1]);
  }
  return count;
};

console.log(" **************** Bài tập 4: ****************");
console.log(countFibonaci(1));
console.log(countFibonaci(2));
console.log(countFibonaci(3));
console.log(countFibonaci(4));
console.log(countFibonaci(5));
console.log(countFibonaci(6));
console.log(countFibonaci(7));
console.log(countFibonaci(8));
console.log(countFibonaci(9));
console.log(countFibonaci(10));
console.log(countFibonaci(11));
