webpackHotUpdate("main",{

/***/ "./src/shared/CardLists/CardLists.tsx":
/*!********************************************!*\
  !*** ./src/shared/CardLists/CardLists.tsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.CardLists = void 0;\r\nconst react_1 = __importStar(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nconst CardLists_css_1 = __importDefault(__webpack_require__(/*! ./CardLists.css */ \"./src/shared/CardLists/CardLists.css\"));\r\nconst Card_1 = __webpack_require__(/*! ./Card/Card */ \"./src/shared/CardLists/Card/Card.tsx\");\r\nconst postContext_1 = __webpack_require__(/*! ../../context/postContext */ \"./src/context/postContext.tsx\");\r\nfunction CardLists() {\r\n    const postData = react_1.useContext(postContext_1.postContext).data;\r\n    console.log(\"CardList postData :\", postData);\r\n    return (react_1.default.createElement(\"ul\", { className: CardLists_css_1.default.cardLists }, postData && postData.map((item) => react_1.default.createElement(Card_1.Card, Object.assign({}, item)))));\r\n}\r\nexports.CardLists = CardLists;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardLists/CardLists.tsx?");

/***/ })

})