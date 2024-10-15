// Singleton 

// const tinderUser = new Object();
const tinderUser = {};
tinderUser.Id = '12345'
tinderUser.Name = 'Mukund Madhav';
tinderUser.City = 'Begusarai'

// console.log(tinderUser);
// console.log(tinderUser.City);


const regularUser = {
    email : 'mukundmadhav@gmail.com',
    fullName : {
        userFullName : {
            firstName : 'Mukund',
            lastName : 'MAdhav'
        }
    }
}
// console.log(regularUser);
// console.log(regularUser.fullName);
// console.log(regularUser.fullName.userFullName);
// console.log(regularUser.fullName.userFullName.firstName);
// console.log(regularUser.fullName.userFullName.lastName );


const obj1 = {1:'a', 2:'b', 3:'c'};
const obj2 = {4:"d", 5:'e', 6:'f'}

// const obj3 = {obj1,obj2};
// const obj3 = Object.assign({},obj1,obj2)
const obj3 = {...obj1,...obj2}
// console.log(obj3);

const user = [
    {
        id : 1,
        email : "m@gmail.com"
    },
    {
        id : 2,
        email : "p@gmail.com"
    },
    {
        id : 3,
        email : "r@gmail.com"
    },
    {
        id : 4,
        email : "g@gmail.com"
    }
]
// console.log(user[1].id);
// console.log(user[1].email);

console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.propertyIsEnumerable());  //false
console.log(tinderUser.propertyIsEnumerable('Id'));  //true

console.log(tinderUser.hasOwnProperty()); //false

console.log(tinderUser.hasOwnProperty('email'));   //flse

console.log(tinderUser.hasOwnProperty('Name'));    //true







