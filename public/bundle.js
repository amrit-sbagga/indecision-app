/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ \"./src/utils.js\");\n\r\n//import { } from './utils.js'\r\n\r\nconsole.log('app js is running!!!');\r\n\r\nconsole.log((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.square)(5));\r\nconsole.log((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.add)(5, 6));\r\nconsole.log((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.subtract)(5, 6));\r\nconsole.log((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.isAdult)(12));\r\nconsole.log((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.canDrink)(32));\n\n//# sourceURL=webpack://indecision-app/./src/app.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"subtract\": () => (/* binding */ subtract),\n/* harmony export */   \"isAdult\": () => (/* binding */ isAdult),\n/* harmony export */   \"canDrink\": () => (/* binding */ canDrink),\n/* harmony export */   \"square\": () => (/* binding */ square),\n/* harmony export */   \"add\": () => (/* binding */ add)\n/* harmony export */ });\nconsole.log('utils.js is running!!');\r\n\r\nconst square = (x) => x*x;\r\n\r\nconst add = (a, b) => a + b;\r\n\r\nconst subtract = (a, b) => a-b;\r\n\r\nconst isAdult = (age) => age >= 18\r\n//{\r\n//     if(age > 18) return true;\r\n//     return false;\r\n// }\r\n\r\nconst canDrink = (age) => age >= 21 \r\n// {\r\n//     if(age > 21) return true;\r\n//     return false;\r\n// }\r\n\r\n\r\n\r\n//export - 2 types\r\n//default export\r\n//named export\n\n//# sourceURL=webpack://indecision-app/./src/utils.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/app.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;