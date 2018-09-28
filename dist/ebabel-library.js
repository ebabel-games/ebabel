window["ebabel"] =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.preventXss = exports.Ido = exports.countArrayElements = exports.guid = exports.randomList = exports.randomNumber = undefined;

var _randomNumber = __webpack_require__(1);

var _randomList = __webpack_require__(2);

var _guid = __webpack_require__(3);

var _countArrayElements = __webpack_require__(4);

var _ido = __webpack_require__(5);

var _preventXss = __webpack_require__(6);

exports.randomNumber = _randomNumber.randomNumber;
exports.randomList = _randomList.randomList;
exports.guid = _guid.guid;
exports.countArrayElements = _countArrayElements.countArrayElements;
exports.Ido = _ido.Ido;
exports.preventXss = _preventXss.preventXss;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * `randomNumber`
 * Returns a random integer number from 1 to max or from min to max (min is non-inclusive).
 * @param {number} max - The maximum value that can be randomly returned. This value is included in the possible values.
 * @param {number?} min - The optional minimum value that can be randomly returned. This value is not included in the possible values, therefore to include 0, set min to -1. When min is not set, the minimum value will be 0, so 1 can be returned, which is the most common case in games.
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});
var randomNumber = function randomNumber(max) {
  var min = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  if (min > max) {
    throw new Error('min cannot be greater than max.');
  }

  var value = Math.random() * (max - min) + min;

  var toInt = function toInt() {
    return Math.ceil(value);
  };

  return {
    value: value,
    toInt: toInt
  };
};

exports.randomNumber = randomNumber;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * `randomList`
 * Returns the subset of a list of x elements from a larger source list.
 * @param {object} input - Object with 2 properties: source and max. The source property is the array from which a max number of elements will be randomly selected.
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});
var randomList = function randomList(input) {
  var source = input.source,
      max = input.max;


  if (!source || source.length === 0) {
    return {
      list: [],
      rest: []
    };
  }

  if (max === 0) {
    return {
      list: source,
      rest: []
    };
  }

  // Process the source.
  var rest = source.slice(0).map(function (item) {
    if (item instanceof Object) {
      return JSON.stringify(item);
    }
    return item;
  });

  // Start with an empty list that will be output.
  var list = [];

  for (var i = 0; i < max; i++) {
    // Pick a random element.
    var selection = rest[Math.floor(Math.random() * (rest.length - 1))];

    // Remove the random element from the source that will be output in the rest.
    rest.splice(rest.indexOf(selection), 1);

    // Add the random element to the list that will be output.
    list.push(selection);
  }

  // Output.
  return {
    list: list,
    rest: rest
  };
};

exports.randomList = randomList;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var s4 = function s4() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
};

/**
 * `guid`
 * Returns a globally unique id string following the standard guid format.
 */
var guid = function guid() {
  return '' + s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
};

exports.guid = guid;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * `countArrayElements`
 * Returns an object that counts how many times each element is present in a given array.
 * @param {array} input - Array where element occurences need to be counted.
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});
var countArrayElements = function countArrayElements(input) {
  if (!Array.isArray(input)) {
    throw new Error('Missing array, so it is not possible to count members of that array.');
  }

  var result = {};

  input.sort().reduce(function (acc, val) {
    return acc.set(val, 1 + (acc.get(val) || 0));
  }, new Map()).forEach(function (value, key) {
    result[key] = value;
  });

  return result;
};

exports.countArrayElements = countArrayElements;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Number of days since 10th July 2014 at 9:45am.

Object.defineProperty(exports, "__esModule", {
  value: true
});
var dateDifference = function dateDifference() {
  return Date.now() - new Date(Date.UTC(2014, 6, 10, 9, 45, 0));
};

/**
 * `Ido`
 * Returns a a string that commemorates how many days since Ido died.
 */
var Ido = function Ido() {
  return '\u2625 ' + Math.floor(dateDifference() / 36e5 / 24) + ' days.';
};

exports.Ido = Ido;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * `preventXss`
 * Processes an input string to prevent Cross Site Scripting injection attacks (XSS). Returns a safe version of that input.
 * @param {string} input - The user input string that needs to be sanitized, to remove the possibility of injecting script of other html tags.
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});
var preventXss = function preventXss(input) {
  return input.replace(/</g, '&lt;').replace(/>/g, '&gt;');
};

exports.preventXss = preventXss;

/***/ })
/******/ ]);
//# sourceMappingURL=ebabel.js.map