// Деструктуризація (Destructurization)

// Об'єктів

// const person = {
//     a: "John",
//     b: "Wick"
// };

// const { a: name1, b: lastName1, } = person;
// console.log("Destructuring", name1, lastName1);

// // АБО

// const { a, b, } = person;
// console.log("Destructuring", a, b);

// // ЕКВІВАЛЕНТНО

// const a1 = person.a; 
// const b1 = person.b;

// console.log("Not renamed", a1, b1);

// // АЛЕ НЕ ЕКВІВАЛЕНТНО

// const name11 = person.name1; // Undefined
// const lastName11 = person.lastName; // Undefined

// console.log("Renamed", name11, lastName11); // Renamed undefined undefined

// Масивів

// const arr = [1, 2, 3];

// const [one, two, three] = arr;

// // ЕКВІВАЛЕНТНО

// // const one = arr[0];
// // const two = arr[1];
// // const three = arr[2];

// console.log("Destructured: ", one, two, three);

// Всередині параметрів функції

// function destructure({ a: name1, b: lastName1, }) {
//     console.log("Destructuring", name1, lastName1);
// }

// // ЕКВІВАЛЕНТНО

// function destructure(obj) {
//     const { a: name1, b: lastName1, } = obj;
//     console.log("Destructuring", name1, lastName1);
// }

// // ЕКВІВАЛЕНТНО

// function destructure(obj) {
//     const name1 = obj.a;
//     const lastName1 = obj.b;

//     console.log("Destructuring", name1, lastName1);
// }

// Значення за замовчуванням (Default parameters)

// const obj = {
//     name: "Ivan",
//     city: "Kyiv",
// };

// const defParFunc = function({name, city, age = 30}) {
//     console.log(`Ім'я: ${name}. Місто: ${city}. Вік: ${age}`);
// };

// // obj не містить параметр age. Використано значення за замовчуванням = 30
// defParFunc(obj); // Ім'я: Ivan. Місто: Kyiv. Вік: 30

// Параметри Rest (Rest Parameters) (не REST/REST API)

// function restFunc(...args) {
//     console.log(args);
//     console.log(args.reduce((accumulator, value) => accumulator + value, 0));
// }

// // Array(3) [ 1, 3, 5 ]
// console.log("restFunc(1, 3, 5): ");
// restFunc(1, 3, 5); // 9
// // Array(5) [ 1, 3, 5, 7, 9 ]
// console.log("restFunc(1, 3, 5, 7, 9): ");
// restFunc(1, 3, 5, 7, 9); // 25
// // Array(13) [ 1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25 ]
// console.log("restFunc(1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25): ");
// restFunc(1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25); // 169

// Параметр розширення (Spread Operator)

// // Приклад на примітивах

// let intArr1 = [1, 2, 3];
// let intArr12 = [...intArr1, 4, 5];

// // До модифікації:
// console.group("До модифікації:");
// // Оригінальний масив intArr1: 
// // Array(3) [ 1, 2, 3 ]
// console.log("Оригінальний масив intArr1:", intArr1); 
// // Розширений масив intArr12: 
// // Array(5) [ 1, 2, 3, 4, 5 ]
// console.log("Розширений масив intArr12:", intArr12);
// console.groupEnd();

// // Змінення значення розширеного масиву

// // При модифікації примітивів в поверхневій копії оригінальний
// // об'єкт (або масив) не буде змінений
// intArr12[0] = 6;
// intArr12[1] = 7;
// intArr12[2] = 5;

// // Після модифікації:
// console.group("Після модифікації:");
// // Оригінальний масив intArr1: 
// // Array(3) [ 1, 2, 3 ]
// console.log("Оригінальний масив intArr1:", intArr1); 
// // Розширений масив intArr12: 
// // Array(5) [ 6, 7, 5, 4, 5 ]
// console.log("Розширений масив intArr12:", intArr12);
// console.groupEnd();

// Приклад на об'єктах

// let objArr = [{a: 5, b: 6, c: 7}, { name: "John", surname: "Smith"}];
// let objArr2 = [...objArr, { amount: 500, price: 20}];

// console.group("До модифікації:");
// console.log(objArr);
// console.log(objArr2);
// console.groupEnd();

// objArr2[0].a = 4;

// console.group("Після модифікації:");
// console.log(objArr);
// console.log(objArr2);
// console.groupEnd();

// // Приклад з використанням примітивів ТА об'єктів

// let obj = {
//     subObj: {
//         name: "Ivan",
//         age: 30,
//     },
//     city: "Kyiv",
// };

// let obj2 = {
//     ...obj,
// };

// // До модифікації (obj та obj2):
// console.group("До модифікації (obj та obj2):");
// // obj 
// // Object { subObj: {…}, city: "Kyiv" }
// // city: "Kyiv"
// // subObj: Object { name: "Ivan", age: 30 }
// // age: 30
// // name: "Ivan"
// console.log("obj", obj);
// // obj2 
// // Object { subObj: {…}, city: "Kyiv" }
// // city: "Kyiv"
// // subObj: Object { name: "Ivan", age: 30 }
// // age: 30
// // name: "Ivan"
// console.log("obj2", obj2);
// console.groupEnd();

// obj2.subObj.name = "Nazar";
// obj2.subObj.age = 19;
// obj2.city = "Odessa";

// // Після модифікації (obj та obj2):
// console.group("Після модифікації (obj та obj2):");
// // obj 
// // Object { subObj: {…}, city: "Kyiv" }
// // city: "Kyiv"
// // subObj: Object { name: "Nazar", age: 19 }
// // age: 19
// // name: "Nazar"
// console.log("obj", obj);
// // obj2 
// // Object { subObj: {…}, city: "Odessa" }
// // city: "Odessa"
// // subObj: Object { name: "Nazar", age: 19 }
// // age: 19
// // name: "Nazar"
// console.log("obj2", obj2);
// console.groupEnd();



