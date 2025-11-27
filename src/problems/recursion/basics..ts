export const printNameNTimes = (n: number, name: string): any => {
  if (n == 0) return;
  console.log(name);
  return printNameNTimes(n - 1, name);
};

export const print1ToN = (count: number, n: number): any => {
  if (count > n) return;
  console.log(count++);
  return print1ToN(count, n);
};

export const printNTo1 = (n: number): any => {
  if (n === 0) return;
  console.log(n);
  return printNTo1(n - 1);
};

export const sumOfNNumbers = (sum: number, n: number): any => {
  if (n === 0) return sum;
  return sumOfNNumbers(sum + n, n - 1);
};

export const sumOfNNumbers2 = (n: number): any => {
  if (n === 0) return;
  return n + sumOfNNumbers2(n - 1);
};

export const factorial = (count: number, n: number): any => {
  if (n < 1) return count;
  return factorial(count * n, n - 1);
};

export const reverseArray = (
  arrRes: number[],
  arr: number[],
  count: number
): any => {
  if (count == 0) return arrRes;
  arrRes.push(arr[count - 1]);
  return reverseArray(arrRes, arr, count - 1);
};
