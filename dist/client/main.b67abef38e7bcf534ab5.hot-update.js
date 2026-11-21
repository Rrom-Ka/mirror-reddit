webpackHotUpdate("main",{

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.App = void 0;\r\n__webpack_require__(/*! ./main.global.css */ \"./src/main.global.css\");\r\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nconst root_1 = __webpack_require__(/*! react-hot-loader/root */ \"./node_modules/react-hot-loader/root.js\");\r\nconst Header_1 = __webpack_require__(/*! ./shared/Header */ \"./src/shared/Header/index.ts\");\r\nconst Layout_1 = __webpack_require__(/*! ./shared/Layout/Layout */ \"./src/shared/Layout/Layout.tsx\");\r\nconst Content_1 = __webpack_require__(/*! ./shared/Content */ \"./src/shared/Content/index.ts\");\r\nconst CardLists_1 = __webpack_require__(/*! ./shared/CardLists */ \"./src/shared/CardLists/index.ts\");\r\nconst useToken_1 = __webpack_require__(/*! ./utils/hooks/useToken */ \"./src/utils/hooks/useToken.ts\");\r\nconst tokencontext_1 = __webpack_require__(/*! ./context/tokencontext */ \"./src/context/tokencontext.ts\");\r\nconst userContext_1 = __webpack_require__(/*! ./context/userContext */ \"./src/context/userContext.tsx\");\r\nconst postContext_1 = __webpack_require__(/*! ./context/postContext */ \"./src/context/postContext.tsx\");\r\nfunction AppCoponent() {\r\n    const [token] = useToken_1.useToken();\r\n    return (react_1.default.createElement(tokencontext_1.tokenContext.Provider, { value: token },\r\n        react_1.default.createElement(userContext_1.UserContextProvider, null,\r\n            react_1.default.createElement(postContext_1.PostContextProvider, null,\r\n                react_1.default.createElement(Layout_1.Layout, null,\r\n                    react_1.default.createElement(Header_1.Header, { token: token }),\r\n                    react_1.default.createElement(Content_1.Content, null,\r\n                        react_1.default.createElement(CardLists_1.CardLists, null)))))));\r\n}\r\nexports.App = root_1.hot(() => react_1.default.createElement(AppCoponent, null)); //2.3 доп подключение react-hot-loader\r\n// export const App = AppCoponent;\r\n\n\n//# sourceURL=webpack:///./src/App.tsx?");

/***/ })

})