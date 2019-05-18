'use strict';

//Arguments Object
// const firstAdd = function (a, b) {
//     console.log(arguments)
//     return a + b;
// };
// console.log(firstAdd(55, 1, 1001));

//Arguments Object -  no longer bound with arrow function
var secondAdd = function secondAdd(a, b) {
    //console.log(arguments)
    return a + b;
};
console.log(secondAdd(55, 1));

// this keyword - no longer bound 
// const user = {
//     name: 'Matheus',
//     cities: ['New York', 'Philadelphia', 'Dallas', 'Dublin'],
//     printPlacesLived() {
//         this.cities.forEach((city) => {
//             console.log(this.name + ' Has lived in ' + city)
//         })
//     }
// };

//map method
// const user = {
//     name: 'Matheus',
//     cities: ['New York', 'Philadelphia', 'Dallas', 'Dublin'],
//     printPlacesLived() {
//         return this.cities.map((city) => {
//             return this.name + ' has lived in ' + city + '!';
//         });
//     }
// };
var user = {
    name: 'Matheus',
    cities: ['New York', 'Philadelphia', 'Dallas', 'Dublin'],
    printPlacesLived: function printPlacesLived() {
        var _this = this;

        return this.cities.map(function (city) {
            return _this.name + ' has lived in ' + city + '!';
        });
    }
};
console.log(user.printPlacesLived());

var multiplier = {
    numbers: [10, 20, 30],
    multiplyBy: 3,
    multiply: function multiply() {
        var _this2 = this;

        return this.numbers.map(function (number) {
            return number * _this2.multiplyBy;
        });
    }

    //numbers - array of numbers
    //multiplieBY - single number
    //multiply - return a new array where the numbers have been multipĺied

};

console.log(multiplier.multiply());
