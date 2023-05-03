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

/***/ "./src/style/index.scss":
/*!******************************!*\
  !*** ./src/style/index.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://w4j1_bis/./src/style/index.scss?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style/index.scss */ \"./src/style/index.scss\");\n/* harmony import */ var _js_routes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/routes.js */ \"./src/js/routes.js\");\n\n\n\n\nconst callRoute = () => {\n    const { hash } = window.location;\n    const pathParts = hash.substring(1).split('/');\n  \n    const pageName = pathParts[0];\n    const pageArgument = pathParts[1] || '';\n    const pageFunction = _js_routes_js__WEBPACK_IMPORTED_MODULE_1__.routes[pageName];\n  \n    if (pageFunction !== undefined) {\n      pageFunction(pageArgument);\n    }\n  };\n  \n  window.addEventListener('hashchange', () => callRoute());\n  window.addEventListener('DOMContentLoaded', () => callRoute());\n\n\n\n//# sourceURL=webpack://w4j1_bis/./src/index.js?");

/***/ }),

/***/ "./src/js/apikey.js":
/*!**************************!*\
  !*** ./src/js/apikey.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst API_KEY = 'e2c7e941659d401f8cbd23cc8aa8f50d';\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (API_KEY);\n\n//# sourceURL=webpack://w4j1_bis/./src/js/apikey.js?");

/***/ }),

/***/ "./src/js/home.js":
/*!************************!*\
  !*** ./src/js/home.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Home\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var _pagelist__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pagelist */ \"./src/js/pagelist.js\");\n\nconst Home = (argument = '') => {\n  (0,_pagelist__WEBPACK_IMPORTED_MODULE_0__.PageList)()\n  };\n\n\n\n//# sourceURL=webpack://w4j1_bis/./src/js/home.js?");

/***/ }),

/***/ "./src/js/pagedetail.js":
/*!******************************!*\
  !*** ./src/js/pagedetail.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PageDetail\": () => (/* binding */ PageDetail)\n/* harmony export */ });\n/* harmony import */ var _apikey__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apikey */ \"./src/js/apikey.js\");\n\nconst PageDetail = (argument) => {\n  const preparePage = () => {\n    const cleanedArgument = argument.trim().replace(/\\s+/g, \"-\");\n\n    const displayGame = (gameData) => {\n      const { name, released, description, background_image } = gameData;\n      const articleDOM = document.querySelector(\".page-detail .article\");\n      articleDOM.querySelector(\"h1.title\").innerHTML = name;\n      articleDOM.querySelector(\"p.release-date span\").innerHTML = released;\n      articleDOM.querySelector(\"p.description\").innerHTML = description;\n\n      const cardListDOM = document.querySelector(\".page-detail .card-list\");\n        const cardDOM = `\n        <div class=\"card\">\n          <img src=\"${background_image}\" class=\"card-img-top card-img-top-custom\" alt=\"${name}\">\n          <div class=\"card-body\">\n            <h5 class=\"card-title\">${name}</h5>\n            <p class=\"card-text\">${description}</p>\n          </div>\n        </div>\n      `;\n\n      cardListDOM.insertAdjacentHTML(\"beforeend\", cardDOM);\n    };\n\n    const fetchGame = (url, argument) => {\n      fetch(`${url}/${argument}?key=${_apikey__WEBPACK_IMPORTED_MODULE_0__[\"default\"]}`)\n        .then((response) => response.json())\n        .then((responseData) => {\n          displayGame(responseData);\n        });\n    };\n\n    fetchGame('https://api.rawg.io/api/games', cleanedArgument);\n  };\n\n  const render = () => {\n    pageContent.innerHTML = `\n      <section class=\"page-detail\">\n        <div class=\"article\">\n          <h1 class=\"title\"></h1>\n          <p class=\"release-date\">Release date: <span></span></p>\n          <p class=\"description\"></p>\n        </div>\n        <div class=\"card-list\"></div>\n      </section>\n    `;\n\n    preparePage();\n  };\n\n  render();\n};\n\n\n//# sourceURL=webpack://w4j1_bis/./src/js/pagedetail.js?");

