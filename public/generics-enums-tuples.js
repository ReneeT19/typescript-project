"use strict";
/* -------------------------------------- */
// Generics
// code can be used with different types
const addUID = (obj) => {
    // or you can do <T extends {name: string}>(obj:T) to even restrict it more
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid }); //return a new object with a random new uid
};
let docOne = addUID({ name: 'a', age: 40 });
console.log(docOne.name);
// without T docOne.name or docOne.age gives error because TS doens't know what the returned object is
//Generics with interfaces
//Enums
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["BOOK"] = 0] = "BOOK";
    ResourceType[ResourceType["AUTHOR"] = 1] = "AUTHOR";
    ResourceType[ResourceType["FILM"] = 2] = "FILM";
    ResourceType[ResourceType["DIRECTOR"] = 3] = "DIRECTOR";
    ResourceType[ResourceType["PERSON"] = 4] = "PERSON";
})(ResourceType || (ResourceType = {}));
//examples
const docThree = {
    uid: 1,
    resourceType: ResourceType.BOOK,
    data: 'abc'
};
const docFour = {
    uid: 1,
    resourceType: ResourceType.PERSON,
    data: { name: 'a' }
};
const docFive = {
    uid: 1,
    resourceType: ResourceType.FILM,
    data: ['a', 'b']
};
console.log(docThree, docFour, docFive); //it gives the index associated with the enum
/* -------------------------------------- */
// Tuples
// like arrays; position of each item is fixed once initialized
//normal arrays
let array = ['a', 1, true];
array[0] = false;
//tuples
let tup;
tup = ['a', 2, true];
tup[0] = 'b'; //can't change the type because it's fixed in the tup variable
// use case
let student;
student = ['cc', 123]; //each student has name and id
