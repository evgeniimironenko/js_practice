'use strict';


// function showThis (a, b) { //Function Declaration
//     console.log();
//     function sum () {
//         console.log();
//         return a + b;
//     }
//     console.log(sum());
// }
//
// showThis(4, 5);
//
//
// const obj = {
//     a: 20,
//     b: 15,
//     sum () {
//         console.log(this);
//     }
// }
//
// obj.sum()
//

// const user = {
//   name: 'John',
// };
// function sayName (surname) {
//     console.log(this);
//     console.log(this.name + surname);
// }
//
// sayName.call(user, 'Smith', 'Faker', 'Pidor');
// sayName.apply(user, ['Smith', 'Faker', 'Pidor']);
//
// function count (num) {
//     return this * num;
// }
//
// const double = count.bind(3)
// console.log(double(3));
// console.log(double(13));


//1) Function Declaration - this = window, але в strict mode this = undefined;
//2) Метод всередині об'єкта - це сам об'єкт
//3) this в Конструкторах і класах = це новий екземпляр об'єкта
//4) Call, apply, bind - ручна прив'язка this