// // Спроба модифікації поверхневої копії константної змінної
// console.log("=========================");

// const obj1 = {
//     subObj: {
//         name: "Anya",
//         age: 35,
//     },
//     city: "Lviv",
// };

// let obj12 = {
//     ...obj1,
// }

// // До модифікації (const obj1 та obj12):
// console.group("До модифікації (const obj1 та obj12):");
// // obj 
// // Object { subObj: {…}, city: "Lviv" }
// // city: "Lviv"
// // subObj: Object { name: "Anya", age: 35 }
// // age: 35
// // name: "Anya"
// console.log("obj", obj1);
// // obj2 
// // Object { subObj: {…}, city: "Lviv" }
// // city: "Lviv"
// // subObj: Object { name: "Anya", age: 35 }
// // age: 35
// // name: "Anya"
// console.log("obj2", obj12);
// console.groupEnd();

// obj12.subObj.name = "Lesya";
// obj12.subObj.age = 21;
// obj12.city = "Lutsk";

// // Після модифікації (const obj1 та obj12):
// console.group("Після модифікації (const obj1 та obj12):");
// // obj 
// // Object { subObj: {…}, city: "Lviv" }
// // city: "Lviv"
// // subObj: Object { name: "Lesya", age: 21 }
// // age: 21
// // name: "Lesya"
// console.log("obj", obj1);
// // obj2 
// // Object { subObj: {…}, city: "Lutsk" }
// // city: "Lutsk"
// // subObj: Object { name: "Lesya", age: 21 }
// // age: 21
// // name: "Lesya"
// console.log("obj2", obj12);
// console.groupEnd();

// Цикл for ... of (for ... of Loop)

// Ітерування ітерованого об'єкту

// const arr = [1, 2, 3, 4];

// for(const arrObj of arr) {
//     //Object # 1
//     //Object # 2
//     //Object # 3
//     //Object # 4
//     console.log("Object #", arrObj);
// };

// // Ітерування звичайного (key-value) об'єкту (не ітерованого)

// const person = {
//     a: "John",
//     b: "Wick"
// };

// // ВИДАСТЬ ПОМИЛКУ
// // for(const arrObj of person) {
// //     // Uncaught TypeError: person is not iterable
// //     // Необроблена помилка типу (TypeError): person не є ітерованим об'єктом
// //     console.log(person);
// // }

// // Object.entries() довзолить ітерувати через звичайний key-value об'єкт
// for(const arrObj of Object.entries(person)) {
//     // Array [ "a", "John" ]
//     // Array [ "b", "Wick" ]
//     console.log(arrObj);
// }

// Symbol (або ж унікальний ключ)

// const obj = {};

// let symbol = Symbol("Key");
// // symbol - не літерал, а змінна. "[]" дозволяє використовувати значення
// // змінної як назву ключа (насправді ключі це змінні, які посилаються на
// // певне значення ключа).
// obj[symbol] = "value";

// symbol = Symbol("Key");
// obj[symbol] = "value 2";

// symbol = Symbol("Key");
// obj[symbol] = "value 3";

// symbol = Symbol("Key");
// obj[symbol] = "value 4";

// // Object {
// //     Symbol("Key"): "value",
// //     Symbol("Key"): "value 2",
// //     Symbol("Key"): "value 3",
// //     Symbol("Key"): "value 4"
// // }
// console.log(obj);

// Map та Set

// Map

// const myMap = new Map();

// myMap.set("key", "value");

// // Map:  value
// console.log("Map:", myMap.get("key"));

// // Set

// const objectEntries = Object.entries({ name: "John", age: 30 });

// const mySet = new Set(
//     [objectEntries,
//     1, 2, 3]
// );

// mySet.add(2, 7, 8); // Не спрацює
// mySet.add([2, 3, 4, 5]); // Масив буде доданий як окремий елемент

// // Set(5) [
// //     // Об'єкт переданий як масив масивів
// //     Array [
// //         Array [ "name", "John" ],
// //         Array [ "age", 30 ], 
// //     ],
// //     1, 2, 3, 
// //     Array(4) [ 2, 3, 4, 5 ]
// // ]
// console.log("Set:", mySet);

// const mySet2 = new Set(
//     [...objectEntries,
//     1, 2, 3]
// );

// // Set(5) [
// //     // Тут вже вміст масиву було
// //     // скопійовано в Set за
// //     // допомогою оператора
// //     // розширення    
// //     Array [ "name", "John" ],
// //     Array [ "age", 30 ],
// //     1, 2, 3
// // ]
// console.log("Set 2:", mySet2);

// Promises

// const myPromise = new Promise((resolve, reject) => {
//     // Затримає виконання коду на 2 секунди
//     setTimeout(() => resolve("Promise completed!"), 2000);
// });

// myPromise.then((result) => console.log("Result of a promise:", result));

// ES7

// Array.includes()

// const arr = [1, 3, 5, {name: "Victor"}];

// console.log(arr.includes(3)); // true
// console.log(arr.includes({name: "Victor"})); // false

// Async/Await

// async function myAsyncFunction() {
//      const myPromise = new Promise((resolve, reject) => {
//           setTimeout(() => resolve("Server responed"), 5000);
//      });

//      const result = await myPromise;
//      console.log("Async/Await", result);
// }

// myAsyncFunction();

// console.log(globalThis);

