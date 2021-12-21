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

/***/ "./static/dev/main.scss":
/*!******************************!*\
  !*** ./static/dev/main.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://mayhem.lespressesdurl.net/./static/dev/main.scss?");

/***/ }),

/***/ "./static/dev/index.js":
/*!*****************************!*\
  !*** ./static/dev/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.scss */ \"./static/dev/main.scss\");\n\n\nclass imageRatio extends Paged.Handler {\n\n  constructor(chunker, polisher, caller) {\n    super(chunker, polisher, caller)\n  }\n\n  afterParsed(parsed) {\n    // create an array that will store the images data later on\n    let imagePromises = [];\n    // find all images parsed by paged.js\n    let images = parsed.querySelectorAll('img')\n    // for each image\n    images.forEach(image => {\n      // load the image as an object\n      let img = new Image ()\n      // console.log(img)\n      // test if the image is loaded\n      let resolve, reject\n      let imageLoaded = new Promise( function (r, x) {\n        resolve = r\n        reject = x\n      })\n      // when the image loads\n      img.onload = function () {\n        // page in px \n        const pageH = 600\n\n        // find its height\n        const imH = img.height\n\n        // find its width\n        const imW = img.width\n        console.log('height', imH, 'width', imW)\n\n\n        if (imH < 600) {\n          image.parentNode.parentNode.classList.add('imageA')\n          // calculate the marges\n          const marginImage = (pageH - imH)/2\n          console.log(marginImage)\n          if (marginImage > 0) {\n            // applique to the image except if its negative\n            image.style.marginTop = marginImage + 'px'\n          }\n\n        } else if (imH > 1000 ) {\n          image.parentNode.parentNode.classList.add('imageC')\n        } else {\n          image.parentNode.parentNode.classList.add('imageB')\n\n        }\n\n      \n\n        // resolve the promise\n        resolve()\n      }\n      // if there is an error, reject the promise\n      img.onerror = function () {\n        reject()\n      }\n\n      img.src = image.src\n\n      imagePromises.push(imageLoaded)\n    })\n\n    return Promise.all(imagePromises).catch(err => {\n      console.warn(err)\n    })\n  }\n}\n\n// and we register the handler\n\nPaged.registerHandlers(imageRatio)\n\n\n//# sourceURL=webpack://mayhem.lespressesdurl.net/./static/dev/index.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./static/dev/index.js");
/******/ 	
/******/ })()
;