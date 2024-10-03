// Important methods of Aarray
const marvel_Heros = ['IronMan','SpiderMan','Thor'];
const dc_Heros = ['Batman','SoperMan','flash']
// marvel_Heros.push(dc_Heros);
// console.log(marvel_Heros);
// console.log(marvel_Heros[3][0]);

// let super_Heros =  marvel_Heros.concat(dc_Heros);
// console.log(super_Heros);

// spread operator:=
// const allSuperHeros = [...marvel_Heros,...dc_Heros];
// const superHeros = [...dc_Heros,...marvel_Heros]
// console.log(allSuperHeros);
// console.log(superHeros);


// flat():=
const another_Array = [1,2,3,[4,5,6],[7,[8,9],10]]
let realAnotherArray = another_Array.flat(Infinity);
console.log(realAnotherArray);


// isArray():=
console.log(Array.isArray("Mukund"));

// from():=
console.log(Array.from("Mukund Madhav"));
console.log(Array.from({name : "Mukund Madhav"}));  //Interesting return [] empty array

// of():=
let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1,score2,score3));
