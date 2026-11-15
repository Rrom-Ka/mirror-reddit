webpackHotUpdate("main",{

/***/ "./src/shared/Text/Text.tsx":
/*!**********************************!*\
  !*** ./src/shared/Text/Text.tsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Text = void 0;\r\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nconst Text_css_1 = __importDefault(__webpack_require__(/*! ./Text.css */ \"./src/shared/Text/Text.css\"));\r\nconst classnames_1 = __importDefault(__webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\"));\r\nconst Ecolors_1 = __webpack_require__(/*! ../../types/Ecolors */ \"./src/types/Ecolors.tsx\");\r\nfunction Text(props) {\r\n    //деструкция props\r\n    const { As = \"span\", color = Ecolors_1.Ecolors.black, bold = false, children, size, mobileSize, tabletSize, descTopSize, } = props;\r\n    //использование билиотеки класснамес\r\n    //параметры -стили кот смерджим\r\n    const classes = classnames_1.default(Text_css_1.default[`${size}`], Text_css_1.default[color], { [Text_css_1.default[bold]]: bold }, { [Text_css_1.default[`m${mobileSize}`]]: mobileSize }, //выполнется если передаем значение\r\n    { [Text_css_1.default[`t${tabletSize}`]]: tabletSize }, { [Text_css_1.default[`d${descTopSize}`]]: descTopSize });\r\n    return react_1.default.createElement(As, { className: classes }, children);\r\n}\r\nexports.Text = Text;\r\n// export enum Ecolors {\r\n//   black = \"var(--black)\",\r\n//   orange = \"var(--orange)\",\r\n//   green = \"var(--green)\",\r\n//   white = \"var(--white)\",\r\n//   grayF4 = \"var(--grayF4)\",\r\n//   grayF3 = \"var(--grayF3)\",\r\n//   grayC4 = \"var(--grayC4)\",\r\n//   gray66 = \"var(--gray66)\",\r\n//   gray99 = \"var(--gray99)\",\r\n//   grayEC = \"var(--grayEC)\",\r\n// }\r\n\n\n//# sourceURL=webpack:///./src/shared/Text/Text.tsx?");

/***/ })

})