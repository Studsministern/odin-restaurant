"use strict";
(self["webpackChunkodin_restaurant"] = self["webpackChunkodin_restaurant"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! img/nik-owens-40OJLYVWeeM-unsplash.jpg */ "./src/img/nik-owens-40OJLYVWeeM-unsplash.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;500;600;700;800&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --color-main: rgb(230, 230, 230);\n    \n    --bg-color-main: #3e3e3eae;\n    --bg-color-red: #ce2b37d0;\n    --bg-color-green: #009246d0;\n\n    --font-color-main: black;\n\n    --fs-huge: 2.6rem;\n    --fs-large: 1.5rem;\n    --fs-medium: 1.1rem;\n    --fs-small: .8rem;\n    --fs-tiny: .6rem;\n\n    --dist-medium: 1rem;\n    --dist-button: calc(var(--fs-large) * 0.3);\n}\n\n* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n    font-size: inherit;\n    font-family: inherit;\n    font-weight: inherit;\n    color: inherit;\n}\n\nbody {\n    min-height: 100vh;\n    font-size: 16px;\n    font-family: 'EB Garamond', serif;\n    display: grid;\n    grid: \"header header  header\" min-content\n          \".      content .\"      auto\n          \"footer footer  footer\" min-content\n          / auto  60%     auto;\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-repeat: no-repeat; \n    background-position: center; \n    background-attachment: fixed;\n    background-size: cover;\n    overflow-y: scroll;\n}\n\n\n\n/* Header */\n\nheader {\n    grid-area: header;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding: var(--dist-medium) 0;\n    gap: var(--dist-medium);\n    font-weight: 800;\n    color: var(--color-main);\n    background: var(--bg-color-green);\n}\n\nheader h1 {\n    font-size: var(--fs-huge);\n}\n\nheader .tabs {\n    display: flex;\n    justify-content: center;\n    gap: var(--dist-medium);\n}\n\nheader .tabs button {\n    width: minmax(25vw, 200px);\n    border: none;\n    font-size: var(--fs-large);\n    padding: var(--dist-button) calc(var(--dist-button) * 2);\n    background: inherit;\n    cursor: pointer;\n}\n\n\n\n/* Tab hover effects */\nheader .tabs button {\n    transition: all .5s ease-in-out;\n    position: relative;\n}\n\nheader .tabs button:hover {\n    transform: translateY(calc(-0.4 * var(--dist-button)));\n}\n\nheader .tabs button::after { /* Line effect */\n    position: absolute;\n    content: \"\";\n    width: calc(100% - 4 * var(--dist-button));\n    height: 2px;\n    bottom: var(--dist-button);\n    left: calc(2 * var(--dist-button));\n    background: var(--color-main);\n    transition: transform 0.5s;\n    transform: scaleX(0);\n    transform-origin: right;\n  }\n\n  header .tabs button:hover::after {\n    transform: scaleX(1);\n    transform-origin: left;\n}\n\n\n\n/* Content */\n\n#content {\n    grid-area: content;\n    padding: calc(var(--dist-medium) * 3) calc(var(--dist-medium) * 4);\n    background: var(--bg-color-main);\n    color: var(--color-main);\n}\n\n#content .page {\n    display: flex;\n    flex-direction: column;\n    gap: .5rem;\n}\n\n#content .home {\n\n}\n\n#content .home .home-header,\n#content .menu .menu-header,\n#content .about .about-header {\n    font-weight: 500;\n    align-self: center;\n}\n\n#content .menu ol {\n    margin-left: 2rem;\n    margin-bottom: 2rem;\n}\n\n\n\n/* Footer */\n\nfooter {\n    grid-area: footer;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    padding: calc(var(--fs-medium) * 0.6);\n    font-size: var(--fs-medium);\n    color: var(--color-main);\n    background: var(--bg-color-red);\n}\n\nfooter div {\n    display: flex;\n    gap: calc(var(--fs-medium) * 0.2);\n}\n\nfooter h2 {\n    font-size: var(--fs-medium);\n}\n\n\n\n/* Shadows */\n\n.side-shadows {\n    position: relative;\n}\n\n.side-shadows:before,\n.side-shadows:after {\n    content: \" \";\n    height: 100%;\n    position: absolute;\n    top: 0;\n    width: 1rem;\n}\n\n.side-shadows:before {\n    box-shadow: -1rem 0 1rem -1rem inset var(--bg-color-main);\n    left: -1rem;\n}\n\n.side-shadows:after {\n    box-shadow: 1rem 0 1rem -1rem inset var(--bg-color-main);\n    right: -1rem;\n}\n\n\n\n/* Elements */\nh1 {\n    font-size: var(--fs-huge);\n}\n\nh2 {\n    font-size: var(--fs-large);\n}\n\nli {\n    font-size: var(--fs-large);\n}\n\np {\n    font-size: var(--fs-medium);\n}", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAEA;IACI,gCAAgC;;IAEhC,0BAA0B;IAC1B,yBAAyB;IACzB,2BAA2B;;IAE3B,wBAAwB;;IAExB,iBAAiB;IACjB,kBAAkB;IAClB,mBAAmB;IACnB,iBAAiB;IACjB,gBAAgB;;IAEhB,mBAAmB;IACnB,0CAA0C;AAC9C;;AAEA;IACI,sBAAsB;IACtB,SAAS;IACT,UAAU;IACV,kBAAkB;IAClB,oBAAoB;IACpB,oBAAoB;IACpB,cAAc;AAClB;;AAEA;IACI,iBAAiB;IACjB,eAAe;IACf,iCAAiC;IACjC,aAAa;IACb;;;8BAG0B;IAC1B,mDAAyD;IACzD,4BAA4B;IAC5B,2BAA2B;IAC3B,4BAA4B;IAC5B,sBAAsB;IACtB,kBAAkB;AACtB;;;;AAIA,WAAW;;AAEX;IACI,iBAAiB;IACjB,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,6BAA6B;IAC7B,uBAAuB;IACvB,gBAAgB;IAChB,wBAAwB;IACxB,iCAAiC;AACrC;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,uBAAuB;AAC3B;;AAEA;IACI,0BAA0B;IAC1B,YAAY;IACZ,0BAA0B;IAC1B,wDAAwD;IACxD,mBAAmB;IACnB,eAAe;AACnB;;;;AAIA,sBAAsB;AACtB;IACI,+BAA+B;IAC/B,kBAAkB;AACtB;;AAEA;IACI,sDAAsD;AAC1D;;AAEA,6BAA6B,gBAAgB;IACzC,kBAAkB;IAClB,WAAW;IACX,0CAA0C;IAC1C,WAAW;IACX,0BAA0B;IAC1B,kCAAkC;IAClC,6BAA6B;IAC7B,0BAA0B;IAC1B,oBAAoB;IACpB,uBAAuB;EACzB;;EAEA;IACE,oBAAoB;IACpB,sBAAsB;AAC1B;;;;AAIA,YAAY;;AAEZ;IACI,kBAAkB;IAClB,kEAAkE;IAClE,gCAAgC;IAChC,wBAAwB;AAC5B;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,UAAU;AACd;;AAEA;;AAEA;;AAEA;;;IAGI,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,iBAAiB;IACjB,mBAAmB;AACvB;;;;AAIA,WAAW;;AAEX;IACI,iBAAiB;IACjB,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,qCAAqC;IACrC,2BAA2B;IAC3B,wBAAwB;IACxB,+BAA+B;AACnC;;AAEA;IACI,aAAa;IACb,iCAAiC;AACrC;;AAEA;IACI,2BAA2B;AAC/B;;;;AAIA,YAAY;;AAEZ;IACI,kBAAkB;AACtB;;AAEA;;IAEI,YAAY;IACZ,YAAY;IACZ,kBAAkB;IAClB,MAAM;IACN,WAAW;AACf;;AAEA;IACI,yDAAyD;IACzD,WAAW;AACf;;AAEA;IACI,wDAAwD;IACxD,YAAY;AAChB;;;;AAIA,aAAa;AACb;IACI,yBAAyB;AAC7B;;AAEA;IACI,0BAA0B;AAC9B;;AAEA;IACI,0BAA0B;AAC9B;;AAEA;IACI,2BAA2B;AAC/B","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;500;600;700;800&display=swap');\n\n:root {\n    --color-main: rgb(230, 230, 230);\n    \n    --bg-color-main: #3e3e3eae;\n    --bg-color-red: #ce2b37d0;\n    --bg-color-green: #009246d0;\n\n    --font-color-main: black;\n\n    --fs-huge: 2.6rem;\n    --fs-large: 1.5rem;\n    --fs-medium: 1.1rem;\n    --fs-small: .8rem;\n    --fs-tiny: .6rem;\n\n    --dist-medium: 1rem;\n    --dist-button: calc(var(--fs-large) * 0.3);\n}\n\n* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n    font-size: inherit;\n    font-family: inherit;\n    font-weight: inherit;\n    color: inherit;\n}\n\nbody {\n    min-height: 100vh;\n    font-size: 16px;\n    font-family: 'EB Garamond', serif;\n    display: grid;\n    grid: \"header header  header\" min-content\n          \".      content .\"      auto\n          \"footer footer  footer\" min-content\n          / auto  60%     auto;\n    background: url('img/nik-owens-40OJLYVWeeM-unsplash.jpg');\n    background-repeat: no-repeat; \n    background-position: center; \n    background-attachment: fixed;\n    background-size: cover;\n    overflow-y: scroll;\n}\n\n\n\n/* Header */\n\nheader {\n    grid-area: header;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding: var(--dist-medium) 0;\n    gap: var(--dist-medium);\n    font-weight: 800;\n    color: var(--color-main);\n    background: var(--bg-color-green);\n}\n\nheader h1 {\n    font-size: var(--fs-huge);\n}\n\nheader .tabs {\n    display: flex;\n    justify-content: center;\n    gap: var(--dist-medium);\n}\n\nheader .tabs button {\n    width: minmax(25vw, 200px);\n    border: none;\n    font-size: var(--fs-large);\n    padding: var(--dist-button) calc(var(--dist-button) * 2);\n    background: inherit;\n    cursor: pointer;\n}\n\n\n\n/* Tab hover effects */\nheader .tabs button {\n    transition: all .5s ease-in-out;\n    position: relative;\n}\n\nheader .tabs button:hover {\n    transform: translateY(calc(-0.4 * var(--dist-button)));\n}\n\nheader .tabs button::after { /* Line effect */\n    position: absolute;\n    content: \"\";\n    width: calc(100% - 4 * var(--dist-button));\n    height: 2px;\n    bottom: var(--dist-button);\n    left: calc(2 * var(--dist-button));\n    background: var(--color-main);\n    transition: transform 0.5s;\n    transform: scaleX(0);\n    transform-origin: right;\n  }\n\n  header .tabs button:hover::after {\n    transform: scaleX(1);\n    transform-origin: left;\n}\n\n\n\n/* Content */\n\n#content {\n    grid-area: content;\n    padding: calc(var(--dist-medium) * 3) calc(var(--dist-medium) * 4);\n    background: var(--bg-color-main);\n    color: var(--color-main);\n}\n\n#content .page {\n    display: flex;\n    flex-direction: column;\n    gap: .5rem;\n}\n\n#content .home {\n\n}\n\n#content .home .home-header,\n#content .menu .menu-header,\n#content .about .about-header {\n    font-weight: 500;\n    align-self: center;\n}\n\n#content .menu ol {\n    margin-left: 2rem;\n    margin-bottom: 2rem;\n}\n\n\n\n/* Footer */\n\nfooter {\n    grid-area: footer;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    padding: calc(var(--fs-medium) * 0.6);\n    font-size: var(--fs-medium);\n    color: var(--color-main);\n    background: var(--bg-color-red);\n}\n\nfooter div {\n    display: flex;\n    gap: calc(var(--fs-medium) * 0.2);\n}\n\nfooter h2 {\n    font-size: var(--fs-medium);\n}\n\n\n\n/* Shadows */\n\n.side-shadows {\n    position: relative;\n}\n\n.side-shadows:before,\n.side-shadows:after {\n    content: \" \";\n    height: 100%;\n    position: absolute;\n    top: 0;\n    width: 1rem;\n}\n\n.side-shadows:before {\n    box-shadow: -1rem 0 1rem -1rem inset var(--bg-color-main);\n    left: -1rem;\n}\n\n.side-shadows:after {\n    box-shadow: 1rem 0 1rem -1rem inset var(--bg-color-main);\n    right: -1rem;\n}\n\n\n\n/* Elements */\nh1 {\n    font-size: var(--fs-huge);\n}\n\nh2 {\n    font-size: var(--fs-large);\n}\n\nli {\n    font-size: var(--fs-large);\n}\n\np {\n    font-size: var(--fs-medium);\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _pages_index_initPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/index/initPage */ "./src/pages/index/initPage.js");
/* harmony import */ var _pages_index_switchPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/index/switchPage */ "./src/pages/index/switchPage.js");




const tabs = (0,_pages_index_initPage__WEBPACK_IMPORTED_MODULE_1__.initPage)();
(0,_pages_index_switchPage__WEBPACK_IMPORTED_MODULE_2__.initSwitchPage)('Home');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        (0,_pages_index_switchPage__WEBPACK_IMPORTED_MODULE_2__.switchPage)(tab);
    });
});

