//===================================array methods==============================================
// let arr=[1,2,3,4,5]
// arr.pop();  
// console.log(arr);
// //Output
// [ 1, 2, 3, 4 ]


// let arr=[1,2,3,4,5]
// arr.push(6); //insert the number at end
// console.log(arr);

// let arr=[1,2,3,4,5]
// arr.shift();   // remove the number from first number
// console.log(arr);

// let arr=[1,2,3,4,5]
// arr.unshift(6);   // add the number from first
// console.log(arr);

// let arr=[1,2,3,4,5];
// arr.pop(); // add the number from first
// console.log(arr);

// let numbers=[10,20,67,89,45];
// let result = numbers.filter(num => num >10);
// console.log(result);

// let arr=[1,2,3,4,5]
// let doubled = numbers.map(num => num * 2);
// console.log(doubled);

// arr.pop(); // add the number from first
// console.log(arr);

// let numbers=[10,20,67,89,45];
// let result = numbers.filter(num => num >10);
// console.log(result);

// let arr=[1,2,3,4,5]
// let cp=arr.slice(1,3);   
// console.log(cp);

// let arr = ["apple","mango","cherry"]
// arr.sort()
// arr.reversed()
// console.log(arr);
// let arr=[1,2,3,4]
// arr.reverse()
// console.log(arr);

/*===============================================================================================*/



//3) Second largest number
// let arr = [54,23,11,17,10,54]
// let big=arr[0];
// for(i=0;i<arr.length;i++){
//      if(arr[i]>big){
//         big=arr[i]
//      }
// }
// //  console.log(big);
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
// let arr=[54,23,11,17,10]

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
// sortNum([2,4,1,5,12,45,0], "dec");

//5) Sum positive numbers and count negative numbers
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

// let a = [45,49]
// let b = []
// let count  = 1
// for (let i=0; i<a.length; i++){
//     if(count != a[i]){
//         b.push(count)
//         count++
//         i--
//     }
//     else{
//         count++
//     }
// }
// console.log(b)

//============================================

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