// Array Methods:-
// splice (a,b,c):=

const userName = ['Mukund', 'Swati', 'Tanya','Mona','Neha','Aneema']
console.log(userName);

// It is use to perform Insertion, Deletion, Updation in an array
// 

// Insertion:=
userName.splice(2,0,'Nacy')
console.log(userName);
userName.splice(0,0,'Khushi')
console.log(userName);


// Deletion:=
 userName.splice(0,1);
 console.log(userName);
 userName.splice(0,2)
 console.log(userName);
//  It will return Array of deleted elements
console.log("============================================================================================================");
// userName.splice(1,1);
// console.log(userName);
// userName.splice(1,2);
// console.log(userName);
// userName.splice(1,3);
// console.log(userName);
// userName.splice(0,3)
// console.log(userName);
// userName.splice(0,4)
// console.log(userName);
// userName.splice(0,5)
// console.log(userName);
// userName.splice(0,6)
// console.log(userName);


// Updatiion:=

userName.splice(0,1,'Sejal')
console.log(userName);
userName.splice(1,1,'Harshita')
console.log(userName);
// It will modify Original Array

// WAJSP to update the array 30,40 ko 300,400
let arr = [10,20,30,40,50,60,70,80]
arr.splice(2,2,300,400);
console.log(arr);

// WAJSP to insert the elements 100,200,300  after 30
let arr1 = [10,20,30,40,50,60,70,80]
console.log(arr1);
arr1.splice(3,0,100,200,300)
console.log(arr1);


// slice(a,b):=

// It will retrn a new array of of an element
// It will not modify the original array
// It is use to copy an array

let arr2 = [10,20,1,2,3,4,5,30,40,50,];
console.log(arr2.slice(2,7));
console.log(arr2.slice(0,2));


