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

eval("const imagesSrc = {\r\n  0: \"./img/cards/1.png\",\r\n  1: \"./img/cards/2.png\",\r\n  2: \"./img/cards/3.png\",\r\n  3: \"./img/cards/4.png\",\r\n  4: \"./img/cards/5.png\",\r\n};\r\n\r\ngetPosts();\r\n\r\nconst burgerElems = document.querySelectorAll(\".burger\");\r\nconst cardsContainer = document.querySelector(\".content__cards\");\r\nconst contentButton = document.querySelector(\".content__button\");\r\n\r\nif (burgerElems) {\r\n  burgerElems.forEach((elem) =>\r\n    elem.addEventListener(\"click\", (e) => {\r\n      handleBurgerClick(e);\r\n    })\r\n  );\r\n}\r\n\r\nfunction handleBurgerClick(e) {\r\n  const target = e.target.parentElement;\r\n\r\n  if (target.classList.contains(\"burger-mobile\")) {\r\n    const mobileNavElement = document.querySelector(\".nav-mobile\");\r\n    if (mobileNavElement.classList.contains(\"hidden\")) {\r\n      mobileNavElement.classList.remove(\"hidden\");\r\n    } else {\r\n      mobileNavElement.classList.add(\"hidden\");\r\n    }\r\n  }\r\n\r\n  if (target.classList.contains(\"burger-tablet\")) {\r\n    const tabletNavElement = document.querySelector(\".nav-tablet\");\r\n    if (tabletNavElement.classList.contains(\"hidden\")) {\r\n      tabletNavElement.classList.remove(\"hidden\");\r\n    } else {\r\n      tabletNavElement.classList.add(\"hidden\");\r\n    }\r\n  }\r\n}\r\n\r\nfunction getPosts() {\r\n  fetch(\"https://jsonplaceholder.typicode.com/posts\", {\r\n    method: \"GET\",\r\n  })\r\n    .then((response) => {\r\n      if (!response.ok) {\r\n        throw new Error(\"Ошибка загрузки постов\");\r\n      }\r\n      return response.json();\r\n    })\r\n    .catch((error) => {\r\n      console.log(error.message);\r\n    })\r\n    .then((responseData) => {\r\n      renderCards(responseData);\r\n\r\n      contentButton.addEventListener(\"click\", () => {\r\n        renderCards(responseData);\r\n      });\r\n    });\r\n}\r\n\r\nfunction renderCards(cardsData) {\r\n  const maxCount = 30;\r\n  const cardsCount = cardsContainer.childElementCount;\r\n  if (cardsCount < maxCount) {\r\n    let counter = cardsCount + 5;\r\n    const cards = [];\r\n    for (let i = 0; i < counter; i++) {\r\n      let randomImgIndex = Math.floor(Math.random() * 5);\r\n      cards.push(\r\n        `<div class=\"content__card card\">\r\n            <img class=\"card__img\" src=\"${imagesSrc[randomImgIndex]}\" alt=\"\">\r\n            <div class=\"card__content\">\r\n                <h3 class=\"card__heading\">${cardsData[i].title}</h2>\r\n                <h4 class=\"card__subheading\">How to increase your productivity with a Music</h4>\r\n                <p class=\"card__text\">\r\n                    ${cardsData[i].body}\r\n                </p>\r\n                <p class=\"card__posted_data\">Posted by <span class=\"card__posted_data-bold\">Eugenia</span>, on July  24, 2019</p>\r\n                <div class=\"card__button\">Continue reading</div>\r\n            </div>\r\n        </div>`\r\n      );\r\n    }\r\n\r\n    cardsContainer.innerHTML = cards.join(\"\");\r\n  } else {\r\n    contentButton.classList.add(\"hidden\");\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://magwai-test/./main.js?");

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