//1) check the string

// function checkStr(arr, word){  
//    let nw = word.toLowerCase()
//    let na =[]
//    for(let i=0;i<arr.length;i++){
//       let lowArr=arr[i].toLowerCase()
//       na.push(lowArr)
//    }
//    for(i=0;i<na.length;i++){
//     if(na[i]==nw){
//         return `true ${i}`
//     }
//    }
//    return `false -1`
// }
// console.log(checkStr(["abc","str","sit"],"aBc"));

// Output:
//true 0


//2) count and above 3 odd numbers return true otherwise false
// let arr = [1, 2, 3, 4, 5,6, 8];
// let count = 0;
// for (i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 != 0) {
//     count += 1;
//   }
// }
// if (count >= 3) {
//   console.log(true);
// } else {
//   console.log(false);
// }
// // console.log(count);

// Output:
//true



//3) Difference two array
// function diffarr(arr1,arr2){
//     for(let i=0;i<arr1.length;i++){
//         for(let j=0;j<arr2.length;j++){
//             if (arr1[i] == arr2[j]){
//                 arr1.splice(i,1)
//                 arr2.splice(j,1)
//                 i--
//             }
//         }
//     }
//   console.log(arr1,arr2);
  
// }
// diffarr([1,2,3],[2,4,6])

// Output:
//[ 1, 3 ] [ 4, 6 ]
