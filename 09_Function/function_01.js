function myName(){
    console.log("M");
    console.log("U");
    console.log("K");
    console.log("U");
    console.log("N");
    console.log("D");
}
myName();

function addTwoNumbers(number1,number2){
    console.log(number1 + number2);
    
}
addTwoNumbers()  // Nan
addTwoNumbers(5,4)  // o/p = 9
addTwoNumbers(5,"4")   // o/p = 54
addTwoNumbers(4,"a")   // o/p = 4a
addTwoNumbers(4+null)   // o/p = 4


function addThreeNumbers(number1,number2,number3){
    console.log(number1 + number2 + number3);

    let result = number1 + number2 + number3
    return result;

    return number1 + number2 + number3;

}
const result = addThreeNumbers(5 , 5 , 5);
console.log("result= ", result);



function userLoginMassage(userName = "Jarvis"){
    if(userName === undefined){
          console.log("Please enter a user name");
          return;
    }

    if(!userName){
        console.log("Please enter a user name");
        return;
    }

    return `${userName} is login`;

}
console.log(userLoginMassage("Mukund Madhav"));    // Mukund Madhav is login
console.log(userLoginMassage(""));             // is login
console.log(userLoginMassage());         // undefined

