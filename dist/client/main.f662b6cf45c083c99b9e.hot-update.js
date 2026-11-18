webpackHotUpdate("main",{

/***/ "./src/shared/Header/SearchBlock/UserBlock.tsx/UserBlock.tsx":
/*!*******************************************************************!*\
  !*** ./src/shared/Header/SearchBlock/UserBlock.tsx/UserBlock.tsx ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.UserBlock = void 0;\r\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nconst UserBlock_css_1 = __importDefault(__webpack_require__(/*! ./UserBlock.css */ \"./src/shared/Header/SearchBlock/UserBlock.tsx/UserBlock.css\"));\r\nconst Icon_1 = __webpack_require__(/*! ../../../HOC/Icon */ \"./src/shared/HOC/Icon/index.ts\");\r\nconst Break_1 = __webpack_require__(/*! ../../../HOC/Break */ \"./src/shared/HOC/Break/index.ts\");\r\nconst Text_1 = __webpack_require__(/*! ../../../HOC/Text */ \"./src/shared/HOC/Text/index.ts\");\r\nconst Ecolors_1 = __webpack_require__(/*! ../../../../types/Ecolors */ \"./src/types/Ecolors.tsx\");\r\nfunction UserBlock({ avatarSrc, username }) {\r\n    return (react_1.default.createElement(\"a\", { href: \"https://www.reddit.com/api/v1/authorize?client_id=CLIENT_ID&response_type=code&state=random_string&redirect_uri=http://localhost:3000/auth&duration=permanent&scope=read%20submit%20identity\", className: UserBlock_css_1.default.userbox },\r\n        react_1.default.createElement(\"div\", { className: UserBlock_css_1.default.avatarbox }, avatarSrc ? (react_1.default.createElement(\"img\", { className: UserBlock_css_1.default.avatarImage })) : (react_1.default.createElement(Icon_1.Icon, { name: Icon_1.EIcons.Anon, size: 50 }))),\r\n        react_1.default.createElement(\"div\", { className: UserBlock_css_1.default.username },\r\n            react_1.default.createElement(Break_1.Break, { size: 12 }),\r\n            react_1.default.createElement(Text_1.Text, { size: 20, color: username ? Ecolors_1.Ecolors.black : Ecolors_1.Ecolors.gray99 }, username || \"Аноним\"))));\r\n}\r\nexports.UserBlock = UserBlock;\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/SearchBlock/UserBlock.tsx/UserBlock.tsx?");

/***/ })

})