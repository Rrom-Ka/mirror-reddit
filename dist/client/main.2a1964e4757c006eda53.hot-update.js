webpackHotUpdate("main",{

/***/ "./src/shared/Text/Text.tsx":
/*!**********************************!*\
  !*** ./src/shared/Text/Text.tsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Text = void 0;\r\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nconst Text_css_1 = __importDefault(__webpack_require__(/*! ./Text.css */ \"./src/shared/Text/Text.css\"));\r\nconst classnames_1 = __importDefault(__webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\"));\r\nconst Ecolors_1 = __webpack_require__(/*! ../../types/Ecolors */ \"./src/types/Ecolors.tsx\");\r\nfunction Text(props) {\r\n    //деструкция props\r\n    const { As = \"span\", color = Ecolors_1.Ecolors.black, children, size, mobileSize, tabletSize, descTopSize, } = props;\r\n    //использование билиотеки класснамес\r\n    //параметры -стили кот смерджим\r\n    const classes = classnames_1.default(Text_css_1.default[`${size}`], Text_css_1.default[color], { [Text_css_1.default[`m${mobileSize}`]]: mobileSize }, //выполнется если передаем значение\r\n    { [Text_css_1.default[`t${tabletSize}`]]: tabletSize }, { [Text_css_1.default[`d${descTopSize}`]]: descTopSize });\r\n    return react_1.default.createElement(As, { className: classes }, children);\r\n}\r\nexports.Text = Text;\r\n// export enum Ecolors {\r\n//   black = \"var(--black)\",\r\n//   orange = \"var(--orange)\",\r\n//   green = \"var(--green)\",\r\n//   white = \"var(--white)\",\r\n//   grayF4 = \"var(--grayF4)\",\r\n//   grayF3 = \"var(--grayF3)\",\r\n//   grayC4 = \"var(--grayC4)\",\r\n//   gray66 = \"var(--gray66)\",\r\n//   gray99 = \"var(--gray99)\",\r\n//   grayEC = \"var(--grayEC)\",\r\n// }\r\n\n\n//# sourceURL=webpack:///./src/shared/Text/Text.tsx?");

/***/ }),

/***/ "./src/types/Ecolors.tsx":
/*!*******************************!*\
  !*** ./src/types/Ecolors.tsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n//библиотека для удобного условного объединения CSS-классов\r\n//npm i classnames@2.2\r\n//npm i -D @types/classnames@2.2\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Ecolors = void 0;\r\nvar Ecolors;\r\n(function (Ecolors) {\r\n    Ecolors[\"black\"] = \"black\";\r\n    Ecolors[\"orange\"] = \"orange\";\r\n    Ecolors[\"green\"] = \"green\";\r\n    Ecolors[\"white\"] = \"white\";\r\n    Ecolors[\"grayF4\"] = \"grayF4\";\r\n    Ecolors[\"grayF3\"] = \"grayF3\";\r\n    Ecolors[\"grayC4\"] = \"grayC4\";\r\n    Ecolors[\"gray66\"] = \"gray66\";\r\n    Ecolors[\"gray99\"] = \"gray99\";\r\n    Ecolors[\"grayEC\"] = \"grayEC\";\r\n})(Ecolors = exports.Ecolors || (exports.Ecolors = {}));\r\n\n\n//# sourceURL=webpack:///./src/types/Ecolors.tsx?");

/***/ })

})