/***/ }),

/***/ "./src/pages/index/initPage.js":
/*!*************************************!*\
  !*** ./src/pages/index/initPage.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initPage": () => (/* binding */ initPage)
/* harmony export */ });
const createTab = (text, tabs) => {
    const tab = document.createElement('button');
    tabs.append(tab);
    
    tab.classList.add(
        'tab', 
        'hover-up', 
        'hover-line'
    );
    tab.innerText = text;

    return tab;
}

const header = () => {
    const header = document.querySelector('header');

    // Restaurant text
    const headerText = document.createElement('h1');
    header.append(headerText);
    headerText.innerText = 'Restaurant page';

    // Tab div
    const tabDiv = document.createElement('div');
    header.append(tabDiv);
    tabDiv.classList.add('tabs');

    // Tabs
    let tabs = [
        createTab('Home', tabDiv),
        createTab('Menu', tabDiv),
        createTab('About', tabDiv)
    ];

    return tabs;
}

const footer = () => {
    const footer = document.querySelector('footer');

    // Credit div
    const creditDiv = document.createElement('div');
    footer.append(creditDiv);
    
    // Author text
    const authorText = document.createElement('h2');
    creditDiv.append(authorText);
    authorText.innerText = 'Created by ';

    // GitHub Link
    const gitHubLink = document.createElement('a');
    creditDiv.append(gitHubLink);
    gitHubLink.href = 'https://github.com/Studsministern';
    gitHubLink.innerText = 'Eric Weidow';

    // Image div
    const imageDiv = document.createElement('div');
    footer.append(imageDiv);

    // Image reference text
    const imageText = document.createElement('h2');
    imageDiv.append(imageText);
    imageText.innerText = 'Photo by'
    
    // Photograph link
    const photographLink = document.createElement('a');
    imageDiv.append(photographLink);
    photographLink.href = 'https://unsplash.com/@nik_owens?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText';
    photographLink.innerText = 'Nik Owens';

    imageDiv.append(document.createElement('h2').innerText = 'on');

    // Image link
    const imageLink = document.createElement('a');
    imageDiv.append(imageLink);
    imageLink.href = 'https://unsplash.com/s/photos/Neapolitan-pizza?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText';
    imageLink.innerText = 'Unsplash';
}

