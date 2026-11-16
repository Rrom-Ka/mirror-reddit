webpackHotUpdate("main",{

/***/ "./src/shared/HOC/Icon/Icon.tsx":
/*!**************************************!*\
  !*** ./src/shared/HOC/Icon/Icon.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Icon = exports.EIcons = void 0;\r\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nconst Icon_css_1 = __importDefault(__webpack_require__(/*! ./Icon.css */ \"./src/shared/HOC/Icon/Icon.css\"));\r\nconst classnames_1 = __importDefault(__webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\"));\r\nconst Icon_1 = __webpack_require__(/*! ../../Icon */ \"./src/shared/Icon/index.ts\");\r\nvar EIcons;\r\n(function (EIcons) {\r\n    EIcons[\"Comments\"] = \"Comments\";\r\n    EIcons[\"Dots\"] = \"Dots\";\r\n    EIcons[\"Hide\"] = \"Hide\";\r\n    EIcons[\"Report\"] = \"Report\";\r\n    EIcons[\"Save\"] = \"Save\";\r\n    EIcons[\"Share\"] = \"Share\";\r\n})(EIcons = exports.EIcons || (exports.EIcons = {}));\r\nconst IconComponentsList = {\r\n    Comments: Icon_1.MenuCommentsIconComponent,\r\n    Dots: Icon_1.MenuDotsIconComponent,\r\n    Hide: MenuHideIconComponent,\r\n    Report: MenuReportIconComponent,\r\n    Save: MenuSaveIconComponent,\r\n    Share: MenuShareIconComponent,\r\n};\r\n;\r\nfunction Icon(props) {\r\n    const { name, size, width, color } = props;\r\n    const classes = classnames_1.default(Icon_css_1.default.wrapper, { [Icon_css_1.default[`s${size}`]]: size }, { [Icon_css_1.default[`w${width}`]]: width });\r\n    const IconComponent = IconComponentsList[name];\r\n    return (react_1.default.createElement(\"span\", { className: classes, style: { color } },\r\n        react_1.default.createElement(IconComponent, null)));\r\n}\r\nexports.Icon = Icon;\r\n\n\n//# sourceURL=webpack:///./src/shared/HOC/Icon/Icon.tsx?");

/***/ })

})