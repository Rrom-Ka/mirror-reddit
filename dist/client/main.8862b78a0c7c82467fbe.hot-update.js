webpackHotUpdate("main",{

/***/ "./src/shared/Header/Header.tsx":
/*!**************************************!*\
  !*** ./src/shared/Header/Header.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Header = void 0;\r\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nconst Header_css_1 = __importDefault(__webpack_require__(/*! ./Header.css */ \"./src/shared/Header/Header.css\"));\r\nconst SearchBlock_1 = __webpack_require__(/*! ./SearchBlock/SearchBlock */ \"./src/shared/Header/SearchBlock/SearchBlock.tsx\");\r\nconst ThreadTitle_1 = __webpack_require__(/*! ./ThreadTitle */ \"./src/shared/Header/ThreadTitle/index.ts\");\r\nconst SortBlock_1 = __webpack_require__(/*! ./SortBlock */ \"./src/shared/Header/SortBlock/index.ts\");\r\nfunction Header({ token }) {\r\n    return (react_1.default.createElement(\"header\", { className: Header_css_1.default.header },\r\n        react_1.default.createElement(SearchBlock_1.SearchBlock, { token: token }),\r\n        react_1.default.createElement(ThreadTitle_1.ThreadTitle, null),\r\n        react_1.default.createElement(SortBlock_1.SortBlock, null)));\r\n}\r\nexports.Header = Header;\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/Header.tsx?");

/***/ }),

/***/ "./src/shared/Header/SearchBlock/SearchBlock.tsx":
/*!*******************************************************!*\
  !*** ./src/shared/Header/SearchBlock/SearchBlock.tsx ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.SearchBlock = void 0;\r\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nconst SearchBlock_css_1 = __importDefault(__webpack_require__(/*! ./SearchBlock.css */ \"./src/shared/Header/SearchBlock/SearchBlock.css\"));\r\nconst UserBlock_tsx_1 = __webpack_require__(/*! ./UserBlock.tsx */ \"./src/shared/Header/SearchBlock/UserBlock.tsx/index.ts\");\r\nconst useUserData_1 = __webpack_require__(/*! ../../../utils/hooks/useUserData */ \"./src/utils/hooks/useUserData.ts\");\r\nfunction SearchBlock({ token }) {\r\n    const data = useUserData_1.useUserData(token);\r\n    return (react_1.default.createElement(\"div\", { className: SearchBlock_css_1.default.searchBlock },\r\n        react_1.default.createElement(UserBlock_tsx_1.UserBlock, { avatarSrc: data.iconImg, username: data.name })));\r\n}\r\nexports.SearchBlock = SearchBlock;\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/SearchBlock/SearchBlock.tsx?");

/***/ }),

/***/ "./src/utils/hooks/useUserData.ts":
/*!****************************************!*\
  !*** ./src/utils/hooks/useUserData.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.useUserData = void 0;\r\nconst axios_1 = __importDefault(__webpack_require__(/*! axios */ \"./node_modules/axios/index.js\"));\r\nconst react_1 = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\r\nfunction useUserData({ token }) {\r\n    const [data, setData] = react_1.useState({});\r\n    react_1.useEffect(() => {\r\n        axios_1.default\r\n            .get(\"https://api.github.com/user\", {\r\n            headers: { Authorization: `Bearer ${token}` },\r\n        })\r\n            .then((resp) => {\r\n            const userData = resp.data;\r\n            console.log(\"userData\", userData);\r\n            setData({\r\n                name: userData.name || userData.login,\r\n                iconImg: userData.avatar_url,\r\n            });\r\n        })\r\n            .catch(console.log);\r\n    }, [token]);\r\n    return data;\r\n}\r\nexports.useUserData = useUserData;\r\n\n\n//# sourceURL=webpack:///./src/utils/hooks/useUserData.ts?");

/***/ })

})