function initPage() {
    let tabs = header();
    const content = document.querySelector('#content');
    content.classList.add( 
        'side-shadows'
    );
    footer();

    return tabs;
}

/***/ }),

/***/ "./src/pages/index/switchPage.js":
/*!***************************************!*\
  !*** ./src/pages/index/switchPage.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initSwitchPage": () => (/* binding */ initSwitchPage),
/* harmony export */   "switchPage": () => (/* binding */ switchPage)
/* harmony export */ });
const _homePage = (parent) => {
    const home = document.createElement('div');
    parent.append(home);
    home.classList.add(
        'page',
        'home'
    );

    // Welcome text
    const homeHeader = document.createElement('h2');
    const homeText = document.createElement('h2');
    home.append(homeHeader);
    home.append(homeText);
    homeHeader.innerText = 'Welcome!';
    homeText.innerText = 'This is a fake restaurant page for a fake restaurant. The location is also fake. And the food. But you should try the real food, in real life it is good.';
    homeHeader.classList.add('home-header');
}

const _menuItem = (
        parent, 
        name,
        description
    ) => {
    const item = document.createElement('li');
    parent.append(item);

    // Menu item div
    const itemDiv = document.createElement('div');
    item.append(itemDiv);
    
    // Menu item header
    const itemName = document.createElement('h2');
    itemDiv.append(itemName);
    itemName.innerText = name;

    // Menu item description
    const itemDescription = document.createElement('h2');
    itemDiv.append(itemDescription);
    itemDescription.innerText = description;
}

const _menuPage = (parent) => {
    const menu = document.createElement('div');
    parent.append(menu);
    menu.classList.add(
        'page',
        'menu'
    );

    // Appertizer header
    const appertizerHeader = document.createElement('h2');
    menu.append(appertizerHeader);
    appertizerHeader.innerText = 'Appertizers:';
    appertizerHeader.classList.add('menu-header');
    
    // Appertizer menu
    const appertizerMenu = document.createElement('ol');
    menu.append(appertizerMenu);
    
    let appertizerItems = [
        _menuItem(appertizerMenu, 'Garlic bread', 'Italian bread with garlic butter.'),
        _menuItem(appertizerMenu, 'Bruschetta', 'Italian bread with fresh tomato, basil and olive oil.')
    ];

    // Main courses header
    const mainCourseHeader = document.createElement('h2');
    menu.append(mainCourseHeader);
    mainCourseHeader.innerText = 'Main courses:';
    mainCourseHeader.classList.add('menu-header');
    
    // Main courses menu
    const mainCourseMenu = document.createElement('ol');
    menu.append(mainCourseMenu);
    
    let mainCourseItems = [
        _menuItem(mainCourseMenu, 'Spaghetti carbonara', 'Made using pancetta, eggs and parmiggiano reggiano.'),
        _menuItem(mainCourseMenu, 'Margharita', 'The classic pizza with tomato sauce, mozzarella and basil.')
    ];

    mainCourseMenu.setAttribute('start', appertizerItems.length + 1); // Continuing the list

    // Dessert header
    const dessertHeader = document.createElement('h2');
    menu.append(dessertHeader);
    dessertHeader.innerText = 'Desserts:';
    dessertHeader.classList.add('menu-header');
    
    // Main courses menu
    const dessertMenu = document.createElement('ol');
    menu.append(dessertMenu);
    
    let dessertItems = [
        _menuItem(dessertMenu, 'Tiramisu', 'With a creamy base and containing a hint of conjac.'),
        _menuItem(dessertMenu, 'Panna cotta', 'With raspberry, blueberry and a gelatin leaf.')
    ];

    dessertMenu.setAttribute('start', appertizerItems.length + mainCourseItems.length + 1); // Continuing the list
}

const _aboutPage = (parent) => {
    const about = document.createElement('div');
    parent.append(about);
    about.classList.add(
        'page',
        'about'
    );

    // Intro
    const aboutHeader = document.createElement('h2');
    const aboutText = document.createElement('h2');
    about.append(aboutHeader);
    about.append(aboutText);
    aboutHeader.innerText = 'About us:';
    aboutText.innerText = 'This is a fake restaurant page made by me. You can find my GitHub link at the bottom of this page! :)';
    aboutHeader.classList.add('about-header');
}

function switchPage(tab) {
    const content = document.querySelector('#content');
    content.innerHTML = '';

    switch(tab.innerText) {
        case 'Home':
            _homePage(content);
            break;
        case 'Menu':
            _menuPage(content);
            break;
        case 'About':
            _aboutPage(content);
            break;
    }
}

function initSwitchPage() {
    const content = document.querySelector('#content');
    _homePage(content);
}

/***/ }),

