/* -------------------------------------- */
// Generics
// code can be used with different types
const addUID = <T extends object>(obj: T) => { //if just T, you can pass string; if you want to limit object, extends object
    // or you can do <T extends {name: string}>(obj:T) to even restrict it more
    let uid = Math.floor(Math.random() * 100);
    return {...obj, uid}; //return a new object with a random new uid
};
let docOne = addUID({ name: 'a', age: 40 });
console.log(docOne.name); 
// without T docOne.name or docOne.age gives error because TS doens't know what the returned object is

//Generics with interfaces
//Enums
enum ResourceType { BOOK, AUTHOR, FILM, DIRECTOR, PERSON }

interface Resource<T> {
    uid: number;
    resourceType: ResourceType;
    data: T; //data will be whatever we specify when we implement a Resource
}
//examples
const docThree: Resource<string> = {
    uid: 1,
    resourceType: ResourceType.BOOK,
    data: 'abc'
}

const docFour: Resource<object> = {
    uid: 1,
    resourceType: ResourceType.PERSON,
    data: {name: 'a'}
}

const docFive: Resource<string[]> = {
    uid: 1,
    resourceType: ResourceType.FILM,
    data: ['a', 'b']
}

console.log(docThree, docFour, docFive); //it gives the index associated with the enum


/* -------------------------------------- */
// Tuples
// like arrays; position of each item is fixed once initialized
//normal arrays
let array = ['a', 1, true];
array[0] = false;
//tuples
let tup: [string, number, boolean];
tup = ['a', 2, true];
tup[0] = 'b'; //can't change the type because it's fixed in the tup variable
// use case
let student: [string, number];
student = ['cc', 123]; //each student has name and id
