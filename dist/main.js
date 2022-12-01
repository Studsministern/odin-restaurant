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
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;500;600;700;800&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --bg-color-main: rgb(248, 248, 248);\n    --bg-color-secondary: #f4f4f4;\n    --bg-color-red: #ce2b37;\n    --bg-color-green: #009246;\n\n    --font-color-main: black;\n\n    --fs-huge: 2.6rem;\n    --fs-large: 1.5rem;\n    --fs-medium: 1.1rem;\n    --fs-small: .8rem;\n    --fs-tiny: .6rem;\n\n    --dist-medium: 1rem;\n}\n\n* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n    font-size: inherit;\n    font-family: inherit;\n    font-weight: inherit;\n    color: inherit;\n}\n\nbody {\n    min-height: 100vh;\n    font-size: 16px;\n    font-family: 'EB Garamond', serif;\n    display: grid;\n    grid: \"header header  header\" min-content\n          \".      content .\"      auto\n          \"footer footer  footer\" 10vh\n          / auto  60%     auto;\n    background: var(--bg-color-secondary);\n}\n\n\n\n/* Header */\n\nheader {\n    grid-area: header;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding: var(--dist-medium) 0;\n    gap: var(--dist-medium);\n    font-weight: 800;\n    color: var(--bg-color-secondary);\n    background: var(--bg-color-green);\n}\n\nheader h1 {\n    font-size: var(--fs-huge);\n}\n\nheader .tabs {\n    display: flex;\n    justify-content: center;\n    gap: var(--dist-medium);\n}\n\nheader .tabs button {\n    width: minmax(25vw, 200px);\n    border: none;\n    font-size: var(--fs-large);\n    padding: calc(var(--fs-large) * 0.3) calc(var(--fs-large) * 0.6);\n    background: inherit;\n    cursor: pointer;\n}\n\n\n\n/* Content */\n\n#content {\n    grid-area: content;\n    padding: calc(var(--dist-medium) * 3) calc(var(--dist-medium) * 4);\n    background: var(--bg-color-main);\n}\n\n#content .page {\n    display: flex;\n    flex-direction: column;\n    gap: .5rem;\n}\n\n#content .home {\n\n}\n\n#content .home .home-header,\n#content .menu .menu-header,\n#content .about .about-header {\n    font-weight: 500;\n    align-self: center;\n}\n\n#content .menu ol {\n    margin-left: 2rem;\n    margin-bottom: 2rem;\n}\n\n\n\n/* Footer */\n\nfooter {\n    grid-area: footer;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: var(--fs-medium);\n    color: var(--bg-color-secondary);\n    background: var(--bg-color-red);\n}\n\nfooter div {\n    display: flex;\n    gap: calc(var(--fs-medium) * 0.2);\n}\n\nfooter h2 {\n    font-size: var(--fs-medium);\n}\n\n\n\n/* Shadows */\n\n.side-shadows {\n    position: relative;\n}\n\n.side-shadows:before,\n.side-shadows:after {\n    content: \" \";\n    height: 100%;\n    position: absolute;\n    top: 0;\n    width: 1rem;\n}\n\n.side-shadows:before {\n    box-shadow: -1rem 0 1rem -1rem inset var(--bg-color-main);\n    left: -1rem;\n}\n\n.side-shadows:after {\n    box-shadow: 1rem 0 1rem -1rem inset var(--bg-color-main);\n    right: -1rem;\n}\n\n\n\n/* Elements */\nh1 {\n    font-size: var(--fs-huge);\n}\n\nh2 {\n    font-size: var(--fs-large);\n}\n\nli {\n    font-size: var(--fs-large);\n}\n\np {\n    font-size: var(--fs-medium);\n}", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAEA;IACI,mCAAmC;IACnC,6BAA6B;IAC7B,uBAAuB;IACvB,yBAAyB;;IAEzB,wBAAwB;;IAExB,iBAAiB;IACjB,kBAAkB;IAClB,mBAAmB;IACnB,iBAAiB;IACjB,gBAAgB;;IAEhB,mBAAmB;AACvB;;AAEA;IACI,sBAAsB;IACtB,SAAS;IACT,UAAU;IACV,kBAAkB;IAClB,oBAAoB;IACpB,oBAAoB;IACpB,cAAc;AAClB;;AAEA;IACI,iBAAiB;IACjB,eAAe;IACf,iCAAiC;IACjC,aAAa;IACb;;;8BAG0B;IAC1B,qCAAqC;AACzC;;;;AAIA,WAAW;;AAEX;IACI,iBAAiB;IACjB,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,6BAA6B;IAC7B,uBAAuB;IACvB,gBAAgB;IAChB,gCAAgC;IAChC,iCAAiC;AACrC;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,uBAAuB;AAC3B;;AAEA;IACI,0BAA0B;IAC1B,YAAY;IACZ,0BAA0B;IAC1B,gEAAgE;IAChE,mBAAmB;IACnB,eAAe;AACnB;;;;AAIA,YAAY;;AAEZ;IACI,kBAAkB;IAClB,kEAAkE;IAClE,gCAAgC;AACpC;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,UAAU;AACd;;AAEA;;AAEA;;AAEA;;;IAGI,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,iBAAiB;IACjB,mBAAmB;AACvB;;;;AAIA,WAAW;;AAEX;IACI,iBAAiB;IACjB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,2BAA2B;IAC3B,gCAAgC;IAChC,+BAA+B;AACnC;;AAEA;IACI,aAAa;IACb,iCAAiC;AACrC;;AAEA;IACI,2BAA2B;AAC/B;;;;AAIA,YAAY;;AAEZ;IACI,kBAAkB;AACtB;;AAEA;;IAEI,YAAY;IACZ,YAAY;IACZ,kBAAkB;IAClB,MAAM;IACN,WAAW;AACf;;AAEA;IACI,yDAAyD;IACzD,WAAW;AACf;;AAEA;IACI,wDAAwD;IACxD,YAAY;AAChB;;;;AAIA,aAAa;AACb;IACI,yBAAyB;AAC7B;;AAEA;IACI,0BAA0B;AAC9B;;AAEA;IACI,0BAA0B;AAC9B;;AAEA;IACI,2BAA2B;AAC/B","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;500;600;700;800&display=swap');\n\n:root {\n    --bg-color-main: rgb(248, 248, 248);\n    --bg-color-secondary: #f4f4f4;\n    --bg-color-red: #ce2b37;\n    --bg-color-green: #009246;\n\n    --font-color-main: black;\n\n    --fs-huge: 2.6rem;\n    --fs-large: 1.5rem;\n    --fs-medium: 1.1rem;\n    --fs-small: .8rem;\n    --fs-tiny: .6rem;\n\n    --dist-medium: 1rem;\n}\n\n* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n    font-size: inherit;\n    font-family: inherit;\n    font-weight: inherit;\n    color: inherit;\n}\n\nbody {\n    min-height: 100vh;\n    font-size: 16px;\n    font-family: 'EB Garamond', serif;\n    display: grid;\n    grid: \"header header  header\" min-content\n          \".      content .\"      auto\n          \"footer footer  footer\" 10vh\n          / auto  60%     auto;\n    background: var(--bg-color-secondary);\n}\n\n\n\n/* Header */\n\nheader {\n    grid-area: header;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding: var(--dist-medium) 0;\n    gap: var(--dist-medium);\n    font-weight: 800;\n    color: var(--bg-color-secondary);\n    background: var(--bg-color-green);\n}\n\nheader h1 {\n    font-size: var(--fs-huge);\n}\n\nheader .tabs {\n    display: flex;\n    justify-content: center;\n    gap: var(--dist-medium);\n}\n\nheader .tabs button {\n    width: minmax(25vw, 200px);\n    border: none;\n    font-size: var(--fs-large);\n    padding: calc(var(--fs-large) * 0.3) calc(var(--fs-large) * 0.6);\n    background: inherit;\n    cursor: pointer;\n}\n\n\n\n/* Content */\n\n#content {\n    grid-area: content;\n    padding: calc(var(--dist-medium) * 3) calc(var(--dist-medium) * 4);\n    background: var(--bg-color-main);\n}\n\n#content .page {\n    display: flex;\n    flex-direction: column;\n    gap: .5rem;\n}\n\n#content .home {\n\n}\n\n#content .home .home-header,\n#content .menu .menu-header,\n#content .about .about-header {\n    font-weight: 500;\n    align-self: center;\n}\n\n#content .menu ol {\n    margin-left: 2rem;\n    margin-bottom: 2rem;\n}\n\n\n\n/* Footer */\n\nfooter {\n    grid-area: footer;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: var(--fs-medium);\n    color: var(--bg-color-secondary);\n    background: var(--bg-color-red);\n}\n\nfooter div {\n    display: flex;\n    gap: calc(var(--fs-medium) * 0.2);\n}\n\nfooter h2 {\n    font-size: var(--fs-medium);\n}\n\n\n\n/* Shadows */\n\n.side-shadows {\n    position: relative;\n}\n\n.side-shadows:before,\n.side-shadows:after {\n    content: \" \";\n    height: 100%;\n    position: absolute;\n    top: 0;\n    width: 1rem;\n}\n\n.side-shadows:before {\n    box-shadow: -1rem 0 1rem -1rem inset var(--bg-color-main);\n    left: -1rem;\n}\n\n.side-shadows:after {\n    box-shadow: 1rem 0 1rem -1rem inset var(--bg-color-main);\n    right: -1rem;\n}\n\n\n\n/* Elements */\nh1 {\n    font-size: var(--fs-huge);\n}\n\nh2 {\n    font-size: var(--fs-large);\n}\n\nli {\n    font-size: var(--fs-large);\n}\n\np {\n    font-size: var(--fs-medium);\n}"],"sourceRoot":""}]);
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
        'hover-line', 
        'semi-transparent'
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

    // Credit text
    const creditText = document.createElement('div');
    footer.append(creditText);
    
    // Author text
    const authorText = document.createElement('h2');
    creditText.append(authorText);
    authorText.innerText = 'Created by ';

    // GitHub Link
    const gitHubLink = document.createElement('a');
    creditText.append(gitHubLink);
    gitHubLink.href = 'https://github.com/Studsministern';
    gitHubLink.innerText = 'Eric Weidow';
}

