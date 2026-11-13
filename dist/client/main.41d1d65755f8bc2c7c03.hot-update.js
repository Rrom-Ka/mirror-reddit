webpackHotUpdate("main",{

/***/ "./src/shared/CardLists/Card/Menu/renderMenuItems.tsx":
/*!************************************************************!*\
  !*** ./src/shared/CardLists/Card/Menu/renderMenuItems.tsx ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.renderMenuItemsGenericList = exports.renderMenuItems = void 0;\r\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nconst merge_1 = __webpack_require__(/*! ../../../../utils/js/merge */ \"./src/utils/js/merge.ts\");\r\nconst pipe_1 = __webpack_require__(/*! ../../../../utils/react/pipe */ \"./src/utils/react/pipe.tsx\");\r\nconst withIdKey_1 = __webpack_require__(/*! ../../../../utils/react/withIdKey */ \"./src/utils/react/withIdKey.tsx\");\r\nconst DropdownItem_1 = __webpack_require__(/*! ../../../Dropdown/DropdownItem */ \"./src/shared/Dropdown/DropdownItem/index.ts\");\r\nconst GenericListTitle_1 = __webpack_require__(/*! ../../../GenericList/GenericListTitle */ \"./src/shared/GenericList/GenericListTitle.tsx\");\r\nexports.renderMenuItems = ({ isTablaet, handlerItemClick, }) => pipe_1.pipe(\r\n//фильтр для с мобильного\r\n(list) => list.filter((item) => isTablaet === \"mobile\"\r\n    ? item.title === \"Скрыть\" || item.title === \"Пожаловаться\"\r\n    : true), \r\n//добавляем handler для какжого item\r\n(list) => list.map((item) => merge_1.merge({\r\n    onClick: handlerItemClick(item),\r\n})(item)), \r\n//вписываем в <DropdownItem/> key{id}\r\n(list) => list.map(withIdKey_1.withIdKey(DropdownItem_1.DropdownItem)));\r\nexports.renderMenuItemsGenericList = ({ isTablaet, handlerItemClick, styles, }) => pipe_1.pipe(\r\n//фильтр для с мобильного\r\n(list) => list.filter((item) => isTablaet === \"mobile\"\r\n    ? item.title === \"Скрыть\" || item.title === \"Пожаловаться\"\r\n    : true), \r\n//добавляем handler для какжого item\r\n(list) => list.map((item) => merge_1.merge({\r\n    onClick: handlerItemClick(item),\r\n})(item)), (list) => list.map((item) => merge_1.merge({\r\n    As: \"li\",\r\n})(item)), (list) => list.map((item) => merge_1.merge({\r\n    styles: styles,\r\n})(item)), \r\n//вписываем в <DropdownItem/> key{id}\r\n(list) => react_1.default.createElement(GenericListTitle_1.GenericListTitle, { list: list }));\r\n\n\n//# sourceURL=webpack:///./src/shared/CardLists/Card/Menu/renderMenuItems.tsx?");

/***/ })

})