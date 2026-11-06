webpackHotUpdate("main",{

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.App = void 0;\r\n__webpack_require__(/*! ./main.global.css */ \"./src/main.global.css\");\r\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nconst root_1 = __webpack_require__(/*! react-hot-loader/root */ \"./node_modules/react-hot-loader/root.js\");\r\nconst Header_1 = __webpack_require__(/*! ./shared/Header */ \"./src/shared/Header/index.ts\");\r\nconst Layout_1 = __webpack_require__(/*! ./shared/Layout/Layout */ \"./src/shared/Layout/Layout.tsx\");\r\nconst Content_1 = __webpack_require__(/*! ./shared/Content */ \"./src/shared/Content/index.ts\");\r\nconst CardLists_1 = __webpack_require__(/*! ./shared/CardLists */ \"./src/shared/CardLists/index.ts\");\r\nconst Dropdown_1 = __webpack_require__(/*! ./shared/Dropdown */ \"./src/shared/Dropdown/index.ts\");\r\nfunction AppCoponent() {\r\n    return (react_1.default.createElement(Layout_1.Layout, null,\r\n        react_1.default.createElement(Header_1.Header, null),\r\n        react_1.default.createElement(Content_1.Content, null,\r\n            react_1.default.createElement(CardLists_1.CardLists, null),\r\n            react_1.default.createElement(\"div\", { style: { padding: 60 } },\r\n                react_1.default.createElement(Dropdown_1.Dropdown, { onClose: () => console.log(\"closed\"), onOpen: () => console.log(opned), isOpen: true, button: react_1.default.createElement(\"button\", null, \"test\") },\r\n                    react_1.default.createElement(CardLists_1.CardLists, null),\r\n                    react_1.default.createElement(\"ul\", null,\r\n                        react_1.default.createElement(\"li\", null, \"1\")))))));\r\n}\r\nexports.App = root_1.hot(() => react_1.default.createElement(AppCoponent, null)); //2.3 доп подключение react-hot-loader\r\n// export const App = AppCoponent;\r\n\n\n//# sourceURL=webpack:///./src/App.tsx?");

/***/ })

})