function initPage() {
    let tabs = header();
    const content = document.querySelector('#content');
    content.classList.add('side-shadows');
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

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxzRUFBc0U7O0FBRXRFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsNEZBQTRGO0FBQzVGOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL3NyYy9wYWdlcy9pbmRleC9pbml0UGFnZS5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9zcmMvcGFnZXMvaW5kZXgvc3dpdGNoUGFnZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUVCK0dhcmFtb25kOndnaHRANDAwOzUwMDs2MDA7NzAwOzgwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAgIC0tYmctY29sb3ItbWFpbjogcmdiKDI0OCwgMjQ4LCAyNDgpO1xcbiAgICAtLWJnLWNvbG9yLXNlY29uZGFyeTogI2Y0ZjRmNDtcXG4gICAgLS1iZy1jb2xvci1yZWQ6ICNjZTJiMzc7XFxuICAgIC0tYmctY29sb3ItZ3JlZW46ICMwMDkyNDY7XFxuXFxuICAgIC0tZm9udC1jb2xvci1tYWluOiBibGFjaztcXG5cXG4gICAgLS1mcy1odWdlOiAyLjZyZW07XFxuICAgIC0tZnMtbGFyZ2U6IDEuNXJlbTtcXG4gICAgLS1mcy1tZWRpdW06IDEuMXJlbTtcXG4gICAgLS1mcy1zbWFsbDogLjhyZW07XFxuICAgIC0tZnMtdGlueTogLjZyZW07XFxuXFxuICAgIC0tZGlzdC1tZWRpdW06IDFyZW07XFxufVxcblxcbioge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICAgIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xcbiAgICBjb2xvcjogaW5oZXJpdDtcXG59XFxuXFxuYm9keSB7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIGZvbnQtZmFtaWx5OiAnRUIgR2FyYW1vbmQnLCBzZXJpZjtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZDogXFxcImhlYWRlciBoZWFkZXIgIGhlYWRlclxcXCIgbWluLWNvbnRlbnRcXG4gICAgICAgICAgXFxcIi4gICAgICBjb250ZW50IC5cXFwiICAgICAgYXV0b1xcbiAgICAgICAgICBcXFwiZm9vdGVyIGZvb3RlciAgZm9vdGVyXFxcIiAxMHZoXFxuICAgICAgICAgIC8gYXV0byAgNjAlICAgICBhdXRvO1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1jb2xvci1zZWNvbmRhcnkpO1xcbn1cXG5cXG5cXG5cXG4vKiBIZWFkZXIgKi9cXG5cXG5oZWFkZXIge1xcbiAgICBncmlkLWFyZWE6IGhlYWRlcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogdmFyKC0tZGlzdC1tZWRpdW0pIDA7XFxuICAgIGdhcDogdmFyKC0tZGlzdC1tZWRpdW0pO1xcbiAgICBmb250LXdlaWdodDogODAwO1xcbiAgICBjb2xvcjogdmFyKC0tYmctY29sb3Itc2Vjb25kYXJ5KTtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmctY29sb3ItZ3JlZW4pO1xcbn1cXG5cXG5oZWFkZXIgaDEge1xcbiAgICBmb250LXNpemU6IHZhcigtLWZzLWh1Z2UpO1xcbn1cXG5cXG5oZWFkZXIgLnRhYnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiB2YXIoLS1kaXN0LW1lZGl1bSk7XFxufVxcblxcbmhlYWRlciAudGFicyBidXR0b24ge1xcbiAgICB3aWR0aDogbWlubWF4KDI1dncsIDIwMHB4KTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBmb250LXNpemU6IHZhcigtLWZzLWxhcmdlKTtcXG4gICAgcGFkZGluZzogY2FsYyh2YXIoLS1mcy1sYXJnZSkgKiAwLjMpIGNhbGModmFyKC0tZnMtbGFyZ2UpICogMC42KTtcXG4gICAgYmFja2dyb3VuZDogaW5oZXJpdDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5cXG5cXG4vKiBDb250ZW50ICovXFxuXFxuI2NvbnRlbnQge1xcbiAgICBncmlkLWFyZWE6IGNvbnRlbnQ7XFxuICAgIHBhZGRpbmc6IGNhbGModmFyKC0tZGlzdC1tZWRpdW0pICogMykgY2FsYyh2YXIoLS1kaXN0LW1lZGl1bSkgKiA0KTtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmctY29sb3ItbWFpbik7XFxufVxcblxcbiNjb250ZW50IC5wYWdlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAuNXJlbTtcXG59XFxuXFxuI2NvbnRlbnQgLmhvbWUge1xcblxcbn1cXG5cXG4jY29udGVudCAuaG9tZSAuaG9tZS1oZWFkZXIsXFxuI2NvbnRlbnQgLm1lbnUgLm1lbnUtaGVhZGVyLFxcbiNjb250ZW50IC5hYm91dCAuYWJvdXQtaGVhZGVyIHtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4jY29udGVudCAubWVudSBvbCB7XFxuICAgIG1hcmdpbi1sZWZ0OiAycmVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xcbn1cXG5cXG5cXG5cXG4vKiBGb290ZXIgKi9cXG5cXG5mb290ZXIge1xcbiAgICBncmlkLWFyZWE6IGZvb3RlcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tZnMtbWVkaXVtKTtcXG4gICAgY29sb3I6IHZhcigtLWJnLWNvbG9yLXNlY29uZGFyeSk7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWJnLWNvbG9yLXJlZCk7XFxufVxcblxcbmZvb3RlciBkaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IGNhbGModmFyKC0tZnMtbWVkaXVtKSAqIDAuMik7XFxufVxcblxcbmZvb3RlciBoMiB7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tZnMtbWVkaXVtKTtcXG59XFxuXFxuXFxuXFxuLyogU2hhZG93cyAqL1xcblxcbi5zaWRlLXNoYWRvd3Mge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5zaWRlLXNoYWRvd3M6YmVmb3JlLFxcbi5zaWRlLXNoYWRvd3M6YWZ0ZXIge1xcbiAgICBjb250ZW50OiBcXFwiIFxcXCI7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIHdpZHRoOiAxcmVtO1xcbn1cXG5cXG4uc2lkZS1zaGFkb3dzOmJlZm9yZSB7XFxuICAgIGJveC1zaGFkb3c6IC0xcmVtIDAgMXJlbSAtMXJlbSBpbnNldCB2YXIoLS1iZy1jb2xvci1tYWluKTtcXG4gICAgbGVmdDogLTFyZW07XFxufVxcblxcbi5zaWRlLXNoYWRvd3M6YWZ0ZXIge1xcbiAgICBib3gtc2hhZG93OiAxcmVtIDAgMXJlbSAtMXJlbSBpbnNldCB2YXIoLS1iZy1jb2xvci1tYWluKTtcXG4gICAgcmlnaHQ6IC0xcmVtO1xcbn1cXG5cXG5cXG5cXG4vKiBFbGVtZW50cyAqL1xcbmgxIHtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1mcy1odWdlKTtcXG59XFxuXFxuaDIge1xcbiAgICBmb250LXNpemU6IHZhcigtLWZzLWxhcmdlKTtcXG59XFxuXFxubGkge1xcbiAgICBmb250LXNpemU6IHZhcigtLWZzLWxhcmdlKTtcXG59XFxuXFxucCB7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tZnMtbWVkaXVtKTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7SUFDSSxtQ0FBbUM7SUFDbkMsNkJBQTZCO0lBQzdCLHVCQUF1QjtJQUN2Qix5QkFBeUI7O0lBRXpCLHdCQUF3Qjs7SUFFeEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGdCQUFnQjs7SUFFaEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixvQkFBb0I7SUFDcEIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsaUNBQWlDO0lBQ2pDLGFBQWE7SUFDYjs7OzhCQUcwQjtJQUMxQixxQ0FBcUM7QUFDekM7Ozs7QUFJQSxXQUFXOztBQUVYO0lBQ0ksaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLDZCQUE2QjtJQUM3Qix1QkFBdUI7SUFDdkIsZ0JBQWdCO0lBQ2hCLGdDQUFnQztJQUNoQyxpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLDBCQUEwQjtJQUMxQixZQUFZO0lBQ1osMEJBQTBCO0lBQzFCLGdFQUFnRTtJQUNoRSxtQkFBbUI7SUFDbkIsZUFBZTtBQUNuQjs7OztBQUlBLFlBQVk7O0FBRVo7SUFDSSxrQkFBa0I7SUFDbEIsa0VBQWtFO0lBQ2xFLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsVUFBVTtBQUNkOztBQUVBOztBQUVBOztBQUVBOzs7SUFHSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLG1CQUFtQjtBQUN2Qjs7OztBQUlBLFdBQVc7O0FBRVg7SUFDSSxpQkFBaUI7SUFDakIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsMkJBQTJCO0lBQzNCLGdDQUFnQztJQUNoQywrQkFBK0I7QUFDbkM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksMkJBQTJCO0FBQy9COzs7O0FBSUEsWUFBWTs7QUFFWjtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTs7SUFFSSxZQUFZO0lBQ1osWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sV0FBVztBQUNmOztBQUVBO0lBQ0kseURBQXlEO0lBQ3pELFdBQVc7QUFDZjs7QUFFQTtJQUNJLHdEQUF3RDtJQUN4RCxZQUFZO0FBQ2hCOzs7O0FBSUEsYUFBYTtBQUNiO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksMkJBQTJCO0FBQy9CXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUVCK0dhcmFtb25kOndnaHRANDAwOzUwMDs2MDA7NzAwOzgwMCZkaXNwbGF5PXN3YXAnKTtcXG5cXG46cm9vdCB7XFxuICAgIC0tYmctY29sb3ItbWFpbjogcmdiKDI0OCwgMjQ4LCAyNDgpO1xcbiAgICAtLWJnLWNvbG9yLXNlY29uZGFyeTogI2Y0ZjRmNDtcXG4gICAgLS1iZy1jb2xvci1yZWQ6ICNjZTJiMzc7XFxuICAgIC0tYmctY29sb3ItZ3JlZW46ICMwMDkyNDY7XFxuXFxuICAgIC0tZm9udC1jb2xvci1tYWluOiBibGFjaztcXG5cXG4gICAgLS1mcy1odWdlOiAyLjZyZW07XFxuICAgIC0tZnMtbGFyZ2U6IDEuNXJlbTtcXG4gICAgLS1mcy1tZWRpdW06IDEuMXJlbTtcXG4gICAgLS1mcy1zbWFsbDogLjhyZW07XFxuICAgIC0tZnMtdGlueTogLjZyZW07XFxuXFxuICAgIC0tZGlzdC1tZWRpdW06IDFyZW07XFxufVxcblxcbioge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICAgIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xcbiAgICBjb2xvcjogaW5oZXJpdDtcXG59XFxuXFxuYm9keSB7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIGZvbnQtZmFtaWx5OiAnRUIgR2FyYW1vbmQnLCBzZXJpZjtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZDogXFxcImhlYWRlciBoZWFkZXIgIGhlYWRlclxcXCIgbWluLWNvbnRlbnRcXG4gICAgICAgICAgXFxcIi4gICAgICBjb250ZW50IC5cXFwiICAgICAgYXV0b1xcbiAgICAgICAgICBcXFwiZm9vdGVyIGZvb3RlciAgZm9vdGVyXFxcIiAxMHZoXFxuICAgICAgICAgIC8gYXV0byAgNjAlICAgICBhdXRvO1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1jb2xvci1zZWNvbmRhcnkpO1xcbn1cXG5cXG5cXG5cXG4vKiBIZWFkZXIgKi9cXG5cXG5oZWFkZXIge1xcbiAgICBncmlkLWFyZWE6IGhlYWRlcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogdmFyKC0tZGlzdC1tZWRpdW0pIDA7XFxuICAgIGdhcDogdmFyKC0tZGlzdC1tZWRpdW0pO1xcbiAgICBmb250LXdlaWdodDogODAwO1xcbiAgICBjb2xvcjogdmFyKC0tYmctY29sb3Itc2Vjb25kYXJ5KTtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmctY29sb3ItZ3JlZW4pO1xcbn1cXG5cXG5oZWFkZXIgaDEge1xcbiAgICBmb250LXNpemU6IHZhcigtLWZzLWh1Z2UpO1xcbn1cXG5cXG5oZWFkZXIgLnRhYnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiB2YXIoLS1kaXN0LW1lZGl1bSk7XFxufVxcblxcbmhlYWRlciAudGFicyBidXR0b24ge1xcbiAgICB3aWR0aDogbWlubWF4KDI1dncsIDIwMHB4KTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBmb250LXNpemU6IHZhcigtLWZzLWxhcmdlKTtcXG4gICAgcGFkZGluZzogY2FsYyh2YXIoLS1mcy1sYXJnZSkgKiAwLjMpIGNhbGModmFyKC0tZnMtbGFyZ2UpICogMC42KTtcXG4gICAgYmFja2dyb3VuZDogaW5oZXJpdDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5cXG5cXG4vKiBDb250ZW50ICovXFxuXFxuI2NvbnRlbnQge1xcbiAgICBncmlkLWFyZWE6IGNvbnRlbnQ7XFxuICAgIHBhZGRpbmc6IGNhbGModmFyKC0tZGlzdC1tZWRpdW0pICogMykgY2FsYyh2YXIoLS1kaXN0LW1lZGl1bSkgKiA0KTtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmctY29sb3ItbWFpbik7XFxufVxcblxcbiNjb250ZW50IC5wYWdlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAuNXJlbTtcXG59XFxuXFxuI2NvbnRlbnQgLmhvbWUge1xcblxcbn1cXG5cXG4jY29udGVudCAuaG9tZSAuaG9tZS1oZWFkZXIsXFxuI2NvbnRlbnQgLm1lbnUgLm1lbnUtaGVhZGVyLFxcbiNjb250ZW50IC5hYm91dCAuYWJvdXQtaGVhZGVyIHtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4jY29udGVudCAubWVudSBvbCB7XFxuICAgIG1hcmdpbi1sZWZ0OiAycmVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xcbn1cXG5cXG5cXG5cXG4vKiBGb290ZXIgKi9cXG5cXG5mb290ZXIge1xcbiAgICBncmlkLWFyZWE6IGZvb3RlcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tZnMtbWVkaXVtKTtcXG4gICAgY29sb3I6IHZhcigtLWJnLWNvbG9yLXNlY29uZGFyeSk7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWJnLWNvbG9yLXJlZCk7XFxufVxcblxcbmZvb3RlciBkaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IGNhbGModmFyKC0tZnMtbWVkaXVtKSAqIDAuMik7XFxufVxcblxcbmZvb3RlciBoMiB7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tZnMtbWVkaXVtKTtcXG59XFxuXFxuXFxuXFxuLyogU2hhZG93cyAqL1xcblxcbi5zaWRlLXNoYWRvd3Mge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5zaWRlLXNoYWRvd3M6YmVmb3JlLFxcbi5zaWRlLXNoYWRvd3M6YWZ0ZXIge1xcbiAgICBjb250ZW50OiBcXFwiIFxcXCI7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIHdpZHRoOiAxcmVtO1xcbn1cXG5cXG4uc2lkZS1zaGFkb3dzOmJlZm9yZSB7XFxuICAgIGJveC1zaGFkb3c6IC0xcmVtIDAgMXJlbSAtMXJlbSBpbnNldCB2YXIoLS1iZy1jb2xvci1tYWluKTtcXG4gICAgbGVmdDogLTFyZW07XFxufVxcblxcbi5zaWRlLXNoYWRvd3M6YWZ0ZXIge1xcbiAgICBib3gtc2hhZG93OiAxcmVtIDAgMXJlbSAtMXJlbSBpbnNldCB2YXIoLS1iZy1jb2xvci1tYWluKTtcXG4gICAgcmlnaHQ6IC0xcmVtO1xcbn1cXG5cXG5cXG5cXG4vKiBFbGVtZW50cyAqL1xcbmgxIHtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1mcy1odWdlKTtcXG59XFxuXFxuaDIge1xcbiAgICBmb250LXNpemU6IHZhcigtLWZzLWxhcmdlKTtcXG59XFxuXFxubGkge1xcbiAgICBmb250LXNpemU6IHZhcigtLWZzLWxhcmdlKTtcXG59XFxuXFxucCB7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tZnMtbWVkaXVtKTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgJy4vc3R5bGVzLmNzcyc7XG5pbXBvcnQgeyBpbml0UGFnZSB9IGZyb20gJy4vcGFnZXMvaW5kZXgvaW5pdFBhZ2UnO1xuaW1wb3J0IHsgc3dpdGNoUGFnZSwgaW5pdFN3aXRjaFBhZ2UgfSBmcm9tICcuL3BhZ2VzL2luZGV4L3N3aXRjaFBhZ2UnO1xuXG5jb25zdCB0YWJzID0gaW5pdFBhZ2UoKTtcbmluaXRTd2l0Y2hQYWdlKCdIb21lJyk7XG5cbnRhYnMuZm9yRWFjaCh0YWIgPT4ge1xuICAgIHRhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgc3dpdGNoUGFnZSh0YWIpO1xuICAgIH0pO1xufSk7IiwiY29uc3QgY3JlYXRlVGFiID0gKHRleHQsIHRhYnMpID0+IHtcbiAgICBjb25zdCB0YWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICB0YWJzLmFwcGVuZCh0YWIpO1xuICAgIFxuICAgIHRhYi5jbGFzc0xpc3QuYWRkKFxuICAgICAgICAndGFiJywgXG4gICAgICAgICdob3Zlci11cCcsIFxuICAgICAgICAnaG92ZXItbGluZScsIFxuICAgICAgICAnc2VtaS10cmFuc3BhcmVudCdcbiAgICApO1xuICAgIHRhYi5pbm5lclRleHQgPSB0ZXh0O1xuXG4gICAgcmV0dXJuIHRhYjtcbn1cblxuY29uc3QgaGVhZGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWRlcicpO1xuXG4gICAgLy8gUmVzdGF1cmFudCB0ZXh0XG4gICAgY29uc3QgaGVhZGVyVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgaGVhZGVyLmFwcGVuZChoZWFkZXJUZXh0KTtcbiAgICBoZWFkZXJUZXh0LmlubmVyVGV4dCA9ICdSZXN0YXVyYW50IHBhZ2UnO1xuXG4gICAgLy8gVGFiIGRpdlxuICAgIGNvbnN0IHRhYkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhlYWRlci5hcHBlbmQodGFiRGl2KTtcbiAgICB0YWJEaXYuY2xhc3NMaXN0LmFkZCgndGFicycpO1xuXG4gICAgLy8gVGFic1xuICAgIGxldCB0YWJzID0gW1xuICAgICAgICBjcmVhdGVUYWIoJ0hvbWUnLCB0YWJEaXYpLFxuICAgICAgICBjcmVhdGVUYWIoJ01lbnUnLCB0YWJEaXYpLFxuICAgICAgICBjcmVhdGVUYWIoJ0Fib3V0JywgdGFiRGl2KVxuICAgIF07XG5cbiAgICByZXR1cm4gdGFicztcbn1cblxuY29uc3QgZm9vdGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvb3RlcicpO1xuXG4gICAgLy8gQ3JlZGl0IHRleHRcbiAgICBjb25zdCBjcmVkaXRUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZm9vdGVyLmFwcGVuZChjcmVkaXRUZXh0KTtcbiAgICBcbiAgICAvLyBBdXRob3IgdGV4dFxuICAgIGNvbnN0IGF1dGhvclRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGNyZWRpdFRleHQuYXBwZW5kKGF1dGhvclRleHQpO1xuICAgIGF1dGhvclRleHQuaW5uZXJUZXh0ID0gJ0NyZWF0ZWQgYnkgJztcblxuICAgIC8vIEdpdEh1YiBMaW5rXG4gICAgY29uc3QgZ2l0SHViTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBjcmVkaXRUZXh0LmFwcGVuZChnaXRIdWJMaW5rKTtcbiAgICBnaXRIdWJMaW5rLmhyZWYgPSAnaHR0cHM6Ly9naXRodWIuY29tL1N0dWRzbWluaXN0ZXJuJztcbiAgICBnaXRIdWJMaW5rLmlubmVyVGV4dCA9ICdFcmljIFdlaWRvdyc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0UGFnZSgpIHtcbiAgICBsZXQgdGFicyA9IGhlYWRlcigpO1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuICAgIGNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnc2lkZS1zaGFkb3dzJyk7XG4gICAgZm9vdGVyKCk7XG5cbiAgICByZXR1cm4gdGFicztcbn0iLCJjb25zdCBfaG9tZVBhZ2UgPSAocGFyZW50KSA9PiB7XG4gICAgY29uc3QgaG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHBhcmVudC5hcHBlbmQoaG9tZSk7XG4gICAgaG9tZS5jbGFzc0xpc3QuYWRkKFxuICAgICAgICAncGFnZScsXG4gICAgICAgICdob21lJ1xuICAgICk7XG5cbiAgICAvLyBXZWxjb21lIHRleHRcbiAgICBjb25zdCBob21lSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBjb25zdCBob21lVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgaG9tZS5hcHBlbmQoaG9tZUhlYWRlcik7XG4gICAgaG9tZS5hcHBlbmQoaG9tZVRleHQpO1xuICAgIGhvbWVIZWFkZXIuaW5uZXJUZXh0ID0gJ1dlbGNvbWUhJztcbiAgICBob21lVGV4dC5pbm5lclRleHQgPSAnVGhpcyBpcyBhIGZha2UgcmVzdGF1cmFudCBwYWdlIGZvciBhIGZha2UgcmVzdGF1cmFudC4gVGhlIGxvY2F0aW9uIGlzIGFsc28gZmFrZS4gQW5kIHRoZSBmb29kLiBCdXQgeW91IHNob3VsZCB0cnkgdGhlIHJlYWwgZm9vZCwgaW4gcmVhbCBsaWZlIGl0IGlzIGdvb2QuJztcbiAgICBob21lSGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2hvbWUtaGVhZGVyJyk7XG59XG5cbmNvbnN0IF9tZW51SXRlbSA9IChcbiAgICAgICAgcGFyZW50LCBcbiAgICAgICAgbmFtZSxcbiAgICAgICAgZGVzY3JpcHRpb25cbiAgICApID0+IHtcbiAgICBjb25zdCBpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBwYXJlbnQuYXBwZW5kKGl0ZW0pO1xuXG4gICAgLy8gTWVudSBpdGVtIGRpdlxuICAgIGNvbnN0IGl0ZW1EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpdGVtLmFwcGVuZChpdGVtRGl2KTtcbiAgICBcbiAgICAvLyBNZW51IGl0ZW0gaGVhZGVyXG4gICAgY29uc3QgaXRlbU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGl0ZW1EaXYuYXBwZW5kKGl0ZW1OYW1lKTtcbiAgICBpdGVtTmFtZS5pbm5lclRleHQgPSBuYW1lO1xuXG4gICAgLy8gTWVudSBpdGVtIGRlc2NyaXB0aW9uXG4gICAgY29uc3QgaXRlbURlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBpdGVtRGl2LmFwcGVuZChpdGVtRGVzY3JpcHRpb24pO1xuICAgIGl0ZW1EZXNjcmlwdGlvbi5pbm5lclRleHQgPSBkZXNjcmlwdGlvbjtcbn1cblxuY29uc3QgX21lbnVQYWdlID0gKHBhcmVudCkgPT4ge1xuICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwYXJlbnQuYXBwZW5kKG1lbnUpO1xuICAgIG1lbnUuY2xhc3NMaXN0LmFkZChcbiAgICAgICAgJ3BhZ2UnLFxuICAgICAgICAnbWVudSdcbiAgICApO1xuXG4gICAgLy8gQXBwZXJ0aXplciBoZWFkZXJcbiAgICBjb25zdCBhcHBlcnRpemVySGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBtZW51LmFwcGVuZChhcHBlcnRpemVySGVhZGVyKTtcbiAgICBhcHBlcnRpemVySGVhZGVyLmlubmVyVGV4dCA9ICdBcHBlcnRpemVyczonO1xuICAgIGFwcGVydGl6ZXJIZWFkZXIuY2xhc3NMaXN0LmFkZCgnbWVudS1oZWFkZXInKTtcbiAgICBcbiAgICAvLyBBcHBlcnRpemVyIG1lbnVcbiAgICBjb25zdCBhcHBlcnRpemVyTWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29sJyk7XG4gICAgbWVudS5hcHBlbmQoYXBwZXJ0aXplck1lbnUpO1xuICAgIFxuICAgIGxldCBhcHBlcnRpemVySXRlbXMgPSBbXG4gICAgICAgIF9tZW51SXRlbShhcHBlcnRpemVyTWVudSwgJ0dhcmxpYyBicmVhZCcsICdJdGFsaWFuIGJyZWFkIHdpdGggZ2FybGljIGJ1dHRlci4nKSxcbiAgICAgICAgX21lbnVJdGVtKGFwcGVydGl6ZXJNZW51LCAnQnJ1c2NoZXR0YScsICdJdGFsaWFuIGJyZWFkIHdpdGggZnJlc2ggdG9tYXRvLCBiYXNpbCBhbmQgb2xpdmUgb2lsLicpXG4gICAgXTtcblxuICAgIC8vIE1haW4gY291cnNlcyBoZWFkZXJcbiAgICBjb25zdCBtYWluQ291cnNlSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBtZW51LmFwcGVuZChtYWluQ291cnNlSGVhZGVyKTtcbiAgICBtYWluQ291cnNlSGVhZGVyLmlubmVyVGV4dCA9ICdNYWluIGNvdXJzZXM6JztcbiAgICBtYWluQ291cnNlSGVhZGVyLmNsYXNzTGlzdC5hZGQoJ21lbnUtaGVhZGVyJyk7XG4gICAgXG4gICAgLy8gTWFpbiBjb3Vyc2VzIG1lbnVcbiAgICBjb25zdCBtYWluQ291cnNlTWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29sJyk7XG4gICAgbWVudS5hcHBlbmQobWFpbkNvdXJzZU1lbnUpO1xuICAgIFxuICAgIGxldCBtYWluQ291cnNlSXRlbXMgPSBbXG4gICAgICAgIF9tZW51SXRlbShtYWluQ291cnNlTWVudSwgJ1NwYWdoZXR0aSBjYXJib25hcmEnLCAnTWFkZSB1c2luZyBwYW5jZXR0YSwgZWdncyBhbmQgcGFybWlnZ2lhbm8gcmVnZ2lhbm8uJyksXG4gICAgICAgIF9tZW51SXRlbShtYWluQ291cnNlTWVudSwgJ01hcmdoYXJpdGEnLCAnVGhlIGNsYXNzaWMgcGl6emEgd2l0aCB0b21hdG8gc2F1Y2UsIG1venphcmVsbGEgYW5kIGJhc2lsLicpXG4gICAgXTtcblxuICAgIG1haW5Db3Vyc2VNZW51LnNldEF0dHJpYnV0ZSgnc3RhcnQnLCBhcHBlcnRpemVySXRlbXMubGVuZ3RoICsgMSk7IC8vIENvbnRpbnVpbmcgdGhlIGxpc3RcblxuICAgIC8vIERlc3NlcnQgaGVhZGVyXG4gICAgY29uc3QgZGVzc2VydEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgbWVudS5hcHBlbmQoZGVzc2VydEhlYWRlcik7XG4gICAgZGVzc2VydEhlYWRlci5pbm5lclRleHQgPSAnRGVzc2VydHM6JztcbiAgICBkZXNzZXJ0SGVhZGVyLmNsYXNzTGlzdC5hZGQoJ21lbnUtaGVhZGVyJyk7XG4gICAgXG4gICAgLy8gTWFpbiBjb3Vyc2VzIG1lbnVcbiAgICBjb25zdCBkZXNzZXJ0TWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29sJyk7XG4gICAgbWVudS5hcHBlbmQoZGVzc2VydE1lbnUpO1xuICAgIFxuICAgIGxldCBkZXNzZXJ0SXRlbXMgPSBbXG4gICAgICAgIF9tZW51SXRlbShkZXNzZXJ0TWVudSwgJ1RpcmFtaXN1JywgJ1dpdGggYSBjcmVhbXkgYmFzZSBhbmQgY29udGFpbmluZyBhIGhpbnQgb2YgY29uamFjLicpLFxuICAgICAgICBfbWVudUl0ZW0oZGVzc2VydE1lbnUsICdQYW5uYSBjb3R0YScsICdXaXRoIHJhc3BiZXJyeSwgYmx1ZWJlcnJ5IGFuZCBhIGdlbGF0aW4gbGVhZi4nKVxuICAgIF07XG5cbiAgICBkZXNzZXJ0TWVudS5zZXRBdHRyaWJ1dGUoJ3N0YXJ0JywgYXBwZXJ0aXplckl0ZW1zLmxlbmd0aCArIG1haW5Db3Vyc2VJdGVtcy5sZW5ndGggKyAxKTsgLy8gQ29udGludWluZyB0aGUgbGlzdFxufVxuXG5jb25zdCBfYWJvdXRQYWdlID0gKHBhcmVudCkgPT4ge1xuICAgIGNvbnN0IGFib3V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcGFyZW50LmFwcGVuZChhYm91dCk7XG4gICAgYWJvdXQuY2xhc3NMaXN0LmFkZChcbiAgICAgICAgJ3BhZ2UnLFxuICAgICAgICAnYWJvdXQnXG4gICAgKTtcblxuICAgIC8vIEludHJvXG4gICAgY29uc3QgYWJvdXRIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGNvbnN0IGFib3V0VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgYWJvdXQuYXBwZW5kKGFib3V0SGVhZGVyKTtcbiAgICBhYm91dC5hcHBlbmQoYWJvdXRUZXh0KTtcbiAgICBhYm91dEhlYWRlci5pbm5lclRleHQgPSAnQWJvdXQgdXM6JztcbiAgICBhYm91dFRleHQuaW5uZXJUZXh0ID0gJ1RoaXMgaXMgYSBmYWtlIHJlc3RhdXJhbnQgcGFnZSBtYWRlIGJ5IG1lLiBZb3UgY2FuIGZpbmQgbXkgR2l0SHViIGxpbmsgYXQgdGhlIGJvdHRvbSBvZiB0aGlzIHBhZ2UhIDopJztcbiAgICBhYm91dEhlYWRlci5jbGFzc0xpc3QuYWRkKCdhYm91dC1oZWFkZXInKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN3aXRjaFBhZ2UodGFiKSB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG4gICAgY29udGVudC5pbm5lckhUTUwgPSAnJztcblxuICAgIHN3aXRjaCh0YWIuaW5uZXJUZXh0KSB7XG4gICAgICAgIGNhc2UgJ0hvbWUnOlxuICAgICAgICAgICAgX2hvbWVQYWdlKGNvbnRlbnQpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ01lbnUnOlxuICAgICAgICAgICAgX21lbnVQYWdlKGNvbnRlbnQpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ0Fib3V0JzpcbiAgICAgICAgICAgIF9hYm91dFBhZ2UoY29udGVudCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0U3dpdGNoUGFnZSgpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcbiAgICBfaG9tZVBhZ2UoY29udGVudCk7XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9