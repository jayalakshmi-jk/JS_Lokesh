//1) count alphabetics and numbers
// let str = "Dckap123";
// let alpha = 0;
// let num = 0;
// for(i=0;i<str.length;i++){
//     if(str[i]>="A" && str[i]<="Z"){
//         alpha++
//     }else if(str[i]>="a" && str[i]<="z"){
//         alpha++
//     }else if(str[i]>="0" && str[i]<="9"){
//         num++
//     }
// }
// console.log(alpha);
// console.log(num);

//output
// 5
// 3


//2) sum of elements
// let arr = [1,2,3,4,5,true]
// let sum=0
// for(i=0;i<arr.length;i++){
//     if(typeof arr[i]=="number")
//    sum=sum+arr[i]
// }
// console.log(`sum of elements:${sum}`);

//output
// sum of elements:15


//3) Second largest number
// let arr = [54,23,11,17,10,54]
// let big=arr[0];
// for(i=0;i<arr.length;i++){
//      if(arr[i]>big){
//         big=arr[i]
//      }
// }
// //  console.log(big); //find the bigest num first
// let secArr=[]
// for(i=0;i<arr.length;i++){
//      if(arr[i]!=big){
//         secArr.push(arr[i])
//      }
// }
// // console.log(secArr); 

// let secBig=secArr[0]
// for(i=0;i<arr.length;i++){
//      if(secArr[i]>secBig){
//         secBig=secArr[i]
//      }
// }
// console.log(big);
// console.log(secArr);
// console.log(secBig);

//Output:
// 54
// [ 23, 11, 17, 10 ]
// 23



//4) Ascending and Decending
// function sortNum(arr, type) {
//   if (type == "asc") {
//     for (i = 0; i < arr.length; i++) {
//       for (j = i+1; j < arr.length; j++) {
//         if (arr[i] > arr[j]) {
//           let ac = arr[i]
//           arr[i] = arr[j]
//           arr[j] = ac
//         }
//       }
//     }
//   }

//   if (type == "dec") {
//     for (i = 0; i < arr.length; i++) {
//       for (j = i+1; j < arr.length; j++) {
//         if (arr[i] < arr[j]) {
//           let dc = arr[i]
//           arr[i] = arr[j]
//           arr[j] = dc
//         }
//       }
//     }
//   }
// //   return arr
//   console.log(arr);
// }
// sortNum([2,4,3,7,1], "dec");


// 5) Sum positive numbers and count negative numbers
// let arr = [1,2,-3,5,-7,-1,3]
// sum=0
// count=0
// for(i=0;i<arr.length;i++){
//     if(0<arr[i]){
//        sum=sum+arr[i]
//     }else if(0>arr[i]){
//         count=count+1
//     }
// }
// console.log(`sum=${sum}`);
// console.log(`count=${count}`);

//Output
// sum=11
// count=3


//6) find the missing number
// let arr = [1,2,4,6,8,16,20]
// let missingNum = []
// let obj = {}
// let newArr = []

// for(i=arr[0];i<=arr[arr.length-1];i++){
//     newArr[newArr.length]=i
// }
// // console.log(b);

// for(i=0;i<arr.length;i++){
//     if(!obj[arr[i]]){
//         obj[arr[i]]=true
//     }
// }
// // console.log(seen);
// for(i=0;i<newArr.length;i++){
//     if(!obj[newArr[i]]){
//         missingNum[missingNum.length]=newArr[i]
//     }
// }
// console.log(missingNum);