/***/ "./src/img/nik-owens-40OJLYVWeeM-unsplash.jpg":
/*!****************************************************!*\
  !*** ./src/img/nik-owens-40OJLYVWeeM-unsplash.jpg ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0016df88b0987710ab83.jpg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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S0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNyRWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7QUNmc0I7QUFDNEI7QUFDb0I7O0FBRXRFLGFBQWEsK0RBQVE7QUFDckIsdUVBQWM7O0FBRWQ7QUFDQTtBQUNBLFFBQVEsbUVBQVU7QUFDbEIsS0FBSztBQUNMLENBQUM7Ozs7Ozs7Ozs7Ozs7O0FDWEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDeEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHNFQUFzRTs7QUFFdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw0RkFBNEY7QUFDNUY7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9zcmMvcGFnZXMvaW5kZXgvaW5pdFBhZ2UuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vc3JjL3BhZ2VzL2luZGV4L3N3aXRjaFBhZ2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcImltZy9uaWstb3dlbnMtNDBPSkxZVldlZU0tdW5zcGxhc2guanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1FQitHYXJhbW9uZDp3Z2h0QDQwMDs1MDA7NjAwOzcwMDs4MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gICAgLS1jb2xvci1tYWluOiByZ2IoMjMwLCAyMzAsIDIzMCk7XFxuICAgIFxcbiAgICAtLWJnLWNvbG9yLW1haW46ICMzZTNlM2VhZTtcXG4gICAgLS1iZy1jb2xvci1yZWQ6ICNjZTJiMzdkMDtcXG4gICAgLS1iZy1jb2xvci1ncmVlbjogIzAwOTI0NmQwO1xcblxcbiAgICAtLWZvbnQtY29sb3ItbWFpbjogYmxhY2s7XFxuXFxuICAgIC0tZnMtaHVnZTogMi42cmVtO1xcbiAgICAtLWZzLWxhcmdlOiAxLjVyZW07XFxuICAgIC0tZnMtbWVkaXVtOiAxLjFyZW07XFxuICAgIC0tZnMtc21hbGw6IC44cmVtO1xcbiAgICAtLWZzLXRpbnk6IC42cmVtO1xcblxcbiAgICAtLWRpc3QtbWVkaXVtOiAxcmVtO1xcbiAgICAtLWRpc3QtYnV0dG9uOiBjYWxjKHZhcigtLWZzLWxhcmdlKSAqIDAuMyk7XFxufVxcblxcbioge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICAgIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xcbiAgICBjb2xvcjogaW5oZXJpdDtcXG59XFxuXFxuYm9keSB7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIGZvbnQtZmFtaWx5OiAnRUIgR2FyYW1vbmQnLCBzZXJpZjtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZDogXFxcImhlYWRlciBoZWFkZXIgIGhlYWRlclxcXCIgbWluLWNvbnRlbnRcXG4gICAgICAgICAgXFxcIi4gICAgICBjb250ZW50IC5cXFwiICAgICAgYXV0b1xcbiAgICAgICAgICBcXFwiZm9vdGVyIGZvb3RlciAgZm9vdGVyXFxcIiBtaW4tY29udGVudFxcbiAgICAgICAgICAvIGF1dG8gIDYwJSAgICAgYXV0bztcXG4gICAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDsgXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjsgXFxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcXG59XFxuXFxuXFxuXFxuLyogSGVhZGVyICovXFxuXFxuaGVhZGVyIHtcXG4gICAgZ3JpZC1hcmVhOiBoZWFkZXI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IHZhcigtLWRpc3QtbWVkaXVtKSAwO1xcbiAgICBnYXA6IHZhcigtLWRpc3QtbWVkaXVtKTtcXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLW1haW4pO1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1jb2xvci1ncmVlbik7XFxufVxcblxcbmhlYWRlciBoMSB7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tZnMtaHVnZSk7XFxufVxcblxcbmhlYWRlciAudGFicyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IHZhcigtLWRpc3QtbWVkaXVtKTtcXG59XFxuXFxuaGVhZGVyIC50YWJzIGJ1dHRvbiB7XFxuICAgIHdpZHRoOiBtaW5tYXgoMjV2dywgMjAwcHgpO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tZnMtbGFyZ2UpO1xcbiAgICBwYWRkaW5nOiB2YXIoLS1kaXN0LWJ1dHRvbikgY2FsYyh2YXIoLS1kaXN0LWJ1dHRvbikgKiAyKTtcXG4gICAgYmFja2dyb3VuZDogaW5oZXJpdDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5cXG5cXG4vKiBUYWIgaG92ZXIgZWZmZWN0cyAqL1xcbmhlYWRlciAudGFicyBidXR0b24ge1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjVzIGVhc2UtaW4tb3V0O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbmhlYWRlciAudGFicyBidXR0b246aG92ZXIge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoY2FsYygtMC40ICogdmFyKC0tZGlzdC1idXR0b24pKSk7XFxufVxcblxcbmhlYWRlciAudGFicyBidXR0b246OmFmdGVyIHsgLyogTGluZSBlZmZlY3QgKi9cXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDQgKiB2YXIoLS1kaXN0LWJ1dHRvbikpO1xcbiAgICBoZWlnaHQ6IDJweDtcXG4gICAgYm90dG9tOiB2YXIoLS1kaXN0LWJ1dHRvbik7XFxuICAgIGxlZnQ6IGNhbGMoMiAqIHZhcigtLWRpc3QtYnV0dG9uKSk7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLW1haW4pO1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cztcXG4gICAgdHJhbnNmb3JtOiBzY2FsZVgoMCk7XFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0O1xcbiAgfVxcblxcbiAgaGVhZGVyIC50YWJzIGJ1dHRvbjpob3Zlcjo6YWZ0ZXIge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlWCgxKTtcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdDtcXG59XFxuXFxuXFxuXFxuLyogQ29udGVudCAqL1xcblxcbiNjb250ZW50IHtcXG4gICAgZ3JpZC1hcmVhOiBjb250ZW50O1xcbiAgICBwYWRkaW5nOiBjYWxjKHZhcigtLWRpc3QtbWVkaXVtKSAqIDMpIGNhbGModmFyKC0tZGlzdC1tZWRpdW0pICogNCk7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWJnLWNvbG9yLW1haW4pO1xcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItbWFpbik7XFxufVxcblxcbiNjb250ZW50IC5wYWdlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAuNXJlbTtcXG59XFxuXFxuI2NvbnRlbnQgLmhvbWUge1xcblxcbn1cXG5cXG4jY29udGVudCAuaG9tZSAuaG9tZS1oZWFkZXIsXFxuI2NvbnRlbnQgLm1lbnUgLm1lbnUtaGVhZGVyLFxcbiNjb250ZW50IC5hYm91dCAuYWJvdXQtaGVhZGVyIHtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4jY29udGVudCAubWVudSBvbCB7XFxuICAgIG1hcmdpbi1sZWZ0OiAycmVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xcbn1cXG5cXG5cXG5cXG4vKiBGb290ZXIgKi9cXG5cXG5mb290ZXIge1xcbiAgICBncmlkLWFyZWE6IGZvb3RlcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IGNhbGModmFyKC0tZnMtbWVkaXVtKSAqIDAuNik7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tZnMtbWVkaXVtKTtcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLW1haW4pO1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1jb2xvci1yZWQpO1xcbn1cXG5cXG5mb290ZXIgZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiBjYWxjKHZhcigtLWZzLW1lZGl1bSkgKiAwLjIpO1xcbn1cXG5cXG5mb290ZXIgaDIge1xcbiAgICBmb250LXNpemU6IHZhcigtLWZzLW1lZGl1bSk7XFxufVxcblxcblxcblxcbi8qIFNoYWRvd3MgKi9cXG5cXG4uc2lkZS1zaGFkb3dzIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uc2lkZS1zaGFkb3dzOmJlZm9yZSxcXG4uc2lkZS1zaGFkb3dzOmFmdGVyIHtcXG4gICAgY29udGVudDogXFxcIiBcXFwiO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICB3aWR0aDogMXJlbTtcXG59XFxuXFxuLnNpZGUtc2hhZG93czpiZWZvcmUge1xcbiAgICBib3gtc2hhZG93OiAtMXJlbSAwIDFyZW0gLTFyZW0gaW5zZXQgdmFyKC0tYmctY29sb3ItbWFpbik7XFxuICAgIGxlZnQ6IC0xcmVtO1xcbn1cXG5cXG4uc2lkZS1zaGFkb3dzOmFmdGVyIHtcXG4gICAgYm94LXNoYWRvdzogMXJlbSAwIDFyZW0gLTFyZW0gaW5zZXQgdmFyKC0tYmctY29sb3ItbWFpbik7XFxuICAgIHJpZ2h0OiAtMXJlbTtcXG59XFxuXFxuXFxuXFxuLyogRWxlbWVudHMgKi9cXG5oMSB7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tZnMtaHVnZSk7XFxufVxcblxcbmgyIHtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1mcy1sYXJnZSk7XFxufVxcblxcbmxpIHtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1mcy1sYXJnZSk7XFxufVxcblxcbnAge1xcbiAgICBmb250LXNpemU6IHZhcigtLWZzLW1lZGl1bSk7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0lBQ0ksZ0NBQWdDOztJQUVoQywwQkFBMEI7SUFDMUIseUJBQXlCO0lBQ3pCLDJCQUEyQjs7SUFFM0Isd0JBQXdCOztJQUV4QixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsZ0JBQWdCOztJQUVoQixtQkFBbUI7SUFDbkIsMENBQTBDO0FBQzlDOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixvQkFBb0I7SUFDcEIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsaUNBQWlDO0lBQ2pDLGFBQWE7SUFDYjs7OzhCQUcwQjtJQUMxQixtREFBeUQ7SUFDekQsNEJBQTRCO0lBQzVCLDJCQUEyQjtJQUMzQiw0QkFBNEI7SUFDNUIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtBQUN0Qjs7OztBQUlBLFdBQVc7O0FBRVg7SUFDSSxpQkFBaUI7SUFDakIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsNkJBQTZCO0lBQzdCLHVCQUF1QjtJQUN2QixnQkFBZ0I7SUFDaEIsd0JBQXdCO0lBQ3hCLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksMEJBQTBCO0lBQzFCLFlBQVk7SUFDWiwwQkFBMEI7SUFDMUIsd0RBQXdEO0lBQ3hELG1CQUFtQjtJQUNuQixlQUFlO0FBQ25COzs7O0FBSUEsc0JBQXNCO0FBQ3RCO0lBQ0ksK0JBQStCO0lBQy9CLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHNEQUFzRDtBQUMxRDs7QUFFQSw2QkFBNkIsZ0JBQWdCO0lBQ3pDLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsMENBQTBDO0lBQzFDLFdBQVc7SUFDWCwwQkFBMEI7SUFDMUIsa0NBQWtDO0lBQ2xDLDZCQUE2QjtJQUM3QiwwQkFBMEI7SUFDMUIsb0JBQW9CO0lBQ3BCLHVCQUF1QjtFQUN6Qjs7RUFFQTtJQUNFLG9CQUFvQjtJQUNwQixzQkFBc0I7QUFDMUI7Ozs7QUFJQSxZQUFZOztBQUVaO0lBQ0ksa0JBQWtCO0lBQ2xCLGtFQUFrRTtJQUNsRSxnQ0FBZ0M7SUFDaEMsd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixVQUFVO0FBQ2Q7O0FBRUE7O0FBRUE7O0FBRUE7OztJQUdJLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsbUJBQW1CO0FBQ3ZCOzs7O0FBSUEsV0FBVzs7QUFFWDtJQUNJLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIscUNBQXFDO0lBQ3JDLDJCQUEyQjtJQUMzQix3QkFBd0I7SUFDeEIsK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLDJCQUEyQjtBQUMvQjs7OztBQUlBLFlBQVk7O0FBRVo7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7O0lBRUksWUFBWTtJQUNaLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLFdBQVc7QUFDZjs7QUFFQTtJQUNJLHlEQUF5RDtJQUN6RCxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSx3REFBd0Q7SUFDeEQsWUFBWTtBQUNoQjs7OztBQUlBLGFBQWE7QUFDYjtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLDJCQUEyQjtBQUMvQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1FQitHYXJhbW9uZDp3Z2h0QDQwMDs1MDA7NjAwOzcwMDs4MDAmZGlzcGxheT1zd2FwJyk7XFxuXFxuOnJvb3Qge1xcbiAgICAtLWNvbG9yLW1haW46IHJnYigyMzAsIDIzMCwgMjMwKTtcXG4gICAgXFxuICAgIC0tYmctY29sb3ItbWFpbjogIzNlM2UzZWFlO1xcbiAgICAtLWJnLWNvbG9yLXJlZDogI2NlMmIzN2QwO1xcbiAgICAtLWJnLWNvbG9yLWdyZWVuOiAjMDA5MjQ2ZDA7XFxuXFxuICAgIC0tZm9udC1jb2xvci1tYWluOiBibGFjaztcXG5cXG4gICAgLS1mcy1odWdlOiAyLjZyZW07XFxuICAgIC0tZnMtbGFyZ2U6IDEuNXJlbTtcXG4gICAgLS1mcy1tZWRpdW06IDEuMXJlbTtcXG4gICAgLS1mcy1zbWFsbDogLjhyZW07XFxuICAgIC0tZnMtdGlueTogLjZyZW07XFxuXFxuICAgIC0tZGlzdC1tZWRpdW06IDFyZW07XFxuICAgIC0tZGlzdC1idXR0b246IGNhbGModmFyKC0tZnMtbGFyZ2UpICogMC4zKTtcXG59XFxuXFxuKiB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gICAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XFxuICAgIGNvbG9yOiBpbmhlcml0O1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgZm9udC1mYW1pbHk6ICdFQiBHYXJhbW9uZCcsIHNlcmlmO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkOiBcXFwiaGVhZGVyIGhlYWRlciAgaGVhZGVyXFxcIiBtaW4tY29udGVudFxcbiAgICAgICAgICBcXFwiLiAgICAgIGNvbnRlbnQgLlxcXCIgICAgICBhdXRvXFxuICAgICAgICAgIFxcXCJmb290ZXIgZm9vdGVyICBmb290ZXJcXFwiIG1pbi1jb250ZW50XFxuICAgICAgICAgIC8gYXV0byAgNjAlICAgICBhdXRvO1xcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJ2ltZy9uaWstb3dlbnMtNDBPSkxZVldlZU0tdW5zcGxhc2guanBnJyk7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7IFxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7IFxcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XFxufVxcblxcblxcblxcbi8qIEhlYWRlciAqL1xcblxcbmhlYWRlciB7XFxuICAgIGdyaWQtYXJlYTogaGVhZGVyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiB2YXIoLS1kaXN0LW1lZGl1bSkgMDtcXG4gICAgZ2FwOiB2YXIoLS1kaXN0LW1lZGl1bSk7XFxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1tYWluKTtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmctY29sb3ItZ3JlZW4pO1xcbn1cXG5cXG5oZWFkZXIgaDEge1xcbiAgICBmb250LXNpemU6IHZhcigtLWZzLWh1Z2UpO1xcbn1cXG5cXG5oZWFkZXIgLnRhYnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiB2YXIoLS1kaXN0LW1lZGl1bSk7XFxufVxcblxcbmhlYWRlciAudGFicyBidXR0b24ge1xcbiAgICB3aWR0aDogbWlubWF4KDI1dncsIDIwMHB4KTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBmb250LXNpemU6IHZhcigtLWZzLWxhcmdlKTtcXG4gICAgcGFkZGluZzogdmFyKC0tZGlzdC1idXR0b24pIGNhbGModmFyKC0tZGlzdC1idXR0b24pICogMik7XFxuICAgIGJhY2tncm91bmQ6IGluaGVyaXQ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuXFxuXFxuLyogVGFiIGhvdmVyIGVmZmVjdHMgKi9cXG5oZWFkZXIgLnRhYnMgYnV0dG9uIHtcXG4gICAgdHJhbnNpdGlvbjogYWxsIC41cyBlYXNlLWluLW91dDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG5oZWFkZXIgLnRhYnMgYnV0dG9uOmhvdmVyIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKGNhbGMoLTAuNCAqIHZhcigtLWRpc3QtYnV0dG9uKSkpO1xcbn1cXG5cXG5oZWFkZXIgLnRhYnMgYnV0dG9uOjphZnRlciB7IC8qIExpbmUgZWZmZWN0ICovXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA0ICogdmFyKC0tZGlzdC1idXR0b24pKTtcXG4gICAgaGVpZ2h0OiAycHg7XFxuICAgIGJvdHRvbTogdmFyKC0tZGlzdC1idXR0b24pO1xcbiAgICBsZWZ0OiBjYWxjKDIgKiB2YXIoLS1kaXN0LWJ1dHRvbikpO1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1tYWluKTtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXM7XFxuICAgIHRyYW5zZm9ybTogc2NhbGVYKDApO1xcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiByaWdodDtcXG4gIH1cXG5cXG4gIGhlYWRlciAudGFicyBidXR0b246aG92ZXI6OmFmdGVyIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQ7XFxufVxcblxcblxcblxcbi8qIENvbnRlbnQgKi9cXG5cXG4jY29udGVudCB7XFxuICAgIGdyaWQtYXJlYTogY29udGVudDtcXG4gICAgcGFkZGluZzogY2FsYyh2YXIoLS1kaXN0LW1lZGl1bSkgKiAzKSBjYWxjKHZhcigtLWRpc3QtbWVkaXVtKSAqIDQpO1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1jb2xvci1tYWluKTtcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLW1haW4pO1xcbn1cXG5cXG4jY29udGVudCAucGFnZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogLjVyZW07XFxufVxcblxcbiNjb250ZW50IC5ob21lIHtcXG5cXG59XFxuXFxuI2NvbnRlbnQgLmhvbWUgLmhvbWUtaGVhZGVyLFxcbiNjb250ZW50IC5tZW51IC5tZW51LWhlYWRlcixcXG4jY29udGVudCAuYWJvdXQgLmFib3V0LWhlYWRlciB7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuI2NvbnRlbnQgLm1lbnUgb2wge1xcbiAgICBtYXJnaW4tbGVmdDogMnJlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXG59XFxuXFxuXFxuXFxuLyogRm9vdGVyICovXFxuXFxuZm9vdGVyIHtcXG4gICAgZ3JpZC1hcmVhOiBmb290ZXI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiBjYWxjKHZhcigtLWZzLW1lZGl1bSkgKiAwLjYpO1xcbiAgICBmb250LXNpemU6IHZhcigtLWZzLW1lZGl1bSk7XFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1tYWluKTtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmctY29sb3ItcmVkKTtcXG59XFxuXFxuZm9vdGVyIGRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogY2FsYyh2YXIoLS1mcy1tZWRpdW0pICogMC4yKTtcXG59XFxuXFxuZm9vdGVyIGgyIHtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1mcy1tZWRpdW0pO1xcbn1cXG5cXG5cXG5cXG4vKiBTaGFkb3dzICovXFxuXFxuLnNpZGUtc2hhZG93cyB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnNpZGUtc2hhZG93czpiZWZvcmUsXFxuLnNpZGUtc2hhZG93czphZnRlciB7XFxuICAgIGNvbnRlbnQ6IFxcXCIgXFxcIjtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgd2lkdGg6IDFyZW07XFxufVxcblxcbi5zaWRlLXNoYWRvd3M6YmVmb3JlIHtcXG4gICAgYm94LXNoYWRvdzogLTFyZW0gMCAxcmVtIC0xcmVtIGluc2V0IHZhcigtLWJnLWNvbG9yLW1haW4pO1xcbiAgICBsZWZ0OiAtMXJlbTtcXG59XFxuXFxuLnNpZGUtc2hhZG93czphZnRlciB7XFxuICAgIGJveC1zaGFkb3c6IDFyZW0gMCAxcmVtIC0xcmVtIGluc2V0IHZhcigtLWJnLWNvbG9yLW1haW4pO1xcbiAgICByaWdodDogLTFyZW07XFxufVxcblxcblxcblxcbi8qIEVsZW1lbnRzICovXFxuaDEge1xcbiAgICBmb250LXNpemU6IHZhcigtLWZzLWh1Z2UpO1xcbn1cXG5cXG5oMiB7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tZnMtbGFyZ2UpO1xcbn1cXG5cXG5saSB7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tZnMtbGFyZ2UpO1xcbn1cXG5cXG5wIHtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1mcy1tZWRpdW0pO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgJy4vc3R5bGVzLmNzcyc7XG5pbXBvcnQgeyBpbml0UGFnZSB9IGZyb20gJy4vcGFnZXMvaW5kZXgvaW5pdFBhZ2UnO1xuaW1wb3J0IHsgc3dpdGNoUGFnZSwgaW5pdFN3aXRjaFBhZ2UgfSBmcm9tICcuL3BhZ2VzL2luZGV4L3N3aXRjaFBhZ2UnO1xuXG5jb25zdCB0YWJzID0gaW5pdFBhZ2UoKTtcbmluaXRTd2l0Y2hQYWdlKCdIb21lJyk7XG5cbnRhYnMuZm9yRWFjaCh0YWIgPT4ge1xuICAgIHRhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgc3dpdGNoUGFnZSh0YWIpO1xuICAgIH0pO1xufSk7IiwiY29uc3QgY3JlYXRlVGFiID0gKHRleHQsIHRhYnMpID0+IHtcbiAgICBjb25zdCB0YWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICB0YWJzLmFwcGVuZCh0YWIpO1xuICAgIFxuICAgIHRhYi5jbGFzc0xpc3QuYWRkKFxuICAgICAgICAndGFiJywgXG4gICAgICAgICdob3Zlci11cCcsIFxuICAgICAgICAnaG92ZXItbGluZSdcbiAgICApO1xuICAgIHRhYi5pbm5lclRleHQgPSB0ZXh0O1xuXG4gICAgcmV0dXJuIHRhYjtcbn1cblxuY29uc3QgaGVhZGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWRlcicpO1xuXG4gICAgLy8gUmVzdGF1cmFudCB0ZXh0XG4gICAgY29uc3QgaGVhZGVyVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgaGVhZGVyLmFwcGVuZChoZWFkZXJUZXh0KTtcbiAgICBoZWFkZXJUZXh0LmlubmVyVGV4dCA9ICdSZXN0YXVyYW50IHBhZ2UnO1xuXG4gICAgLy8gVGFiIGRpdlxuICAgIGNvbnN0IHRhYkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhlYWRlci5hcHBlbmQodGFiRGl2KTtcbiAgICB0YWJEaXYuY2xhc3NMaXN0LmFkZCgndGFicycpO1xuXG4gICAgLy8gVGFic1xuICAgIGxldCB0YWJzID0gW1xuICAgICAgICBjcmVhdGVUYWIoJ0hvbWUnLCB0YWJEaXYpLFxuICAgICAgICBjcmVhdGVUYWIoJ01lbnUnLCB0YWJEaXYpLFxuICAgICAgICBjcmVhdGVUYWIoJ0Fib3V0JywgdGFiRGl2KVxuICAgIF07XG5cbiAgICByZXR1cm4gdGFicztcbn1cblxuY29uc3QgZm9vdGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvb3RlcicpO1xuXG4gICAgLy8gQ3JlZGl0IGRpdlxuICAgIGNvbnN0IGNyZWRpdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZvb3Rlci5hcHBlbmQoY3JlZGl0RGl2KTtcbiAgICBcbiAgICAvLyBBdXRob3IgdGV4dFxuICAgIGNvbnN0IGF1dGhvclRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGNyZWRpdERpdi5hcHBlbmQoYXV0aG9yVGV4dCk7XG4gICAgYXV0aG9yVGV4dC5pbm5lclRleHQgPSAnQ3JlYXRlZCBieSAnO1xuXG4gICAgLy8gR2l0SHViIExpbmtcbiAgICBjb25zdCBnaXRIdWJMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIGNyZWRpdERpdi5hcHBlbmQoZ2l0SHViTGluayk7XG4gICAgZ2l0SHViTGluay5ocmVmID0gJ2h0dHBzOi8vZ2l0aHViLmNvbS9TdHVkc21pbmlzdGVybic7XG4gICAgZ2l0SHViTGluay5pbm5lclRleHQgPSAnRXJpYyBXZWlkb3cnO1xuXG4gICAgLy8gSW1hZ2UgZGl2XG4gICAgY29uc3QgaW1hZ2VEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmb290ZXIuYXBwZW5kKGltYWdlRGl2KTtcblxuICAgIC8vIEltYWdlIHJlZmVyZW5jZSB0ZXh0XG4gICAgY29uc3QgaW1hZ2VUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBpbWFnZURpdi5hcHBlbmQoaW1hZ2VUZXh0KTtcbiAgICBpbWFnZVRleHQuaW5uZXJUZXh0ID0gJ1Bob3RvIGJ5J1xuICAgIFxuICAgIC8vIFBob3RvZ3JhcGggbGlua1xuICAgIGNvbnN0IHBob3RvZ3JhcGhMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIGltYWdlRGl2LmFwcGVuZChwaG90b2dyYXBoTGluayk7XG4gICAgcGhvdG9ncmFwaExpbmsuaHJlZiA9ICdodHRwczovL3Vuc3BsYXNoLmNvbS9AbmlrX293ZW5zP3V0bV9zb3VyY2U9dW5zcGxhc2gmdXRtX21lZGl1bT1yZWZlcnJhbCZ1dG1fY29udGVudD1jcmVkaXRDb3B5VGV4dCc7XG4gICAgcGhvdG9ncmFwaExpbmsuaW5uZXJUZXh0ID0gJ05payBPd2Vucyc7XG5cbiAgICBpbWFnZURpdi5hcHBlbmQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKS5pbm5lclRleHQgPSAnb24nKTtcblxuICAgIC8vIEltYWdlIGxpbmtcbiAgICBjb25zdCBpbWFnZUxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgaW1hZ2VEaXYuYXBwZW5kKGltYWdlTGluayk7XG4gICAgaW1hZ2VMaW5rLmhyZWYgPSAnaHR0cHM6Ly91bnNwbGFzaC5jb20vcy9waG90b3MvTmVhcG9saXRhbi1waXp6YT91dG1fc291cmNlPXVuc3BsYXNoJnV0bV9tZWRpdW09cmVmZXJyYWwmdXRtX2NvbnRlbnQ9Y3JlZGl0Q29weVRleHQnO1xuICAgIGltYWdlTGluay5pbm5lclRleHQgPSAnVW5zcGxhc2gnO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5pdFBhZ2UoKSB7XG4gICAgbGV0IHRhYnMgPSBoZWFkZXIoKTtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcbiAgICBjb250ZW50LmNsYXNzTGlzdC5hZGQoIFxuICAgICAgICAnc2lkZS1zaGFkb3dzJ1xuICAgICk7XG4gICAgZm9vdGVyKCk7XG5cbiAgICByZXR1cm4gdGFicztcbn0iLCJjb25zdCBfaG9tZVBhZ2UgPSAocGFyZW50KSA9PiB7XG4gICAgY29uc3QgaG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHBhcmVudC5hcHBlbmQoaG9tZSk7XG4gICAgaG9tZS5jbGFzc0xpc3QuYWRkKFxuICAgICAgICAncGFnZScsXG4gICAgICAgICdob21lJ1xuICAgICk7XG5cbiAgICAvLyBXZWxjb21lIHRleHRcbiAgICBjb25zdCBob21lSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBjb25zdCBob21lVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgaG9tZS5hcHBlbmQoaG9tZUhlYWRlcik7XG4gICAgaG9tZS5hcHBlbmQoaG9tZVRleHQpO1xuICAgIGhvbWVIZWFkZXIuaW5uZXJUZXh0ID0gJ1dlbGNvbWUhJztcbiAgICBob21lVGV4dC5pbm5lclRleHQgPSAnVGhpcyBpcyBhIGZha2UgcmVzdGF1cmFudCBwYWdlIGZvciBhIGZha2UgcmVzdGF1cmFudC4gVGhlIGxvY2F0aW9uIGlzIGFsc28gZmFrZS4gQW5kIHRoZSBmb29kLiBCdXQgeW91IHNob3VsZCB0cnkgdGhlIHJlYWwgZm9vZCwgaW4gcmVhbCBsaWZlIGl0IGlzIGdvb2QuJztcbiAgICBob21lSGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2hvbWUtaGVhZGVyJyk7XG59XG5cbmNvbnN0IF9tZW51SXRlbSA9IChcbiAgICAgICAgcGFyZW50LCBcbiAgICAgICAgbmFtZSxcbiAgICAgICAgZGVzY3JpcHRpb25cbiAgICApID0+IHtcbiAgICBjb25zdCBpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBwYXJlbnQuYXBwZW5kKGl0ZW0pO1xuXG4gICAgLy8gTWVudSBpdGVtIGRpdlxuICAgIGNvbnN0IGl0ZW1EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpdGVtLmFwcGVuZChpdGVtRGl2KTtcbiAgICBcbiAgICAvLyBNZW51IGl0ZW0gaGVhZGVyXG4gICAgY29uc3QgaXRlbU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGl0ZW1EaXYuYXBwZW5kKGl0ZW1OYW1lKTtcbiAgICBpdGVtTmFtZS5pbm5lclRleHQgPSBuYW1lO1xuXG4gICAgLy8gTWVudSBpdGVtIGRlc2NyaXB0aW9uXG4gICAgY29uc3QgaXRlbURlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBpdGVtRGl2LmFwcGVuZChpdGVtRGVzY3JpcHRpb24pO1xuICAgIGl0ZW1EZXNjcmlwdGlvbi5pbm5lclRleHQgPSBkZXNjcmlwdGlvbjtcbn1cblxuY29uc3QgX21lbnVQYWdlID0gKHBhcmVudCkgPT4ge1xuICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwYXJlbnQuYXBwZW5kKG1lbnUpO1xuICAgIG1lbnUuY2xhc3NMaXN0LmFkZChcbiAgICAgICAgJ3BhZ2UnLFxuICAgICAgICAnbWVudSdcbiAgICApO1xuXG4gICAgLy8gQXBwZXJ0aXplciBoZWFkZXJcbiAgICBjb25zdCBhcHBlcnRpemVySGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBtZW51LmFwcGVuZChhcHBlcnRpemVySGVhZGVyKTtcbiAgICBhcHBlcnRpemVySGVhZGVyLmlubmVyVGV4dCA9ICdBcHBlcnRpemVyczonO1xuICAgIGFwcGVydGl6ZXJIZWFkZXIuY2xhc3NMaXN0LmFkZCgnbWVudS1oZWFkZXInKTtcbiAgICBcbiAgICAvLyBBcHBlcnRpemVyIG1lbnVcbiAgICBjb25zdCBhcHBlcnRpemVyTWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29sJyk7XG4gICAgbWVudS5hcHBlbmQoYXBwZXJ0aXplck1lbnUpO1xuICAgIFxuICAgIGxldCBhcHBlcnRpemVySXRlbXMgPSBbXG4gICAgICAgIF9tZW51SXRlbShhcHBlcnRpemVyTWVudSwgJ0dhcmxpYyBicmVhZCcsICdJdGFsaWFuIGJyZWFkIHdpdGggZ2FybGljIGJ1dHRlci4nKSxcbiAgICAgICAgX21lbnVJdGVtKGFwcGVydGl6ZXJNZW51LCAnQnJ1c2NoZXR0YScsICdJdGFsaWFuIGJyZWFkIHdpdGggZnJlc2ggdG9tYXRvLCBiYXNpbCBhbmQgb2xpdmUgb2lsLicpXG4gICAgXTtcblxuICAgIC8vIE1haW4gY291cnNlcyBoZWFkZXJcbiAgICBjb25zdCBtYWluQ291cnNlSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBtZW51LmFwcGVuZChtYWluQ291cnNlSGVhZGVyKTtcbiAgICBtYWluQ291cnNlSGVhZGVyLmlubmVyVGV4dCA9ICdNYWluIGNvdXJzZXM6JztcbiAgICBtYWluQ291cnNlSGVhZGVyLmNsYXNzTGlzdC5hZGQoJ21lbnUtaGVhZGVyJyk7XG4gICAgXG4gICAgLy8gTWFpbiBjb3Vyc2VzIG1lbnVcbiAgICBjb25zdCBtYWluQ291cnNlTWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29sJyk7XG4gICAgbWVudS5hcHBlbmQobWFpbkNvdXJzZU1lbnUpO1xuICAgIFxuICAgIGxldCBtYWluQ291cnNlSXRlbXMgPSBbXG4gICAgICAgIF9tZW51SXRlbShtYWluQ291cnNlTWVudSwgJ1NwYWdoZXR0aSBjYXJib25hcmEnLCAnTWFkZSB1c2luZyBwYW5jZXR0YSwgZWdncyBhbmQgcGFybWlnZ2lhbm8gcmVnZ2lhbm8uJyksXG4gICAgICAgIF9tZW51SXRlbShtYWluQ291cnNlTWVudSwgJ01hcmdoYXJpdGEnLCAnVGhlIGNsYXNzaWMgcGl6emEgd2l0aCB0b21hdG8gc2F1Y2UsIG1venphcmVsbGEgYW5kIGJhc2lsLicpXG4gICAgXTtcblxuICAgIG1haW5Db3Vyc2VNZW51LnNldEF0dHJpYnV0ZSgnc3RhcnQnLCBhcHBlcnRpemVySXRlbXMubGVuZ3RoICsgMSk7IC8vIENvbnRpbnVpbmcgdGhlIGxpc3RcblxuICAgIC8vIERlc3NlcnQgaGVhZGVyXG4gICAgY29uc3QgZGVzc2VydEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgbWVudS5hcHBlbmQoZGVzc2VydEhlYWRlcik7XG4gICAgZGVzc2VydEhlYWRlci5pbm5lclRleHQgPSAnRGVzc2VydHM6JztcbiAgICBkZXNzZXJ0SGVhZGVyLmNsYXNzTGlzdC5hZGQoJ21lbnUtaGVhZGVyJyk7XG4gICAgXG4gICAgLy8gTWFpbiBjb3Vyc2VzIG1lbnVcbiAgICBjb25zdCBkZXNzZXJ0TWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29sJyk7XG4gICAgbWVudS5hcHBlbmQoZGVzc2VydE1lbnUpO1xuICAgIFxuICAgIGxldCBkZXNzZXJ0SXRlbXMgPSBbXG4gICAgICAgIF9tZW51SXRlbShkZXNzZXJ0TWVudSwgJ1RpcmFtaXN1JywgJ1dpdGggYSBjcmVhbXkgYmFzZSBhbmQgY29udGFpbmluZyBhIGhpbnQgb2YgY29uamFjLicpLFxuICAgICAgICBfbWVudUl0ZW0oZGVzc2VydE1lbnUsICdQYW5uYSBjb3R0YScsICdXaXRoIHJhc3BiZXJyeSwgYmx1ZWJlcnJ5IGFuZCBhIGdlbGF0aW4gbGVhZi4nKVxuICAgIF07XG5cbiAgICBkZXNzZXJ0TWVudS5zZXRBdHRyaWJ1dGUoJ3N0YXJ0JywgYXBwZXJ0aXplckl0ZW1zLmxlbmd0aCArIG1haW5Db3Vyc2VJdGVtcy5sZW5ndGggKyAxKTsgLy8gQ29udGludWluZyB0aGUgbGlzdFxufVxuXG5jb25zdCBfYWJvdXRQYWdlID0gKHBhcmVudCkgPT4ge1xuICAgIGNvbnN0IGFib3V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcGFyZW50LmFwcGVuZChhYm91dCk7XG4gICAgYWJvdXQuY2xhc3NMaXN0LmFkZChcbiAgICAgICAgJ3BhZ2UnLFxuICAgICAgICAnYWJvdXQnXG4gICAgKTtcblxuICAgIC8vIEludHJvXG4gICAgY29uc3QgYWJvdXRIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGNvbnN0IGFib3V0VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgYWJvdXQuYXBwZW5kKGFib3V0SGVhZGVyKTtcbiAgICBhYm91dC5hcHBlbmQoYWJvdXRUZXh0KTtcbiAgICBhYm91dEhlYWRlci5pbm5lclRleHQgPSAnQWJvdXQgdXM6JztcbiAgICBhYm91dFRleHQuaW5uZXJUZXh0ID0gJ1RoaXMgaXMgYSBmYWtlIHJlc3RhdXJhbnQgcGFnZSBtYWRlIGJ5IG1lLiBZb3UgY2FuIGZpbmQgbXkgR2l0SHViIGxpbmsgYXQgdGhlIGJvdHRvbSBvZiB0aGlzIHBhZ2UhIDopJztcbiAgICBhYm91dEhlYWRlci5jbGFzc0xpc3QuYWRkKCdhYm91dC1oZWFkZXInKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN3aXRjaFBhZ2UodGFiKSB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG4gICAgY29udGVudC5pbm5lckhUTUwgPSAnJztcblxuICAgIHN3aXRjaCh0YWIuaW5uZXJUZXh0KSB7XG4gICAgICAgIGNhc2UgJ0hvbWUnOlxuICAgICAgICAgICAgX2hvbWVQYWdlKGNvbnRlbnQpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ01lbnUnOlxuICAgICAgICAgICAgX21lbnVQYWdlKGNvbnRlbnQpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ0Fib3V0JzpcbiAgICAgICAgICAgIF9hYm91dFBhZ2UoY29udGVudCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0U3dpdGNoUGFnZSgpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcbiAgICBfaG9tZVBhZ2UoY29udGVudCk7XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9