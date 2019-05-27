'use strict';

var _utils = require('./utils.js');

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log('app.js is running '); // import './utils.js'

console.log((0, _utils.square)(7));
console.log((0, _utils.add)(7, 7));
console.log((0, _utils2.default)(700, 7));

// import { isAdult, canDrink } from './person.js';

// console.log(isAdult(25));
// console.log(canDrink(25));
