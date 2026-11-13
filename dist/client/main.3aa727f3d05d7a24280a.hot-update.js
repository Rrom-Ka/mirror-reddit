webpackHotUpdate("main",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./src/shared/GenericList/GenericList.css":
/*!************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./src/shared/GenericList/GenericList.css ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \".GenericList__genericList--2fiMc {\\r\\n}\\r\\n\", \"\"]);\n// Exports\nexports.locals = {\n\t\"genericList\": \"GenericList__genericList--2fiMc\"\n};\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/shared/GenericList/GenericList.css?./node_modules/css-loader/dist/cjs.js??ref--5-1");

/***/ }),

/***/ "./src/shared/GenericList/GenericList.css":
/*!************************************************!*\
  !*** ./src/shared/GenericList/GenericList.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-1!./GenericList.css */ \"./node_modules/css-loader/dist/cjs.js?!./src/shared/GenericList/GenericList.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\nif (true) {\n  if (!content.locals || module.hot.invalidate) {\n    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {\n  if (!a && b || a && !b) {\n    return false;\n  }\n\n  var p;\n\n  for (p in a) {\n    if (isNamedExport && p === 'default') {\n      // eslint-disable-next-line no-continue\n      continue;\n    }\n\n    if (a[p] !== b[p]) {\n      return false;\n    }\n  }\n\n  for (p in b) {\n    if (isNamedExport && p === 'default') {\n      // eslint-disable-next-line no-continue\n      continue;\n    }\n\n    if (!a[p]) {\n      return false;\n    }\n  }\n\n  return true;\n};\n    var oldLocals = content.locals;\n\n    module.hot.accept(\n      /*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-1!./GenericList.css */ \"./node_modules/css-loader/dist/cjs.js?!./src/shared/GenericList/GenericList.css\",\n      function () {\n        content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-1!./GenericList.css */ \"./node_modules/css-loader/dist/cjs.js?!./src/shared/GenericList/GenericList.css\");\n\n              content = content.__esModule ? content.default : content;\n\n              if (typeof content === 'string') {\n                content = [[module.i, content, '']];\n              }\n\n              if (!isEqualLocals(oldLocals, content.locals)) {\n                module.hot.invalidate();\n\n                return;\n              }\n\n              oldLocals = content.locals;\n\n              update(content);\n      }\n    )\n  }\n\n  module.hot.dispose(function() {\n    update();\n  });\n}\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/shared/GenericList/GenericList.css?");

/***/ }),

/***/ "./src/shared/GenericList/GenericListTitle.tsx":
/*!*****************************************************!*\
  !*** ./src/shared/GenericList/GenericListTitle.tsx ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.GenericListTitle = void 0;\r\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nconst GenericList_css_1 = __importDefault(__webpack_require__(/*! ./GenericList.css */ \"./src/shared/GenericList/GenericList.css\"));\r\nfunction GenericListTitle({ list }) {\r\n    return (react_1.default.createElement(react_1.default.Fragment, null, list.map(({ As = \"div\", title, onClick, className, id, href }) => (react_1.default.createElement(As, { className: className, onClick: () => onClick(), key: id, href: href },\r\n        react_1.default.createElement(\"div\", { className: GenericList_css_1.default.iconWrapper }, icon),\r\n        react_1.default.createElement(\"h3\", { className: GenericList_css_1.default.title }, title))))));\r\n}\r\nexports.GenericListTitle = GenericListTitle;\r\n\n\n//# sourceURL=webpack:///./src/shared/GenericList/GenericListTitle.tsx?");

/***/ })

})