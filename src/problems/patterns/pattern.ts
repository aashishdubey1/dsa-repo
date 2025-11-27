// 1.
// * * * * * *
// * * * * * *
// * * * * * *
// * * * * * *
// * * * * * *
// * * * * * *

//S1.
// export function pattern1(num: number): string {
//   let str = "";
//   for (let i = 0; i <= num; i++) {
//     for (let j = 0; j <= num; j++) {
//       str += "* ";
//     }
//     str += "\n";
//   }
//   console.log(str);
//   return str;
// }

//S2.
// export function pattern1s2(num: number) {
//   console.log(Array(num).fill("* ".repeat(5)).join("\n"));
// }

// Q2.
// 1
// 2 2
// 3 3 3
// 4 4 4 4
// 5 5 5 5 5
// 6 6 6 6 6 6

// export function pattern2(num: number) {
//   let str = "";
//   for (let i = 0; i <= num; i++) {
//     for (let j = 0; j <= i; j++) {
//       str += i + 1 + " ";
//     }
//     str += "\n";
//   }
//   console.log(str);
// }

//  Q3.
//      *
//     ***
//    *****
//   *******
//  *********
// ***********

// export function patternPyramid(num: number) {
//   let str: string = "";

//   const printSpace = (num: number) => {
//     for (let k = num; k > 0; k--) {
//       str += " ";
//     }
//   };
//   for (let i = 1; i <= num; i++) {
//     printSpace(num - i);
//     for (let j = 1; j <= i * 2 - 1; j++) {
//       str += "*";
//     }
//     str += "\n";
//   }
//   console.log(str);
// }

// export function patternPyramidS2(num: number) {
//   let result = "";
//   for (let i = 1; i <= num; i++) {
//     const spaces = " ".repeat(num - i);
//     const star = "*".repeat(i * 2 - 1);
//     result += spaces + star + "\n";
//   }
//   console.log(result);
// }

// Q4.
// 1
// 01
// 101
// 0101
// 10101
// 010101

// export function printPattern() {
//   let pattern = "";
//   let arr = [];
//   let toggle = 1;
//   for (let i = 1; i <= 6; i++) {
//     for (let j = i; j <= i; j++) {
//       arr.unshift(toggle);
//       toggle == 1 ? (toggle = 0) : (toggle = 1);
//     }
//     pattern += arr.join("");
//     pattern += "\n";
//   }
//   console.log(pattern);
//   console.log(arr);
// }

// export function binaryPattern(num: number): string {
//   let str = "";
//   // let toggel = 1;
//   for (let i = 1; i <= num; i++) {
//     for (let j = i; j <= i; j++) {
//       if (i % 2 == 0) {
//         let temp = 0 + str;
//         str += temp;
//       } else {
//         let temp = 1 + str;
//         str += temp;
//       }
//     }
//     str += "\n";
//   }
//   console.log(str);
//   return str;
// }

// Q5 Number Crown Pattern

// 1          1
// 12        21
// 123      321
// 1234    4321
// 12345  54321
// 123456654321

// export function numberCrownPatter(n: number) {
//   let str = "";
//   let count = 1;
//   while (count <= n) {
//     for (let i = 1; i <= count; i++) {
//       str += i;
//     }

//     for (let j = 1; j <= n * 2 - count * 2; j++) {
//       str += " ";
//     }

//     for (let k = count; k >= 1; k--) {
//       str += k;
//     }

//     str += "\n";
//     count++;
//   }
//   console.log(str);
// }

// Increasing Number Triangle Pattern
// 1
// 2  3
// 4  5  6
// 7  8  9  10
// 11  12  13  14  15
// 16  17  18  19  20  21

// export function increaseNumberTriangle(num: number) {
//   let str = "";
//   let counter = 1;
//   for (let i = 1; i <= num; i++) {
//     for (let j = 1; j <= i; j++) {
//       str += counter;
//       str += " ";
//       counter++;
//     }
//     str += "\n";
//   }
//   console.log(str);
// }

// Increasing Letter Triangle Pattern
// A
// A B
// A B C
// A B C D
// A B C D E
// A B C D E F

export function increaseLetterTriangle(num: number) {
  let str = "";
  let charCode = 65;
  for (let i = 1; i <= num; i++) {
    for (let j = 1; j <= i; j++) {
      str += String.fromCharCode(charCode);
      str += " ";
    }
    charCode++;
    str += "\n";
  }
  console.log(str);
}
