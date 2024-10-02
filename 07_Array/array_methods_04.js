// Array methods:=
const myNum = [1,2,3,4,5,6,7,8,9];
console.log(myNum);
// indexOf():=
// It will check the index of Array element
// myNum.indexOf(4);
// If Array element is available it returns the index of elements.
// 
console.log(myNum.indexOf(5));
console.log(myNum.indexOf(8));
console.log(myNum.indexOf(23));
// If element is not available, It will return (-1)


//includes(a,b) methods:=

// It is used to check an element is present inside an array or not
// If elemnt is available, It will return [TRUE]
// If element is not available, It will return [FALSE] 
let array = [100,200,300,400,500,'Mohan','Ghanshyam'];
console.log(array.includes(200));
console.log(array.includes(500));
console.log(array.includes(4000));
console.log(array.includes('Mohan'));
console.log(array.includes('Swati'));
