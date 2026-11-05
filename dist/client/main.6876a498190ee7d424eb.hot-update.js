webpackHotUpdate("main",{

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.App = void 0;\r\n__webpack_require__(/*! ./main.global.css */ \"./src/main.global.css\");\r\nconst react_1 = __importStar(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nconst root_1 = __webpack_require__(/*! react-hot-loader/root */ \"./node_modules/react-hot-loader/root.js\");\r\nconst Header_1 = __webpack_require__(/*! ./shared/Header */ \"./src/shared/Header/index.ts\");\r\nconst Layout_1 = __webpack_require__(/*! ./shared/Layout/Layout */ \"./src/shared/Layout/Layout.tsx\");\r\nconst Content_1 = __webpack_require__(/*! ./shared/Content */ \"./src/shared/Content/index.ts\");\r\nconst CardLists_1 = __webpack_require__(/*! ./shared/CardLists */ \"./src/shared/CardLists/index.ts\");\r\nconst generateRandomIndex_1 = __webpack_require__(/*! ./utils/react/generateRandomIndex */ \"./src/utils/react/generateRandomIndex.ts\");\r\nconst merge_1 = __webpack_require__(/*! ./utils/js/merge */ \"./src/utils/js/merge.ts\");\r\nconst GenericList_1 = __webpack_require__(/*! ./shared/GenericList */ \"./src/shared/GenericList/index.ts\");\r\n//выносится из компоенента, тк в компоненет при каждом ренедре id будет пересчитываться\r\nconst LIST = [{ value: \"some\" }, { value: \"oversum\" }, { value: \"overs\" }].map(generateRandomIndex_1.generateId);\r\nfunction AppCoponent() {\r\n    const [list, setList] = react_1.useState(LIST);\r\n    const handleItemDelete = (id) => {\r\n        //через setList текущий список фильтруем где id !=== id\r\n        setList(list.filter((item) => item.id !== id));\r\n    };\r\n    const handleItemAdd = () => {\r\n        setList(list.concat(generateRandomIndex_1.generateId({ value: generateRandomIndex_1.generateRandomString() })));\r\n    };\r\n    return (react_1.default.createElement(Layout_1.Layout, null,\r\n        react_1.default.createElement(Header_1.Header, null),\r\n        react_1.default.createElement(Content_1.Content, null,\r\n            react_1.default.createElement(CardLists_1.CardLists, null),\r\n            react_1.default.createElement(\"button\", { onClick: handleItemAdd }, \"add\"),\r\n            react_1.default.createElement(GenericList_1.GenericList, { list: list.map(merge_1.merge({\r\n                    onClick: handleItemDelete,\r\n                })) }))));\r\n}\r\nexports.App = root_1.hot(() => react_1.default.createElement(AppCoponent, null)); //2.3 доп подключение react-hot-loader\r\n// export const App = AppCoponent;\r\n\n\n//# sourceURL=webpack:///./src/App.tsx?");

/***/ }),

/***/ "./src/Example/GenericList.tsx":
false,

/***/ "./src/shared/GenericList/GenericList.tsx":
/*!************************************************!*\
  !*** ./src/shared/GenericList/GenericList.tsx ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.GenericList = void 0;\r\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nfunction GenericList({ list }) {\r\n    return (react_1.default.createElement(react_1.default.Fragment, null, list.map(({ As = \"div\", text, onClick, className, id, href }) => (react_1.default.createElement(As, { className: className, onClick: () => onClick(id), key: id, href: href }, text)))));\r\n}\r\nexports.GenericList = GenericList;\r\n\n\n//# sourceURL=webpack:///./src/shared/GenericList/GenericList.tsx?");

/***/ }),

/***/ "./src/shared/GenericList/index.ts":
/*!*****************************************!*\
  !*** ./src/shared/GenericList/index.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./GenericList */ \"./src/shared/GenericList/GenericList.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/GenericList/index.ts?");

/***/ })

})