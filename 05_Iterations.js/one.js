//for

// for (let i = 0; i < 10; i++) {
//     const element = i;
//     if (element == 5) {
       // console.log("5 number is Best");
//     }
//     console.log(element);
// }
//console.log(element)

for (let i = 1; i <= 10; i++) {
   // console.log(`Outer loop value: ${i}`);
    for (let j = 1; j <= 10; j++) {
        // console.log(`inner loop value: ${j}and inner loop value: ${i}`);
       // console.log(i + '*' + j + ' = ' + i*j );   
    }
}
// let myArray = ["flash", "superman", "batman"]
// console.log(myArray.length);
// for (let index = 0; index <  myArray.length; index++) {
//     const element = myArray[index];
//     console.log(element);
// }

// Break and Continue

// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`detected 5`);
//          break;
//     }
//     console.log(`value of i is ${index}`);
// }


for (let index = 1; index <= 20; index++) {
  if (index == 5) {
    console.log(`detected 5`);
      continue;
  }
  console.log(`value of i is ${index}`);
}


