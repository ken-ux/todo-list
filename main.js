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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `body {\n  margin: 0;\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto,\n    Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n}\n\nh1,\nh2,\np {\n  margin: 0;\n}\n\n#content {\n  display: grid;\n  grid-template-columns: 1fr 4fr;\n  min-height: 100vh;\n}\n\n#sidebar,\nmain {\n  padding: 2rem;\n}\n\n#sidebar {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  background-color: dodgerblue;\n  color: white;\n}\n\n#sidebar #projects {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n\nmain {\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n}\n\nmain > button,\n#sidebar > button {\n  width: 100px;\n}\n\n#project-items {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n\n#project-items > div {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  border: 1px solid rgba(0, 0, 0, 20%);\n  box-shadow: 2px 2px 6px rgba(0, 0, 0, 20%);\n  padding: 1rem;\n  border-radius: 20px;\n}\n\n#project-items > div > div:first-child {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo-list/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   displayProject: () => (/* binding */ displayProject),\n/* harmony export */   displayProjectSelect: () => (/* binding */ displayProjectSelect),\n/* harmony export */   displaySidebarProjects: () => (/* binding */ displaySidebarProjects),\n/* harmony export */   loadStorage: () => (/* binding */ loadStorage),\n/* harmony export */   projects: () => (/* binding */ projects),\n/* harmony export */   saveToStorage: () => (/* binding */ saveToStorage)\n/* harmony export */ });\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n/* harmony import */ var _toDo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toDo */ \"./src/toDo.js\");\n\n\n\nconst projects = [];\n\n// localStorage.clear();\nif (localStorage.getItem(\"projects\")) {\n  // Load existing projects\n  const storedProjects = loadStorage();\n\n  for (let i = 0; i < storedProjects.length; i++) {\n    const project = new _project__WEBPACK_IMPORTED_MODULE_0__[\"default\"](storedProjects[i].name);\n\n    // Add stored todos to each stored project\n    for (let j = 0; j < storedProjects[i].items.length; j++) {\n      const details = storedProjects[i].items[j];\n      const todo = new _toDo__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\n        details.name,\n        details.description,\n        details.dueDate,\n        details.priority\n      );\n      project.addToProject(todo);\n    }\n    projects.push(project);\n  }\n} else {\n  // Initialize default projects\n  projects.push(new _project__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"Default Project\"));\n  projects.push(new _project__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"Default Project 2\"));\n  projects.push(new _project__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"Default Project 3\"));\n\n  projects[0].addToProject(new _toDo__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\"todo\", \"desc\", \"date\", \"Low\"));\n  projects[0].addToProject(new _toDo__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\"todo_2\", \"desc\", \"date\", \"Medium\"));\n  projects[0].addToProject(new _toDo__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\"todo_3\", \"desc\", \"date\", \"High\"));\n  projects[1].addToProject(new _toDo__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\"todo\", \"desc\", \"date\", \"Low\"));\n  projects[1].addToProject(new _toDo__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\"todo_2\", \"desc\", \"date\", \"Low\"));\n  projects[2].addToProject(new _toDo__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\"todo\", \"desc\", \"date\", \"Low\"));\n  saveToStorage();\n}\n\nfunction saveToStorage() {\n  localStorage.setItem(\"projects\", JSON.stringify(projects));\n}\n\nfunction loadStorage() {\n  return JSON.parse(localStorage.getItem(\"projects\"));\n}\n\nconst sidebarProjects = document.querySelector(\"#projects\");\n\nfunction displaySidebarProjects() {\n  while (sidebarProjects.hasChildNodes()) {\n    sidebarProjects.removeChild(sidebarProjects.firstChild);\n  }\n  for (let i = 0; i < projects.length; i++) {\n    const project = document.createElement(\"div\");\n    project.textContent = projects[i].name;\n    project.addEventListener(\"click\", () => displayProject(projects[i]));\n    sidebarProjects.appendChild(project);\n  }\n}\n\nconst main = document.querySelector(\"main\");\n\nconst projectItems = document.querySelector(\"#project-items\");\nconst projectName = document.createElement(\"h1\");\nmain.prepend(projectName);\n\nfunction displayProject(project) {\n  while (projectItems.hasChildNodes()) {\n    projectItems.removeChild(projectItems.firstChild);\n  }\n\n  if (project === undefined) {\n    return;\n  }\n\n  // Display title\n  projectName.textContent = project.name;\n\n  // Remove delete project button when switching projects\n  if (document.querySelector(\".delete-project-button\")) {\n    main.removeChild(document.querySelector(\".delete-project-button\"));\n  }\n\n  // Display delete project button\n  const deleteProjectButton = document.createElement(\"button\");\n  deleteProjectButton.classList = \"delete-project-button\";\n  deleteProjectButton.textContent = \"Delete Project\";\n  main.insertBefore(deleteProjectButton, projectItems);\n  deleteProjectButton.addEventListener(\"click\", () => {\n    removeFromProjects(project);\n    displaySidebarProjects();\n    if (projects.length === 0) {\n      projectName.textContent = \"\";\n      main.removeChild(deleteProjectButton);\n      displayProject();\n    } else {\n      for (let i = 0; i < projects.length; i++) {\n        if (projects[i]) {\n          displayProject(projects[i]);\n          return;\n        }\n      }\n    }\n    saveToStorage();\n  });\n\n  // Display to-dos\n  for (let i = 0; i < project.items.length; i++) {\n    const item = document.createElement(\"div\");\n    const item_details = document.createElement(\"div\");\n    const buttons_container = document.createElement(\"div\");\n\n    const item_name = document.createElement(\"h2\");\n    item_name.textContent = project.items[i].name;\n\n    const item_desc = document.createElement(\"p\");\n    item_desc.textContent = \"Description: \" + project.items[i].description;\n\n    const item_dueDate = document.createElement(\"p\");\n    item_dueDate.textContent = \"Due Date: \" + project.items[i].dueDate;\n\n    const item_priority = document.createElement(\"p\");\n    item_priority.textContent = \"Priority: \" + project.items[i].priority;\n\n    item_details.appendChild(item_name);\n    item_details.appendChild(item_desc);\n    item_details.appendChild(item_dueDate);\n    item_details.appendChild(item_priority);\n\n    item.appendChild(item_details);\n    item.appendChild(buttons_container);\n    projectItems.appendChild(item);\n\n    const editButton = document.createElement(\"button\");\n    editButton.textContent = \"Edit\";\n    editButton.addEventListener(\"click\", () => {\n      populateEditForm(project, project.items[i]);\n    });\n    buttons_container.appendChild(editButton);\n\n    const deleteButton = document.createElement(\"button\");\n    deleteButton.textContent = \"Delete\";\n    deleteButton.addEventListener(\"click\", () => {\n      project.removeFromProject(project.items[i]);\n      displayProject(project);\n      saveToStorage();\n    });\n    buttons_container.appendChild(deleteButton);\n  }\n}\n\nconst addProjectForm = document.querySelector(\"dialog#add-project > form\");\naddProjectForm.addEventListener(\"submit\", () => {\n  const formData = new FormData(addProjectForm);\n  let name = formData.get(\"name\");\n  projects.push(new _project__WEBPACK_IMPORTED_MODULE_0__[\"default\"](name));\n  displaySidebarProjects(projects);\n  displayProject(projects[projects.length - 1]);\n  saveToStorage();\n});\n\nconst cancelProjectButton = document.querySelector(\n  \"dialog#add-project .cancel-button\"\n);\ncancelProjectButton.addEventListener(\"click\", () => {\n  const addProjectDialog = document.querySelector(\"dialog#add-project\");\n  addProjectDialog.close();\n});\n\nconst addToDoForm = document.querySelector(\"dialog#add-todo > form\");\naddToDoForm.addEventListener(\"submit\", () => {\n  const formData = new FormData(addToDoForm);\n  let name = formData.get(\"name\");\n  let desc = formData.get(\"desc\");\n  let dueDate = formData.get(\"dueDate\");\n  let priority = formData.get(\"priority\");\n  let projectToAddTo = formData.get(\"projects\");\n\n  projects[projectToAddTo].addToProject(\n    new _toDo__WEBPACK_IMPORTED_MODULE_1__[\"default\"](name, desc, dueDate, priority)\n  );\n  displayProject(projects[projectToAddTo]);\n  saveToStorage();\n});\n\nconst cancelToDoButton = document.querySelector(\n  \"dialog#add-todo .cancel-button\"\n);\ncancelToDoButton.addEventListener(\"click\", () => {\n  const addToDoDialog = document.querySelector(\"dialog#add-todo\");\n  addToDoDialog.close();\n});\n\nfunction displayProjectSelect() {\n  const projectSelect = document.querySelector(\"select#projects\");\n  while (projectSelect.hasChildNodes()) {\n    projectSelect.removeChild(projectSelect.firstChild);\n  }\n  for (let i = 0; i < projects.length; i++) {\n    const option = document.createElement(\"option\");\n    option.value = i; // Could use name as value but might be difficult to add to projects of same name\n    option.textContent = projects[i].name;\n    projectSelect.appendChild(option);\n  }\n}\n\nfunction removeFromProjects(project) {\n  let index = projects.findIndex((a) => a === project);\n  projects.splice(index, 1);\n  saveToStorage();\n}\n\nfunction populateEditForm(project, item) {\n  const editToDoDialog = document.querySelector(\"#edit-todo\");\n  editToDoDialog.showModal();\n\n  const editToDoForm = document.querySelector(\"#edit-todo > form\");\n  document.querySelector(\"#edit-todo input#name\").value = item.name;\n  document.querySelector(\"#edit-todo input#desc\").value = item.description;\n  document.querySelector(\"#edit-todo input#dueDate\").value = item.dueDate;\n  document.querySelector(\"#edit-todo select#priority\").value = item.priority;\n\n  editToDoForm.addEventListener(\n    \"submit\",\n    () => {\n      const editToDoForm = document.querySelector(\"#edit-todo > form\");\n      const formData = new FormData(editToDoForm);\n      const name = formData.get(\"name\");\n      const desc = formData.get(\"desc\");\n      const dueDate = formData.get(\"dueDate\");\n      const priority = formData.get(\"priority\");\n      item.name = name;\n      item.description = desc;\n      item.dueDate = dueDate;\n      item.priority = priority;\n      displayProject(project);\n      saveToStorage();\n    },\n    { once: true }\n  );\n\n  const cancelButton = document.querySelector(\"#edit-todo .cancel-button\");\n  cancelButton.addEventListener(\n    \"click\",\n    () => {\n      editToDoDialog.close();\n    },\n    { once: true }\n  );\n}\n\n\n//# sourceURL=webpack://todo-list/./src/app.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app */ \"./src/app.js\");\n\n\n\nconst sidebar = document.querySelector(\"#sidebar\");\nconst addProjectButton = document.createElement(\"button\");\naddProjectButton.textContent = \"Add Project\";\nsidebar.appendChild(addProjectButton);\n\naddProjectButton.addEventListener(\"click\", () => {\n  const addProjectDialog = document.querySelector(\"#add-project\");\n  addProjectDialog.showModal();\n});\n\nconst addToDoButton = document.createElement(\"button\");\naddToDoButton.textContent = \"Add To-Do\";\nsidebar.appendChild(addToDoButton);\n\naddToDoButton.addEventListener(\"click\", () => {\n  (0,_app__WEBPACK_IMPORTED_MODULE_1__.displayProjectSelect)();\n  const addToDoDialog = document.querySelector(\"#add-todo\");\n  addToDoDialog.showModal();\n});\n\n(0,_app__WEBPACK_IMPORTED_MODULE_1__.displaySidebarProjects)();\n\n// Only do this on user's first load\n(0,_app__WEBPACK_IMPORTED_MODULE_1__.displayProject)(_app__WEBPACK_IMPORTED_MODULE_1__.projects[0]);\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Project)\n/* harmony export */ });\nclass Project {\n  constructor(name) {\n    this.name = name;\n    this.items = new Array();\n  }\n\n  // get name() {\n  //   return this._name;\n  // }\n\n  // set name(value) {\n  //   if (value === \"\") {\n  //     throw new TypeError(\"Name cannot be empty.\");\n  //   } else {\n  //     this._name = value;\n  //   }\n  // }\n\n  addToProject(item) {\n    this.items.push(item);\n  }\n\n  removeFromProject(item) {\n    let index = this.items.indexOf(item);\n    this.items.splice(index, 1);\n  }\n}\n\n\n//# sourceURL=webpack://todo-list/./src/project.js?");

/***/ }),

/***/ "./src/toDo.js":
/*!*********************!*\
  !*** ./src/toDo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ToDo)\n/* harmony export */ });\nclass ToDo {\n  constructor(name, description, dueDate, priority) {\n    this.name = name;\n    this.description = description;\n    this.dueDate = dueDate;\n    this.priority = priority;\n    this.complete = false;\n  }\n\n  // get name() {\n  //   return this._name;\n  // }\n\n  // set name(value) {\n  //   if (value === \"\") {\n  //     throw new TypeError(\"Name cannot be empty.\");\n  //   } else {\n  //     this._name = value;\n  //   }\n  // }\n\n  toggleComplete() {\n    this.complete = !this.complete;\n  }\n}\n\n\n//# sourceURL=webpack://todo-list/./src/toDo.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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