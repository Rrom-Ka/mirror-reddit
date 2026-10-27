webpackHotUpdate("main",{

/***/ "./src/4_components/state/state.tsx":
/*!******************************************!*\
  !*** ./src/4_components/state/state.tsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.StarWarsNameFunction = void 0;\r\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nconst unique_names_generator_1 = __webpack_require__(/*! unique-names-generator */ \"./node_modules/unique-names-generator/dist/index.m.js\");\r\nfunction StarWarsNameFunction() {\r\n    const randomName = () => unique_names_generator_1.uniqueNamesGenerator({ dictionaries: [unique_names_generator_1.starWars], length: 1 });\r\n    //   //обявляем состояние\r\n    //   //   const [stateWarsReact, useStateWarsReact] = React.useState(\"11\");\r\n    //   const [stateWars, setStateWars] = useState(randomName);\r\n    //   const [count, setCount] = useState(0);\r\n    //   const handleClick = () => {\r\n    //     setStateWars(randomName);\r\n    //     // setCount(count + 1); //не стабильно\r\n    //     setCount((prevCount) => prevCount + 1);\r\n    //   };\r\n    //комлексный способ\r\n    return (react_1.default.createElement(\"section\", null,\r\n        react_1.default.createElement(\"span\", null,\r\n            stateWars,\r\n            \" \"),\r\n        react_1.default.createElement(\"div\", null, count),\r\n        react_1.default.createElement(\"button\", { onClick: handleClick }, \"\\u041C\\u043D\\u0435 \\u043D\\u0443\\u0436\\u043D\\u043E \\u0438\\u043C\\u044F\")));\r\n}\r\nexports.StarWarsNameFunction = StarWarsNameFunction;\r\n\n\n//# sourceURL=webpack:///./src/4_components/state/state.tsx?");

/***/ }),

/***/ "./src/client/index.jsx":
/*!******************************!*\
  !*** ./src/client/index.jsx ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst React = __importStar(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nconst ReactDOM = __importStar(__webpack_require__(/*! react-dom */ \"./node_modules/@hot-loader/react-dom/index.js\"));\r\nconst state_1 = __webpack_require__(/*! ../4_components/state/state */ \"./src/4_components/state/state.tsx\");\r\nwindow.addEventListener('load', () => {\r\n    ReactDOM.hydrate(React.createElement(state_1.StarWarsNameFunction, null), document.getElementById('react_root'));\r\n});\r\n\n\n//# sourceURL=webpack:///./src/client/index.jsx?");

/***/ })

})