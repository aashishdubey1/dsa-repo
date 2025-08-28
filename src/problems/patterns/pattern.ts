// 1.
// * * * * * *
// * * * * * *
// * * * * * *
// * * * * * *
// * * * * * *
// * * * * * *

//S1.
export function pattern1(num: number): string {
  let str = "";
  for (let i = 0; i <= num; i++) {
    for (let j = 0; j <= num; j++) {
      str += "* ";
    }
    str += "\n";
  }
  console.log(str);
  return str;
}

//S2.
export function pattern1s2(num: number) {
  console.log(Array(num).fill("* ".repeat(5)).join("\n"));
}

// Q2.
// 1
// 2 2
// 3 3 3
// 4 4 4 4
// 5 5 5 5 5
// 6 6 6 6 6 6

export function pattern2(num: number) {
  let str = "";
  for (let i = 0; i <= num; i++) {
    for (let j = 0; j <= i; j++) {
      str += i + 1 + " ";
    }
    str += "\n";
  }
  console.log(str);
}

// // 3.
//      *
//     ***
//    *****
//   *******
//  *********
// ***********

export function patternPyramid(num: number) {
  let str: string = "";

  const printSpace = (num: number) => {
    for (let k = num; k > 0; k--) {
      str += " ";
    }
  };
  for (let i = 1; i <= num; i++) {
    printSpace(num - i);
    for (let j = 1; j <= i * 2 - 1; j++) {
      str += "*";
    }
    str += "\n";
  }
  console.log(str);
}

export function patternPyramidS2(num: number) {
  let result = "";
  for (let i = 1; i <= num; i++) {
    const spaces = " ".repeat(num - i);
    const star = "*".repeat(i * 2 - 1);
    result += spaces + star + "\n";
  }
  console.log(result);
}

// S3.
// 1
// 01
// 101
// 0101
// 10101
// 010101

export function pattern3(num: number) {
  let result = "";
  for (let i = 0; i < num; i++) { }
  console.log(result);
}
