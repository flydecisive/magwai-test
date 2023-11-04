/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/***/ (() => {

eval("const burgerElems = document.querySelectorAll(\".burger\");\r\n\r\nif (burgerElems) {\r\n  burgerElems.forEach((elem) =>\r\n    elem.addEventListener(\"click\", (e) => {\r\n      handleEvent(e);\r\n    })\r\n  );\r\n}\r\n\r\nfunction handleEvent(e) {\r\n  const target = e.target.parentElement;\r\n\r\n  if (target.classList.contains(\"burger-mobile\")) {\r\n    const mobileNavElement = document.querySelector(\".nav-mobile\");\r\n    if (mobileNavElement.classList.contains(\"hidden\")) {\r\n      mobileNavElement.classList.remove(\"hidden\");\r\n    } else {\r\n      mobileNavElement.classList.add(\"hidden\");\r\n    }\r\n  }\r\n\r\n  if (target.classList.contains(\"burger-tablet\")) {\r\n    const tabletNavElement = document.querySelector(\".nav-tablet\");\r\n    if (tabletNavElement.classList.contains(\"hidden\")) {\r\n      tabletNavElement.classList.remove(\"hidden\");\r\n    } else {\r\n      tabletNavElement.classList.add(\"hidden\");\r\n    }\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://magwai-test/./main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./main.js"]();
/******/ 	
/******/ })()
;