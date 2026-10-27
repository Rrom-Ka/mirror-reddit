webpackHotUpdate("main",{

/***/ "./src/4_components/state/state.tsx":
/*!******************************************!*\
  !*** ./src/4_components/state/state.tsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.StarWarsNameFunction = void 0;\r\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nconst unique_names_generator_1 = __webpack_require__(/*! unique-names-generator */ \"./node_modules/unique-names-generator/dist/index.m.js\");\r\nfunction StarWarsNameFunction() {\r\n    const randomName = () => unique_names_generator_1.uniqueNamesGenerator({ dictionaries: [unique_names_generator_1.starWars], length: 1 });\r\n    //   //обявляем состояние\r\n    //   //   const [stateWarsReact, useStateWarsReact] = React.useState(\"11\");\r\n    //   const [stateWars, setStateWars] = useState(randomName);\r\n    //   const [count, setCount] = useState(0);\r\n    //   const handleClick = () => {\r\n    //     setStateWars(randomName);\r\n    //     // setCount(count + 1); //не стабильно\r\n    //     setCount((prevCount) => prevCount + 1);\r\n    //   };\r\n    //комлексный способ\r\n    const [] = useStateStarWarsNameFunction({});\r\n    return (react_1.default.createElement(\"section\", null,\r\n        react_1.default.createElement(\"span\", null,\r\n            stateWars,\r\n            \" \"),\r\n        react_1.default.createElement(\"div\", null, count),\r\n        react_1.default.createElement(\"button\", { onClick: handleClick }, \"\\u041C\\u043D\\u0435 \\u043D\\u0443\\u0436\\u043D\\u043E \\u0438\\u043C\\u044F\")));\r\n}\r\nexports.StarWarsNameFunction = StarWarsNameFunction;\r\n\n\n//# sourceURL=webpack:///./src/4_components/state/state.tsx?");

/***/ })

})