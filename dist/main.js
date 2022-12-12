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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --color-main: rgb(230, 230, 230);\n    \n    --bg-color-main: #3e3e3eae;\n    --bg-color-red: #ce2b37d0;\n    --bg-color-green: #009246d0;\n\n    --font-color-main: black;\n\n    --fs-huge: 2.6rem;\n    --fs-large: 1.5rem;\n    --fs-medium: 1.1rem;\n    --fs-small: .8rem;\n    --fs-tiny: .6rem;\n\n    --dist-medium: 1rem;\n}\n\n* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n    font-size: inherit;\n    font-family: inherit;\n    font-weight: inherit;\n    color: inherit;\n}\n\nbody {\n    min-height: 100vh;\n    font-size: 16px;\n    font-family: 'EB Garamond', serif;\n    display: grid;\n    grid: \"header header  header\" min-content\n          \".      content .\"      auto\n          \"footer footer  footer\" min-content\n          / auto  60%     auto;\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-repeat: no-repeat; \n    background-position: center; \n    background-attachment: fixed;\n    background-size: cover;\n}\n\n\n\n/* Header */\n\nheader {\n    grid-area: header;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding: var(--dist-medium) 0;\n    gap: var(--dist-medium);\n    font-weight: 800;\n    color: var(--color-main);\n    background: var(--bg-color-green);\n}\n\nheader h1 {\n    font-size: var(--fs-huge);\n}\n\nheader .tabs {\n    display: flex;\n    justify-content: center;\n    gap: var(--dist-medium);\n}\n\nheader .tabs button {\n    width: minmax(25vw, 200px);\n    border: none;\n    font-size: var(--fs-large);\n    padding: calc(var(--fs-large) * 0.3) calc(var(--fs-large) * 0.6);\n    background: inherit;\n    cursor: pointer;\n}\n\n\n\n/* Content */\n\n#content {\n    grid-area: content;\n    padding: calc(var(--dist-medium) * 3) calc(var(--dist-medium) * 4);\n    background: var(--bg-color-main);\n    color: var(--color-main);\n}\n\n#content .page {\n    display: flex;\n    flex-direction: column;\n    gap: .5rem;\n}\n\n#content .home {\n\n}\n\n#content .home .home-header,\n#content .menu .menu-header,\n#content .about .about-header {\n    font-weight: 500;\n    align-self: center;\n}\n\n#content .menu ol {\n    margin-left: 2rem;\n    margin-bottom: 2rem;\n}\n\n\n\n/* Footer */\n\nfooter {\n    grid-area: footer;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    padding: calc(var(--fs-medium) * 0.6);\n    font-size: var(--fs-medium);\n    color: var(--color-main);\n    background: var(--bg-color-red);\n}\n\nfooter div {\n    display: flex;\n    gap: calc(var(--fs-medium) * 0.2);\n}\n\nfooter h2 {\n    font-size: var(--fs-medium);\n}\n\n\n\n/* Shadows */\n\n.side-shadows {\n    position: relative;\n}\n\n.side-shadows:before,\n.side-shadows:after {\n    content: \" \";\n    height: 100%;\n    position: absolute;\n    top: 0;\n    width: 1rem;\n}\n\n.side-shadows:before {\n    box-shadow: -1rem 0 1rem -1rem inset var(--bg-color-main);\n    left: -1rem;\n}\n\n.side-shadows:after {\n    box-shadow: 1rem 0 1rem -1rem inset var(--bg-color-main);\n    right: -1rem;\n}\n\n\n\n/* Elements */\nh1 {\n    font-size: var(--fs-huge);\n}\n\nh2 {\n    font-size: var(--fs-large);\n}\n\nli {\n    font-size: var(--fs-large);\n}\n\np {\n    font-size: var(--fs-medium);\n}", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAEA;IACI,gCAAgC;;IAEhC,0BAA0B;IAC1B,yBAAyB;IACzB,2BAA2B;;IAE3B,wBAAwB;;IAExB,iBAAiB;IACjB,kBAAkB;IAClB,mBAAmB;IACnB,iBAAiB;IACjB,gBAAgB;;IAEhB,mBAAmB;AACvB;;AAEA;IACI,sBAAsB;IACtB,SAAS;IACT,UAAU;IACV,kBAAkB;IAClB,oBAAoB;IACpB,oBAAoB;IACpB,cAAc;AAClB;;AAEA;IACI,iBAAiB;IACjB,eAAe;IACf,iCAAiC;IACjC,aAAa;IACb;;;8BAG0B;IAC1B,mDAAyD;IACzD,4BAA4B;IAC5B,2BAA2B;IAC3B,4BAA4B;IAC5B,sBAAsB;AAC1B;;;;AAIA,WAAW;;AAEX;IACI,iBAAiB;IACjB,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,6BAA6B;IAC7B,uBAAuB;IACvB,gBAAgB;IAChB,wBAAwB;IACxB,iCAAiC;AACrC;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,uBAAuB;AAC3B;;AAEA;IACI,0BAA0B;IAC1B,YAAY;IACZ,0BAA0B;IAC1B,gEAAgE;IAChE,mBAAmB;IACnB,eAAe;AACnB;;;;AAIA,YAAY;;AAEZ;IACI,kBAAkB;IAClB,kEAAkE;IAClE,gCAAgC;IAChC,wBAAwB;AAC5B;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,UAAU;AACd;;AAEA;;AAEA;;AAEA;;;IAGI,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,iBAAiB;IACjB,mBAAmB;AACvB;;;;AAIA,WAAW;;AAEX;IACI,iBAAiB;IACjB,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,qCAAqC;IACrC,2BAA2B;IAC3B,wBAAwB;IACxB,+BAA+B;AACnC;;AAEA;IACI,aAAa;IACb,iCAAiC;AACrC;;AAEA;IACI,2BAA2B;AAC/B;;;;AAIA,YAAY;;AAEZ;IACI,kBAAkB;AACtB;;AAEA;;IAEI,YAAY;IACZ,YAAY;IACZ,kBAAkB;IAClB,MAAM;IACN,WAAW;AACf;;AAEA;IACI,yDAAyD;IACzD,WAAW;AACf;;AAEA;IACI,wDAAwD;IACxD,YAAY;AAChB;;;;AAIA,aAAa;AACb;IACI,yBAAyB;AAC7B;;AAEA;IACI,0BAA0B;AAC9B;;AAEA;IACI,0BAA0B;AAC9B;;AAEA;IACI,2BAA2B;AAC/B","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;500;600;700;800&display=swap');\n\n:root {\n    --color-main: rgb(230, 230, 230);\n    \n    --bg-color-main: #3e3e3eae;\n    --bg-color-red: #ce2b37d0;\n    --bg-color-green: #009246d0;\n\n    --font-color-main: black;\n\n    --fs-huge: 2.6rem;\n    --fs-large: 1.5rem;\n    --fs-medium: 1.1rem;\n    --fs-small: .8rem;\n    --fs-tiny: .6rem;\n\n    --dist-medium: 1rem;\n}\n\n* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n    font-size: inherit;\n    font-family: inherit;\n    font-weight: inherit;\n    color: inherit;\n}\n\nbody {\n    min-height: 100vh;\n    font-size: 16px;\n    font-family: 'EB Garamond', serif;\n    display: grid;\n    grid: \"header header  header\" min-content\n          \".      content .\"      auto\n          \"footer footer  footer\" min-content\n          / auto  60%     auto;\n    background: url('img/nik-owens-40OJLYVWeeM-unsplash.jpg');\n    background-repeat: no-repeat; \n    background-position: center; \n    background-attachment: fixed;\n    background-size: cover;\n}\n\n\n\n/* Header */\n\nheader {\n    grid-area: header;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding: var(--dist-medium) 0;\n    gap: var(--dist-medium);\n    font-weight: 800;\n    color: var(--color-main);\n    background: var(--bg-color-green);\n}\n\nheader h1 {\n    font-size: var(--fs-huge);\n}\n\nheader .tabs {\n    display: flex;\n    justify-content: center;\n    gap: var(--dist-medium);\n}\n\nheader .tabs button {\n    width: minmax(25vw, 200px);\n    border: none;\n    font-size: var(--fs-large);\n    padding: calc(var(--fs-large) * 0.3) calc(var(--fs-large) * 0.6);\n    background: inherit;\n    cursor: pointer;\n}\n\n\n\n/* Content */\n\n#content {\n    grid-area: content;\n    padding: calc(var(--dist-medium) * 3) calc(var(--dist-medium) * 4);\n    background: var(--bg-color-main);\n    color: var(--color-main);\n}\n\n#content .page {\n    display: flex;\n    flex-direction: column;\n    gap: .5rem;\n}\n\n#content .home {\n\n}\n\n#content .home .home-header,\n#content .menu .menu-header,\n#content .about .about-header {\n    font-weight: 500;\n    align-self: center;\n}\n\n#content .menu ol {\n    margin-left: 2rem;\n    margin-bottom: 2rem;\n}\n\n\n\n/* Footer */\n\nfooter {\n    grid-area: footer;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    padding: calc(var(--fs-medium) * 0.6);\n    font-size: var(--fs-medium);\n    color: var(--color-main);\n    background: var(--bg-color-red);\n}\n\nfooter div {\n    display: flex;\n    gap: calc(var(--fs-medium) * 0.2);\n}\n\nfooter h2 {\n    font-size: var(--fs-medium);\n}\n\n\n\n/* Shadows */\n\n.side-shadows {\n    position: relative;\n}\n\n.side-shadows:before,\n.side-shadows:after {\n    content: \" \";\n    height: 100%;\n    position: absolute;\n    top: 0;\n    width: 1rem;\n}\n\n.side-shadows:before {\n    box-shadow: -1rem 0 1rem -1rem inset var(--bg-color-main);\n    left: -1rem;\n}\n\n.side-shadows:after {\n    box-shadow: 1rem 0 1rem -1rem inset var(--bg-color-main);\n    right: -1rem;\n}\n\n\n\n/* Elements */\nh1 {\n    font-size: var(--fs-huge);\n}\n\nh2 {\n    font-size: var(--fs-large);\n}\n\nli {\n    font-size: var(--fs-large);\n}\n\np {\n    font-size: var(--fs-medium);\n}"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUN4RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsc0VBQXNFOztBQUV0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDRGQUE0RjtBQUM1Rjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL3NyYy9wYWdlcy9pbmRleC9pbml0UGFnZS5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9zcmMvcGFnZXMvaW5kZXgvc3dpdGNoUGFnZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiaW1nL25pay1vd2Vucy00ME9KTFlWV2VlTS11bnNwbGFzaC5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUVCK0dhcmFtb25kOndnaHRANDAwOzUwMDs2MDA7NzAwOzgwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgICAtLWNvbG9yLW1haW46IHJnYigyMzAsIDIzMCwgMjMwKTtcXG4gICAgXFxuICAgIC0tYmctY29sb3ItbWFpbjogIzNlM2UzZWFlO1xcbiAgICAtLWJnLWNvbG9yLXJlZDogI2NlMmIzN2QwO1xcbiAgICAtLWJnLWNvbG9yLWdyZWVuOiAjMDA5MjQ2ZDA7XFxuXFxuICAgIC0tZm9udC1jb2xvci1tYWluOiBibGFjaztcXG5cXG4gICAgLS1mcy1odWdlOiAyLjZyZW07XFxuICAgIC0tZnMtbGFyZ2U6IDEuNXJlbTtcXG4gICAgLS1mcy1tZWRpdW06IDEuMXJlbTtcXG4gICAgLS1mcy1zbWFsbDogLjhyZW07XFxuICAgIC0tZnMtdGlueTogLjZyZW07XFxuXFxuICAgIC0tZGlzdC1tZWRpdW06IDFyZW07XFxufVxcblxcbioge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICAgIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xcbiAgICBjb2xvcjogaW5oZXJpdDtcXG59XFxuXFxuYm9keSB7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIGZvbnQtZmFtaWx5OiAnRUIgR2FyYW1vbmQnLCBzZXJpZjtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZDogXFxcImhlYWRlciBoZWFkZXIgIGhlYWRlclxcXCIgbWluLWNvbnRlbnRcXG4gICAgICAgICAgXFxcIi4gICAgICBjb250ZW50IC5cXFwiICAgICAgYXV0b1xcbiAgICAgICAgICBcXFwiZm9vdGVyIGZvb3RlciAgZm9vdGVyXFxcIiBtaW4tY29udGVudFxcbiAgICAgICAgICAvIGF1dG8gIDYwJSAgICAgYXV0bztcXG4gICAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDsgXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjsgXFxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxufVxcblxcblxcblxcbi8qIEhlYWRlciAqL1xcblxcbmhlYWRlciB7XFxuICAgIGdyaWQtYXJlYTogaGVhZGVyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiB2YXIoLS1kaXN0LW1lZGl1bSkgMDtcXG4gICAgZ2FwOiB2YXIoLS1kaXN0LW1lZGl1bSk7XFxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1tYWluKTtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmctY29sb3ItZ3JlZW4pO1xcbn1cXG5cXG5oZWFkZXIgaDEge1xcbiAgICBmb250LXNpemU6IHZhcigtLWZzLWh1Z2UpO1xcbn1cXG5cXG5oZWFkZXIgLnRhYnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiB2YXIoLS1kaXN0LW1lZGl1bSk7XFxufVxcblxcbmhlYWRlciAudGFicyBidXR0b24ge1xcbiAgICB3aWR0aDogbWlubWF4KDI1dncsIDIwMHB4KTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBmb250LXNpemU6IHZhcigtLWZzLWxhcmdlKTtcXG4gICAgcGFkZGluZzogY2FsYyh2YXIoLS1mcy1sYXJnZSkgKiAwLjMpIGNhbGModmFyKC0tZnMtbGFyZ2UpICogMC42KTtcXG4gICAgYmFja2dyb3VuZDogaW5oZXJpdDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5cXG5cXG4vKiBDb250ZW50ICovXFxuXFxuI2NvbnRlbnQge1xcbiAgICBncmlkLWFyZWE6IGNvbnRlbnQ7XFxuICAgIHBhZGRpbmc6IGNhbGModmFyKC0tZGlzdC1tZWRpdW0pICogMykgY2FsYyh2YXIoLS1kaXN0LW1lZGl1bSkgKiA0KTtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmctY29sb3ItbWFpbik7XFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1tYWluKTtcXG59XFxuXFxuI2NvbnRlbnQgLnBhZ2Uge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IC41cmVtO1xcbn1cXG5cXG4jY29udGVudCAuaG9tZSB7XFxuXFxufVxcblxcbiNjb250ZW50IC5ob21lIC5ob21lLWhlYWRlcixcXG4jY29udGVudCAubWVudSAubWVudS1oZWFkZXIsXFxuI2NvbnRlbnQgLmFib3V0IC5hYm91dC1oZWFkZXIge1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbiNjb250ZW50IC5tZW51IG9sIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDJyZW07XFxuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XFxufVxcblxcblxcblxcbi8qIEZvb3RlciAqL1xcblxcbmZvb3RlciB7XFxuICAgIGdyaWQtYXJlYTogZm9vdGVyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogY2FsYyh2YXIoLS1mcy1tZWRpdW0pICogMC42KTtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1mcy1tZWRpdW0pO1xcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItbWFpbik7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWJnLWNvbG9yLXJlZCk7XFxufVxcblxcbmZvb3RlciBkaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IGNhbGModmFyKC0tZnMtbWVkaXVtKSAqIDAuMik7XFxufVxcblxcbmZvb3RlciBoMiB7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tZnMtbWVkaXVtKTtcXG59XFxuXFxuXFxuXFxuLyogU2hhZG93cyAqL1xcblxcbi5zaWRlLXNoYWRvd3Mge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5zaWRlLXNoYWRvd3M6YmVmb3JlLFxcbi5zaWRlLXNoYWRvd3M6YWZ0ZXIge1xcbiAgICBjb250ZW50OiBcXFwiIFxcXCI7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIHdpZHRoOiAxcmVtO1xcbn1cXG5cXG4uc2lkZS1zaGFkb3dzOmJlZm9yZSB7XFxuICAgIGJveC1zaGFkb3c6IC0xcmVtIDAgMXJlbSAtMXJlbSBpbnNldCB2YXIoLS1iZy1jb2xvci1tYWluKTtcXG4gICAgbGVmdDogLTFyZW07XFxufVxcblxcbi5zaWRlLXNoYWRvd3M6YWZ0ZXIge1xcbiAgICBib3gtc2hhZG93OiAxcmVtIDAgMXJlbSAtMXJlbSBpbnNldCB2YXIoLS1iZy1jb2xvci1tYWluKTtcXG4gICAgcmlnaHQ6IC0xcmVtO1xcbn1cXG5cXG5cXG5cXG4vKiBFbGVtZW50cyAqL1xcbmgxIHtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1mcy1odWdlKTtcXG59XFxuXFxuaDIge1xcbiAgICBmb250LXNpemU6IHZhcigtLWZzLWxhcmdlKTtcXG59XFxuXFxubGkge1xcbiAgICBmb250LXNpemU6IHZhcigtLWZzLWxhcmdlKTtcXG59XFxuXFxucCB7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tZnMtbWVkaXVtKTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7SUFDSSxnQ0FBZ0M7O0lBRWhDLDBCQUEwQjtJQUMxQix5QkFBeUI7SUFDekIsMkJBQTJCOztJQUUzQix3QkFBd0I7O0lBRXhCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixnQkFBZ0I7O0lBRWhCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsb0JBQW9CO0lBQ3BCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGlDQUFpQztJQUNqQyxhQUFhO0lBQ2I7Ozs4QkFHMEI7SUFDMUIsbURBQXlEO0lBQ3pELDRCQUE0QjtJQUM1QiwyQkFBMkI7SUFDM0IsNEJBQTRCO0lBQzVCLHNCQUFzQjtBQUMxQjs7OztBQUlBLFdBQVc7O0FBRVg7SUFDSSxpQkFBaUI7SUFDakIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsNkJBQTZCO0lBQzdCLHVCQUF1QjtJQUN2QixnQkFBZ0I7SUFDaEIsd0JBQXdCO0lBQ3hCLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksMEJBQTBCO0lBQzFCLFlBQVk7SUFDWiwwQkFBMEI7SUFDMUIsZ0VBQWdFO0lBQ2hFLG1CQUFtQjtJQUNuQixlQUFlO0FBQ25COzs7O0FBSUEsWUFBWTs7QUFFWjtJQUNJLGtCQUFrQjtJQUNsQixrRUFBa0U7SUFDbEUsZ0NBQWdDO0lBQ2hDLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsVUFBVTtBQUNkOztBQUVBOztBQUVBOztBQUVBOzs7SUFHSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLG1CQUFtQjtBQUN2Qjs7OztBQUlBLFdBQVc7O0FBRVg7SUFDSSxpQkFBaUI7SUFDakIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLHFDQUFxQztJQUNyQywyQkFBMkI7SUFDM0Isd0JBQXdCO0lBQ3hCLCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLGFBQWE7SUFDYixpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSwyQkFBMkI7QUFDL0I7Ozs7QUFJQSxZQUFZOztBQUVaO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBOztJQUVJLFlBQVk7SUFDWixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSx5REFBeUQ7SUFDekQsV0FBVztBQUNmOztBQUVBO0lBQ0ksd0RBQXdEO0lBQ3hELFlBQVk7QUFDaEI7Ozs7QUFJQSxhQUFhO0FBQ2I7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSwyQkFBMkI7QUFDL0JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9RUIrR2FyYW1vbmQ6d2dodEA0MDA7NTAwOzYwMDs3MDA7ODAwJmRpc3BsYXk9c3dhcCcpO1xcblxcbjpyb290IHtcXG4gICAgLS1jb2xvci1tYWluOiByZ2IoMjMwLCAyMzAsIDIzMCk7XFxuICAgIFxcbiAgICAtLWJnLWNvbG9yLW1haW46ICMzZTNlM2VhZTtcXG4gICAgLS1iZy1jb2xvci1yZWQ6ICNjZTJiMzdkMDtcXG4gICAgLS1iZy1jb2xvci1ncmVlbjogIzAwOTI0NmQwO1xcblxcbiAgICAtLWZvbnQtY29sb3ItbWFpbjogYmxhY2s7XFxuXFxuICAgIC0tZnMtaHVnZTogMi42cmVtO1xcbiAgICAtLWZzLWxhcmdlOiAxLjVyZW07XFxuICAgIC0tZnMtbWVkaXVtOiAxLjFyZW07XFxuICAgIC0tZnMtc21hbGw6IC44cmVtO1xcbiAgICAtLWZzLXRpbnk6IC42cmVtO1xcblxcbiAgICAtLWRpc3QtbWVkaXVtOiAxcmVtO1xcbn1cXG5cXG4qIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XFxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgICBmb250LXdlaWdodDogaW5oZXJpdDtcXG4gICAgY29sb3I6IGluaGVyaXQ7XFxufVxcblxcbmJvZHkge1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBmb250LWZhbWlseTogJ0VCIEdhcmFtb25kJywgc2VyaWY7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQ6IFxcXCJoZWFkZXIgaGVhZGVyICBoZWFkZXJcXFwiIG1pbi1jb250ZW50XFxuICAgICAgICAgIFxcXCIuICAgICAgY29udGVudCAuXFxcIiAgICAgIGF1dG9cXG4gICAgICAgICAgXFxcImZvb3RlciBmb290ZXIgIGZvb3RlclxcXCIgbWluLWNvbnRlbnRcXG4gICAgICAgICAgLyBhdXRvICA2MCUgICAgIGF1dG87XFxuICAgIGJhY2tncm91bmQ6IHVybCgnaW1nL25pay1vd2Vucy00ME9KTFlWV2VlTS11bnNwbGFzaC5qcGcnKTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDsgXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjsgXFxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxufVxcblxcblxcblxcbi8qIEhlYWRlciAqL1xcblxcbmhlYWRlciB7XFxuICAgIGdyaWQtYXJlYTogaGVhZGVyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiB2YXIoLS1kaXN0LW1lZGl1bSkgMDtcXG4gICAgZ2FwOiB2YXIoLS1kaXN0LW1lZGl1bSk7XFxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1tYWluKTtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmctY29sb3ItZ3JlZW4pO1xcbn1cXG5cXG5oZWFkZXIgaDEge1xcbiAgICBmb250LXNpemU6IHZhcigtLWZzLWh1Z2UpO1xcbn1cXG5cXG5oZWFkZXIgLnRhYnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiB2YXIoLS1kaXN0LW1lZGl1bSk7XFxufVxcblxcbmhlYWRlciAudGFicyBidXR0b24ge1xcbiAgICB3aWR0aDogbWlubWF4KDI1dncsIDIwMHB4KTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBmb250LXNpemU6IHZhcigtLWZzLWxhcmdlKTtcXG4gICAgcGFkZGluZzogY2FsYyh2YXIoLS1mcy1sYXJnZSkgKiAwLjMpIGNhbGModmFyKC0tZnMtbGFyZ2UpICogMC42KTtcXG4gICAgYmFja2dyb3VuZDogaW5oZXJpdDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5cXG5cXG4vKiBDb250ZW50ICovXFxuXFxuI2NvbnRlbnQge1xcbiAgICBncmlkLWFyZWE6IGNvbnRlbnQ7XFxuICAgIHBhZGRpbmc6IGNhbGModmFyKC0tZGlzdC1tZWRpdW0pICogMykgY2FsYyh2YXIoLS1kaXN0LW1lZGl1bSkgKiA0KTtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmctY29sb3ItbWFpbik7XFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1tYWluKTtcXG59XFxuXFxuI2NvbnRlbnQgLnBhZ2Uge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IC41cmVtO1xcbn1cXG5cXG4jY29udGVudCAuaG9tZSB7XFxuXFxufVxcblxcbiNjb250ZW50IC5ob21lIC5ob21lLWhlYWRlcixcXG4jY29udGVudCAubWVudSAubWVudS1oZWFkZXIsXFxuI2NvbnRlbnQgLmFib3V0IC5hYm91dC1oZWFkZXIge1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbiNjb250ZW50IC5tZW51IG9sIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDJyZW07XFxuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XFxufVxcblxcblxcblxcbi8qIEZvb3RlciAqL1xcblxcbmZvb3RlciB7XFxuICAgIGdyaWQtYXJlYTogZm9vdGVyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogY2FsYyh2YXIoLS1mcy1tZWRpdW0pICogMC42KTtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1mcy1tZWRpdW0pO1xcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItbWFpbik7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWJnLWNvbG9yLXJlZCk7XFxufVxcblxcbmZvb3RlciBkaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IGNhbGModmFyKC0tZnMtbWVkaXVtKSAqIDAuMik7XFxufVxcblxcbmZvb3RlciBoMiB7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tZnMtbWVkaXVtKTtcXG59XFxuXFxuXFxuXFxuLyogU2hhZG93cyAqL1xcblxcbi5zaWRlLXNoYWRvd3Mge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5zaWRlLXNoYWRvd3M6YmVmb3JlLFxcbi5zaWRlLXNoYWRvd3M6YWZ0ZXIge1xcbiAgICBjb250ZW50OiBcXFwiIFxcXCI7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIHdpZHRoOiAxcmVtO1xcbn1cXG5cXG4uc2lkZS1zaGFkb3dzOmJlZm9yZSB7XFxuICAgIGJveC1zaGFkb3c6IC0xcmVtIDAgMXJlbSAtMXJlbSBpbnNldCB2YXIoLS1iZy1jb2xvci1tYWluKTtcXG4gICAgbGVmdDogLTFyZW07XFxufVxcblxcbi5zaWRlLXNoYWRvd3M6YWZ0ZXIge1xcbiAgICBib3gtc2hhZG93OiAxcmVtIDAgMXJlbSAtMXJlbSBpbnNldCB2YXIoLS1iZy1jb2xvci1tYWluKTtcXG4gICAgcmlnaHQ6IC0xcmVtO1xcbn1cXG5cXG5cXG5cXG4vKiBFbGVtZW50cyAqL1xcbmgxIHtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1mcy1odWdlKTtcXG59XFxuXFxuaDIge1xcbiAgICBmb250LXNpemU6IHZhcigtLWZzLWxhcmdlKTtcXG59XFxuXFxubGkge1xcbiAgICBmb250LXNpemU6IHZhcigtLWZzLWxhcmdlKTtcXG59XFxuXFxucCB7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tZnMtbWVkaXVtKTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0ICcuL3N0eWxlcy5jc3MnO1xuaW1wb3J0IHsgaW5pdFBhZ2UgfSBmcm9tICcuL3BhZ2VzL2luZGV4L2luaXRQYWdlJztcbmltcG9ydCB7IHN3aXRjaFBhZ2UsIGluaXRTd2l0Y2hQYWdlIH0gZnJvbSAnLi9wYWdlcy9pbmRleC9zd2l0Y2hQYWdlJztcblxuY29uc3QgdGFicyA9IGluaXRQYWdlKCk7XG5pbml0U3dpdGNoUGFnZSgnSG9tZScpO1xuXG50YWJzLmZvckVhY2godGFiID0+IHtcbiAgICB0YWIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHN3aXRjaFBhZ2UodGFiKTtcbiAgICB9KTtcbn0pOyIsImNvbnN0IGNyZWF0ZVRhYiA9ICh0ZXh0LCB0YWJzKSA9PiB7XG4gICAgY29uc3QgdGFiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgdGFicy5hcHBlbmQodGFiKTtcbiAgICBcbiAgICB0YWIuY2xhc3NMaXN0LmFkZChcbiAgICAgICAgJ3RhYicsIFxuICAgICAgICAnaG92ZXItdXAnLCBcbiAgICAgICAgJ2hvdmVyLWxpbmUnXG4gICAgKTtcbiAgICB0YWIuaW5uZXJUZXh0ID0gdGV4dDtcblxuICAgIHJldHVybiB0YWI7XG59XG5cbmNvbnN0IGhlYWRlciA9ICgpID0+IHtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkZXInKTtcblxuICAgIC8vIFJlc3RhdXJhbnQgdGV4dFxuICAgIGNvbnN0IGhlYWRlclRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGhlYWRlci5hcHBlbmQoaGVhZGVyVGV4dCk7XG4gICAgaGVhZGVyVGV4dC5pbm5lclRleHQgPSAnUmVzdGF1cmFudCBwYWdlJztcblxuICAgIC8vIFRhYiBkaXZcbiAgICBjb25zdCB0YWJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBoZWFkZXIuYXBwZW5kKHRhYkRpdik7XG4gICAgdGFiRGl2LmNsYXNzTGlzdC5hZGQoJ3RhYnMnKTtcblxuICAgIC8vIFRhYnNcbiAgICBsZXQgdGFicyA9IFtcbiAgICAgICAgY3JlYXRlVGFiKCdIb21lJywgdGFiRGl2KSxcbiAgICAgICAgY3JlYXRlVGFiKCdNZW51JywgdGFiRGl2KSxcbiAgICAgICAgY3JlYXRlVGFiKCdBYm91dCcsIHRhYkRpdilcbiAgICBdO1xuXG4gICAgcmV0dXJuIHRhYnM7XG59XG5cbmNvbnN0IGZvb3RlciA9ICgpID0+IHtcbiAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb290ZXInKTtcblxuICAgIC8vIENyZWRpdCBkaXZcbiAgICBjb25zdCBjcmVkaXREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmb290ZXIuYXBwZW5kKGNyZWRpdERpdik7XG4gICAgXG4gICAgLy8gQXV0aG9yIHRleHRcbiAgICBjb25zdCBhdXRob3JUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBjcmVkaXREaXYuYXBwZW5kKGF1dGhvclRleHQpO1xuICAgIGF1dGhvclRleHQuaW5uZXJUZXh0ID0gJ0NyZWF0ZWQgYnkgJztcblxuICAgIC8vIEdpdEh1YiBMaW5rXG4gICAgY29uc3QgZ2l0SHViTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBjcmVkaXREaXYuYXBwZW5kKGdpdEh1YkxpbmspO1xuICAgIGdpdEh1YkxpbmsuaHJlZiA9ICdodHRwczovL2dpdGh1Yi5jb20vU3R1ZHNtaW5pc3Rlcm4nO1xuICAgIGdpdEh1YkxpbmsuaW5uZXJUZXh0ID0gJ0VyaWMgV2VpZG93JztcblxuICAgIC8vIEltYWdlIGRpdlxuICAgIGNvbnN0IGltYWdlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZm9vdGVyLmFwcGVuZChpbWFnZURpdik7XG5cbiAgICAvLyBJbWFnZSByZWZlcmVuY2UgdGV4dFxuICAgIGNvbnN0IGltYWdlVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgaW1hZ2VEaXYuYXBwZW5kKGltYWdlVGV4dCk7XG4gICAgaW1hZ2VUZXh0LmlubmVyVGV4dCA9ICdQaG90byBieSdcbiAgICBcbiAgICAvLyBQaG90b2dyYXBoIGxpbmtcbiAgICBjb25zdCBwaG90b2dyYXBoTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBpbWFnZURpdi5hcHBlbmQocGhvdG9ncmFwaExpbmspO1xuICAgIHBob3RvZ3JhcGhMaW5rLmhyZWYgPSAnaHR0cHM6Ly91bnNwbGFzaC5jb20vQG5pa19vd2Vucz91dG1fc291cmNlPXVuc3BsYXNoJnV0bV9tZWRpdW09cmVmZXJyYWwmdXRtX2NvbnRlbnQ9Y3JlZGl0Q29weVRleHQnO1xuICAgIHBob3RvZ3JhcGhMaW5rLmlubmVyVGV4dCA9ICdOaWsgT3dlbnMnO1xuXG4gICAgaW1hZ2VEaXYuYXBwZW5kKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJykuaW5uZXJUZXh0ID0gJ29uJyk7XG5cbiAgICAvLyBJbWFnZSBsaW5rXG4gICAgY29uc3QgaW1hZ2VMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIGltYWdlRGl2LmFwcGVuZChpbWFnZUxpbmspO1xuICAgIGltYWdlTGluay5ocmVmID0gJ2h0dHBzOi8vdW5zcGxhc2guY29tL3MvcGhvdG9zL05lYXBvbGl0YW4tcGl6emE/dXRtX3NvdXJjZT11bnNwbGFzaCZ1dG1fbWVkaXVtPXJlZmVycmFsJnV0bV9jb250ZW50PWNyZWRpdENvcHlUZXh0JztcbiAgICBpbWFnZUxpbmsuaW5uZXJUZXh0ID0gJ1Vuc3BsYXNoJztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRQYWdlKCkge1xuICAgIGxldCB0YWJzID0gaGVhZGVyKCk7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG4gICAgY29udGVudC5jbGFzc0xpc3QuYWRkKCBcbiAgICAgICAgJ3NpZGUtc2hhZG93cydcbiAgICApO1xuICAgIGZvb3RlcigpO1xuXG4gICAgcmV0dXJuIHRhYnM7XG59IiwiY29uc3QgX2hvbWVQYWdlID0gKHBhcmVudCkgPT4ge1xuICAgIGNvbnN0IGhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwYXJlbnQuYXBwZW5kKGhvbWUpO1xuICAgIGhvbWUuY2xhc3NMaXN0LmFkZChcbiAgICAgICAgJ3BhZ2UnLFxuICAgICAgICAnaG9tZSdcbiAgICApO1xuXG4gICAgLy8gV2VsY29tZSB0ZXh0XG4gICAgY29uc3QgaG9tZUhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgY29uc3QgaG9tZVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGhvbWUuYXBwZW5kKGhvbWVIZWFkZXIpO1xuICAgIGhvbWUuYXBwZW5kKGhvbWVUZXh0KTtcbiAgICBob21lSGVhZGVyLmlubmVyVGV4dCA9ICdXZWxjb21lISc7XG4gICAgaG9tZVRleHQuaW5uZXJUZXh0ID0gJ1RoaXMgaXMgYSBmYWtlIHJlc3RhdXJhbnQgcGFnZSBmb3IgYSBmYWtlIHJlc3RhdXJhbnQuIFRoZSBsb2NhdGlvbiBpcyBhbHNvIGZha2UuIEFuZCB0aGUgZm9vZC4gQnV0IHlvdSBzaG91bGQgdHJ5IHRoZSByZWFsIGZvb2QsIGluIHJlYWwgbGlmZSBpdCBpcyBnb29kLic7XG4gICAgaG9tZUhlYWRlci5jbGFzc0xpc3QuYWRkKCdob21lLWhlYWRlcicpO1xufVxuXG5jb25zdCBfbWVudUl0ZW0gPSAoXG4gICAgICAgIHBhcmVudCwgXG4gICAgICAgIG5hbWUsXG4gICAgICAgIGRlc2NyaXB0aW9uXG4gICAgKSA9PiB7XG4gICAgY29uc3QgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgcGFyZW50LmFwcGVuZChpdGVtKTtcblxuICAgIC8vIE1lbnUgaXRlbSBkaXZcbiAgICBjb25zdCBpdGVtRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaXRlbS5hcHBlbmQoaXRlbURpdik7XG4gICAgXG4gICAgLy8gTWVudSBpdGVtIGhlYWRlclxuICAgIGNvbnN0IGl0ZW1OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBpdGVtRGl2LmFwcGVuZChpdGVtTmFtZSk7XG4gICAgaXRlbU5hbWUuaW5uZXJUZXh0ID0gbmFtZTtcblxuICAgIC8vIE1lbnUgaXRlbSBkZXNjcmlwdGlvblxuICAgIGNvbnN0IGl0ZW1EZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgaXRlbURpdi5hcHBlbmQoaXRlbURlc2NyaXB0aW9uKTtcbiAgICBpdGVtRGVzY3JpcHRpb24uaW5uZXJUZXh0ID0gZGVzY3JpcHRpb247XG59XG5cbmNvbnN0IF9tZW51UGFnZSA9IChwYXJlbnQpID0+IHtcbiAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcGFyZW50LmFwcGVuZChtZW51KTtcbiAgICBtZW51LmNsYXNzTGlzdC5hZGQoXG4gICAgICAgICdwYWdlJyxcbiAgICAgICAgJ21lbnUnXG4gICAgKTtcblxuICAgIC8vIEFwcGVydGl6ZXIgaGVhZGVyXG4gICAgY29uc3QgYXBwZXJ0aXplckhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgbWVudS5hcHBlbmQoYXBwZXJ0aXplckhlYWRlcik7XG4gICAgYXBwZXJ0aXplckhlYWRlci5pbm5lclRleHQgPSAnQXBwZXJ0aXplcnM6JztcbiAgICBhcHBlcnRpemVySGVhZGVyLmNsYXNzTGlzdC5hZGQoJ21lbnUtaGVhZGVyJyk7XG4gICAgXG4gICAgLy8gQXBwZXJ0aXplciBtZW51XG4gICAgY29uc3QgYXBwZXJ0aXplck1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvbCcpO1xuICAgIG1lbnUuYXBwZW5kKGFwcGVydGl6ZXJNZW51KTtcbiAgICBcbiAgICBsZXQgYXBwZXJ0aXplckl0ZW1zID0gW1xuICAgICAgICBfbWVudUl0ZW0oYXBwZXJ0aXplck1lbnUsICdHYXJsaWMgYnJlYWQnLCAnSXRhbGlhbiBicmVhZCB3aXRoIGdhcmxpYyBidXR0ZXIuJyksXG4gICAgICAgIF9tZW51SXRlbShhcHBlcnRpemVyTWVudSwgJ0JydXNjaGV0dGEnLCAnSXRhbGlhbiBicmVhZCB3aXRoIGZyZXNoIHRvbWF0bywgYmFzaWwgYW5kIG9saXZlIG9pbC4nKVxuICAgIF07XG5cbiAgICAvLyBNYWluIGNvdXJzZXMgaGVhZGVyXG4gICAgY29uc3QgbWFpbkNvdXJzZUhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgbWVudS5hcHBlbmQobWFpbkNvdXJzZUhlYWRlcik7XG4gICAgbWFpbkNvdXJzZUhlYWRlci5pbm5lclRleHQgPSAnTWFpbiBjb3Vyc2VzOic7XG4gICAgbWFpbkNvdXJzZUhlYWRlci5jbGFzc0xpc3QuYWRkKCdtZW51LWhlYWRlcicpO1xuICAgIFxuICAgIC8vIE1haW4gY291cnNlcyBtZW51XG4gICAgY29uc3QgbWFpbkNvdXJzZU1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvbCcpO1xuICAgIG1lbnUuYXBwZW5kKG1haW5Db3Vyc2VNZW51KTtcbiAgICBcbiAgICBsZXQgbWFpbkNvdXJzZUl0ZW1zID0gW1xuICAgICAgICBfbWVudUl0ZW0obWFpbkNvdXJzZU1lbnUsICdTcGFnaGV0dGkgY2FyYm9uYXJhJywgJ01hZGUgdXNpbmcgcGFuY2V0dGEsIGVnZ3MgYW5kIHBhcm1pZ2dpYW5vIHJlZ2dpYW5vLicpLFxuICAgICAgICBfbWVudUl0ZW0obWFpbkNvdXJzZU1lbnUsICdNYXJnaGFyaXRhJywgJ1RoZSBjbGFzc2ljIHBpenphIHdpdGggdG9tYXRvIHNhdWNlLCBtb3p6YXJlbGxhIGFuZCBiYXNpbC4nKVxuICAgIF07XG5cbiAgICBtYWluQ291cnNlTWVudS5zZXRBdHRyaWJ1dGUoJ3N0YXJ0JywgYXBwZXJ0aXplckl0ZW1zLmxlbmd0aCArIDEpOyAvLyBDb250aW51aW5nIHRoZSBsaXN0XG5cbiAgICAvLyBEZXNzZXJ0IGhlYWRlclxuICAgIGNvbnN0IGRlc3NlcnRIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIG1lbnUuYXBwZW5kKGRlc3NlcnRIZWFkZXIpO1xuICAgIGRlc3NlcnRIZWFkZXIuaW5uZXJUZXh0ID0gJ0Rlc3NlcnRzOic7XG4gICAgZGVzc2VydEhlYWRlci5jbGFzc0xpc3QuYWRkKCdtZW51LWhlYWRlcicpO1xuICAgIFxuICAgIC8vIE1haW4gY291cnNlcyBtZW51XG4gICAgY29uc3QgZGVzc2VydE1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvbCcpO1xuICAgIG1lbnUuYXBwZW5kKGRlc3NlcnRNZW51KTtcbiAgICBcbiAgICBsZXQgZGVzc2VydEl0ZW1zID0gW1xuICAgICAgICBfbWVudUl0ZW0oZGVzc2VydE1lbnUsICdUaXJhbWlzdScsICdXaXRoIGEgY3JlYW15IGJhc2UgYW5kIGNvbnRhaW5pbmcgYSBoaW50IG9mIGNvbmphYy4nKSxcbiAgICAgICAgX21lbnVJdGVtKGRlc3NlcnRNZW51LCAnUGFubmEgY290dGEnLCAnV2l0aCByYXNwYmVycnksIGJsdWViZXJyeSBhbmQgYSBnZWxhdGluIGxlYWYuJylcbiAgICBdO1xuXG4gICAgZGVzc2VydE1lbnUuc2V0QXR0cmlidXRlKCdzdGFydCcsIGFwcGVydGl6ZXJJdGVtcy5sZW5ndGggKyBtYWluQ291cnNlSXRlbXMubGVuZ3RoICsgMSk7IC8vIENvbnRpbnVpbmcgdGhlIGxpc3Rcbn1cblxuY29uc3QgX2Fib3V0UGFnZSA9IChwYXJlbnQpID0+IHtcbiAgICBjb25zdCBhYm91dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHBhcmVudC5hcHBlbmQoYWJvdXQpO1xuICAgIGFib3V0LmNsYXNzTGlzdC5hZGQoXG4gICAgICAgICdwYWdlJyxcbiAgICAgICAgJ2Fib3V0J1xuICAgICk7XG5cbiAgICAvLyBJbnRyb1xuICAgIGNvbnN0IGFib3V0SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBjb25zdCBhYm91dFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGFib3V0LmFwcGVuZChhYm91dEhlYWRlcik7XG4gICAgYWJvdXQuYXBwZW5kKGFib3V0VGV4dCk7XG4gICAgYWJvdXRIZWFkZXIuaW5uZXJUZXh0ID0gJ0Fib3V0IHVzOic7XG4gICAgYWJvdXRUZXh0LmlubmVyVGV4dCA9ICdUaGlzIGlzIGEgZmFrZSByZXN0YXVyYW50IHBhZ2UgbWFkZSBieSBtZS4gWW91IGNhbiBmaW5kIG15IEdpdEh1YiBsaW5rIGF0IHRoZSBib3R0b20gb2YgdGhpcyBwYWdlISA6KSc7XG4gICAgYWJvdXRIZWFkZXIuY2xhc3NMaXN0LmFkZCgnYWJvdXQtaGVhZGVyJyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzd2l0Y2hQYWdlKHRhYikge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gJyc7XG5cbiAgICBzd2l0Y2godGFiLmlubmVyVGV4dCkge1xuICAgICAgICBjYXNlICdIb21lJzpcbiAgICAgICAgICAgIF9ob21lUGFnZShjb250ZW50KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdNZW51JzpcbiAgICAgICAgICAgIF9tZW51UGFnZShjb250ZW50KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdBYm91dCc6XG4gICAgICAgICAgICBfYWJvdXRQYWdlKGNvbnRlbnQpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5pdFN3aXRjaFBhZ2UoKSB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG4gICAgX2hvbWVQYWdlKGNvbnRlbnQpO1xufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==