// Singleton 
// object.create


// litiral object

const mySym = Symbol("key-1")
const mySelf={
    name:"Mukund",
    "full name" : "Mukund Madhav",
    [mySym] :' mykey-1',
    age : 23,
    Location : "Bihar",
    Pin_no : 851127,
    email : 'mukundmadhav123@gmail.com'
}

// console.log(mySelf.name);
// console.log(mySelf ['name']);
// console.log(mySelf.email);
// console.log(mySelf ['email']);
// console.log(mySelf["full name"]);
// console.log(mySelf[mySym]);
// console.log(typeof mySelf[mySym]);


mySelf.email = 'mukundmadhav12345@gmail.com'
// console.log(mySelf);
// Object.freeze(mySelf);
mySelf.email = 'madhav123@gmil.com'
// console.log(mySelf);

mySelf.greeting = function(){
    console.log("Hello JS Developer");
}
console.log(mySelf.greeting());

mySelf.greetingTwo = function(){
    console.log(`Hello JS Developer ${this.name}`);
    
}
console.log(mySelf.greetingTwo());