/***/ }),

/***/ "./src/js/pagelist.js":
/*!****************************!*\
  !*** ./src/js/pagelist.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PageList\": () => (/* binding */ PageList)\n/* harmony export */ });\n/* harmony import */ var _apikey__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apikey */ \"./src/js/apikey.js\");\n\n\nconst PageList = (argument = '') => {\n  const preparePage = () => {\n    const cleanedArgument = argument.trim().replace(/\\s+/g, '-');\n\n  // Créer un champ de recherche\n  const searchInput = document.createElement('input');\n  searchInput.id = 'search-input';\n  searchInput.type = 'text';\n  searchInput.placeholder = 'Rechercher un jeu...';\n\n  // Ajouter le champ de recherche à la page\n  const searchContainer = document.createElement('div');\n  searchContainer.classList.add('search-container');\n  searchContainer.appendChild(searchInput);\n  const pageListContainer = document.querySelector('.page-list .articles');\n  pageListContainer.before(searchContainer);\n\n  // Mettre à jour les résultats lors de la saisie utilisateur\n  searchInput.addEventListener('input', () => {\n    fetchList(`https://api.rawg.io/api/games`, cleanedArgument);\n  });\n\n    \n    const displayResults = (articles) => {\n      const resultsContent = articles.map((article) => (\n        `<article class=\"cardGame\">\n          <img src=\"${article.background_image}\" alt=\"${article.name}\" class=\"cardGame-img\">\n          <h1>${article.name}</h1>\n          <h2>${article.released}</h2>\n          <a href=\"#pagedetail/${article.id}\" class=\"button btn-primary\" style=\"background: primary;\">Voir plus</a>\n        </article>`\n      ));\n    \n      const resultsContainer = document.querySelector('.page-list .articles');\n      resultsContainer.innerHTML = `\n        <div class=\"results-container\">\n          ${resultsContent.join(\"\\n\")}\n        </div>\n      `;\n    };\n    \n    \n\n    const fetchList = (url, argument) => {\n      const searchInputValue = document.querySelector('#search-input').value;\n      const searchQueryParam = searchInputValue ? `&search=${searchInputValue}` : '';\n      const finalURL = `${url}?key=${_apikey__WEBPACK_IMPORTED_MODULE_0__[\"default\"]}${searchQueryParam}`;\n      fetch(finalURL)\n        .then((response) => response.json())\n        .then((responseData) => {\n          displayResults(responseData.results)\n        });\n    };    \n    fetchList(`https://api.rawg.io/api/games?key=${_apikey__WEBPACK_IMPORTED_MODULE_0__[\"default\"]}`, cleanedArgument);\n  };\n\n  const render = () => {\n    pageContent.innerHTML = `\n        <section class=\"page-list\">\n          <div class=\"articles\"></div>\n        </section>\n    `;\n\n    preparePage();\n  };\n\n  render();\n};\n\n\n//# sourceURL=webpack://w4j1_bis/./src/js/pagelist.js?");

/***/ }),

/***/ "./src/js/routes.js":
/*!**************************!*\
  !*** ./src/js/routes.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"routes\": () => (/* binding */ routes)\n/* harmony export */ });\n/* harmony import */ var _pagelist_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pagelist.js */ \"./src/js/pagelist.js\");\n/* harmony import */ var _pagedetail_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pagedetail.js */ \"./src/js/pagedetail.js\");\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.js */ \"./src/js/home.js\");\n\n\n\n\nconst routes = {\n  '': _home_js__WEBPACK_IMPORTED_MODULE_2__.Home,\n  'pagelist': _pagelist_js__WEBPACK_IMPORTED_MODULE_0__.PageList,\n  'pagedetail': _pagedetail_js__WEBPACK_IMPORTED_MODULE_1__.PageDetail,\n};\n\n\n\n//# sourceURL=webpack://w4j1_bis/./src/js/routes.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;