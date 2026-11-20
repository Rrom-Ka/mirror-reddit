/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/server.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.App = void 0;\r\n__webpack_require__(/*! ./main.global.css */ \"./src/main.global.css\");\r\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nconst root_1 = __webpack_require__(/*! react-hot-loader/root */ \"react-hot-loader/root\");\r\nconst Header_1 = __webpack_require__(/*! ./shared/Header */ \"./src/shared/Header/index.ts\");\r\nconst Layout_1 = __webpack_require__(/*! ./shared/Layout/Layout */ \"./src/shared/Layout/Layout.tsx\");\r\nconst Content_1 = __webpack_require__(/*! ./shared/Content */ \"./src/shared/Content/index.ts\");\r\nconst CardLists_1 = __webpack_require__(/*! ./shared/CardLists */ \"./src/shared/CardLists/index.ts\");\r\nconst useToken_1 = __webpack_require__(/*! ./utils/hooks/useToken */ \"./src/utils/hooks/useToken.ts\");\r\nfunction AppCoponent() {\r\n    const [token] = useToken_1.useToken();\r\n    return (react_1.default.createElement(Layout_1.Layout, null,\r\n        react_1.default.createElement(Header_1.Header, { token: token }),\r\n        react_1.default.createElement(Content_1.Content, null,\r\n            react_1.default.createElement(CardLists_1.CardLists, null))));\r\n}\r\nexports.App = root_1.hot(() => react_1.default.createElement(AppCoponent, null)); //2.3 доп подключение react-hot-loader\r\n// export const App = AppCoponent;\r\n\n\n//# sourceURL=webpack:///./src/App.tsx?");

/***/ }),

/***/ "./src/assets/svg/MenuIcon.tsx":
/*!*************************************!*\
  !*** ./src/assets/svg/MenuIcon.tsx ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.MenuReportIcon = exports.MenuSaveIcon = exports.MenuHideIcon = exports.MenuShareIcon = exports.MenuCommentsIcon = exports.MenuDotsIcon = void 0;\r\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\n//три точки\r\nexports.MenuDotsIcon = (react_1.default.createElement(\"svg\", { width: \"5\", height: \"20\", viewBox: \"0 0 5 20\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n    react_1.default.createElement(\"circle\", { cx: \"2.5\", cy: \"2.5\", r: \"2.5\", fill: \"#D9D9D9\" }),\r\n    react_1.default.createElement(\"circle\", { cx: \"2.5\", cy: \"10\", r: \"2.5\", fill: \"#D9D9D9\" }),\r\n    react_1.default.createElement(\"circle\", { cx: \"2.5\", cy: \"17.5\", r: \"2.5\", fill: \"#D9D9D9\" })));\r\n//Комментарии\r\nexports.MenuCommentsIcon = (react_1.default.createElement(\"svg\", { width: \"15\", height: \"15\", viewBox: \"0 0 15 15\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n    react_1.default.createElement(\"path\", { d: \"M12.75 0H1.41667C0.6375 0 0 0.6375 0 1.41667V9.91667C0 10.6958 0.6375 11.3333 1.41667 11.3333H11.3333L14.1667 14.1667V1.41667C14.1667 0.6375 13.5292 0 12.75 0ZM11.3333 8.5H2.83333V7.08333H11.3333V8.5ZM11.3333 6.375H2.83333V4.95833H11.3333V6.375ZM11.3333 4.25H2.83333V2.83333H11.3333V4.25Z\", fill: \"none\" })));\r\n//Поделиться\r\nexports.MenuShareIcon = (react_1.default.createElement(\"svg\", { width: \"12\", height: \"14\", viewBox: \"0 0 12 14\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n    react_1.default.createElement(\"path\", { d: \"M10 9.89558C9.49333 9.89558 9.04 10.1064 8.69333 10.4367L3.94 7.52008C3.97333 7.35843 4 7.19679 4 7.02811C4 6.85944 3.97333 6.69779 3.94 6.53614L8.64 3.64759C9 3.999 9.47333 4.21687 10 4.21687C11.1067 4.21687 12 3.2751 12 2.10843C12 0.941767 11.1067 0 10 0C8.89333 0 8 0.941767 8 2.10843C8 2.27711 8.02667 2.43875 8.06 2.6004L3.36 5.48896C3 5.13755 2.52667 4.91968 2 4.91968C0.893333 4.91968 0 5.86145 0 7.02811C0 8.19478 0.893333 9.13655 2 9.13655C2.52667 9.13655 3 8.91867 3.36 8.56727L8.10667 11.491C8.07333 11.6386 8.05333 11.7932 8.05333 11.9478C8.05333 13.0793 8.92667 14 10 14C11.0733 14 11.9467 13.0793 11.9467 11.9478C11.9467 10.8163 11.0733 9.89558 10 9.89558Z\", fill: \"none\" })));\r\n//Скрыть\r\nexports.MenuHideIcon = (react_1.default.createElement(\"svg\", { width: \"14\", height: \"14\", viewBox: \"0 0 14 14\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n    react_1.default.createElement(\"path\", { d: \"M7 0C3.136 0 0 3.136 0 7C0 10.864 3.136 14 7 14C10.864 14 14 10.864 14 7C14 3.136 10.864 0 7 0ZM7 12.6C3.906 12.6 1.4 10.094 1.4 7C1.4 5.705 1.841 4.515 2.583 3.57L10.43 11.417C9.485 12.159 8.295 12.6 7 12.6ZM11.417 10.43L3.57 2.583C4.515 1.841 5.705 1.4 7 1.4C10.094 1.4 12.6 3.906 12.6 7C12.6 8.295 12.159 9.485 11.417 10.43Z\", fill: \"#999999\" })));\r\n//Сохранить\r\nexports.MenuSaveIcon = (react_1.default.createElement(\"svg\", { width: \"14\", height: \"14\", viewBox: \"0 0 14 14\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n    react_1.default.createElement(\"path\", { d: \"M1.4 2.8H0V12.6C0 13.37 0.63 14 1.4 14H11.2V12.6H1.4V2.8ZM12.6 0H4.2C3.43 0 2.8 0.63 2.8 1.4V9.8C2.8 10.57 3.43 11.2 4.2 11.2H12.6C13.37 11.2 14 10.57 14 9.8V1.4C14 0.63 13.37 0 12.6 0ZM11.9 6.3H9.1V9.1H7.7V6.3H4.9V4.9H7.7V2.1H9.1V4.9H11.9V6.3Z\", fill: \"#979797\" })));\r\n//Пожаловаться\r\nexports.MenuReportIcon = (react_1.default.createElement(\"svg\", { width: \"16\", height: \"14\", viewBox: \"0 0 16 14\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n    react_1.default.createElement(\"path\", { d: \"M0 14H16L8 0L0 14ZM8.72727 11.7895H7.27273V10.3158H8.72727V11.7895ZM8.72727 8.8421H7.27273V5.89474H8.72727V8.8421Z\", fill: \"#999999\" })));\r\n\n\n//# sourceURL=webpack:///./src/assets/svg/MenuIcon.tsx?");

/***/ }),

/***/ "./src/main.global.css":
/*!*****************************!*\
  !*** ./src/main.global.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\nexports.push([module.i, \"@import url(https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap);\"]);\n// Module\nexports.push([module.i, \"/* @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap\\\" rel=\\\"stylesheet'); */\\r\\n\\r\\n:root {\\r\\n  --black: #333333;\\r\\n  --orange: #cc6633;\\r\\n  --green: #a1cc33;\\r\\n  --white: #ffffff;\\r\\n  --grayF4: #f4f4f4;\\r\\n  --grayF3: #f3f3f3;\\r\\n  --grayD9: #d9d9d9;\\r\\n  --grayC4: #c4c4c4;\\r\\n  --gray99: #999999;\\r\\n  --gray66: #666666;\\r\\n  --grayEC: #ececec;\\r\\n}\\r\\nbody {\\r\\n  padding: 0;\\r\\n  margin: 0;\\r\\n  background: var(--grayF4);\\r\\n  color: var(--black);\\r\\n  font-size: 14px;\\r\\n  line-height: 1.2;\\r\\n  font-family: \\\"Roboto\\\", sans-serif;\\r\\n}\\r\\n\\r\\n* {\\r\\n  /* color: var(--black); */\\r\\n  box-sizing: border-box;\\r\\n  -webkit-font-smoothing: antialiased;\\r\\n  -moz-osx-font-smoothing: grayscale;\\r\\n}\\r\\na {\\r\\n  text-decoration: none;\\r\\n}\\r\\n\\r\\nul {\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  list-style: none;\\r\\n}\\r\\n\\r\\nimg {\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\nbutton {\\r\\n  padding: 0;\\r\\n  margin: 0;\\r\\n  background: transparent;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/main.global.css?");

/***/ }),

/***/ "./src/server/indexTemlate.js":
/*!************************************!*\
  !*** ./src/server/indexTemlate.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.indexTemlate = void 0;\r\nexports.indexTemlate = (content, token) => `\r\n<!DOCTYPE html>\r\n<html lang=\"en\">\r\n<head>\r\n    <meta charset=\"UTF-8\">\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n    <title>Reddit</title>\r\n    <script>\r\n    window.__token__ = '${token}'\r\n    </script>\r\n    <script src=\"/static/client.js\" type=\"application/javascript\"></script>\r\n</head>\r\n<body>\r\n    <div id=\"react_root\">${content}</div>\r\n</body>\r\n</html>`;\r\n\n\n//# sourceURL=webpack:///./src/server/indexTemlate.js?");

/***/ }),

/***/ "./src/server/server.js":
/*!******************************!*\
  !*** ./src/server/server.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\r\nconst server_1 = __importDefault(__webpack_require__(/*! react-dom/server */ \"react-dom/server\"));\r\nconst indexTemlate_1 = __webpack_require__(/*! ./indexTemlate */ \"./src/server/indexTemlate.js\");\r\nconst axios_1 = __importDefault(__webpack_require__(/*! axios */ \"axios\"));\r\nconst App_1 = __webpack_require__(/*! ../App */ \"./src/App.tsx\");\r\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\n//инициализируме экспресс\r\nconst app = express_1.default();\r\napp.use(\"/static\", express_1.default.static(\"./dist/client\"));\r\n//устаналиваием листененр на сервер get\r\napp.get(\"/\", (req, res) => {\r\n    // res.send(indexTemlate(ReactDOM.renderToString(App())));\r\n    res.send(indexTemlate_1.indexTemlate(server_1.default.renderToString(react_1.default.createElement(App_1.App, null))));\r\n});\r\n//путь, возврата приложения после аутенфикации\r\napp.get(\"/auth\", (req, res) => {\r\n    //отпарвляем запрос на получени токена исп axios\r\n    axios_1.default\r\n        .post(\"https://github.com/login/oauth/access_token\", `client_id=${'Ov23likDFj84ty9RiYFJ'}&client_secret=${process.env.CLIENT_SECRET}&code=${req.query.code}&redirect_uri=http://localhost:3000/auth`, {\r\n        headers: {\r\n            \"Content-Type\": \"application/x-www-form-urlencoded\",\r\n            Accept: \"application/json\",\r\n        },\r\n    })\r\n        //обработка access_tocen -> рендер ручки токена\r\n        .then(({ data }) => {\r\n        //достае инденитфицирующий код\r\n        //req.query.code\r\n        res.send(indexTemlate_1.indexTemlate(server_1.default.renderToString(react_1.default.createElement(App_1.App, null)), data[\"access_token\"]));\r\n    })\r\n        .catch(console.log);\r\n});\r\napp.listen(3000, () => {\r\n    console.log(\"Server started on http://localhost:3000\");\r\n});\r\n\n\n//# sourceURL=webpack:///./src/server/server.js?");

/***/ }),

/***/ "./src/shared/CardLists/Card/Card.css":
/*!********************************************!*\
  !*** ./src/shared/CardLists/Card/Card.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"card\": \"Card__card--1ZEsn\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardLists/Card/Card.css?");

/***/ }),

/***/ "./src/shared/CardLists/Card/Card.tsx":
/*!********************************************!*\
  !*** ./src/shared/CardLists/Card/Card.tsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Card = void 0;\r\nconst react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nconst Card_css_1 = __importDefault(__webpack_require__(/*! ./Card.css */ \"./src/shared/CardLists/Card/Card.css\"));\r\nconst TextContent_1 = __webpack_require__(/*! ./TextContent */ \"./src/shared/CardLists/Card/TextContent/index.ts\");\r\nconst Preview_1 = __webpack_require__(/*! ./Preview */ \"./src/shared/CardLists/Card/Preview/index.ts\");\r\nconst Menu_1 = __webpack_require__(/*! ./Menu */ \"./src/shared/CardLists/Card/Menu/index.ts\");\r\nconst Controls_1 = __webpack_require__(/*! ./Controls */ \"./src/shared/CardLists/Card/Controls/index.ts\");\r\nfunction Card() {\r\n    const [isOpen, setIsOpen] = react_1.useState(false);\r\n    const hadnleClick = () => { };\r\n    return (react_1.default.createElement(\"li\", { className: Card_css_1.default.card },\r\n        react_1.default.createElement(TextContent_1.TextContent, null),\r\n        react_1.default.createElement(Preview_1.Preview, null),\r\n        react_1.default.createElement(Menu_1.Menu, null),\r\n        react_1.default.createElement(Controls_1.Controls, null)));\r\n}\r\nexports.Card = Card;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardLists/Card/Card.tsx?");

/***/ }),

/***/ "./src/shared/CardLists/Card/Controls/Controls.css":
/*!*********************************************************!*\
  !*** ./src/shared/CardLists/Card/Controls/Controls.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"controls\": \"Controls__controls--XEcBM\",\n\t\"carmaCounter\": \"Controls__carmaCounter--3Rwmm\",\n\t\"up\": \"Controls__up--15Yse\",\n\t\"carmaValue\": \"Controls__carmaValue--1j1yM\",\n\t\"down\": \"Controls__down--3_OUt\",\n\t\"commentsButton\": \"Controls__commentsButton--2onhY\",\n\t\"commentNumbers\": \"Controls__commentNumbers--2TAgR\",\n\t\"actions\": \"Controls__actions--28SKM\",\n\t\"shareButtons\": \"Controls__shareButtons--cSPn1\",\n\t\"saveButtons\": \"Controls__saveButtons--21enK\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardLists/Card/Controls/Controls.css?");

/***/ }),

/***/ "./src/shared/CardLists/Card/Controls/Controls.tsx":
/*!*********************************************************!*\
  !*** ./src/shared/CardLists/Card/Controls/Controls.tsx ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Controls = void 0;\r\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nconst Controls_css_1 = __importDefault(__webpack_require__(/*! ./Controls.css */ \"./src/shared/CardLists/Card/Controls/Controls.css\"));\r\nfunction Controls() {\r\n    return (react_1.default.createElement(\"div\", { className: Controls_css_1.default.controls },\r\n        react_1.default.createElement(\"div\", { className: Controls_css_1.default.carmaCounter },\r\n            react_1.default.createElement(\"button\", { className: Controls_css_1.default.up },\r\n                react_1.default.createElement(\"svg\", { width: \"19\", height: \"10\", viewBox: \"0 0 19 10\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n                    react_1.default.createElement(\"path\", { d: \"M9.5 0L0 10H19L9.5 0Z\", fill: \"#C4C4C4\" }))),\r\n            react_1.default.createElement(\"span\", { className: Controls_css_1.default.carmaValue }, \"123\"),\r\n            react_1.default.createElement(\"button\", { className: Controls_css_1.default.down },\r\n                react_1.default.createElement(\"svg\", { width: \"19\", height: \"10\", viewBox: \"0 0 19 10\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n                    react_1.default.createElement(\"path\", { d: \"M9.5 10L19 0L8.74228e-07 -1.66103e-06L9.5 10Z\", fill: \"#C4C4C4\" })))),\r\n        react_1.default.createElement(\"div\", { className: Controls_css_1.default.commentsButton },\r\n            react_1.default.createElement(\"svg\", { width: \"15\", height: \"15\", viewBox: \"0 0 15 15\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n                react_1.default.createElement(\"path\", { d: \"M12.75 0H1.41667C0.6375 0 0 0.6375 0 1.41667V9.91667C0 10.6958 0.6375 11.3333 1.41667 11.3333H11.3333L14.1667 14.1667V1.41667C14.1667 0.6375 13.5292 0 12.75 0ZM11.3333 8.5H2.83333V7.08333H11.3333V8.5ZM11.3333 6.375H2.83333V4.95833H11.3333V6.375ZM11.3333 4.25H2.83333V2.83333H11.3333V4.25Z\", fill: \"#C4C4C4\" })),\r\n            react_1.default.createElement(\"span\", { className: Controls_css_1.default.commentNumbers }, \"123\")),\r\n        react_1.default.createElement(\"div\", { className: Controls_css_1.default.actions },\r\n            react_1.default.createElement(\"button\", { className: Controls_css_1.default.shareButtons },\r\n                react_1.default.createElement(\"svg\", { width: \"8\", height: \"10\", viewBox: \"0 0 8 10\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n                    react_1.default.createElement(\"path\", { d: \"M6.66667 7.06827C6.32889 7.06827 6.02667 7.21888 5.79556 7.45482L2.62667 5.37149C2.64889 5.25602 2.66667 5.14056 2.66667 5.02008C2.66667 4.8996 2.64889 4.78414 2.62667 4.66867L5.76 2.60542C6 2.85643 6.31556 3.01205 6.66667 3.01205C7.40444 3.01205 8 2.33936 8 1.50602C8 0.672691 7.40444 0 6.66667 0C5.92889 0 5.33333 0.672691 5.33333 1.50602C5.33333 1.62651 5.35111 1.74197 5.37333 1.85743L2.24 3.92068C2 3.66968 1.68444 3.51406 1.33333 3.51406C0.595556 3.51406 0 4.18675 0 5.02008C0 5.85341 0.595556 6.5261 1.33333 6.5261C1.68444 6.5261 2 6.37048 2.24 6.11948L5.40444 8.20783C5.38222 8.31325 5.36889 8.42369 5.36889 8.53414C5.36889 9.34237 5.95111 10 6.66667 10C7.38222 10 7.96444 9.34237 7.96444 8.53414C7.96444 7.7259 7.38222 7.06827 6.66667 7.06827Z\", fill: \"white\" }))),\r\n            react_1.default.createElement(\"button\", { className: Controls_css_1.default.saveButtons },\r\n                react_1.default.createElement(\"svg\", { width: \"10\", height: \"10\", viewBox: \"0 0 10 10\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n                    react_1.default.createElement(\"path\", { d: \"M1 2H0V9C0 9.55 0.45 10 1 10H8V9H1V2ZM9 0H3C2.45 0 2 0.45 2 1V7C2 7.55 2.45 8 3 8H9C9.55 8 10 7.55 10 7V1C10 0.45 9.55 0 9 0ZM8.5 4.5H6.5V6.5H5.5V4.5H3.5V3.5H5.5V1.5H6.5V3.5H8.5V4.5Z\", fill: \"white\" }))))));\r\n}\r\nexports.Controls = Controls;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardLists/Card/Controls/Controls.tsx?");

/***/ }),

/***/ "./src/shared/CardLists/Card/Controls/index.ts":
/*!*****************************************************!*\
  !*** ./src/shared/CardLists/Card/Controls/index.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Controls */ \"./src/shared/CardLists/Card/Controls/Controls.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/CardLists/Card/Controls/index.ts?");

/***/ }),

/***/ "./src/shared/CardLists/Card/Menu/Menu.css":
/*!*************************************************!*\
  !*** ./src/shared/CardLists/Card/Menu/Menu.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"menu\": \"Menu__menu--2FgcW\",\n\t\"menuButton\": \"Menu__menuButton--1JHUB\",\n\t\"item\": \"Menu__item--1cAIx\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardLists/Card/Menu/Menu.css?");

/***/ }),

/***/ "./src/shared/CardLists/Card/Menu/Menu.tsx":
/*!*************************************************!*\
  !*** ./src/shared/CardLists/Card/Menu/Menu.tsx ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Menu = void 0;\r\nconst react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nconst Menu_css_1 = __importDefault(__webpack_require__(/*! ./Menu.css */ \"./src/shared/CardLists/Card/Menu/Menu.css\"));\r\nconst Dropdown_1 = __webpack_require__(/*! ../../../Dropdown */ \"./src/shared/Dropdown/index.ts\");\r\nconst menuData_1 = __webpack_require__(/*! ../../../../utils/data/menuData */ \"./src/utils/data/menuData.tsx\");\r\nconst generateRandomIndex_1 = __webpack_require__(/*! ../../../../utils/react/generateRandomIndex */ \"./src/utils/react/generateRandomIndex.ts\");\r\nconst DropdownItemClose_css_1 = __importDefault(__webpack_require__(/*! ../../../Dropdown/DropdownItemClose/DropdownItemClose.css */ \"./src/shared/Dropdown/DropdownItemClose/DropdownItemClose.css\"));\r\nconst useDeviceType_1 = __webpack_require__(/*! ../../../../utils/hooks/useDeviceType */ \"./src/utils/hooks/useDeviceType.ts\");\r\nconst MenuItemsLsit_1 = __webpack_require__(/*! ./MenuItemsLsit */ \"./src/shared/CardLists/Card/Menu/MenuItemsLsit/index.ts\");\r\nconst Icon_1 = __webpack_require__(/*! ../../../HOC/Icon */ \"./src/shared/HOC/Icon/index.ts\");\r\nconst Ecolors_1 = __webpack_require__(/*! ../../../../types/Ecolors */ \"./src/types/Ecolors.tsx\");\r\n//добавляем id\r\nconst menuDataId = menuData_1.menuData.map(generateRandomIndex_1.generateId);\r\nfunction Menu() {\r\n    const [menuList, setMenuList] = react_1.useState(menuDataId);\r\n    //возвращает mobile, desctop, tablet в зависимости от ширины экрана\r\n    const isTablaet = useDeviceType_1.useDeviceType();\r\n    const handlerItemClick = (item) => () => {\r\n        console.log(item.title);\r\n    };\r\n    return (react_1.default.createElement(\"div\", { className: Menu_css_1.default.menu },\r\n        react_1.default.createElement(Dropdown_1.Dropdown, { button: react_1.default.createElement(\"button\", { className: Menu_css_1.default.menuButton },\r\n                react_1.default.createElement(Icon_1.Icon, { name: Icon_1.EIcons.Dots, size: 20, width: 5, color: Ecolors_1.EcolorsVar.grayD9 })) },\r\n            react_1.default.createElement(\"div\", { className: Menu_css_1.default.item },\r\n                react_1.default.createElement(MenuItemsLsit_1.MenuItemsLsit, { postId: \"123\" }),\r\n                react_1.default.createElement(\"div\", { className: DropdownItemClose_css_1.default.dropdownItemClose },\r\n                    react_1.default.createElement(\"h3\", { className: DropdownItemClose_css_1.default.title }, \"\\u0417\\u0430\\u043A\\u0440\\u044B\\u0442\\u044C\"))))));\r\n    // return (\r\n    //   <div className={styles.menu}>\r\n    //     <Dropdown\r\n    //       button={<button className={styles.menuButton}>\r\n    //         <MenuIcon/>\r\n    //       </button>}\r\n    //     >\r\n    //       <ul className={styles.item}>\r\n    //         {renderMenuItems({ isTablaet, handlerItemClick })(menuList)}\r\n    //         {isTablaet !== \"desctop\" && <DropdownItemClose />}\r\n    //       </ul>\r\n    //     </Dropdown>\r\n    //   </div>\r\n    // );\r\n}\r\nexports.Menu = Menu;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardLists/Card/Menu/Menu.tsx?");

/***/ }),

/***/ "./src/shared/CardLists/Card/Menu/MenuItemsLsit/MenuItemsLsit.css":
/*!************************************************************************!*\
  !*** ./src/shared/CardLists/Card/Menu/MenuItemsLsit/MenuItemsLsit.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"menuItemsLsit\": \"MenuItemsLsit__menuItemsLsit--y6iqT\",\n\t\"menuItem\": \"MenuItemsLsit__menuItem--2LQBo\",\n\t\"menuitem\": \"MenuItemsLsit__menuitem--2vwcT\",\n\t\"divider\": \"MenuItemsLsit__divider--34vWn\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardLists/Card/Menu/MenuItemsLsit/MenuItemsLsit.css?");

/***/ }),

/***/ "./src/shared/CardLists/Card/Menu/MenuItemsLsit/MenuItemsLsit.tsx":
/*!************************************************************************!*\
  !*** ./src/shared/CardLists/Card/Menu/MenuItemsLsit/MenuItemsLsit.tsx ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.MenuItemsLsit = void 0;\r\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nconst MenuItemsLsit_css_1 = __importDefault(__webpack_require__(/*! ./MenuItemsLsit.css */ \"./src/shared/CardLists/Card/Menu/MenuItemsLsit/MenuItemsLsit.css\"));\r\nconst Text_1 = __webpack_require__(/*! ../../../../HOC/Text */ \"./src/shared/HOC/Text/index.ts\");\r\nconst Ecolors_1 = __webpack_require__(/*! ../../../../../types/Ecolors */ \"./src/types/Ecolors.tsx\");\r\nconst Break_1 = __webpack_require__(/*! ../../../../HOC/Break */ \"./src/shared/HOC/Break/index.ts\");\r\nconst Icon_1 = __webpack_require__(/*! ../../../../HOC/Icon */ \"./src/shared/HOC/Icon/index.ts\");\r\nfunction MenuItemsLsit({ postId }) {\r\n    return (react_1.default.createElement(\"ul\", { className: MenuItemsLsit_css_1.default.menuItemsList },\r\n        react_1.default.createElement(\"li\", { className: MenuItemsLsit_css_1.default.menuItem, onClick: () => console.log(postId) },\r\n            react_1.default.createElement(Icon_1.Icon, { name: Icon_1.EIcons.Comments, size: 15, color: Ecolors_1.EcolorsVar.gray99 }),\r\n            react_1.default.createElement(Break_1.Break, { size: 12 }),\r\n            react_1.default.createElement(Text_1.Text, { size: 12, color: Ecolors_1.Ecolors.gray99 }, \"\\u041A\\u043E\\u043C\\u0435\\u043D\\u0442\\u0430\\u0440\\u0438\\u0439\")),\r\n        react_1.default.createElement(\"div\", { className: MenuItemsLsit_css_1.default.divider }),\r\n        react_1.default.createElement(\"li\", { className: MenuItemsLsit_css_1.default.menuItem, onClick: () => console.log(postId) },\r\n            react_1.default.createElement(Icon_1.Icon, { name: Icon_1.EIcons.Hide, size: 14, color: Ecolors_1.EcolorsVar.gray99 }),\r\n            react_1.default.createElement(Break_1.Break, { size: 12 }),\r\n            react_1.default.createElement(Text_1.Text, { size: 12, color: Ecolors_1.Ecolors.gray99 }, \"\\u0421\\u043A\\u0440\\u044B\\u0442\\u044C\")),\r\n        react_1.default.createElement(\"div\", { className: MenuItemsLsit_css_1.default.divider }),\r\n        react_1.default.createElement(\"li\", { className: MenuItemsLsit_css_1.default.menuItem, onClick: () => console.log(postId) },\r\n            react_1.default.createElement(Icon_1.Icon, { name: Icon_1.EIcons.Save, size: 14, color: Ecolors_1.EcolorsVar.gray99 }),\r\n            react_1.default.createElement(Break_1.Break, { size: 12 }),\r\n            react_1.default.createElement(Text_1.Text, { size: 12, color: Ecolors_1.Ecolors.gray99 }, \"\\u0421\\u043E\\u0445\\u0440\\u0430\\u043D\\u0438\\u0442\\u044C\")),\r\n        react_1.default.createElement(\"div\", { className: MenuItemsLsit_css_1.default.divider }),\r\n        react_1.default.createElement(\"li\", { className: MenuItemsLsit_css_1.default.menuItem, onClick: () => console.log(postId) },\r\n            react_1.default.createElement(Icon_1.Icon, { name: Icon_1.EIcons.Share, size: 14, width: 12, color: Ecolors_1.EcolorsVar.gray99 }),\r\n            react_1.default.createElement(Break_1.Break, { size: 12 }),\r\n            react_1.default.createElement(Text_1.Text, { size: 12, color: Ecolors_1.Ecolors.gray99 }, \"\\u041F\\u043E\\u0434\\u0435\\u043B\\u0438\\u0442\\u044C\\u0441\\u044F\")),\r\n        react_1.default.createElement(\"div\", { className: MenuItemsLsit_css_1.default.divider }),\r\n        react_1.default.createElement(\"li\", { className: MenuItemsLsit_css_1.default.menuItem, onClick: () => console.log(postId) },\r\n            react_1.default.createElement(Icon_1.Icon, { name: Icon_1.EIcons.Report, size: 14, width: 16, color: Ecolors_1.EcolorsVar.gray99 }),\r\n            react_1.default.createElement(Break_1.Break, { size: 12 }),\r\n            react_1.default.createElement(Text_1.Text, { size: 12, color: Ecolors_1.Ecolors.gray99 }, \"\\u041F\\u043E\\u0436\\u0430\\u043B\\u043E\\u0432\\u0430\\u0442\\u044C\\u0441\\u044F\"))));\r\n}\r\nexports.MenuItemsLsit = MenuItemsLsit;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardLists/Card/Menu/MenuItemsLsit/MenuItemsLsit.tsx?");

/***/ }),

/***/ "./src/shared/CardLists/Card/Menu/MenuItemsLsit/index.ts":
/*!***************************************************************!*\
  !*** ./src/shared/CardLists/Card/Menu/MenuItemsLsit/index.ts ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./MenuItemsLsit */ \"./src/shared/CardLists/Card/Menu/MenuItemsLsit/MenuItemsLsit.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/CardLists/Card/Menu/MenuItemsLsit/index.ts?");

/***/ }),

/***/ "./src/shared/CardLists/Card/Menu/index.ts":
/*!*************************************************!*\
  !*** ./src/shared/CardLists/Card/Menu/index.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Menu */ \"./src/shared/CardLists/Card/Menu/Menu.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/CardLists/Card/Menu/index.ts?");

/***/ }),

/***/ "./src/shared/CardLists/Card/Preview/Preview.css":
/*!*******************************************************!*\
  !*** ./src/shared/CardLists/Card/Preview/Preview.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"preview\": \"Preview__preview--u8XIx\",\n\t\"previewImg\": \"Preview__previewImg--2rNWw\",\n\t\"card\": \"Preview__card--2SRoQ\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardLists/Card/Preview/Preview.css?");

/***/ }),

/***/ "./src/shared/CardLists/Card/Preview/Preview.tsx":
/*!*******************************************************!*\
  !*** ./src/shared/CardLists/Card/Preview/Preview.tsx ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Preview = void 0;\r\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nconst Preview_css_1 = __importDefault(__webpack_require__(/*! ./Preview.css */ \"./src/shared/CardLists/Card/Preview/Preview.css\"));\r\nfunction Preview() {\r\n    return (react_1.default.createElement(\"div\", { className: Preview_css_1.default.preview },\r\n        react_1.default.createElement(\"img\", { src: \"https://img.magnific.com/free-photo/side-view-smiley-couple-indoors_23-2149903726.jpg?t=st=1793427680~exp=1793431280~hmac=1f23a127e33e4f0031320e7135374ae3e2a773ea68c75b778ec63f67f4dfc958\", alt: \"\", className: Preview_css_1.default.previewImg })));\r\n}\r\nexports.Preview = Preview;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardLists/Card/Preview/Preview.tsx?");

/***/ }),

/***/ "./src/shared/CardLists/Card/Preview/index.ts":
/*!****************************************************!*\
  !*** ./src/shared/CardLists/Card/Preview/index.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Preview */ \"./src/shared/CardLists/Card/Preview/Preview.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/CardLists/Card/Preview/index.ts?");

/***/ }),

/***/ "./src/shared/CardLists/Card/TextContent/TextContent.css":
/*!***************************************************************!*\
  !*** ./src/shared/CardLists/Card/TextContent/TextContent.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"textConent\": \"TextContent__textConent--2j4D4\",\n\t\"metaData\": \"TextContent__metaData--1bB3F\",\n\t\"userLik\": \"TextContent__userLik--2qbaf\",\n\t\"wrapimg\": \"TextContent__wrapimg--3tWcM\",\n\t\"avatar\": \"TextContent__avatar--3Aasg\",\n\t\"username\": \"TextContent__username--1HOWE\",\n\t\"createdAt\": \"TextContent__createdAt--3PfkX\",\n\t\"publishedLabel\": \"TextContent__publishedLabel--3rOLW\",\n\t\"title\": \"TextContent__title--3eVEf\",\n\t\"postLink\": \"TextContent__postLink--1mVFM\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardLists/Card/TextContent/TextContent.css?");

/***/ }),

/***/ "./src/shared/CardLists/Card/TextContent/TextContent.tsx":
/*!***************************************************************!*\
  !*** ./src/shared/CardLists/Card/TextContent/TextContent.tsx ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.TextContent = void 0;\r\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nconst TextContent_css_1 = __importDefault(__webpack_require__(/*! ./TextContent.css */ \"./src/shared/CardLists/Card/TextContent/TextContent.css\"));\r\nfunction TextContent() {\r\n    return (react_1.default.createElement(\"div\", { className: TextContent_css_1.default.textConent },\r\n        react_1.default.createElement(\"div\", { className: TextContent_css_1.default.metaData },\r\n            react_1.default.createElement(\"div\", { className: TextContent_css_1.default.userLik },\r\n                react_1.default.createElement(\"div\", { className: TextContent_css_1.default.wrapimg },\r\n                    react_1.default.createElement(\"img\", { src: \"https://robohash.org/face\", alt: \"avatar\", className: TextContent_css_1.default.avatar })),\r\n                react_1.default.createElement(\"a\", { href: \"#user-url\", className: TextContent_css_1.default.username }, \"\\u0414\\u043C\\u0438\\u0442\\u0440\\u0438\\u0439 \\u0413\\u0440\\u0438\\u0448\\u0438\\u043D\")),\r\n            react_1.default.createElement(\"span\", { className: TextContent_css_1.default.createdAt },\r\n                react_1.default.createElement(\"span\", { className: TextContent_css_1.default.publishedLabel }, \"\\u041E\\u043F\\u0443\\u0431\\u043B\\u0438\\u043A\\u043E\\u0432\\u0430\\u043D\\u043E\"),\r\n                \"4 \\u0447\\u0430\\u0441\\u0430 \\u043D\\u0430\\u0437\\u0430\\u0434\")),\r\n        react_1.default.createElement(\"h2\", { className: TextContent_css_1.default.title },\r\n            react_1.default.createElement(\"a\", { href: \"#post-url\", className: TextContent_css_1.default.postLink }, \"\\u0420\\u0435\\u0430\\u043B\\u0438\\u0437\\u0430\\u0446\\u0438\\u044F \\u043D\\u0430\\u043C\\u0435\\u0447\\u0435\\u043D\\u043D\\u044B\\u0445 \\u043F\\u043B\\u0430\\u043D\\u043E\\u0432\\u044B\\u0445 \\u0437\\u0430\\u0434\\u0430\\u043D\\u0438\\u0439\"))));\r\n}\r\nexports.TextContent = TextContent;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardLists/Card/TextContent/TextContent.tsx?");

/***/ }),

/***/ "./src/shared/CardLists/Card/TextContent/index.ts":
/*!********************************************************!*\
  !*** ./src/shared/CardLists/Card/TextContent/index.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./TextContent */ \"./src/shared/CardLists/Card/TextContent/TextContent.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/CardLists/Card/TextContent/index.ts?");

/***/ }),

/***/ "./src/shared/CardLists/CardLists.css":
/*!********************************************!*\
  !*** ./src/shared/CardLists/CardLists.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"cardLists\": \"CardLists__cardLists--3GNlr\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardLists/CardLists.css?");

/***/ }),

/***/ "./src/shared/CardLists/CardLists.tsx":
/*!********************************************!*\
  !*** ./src/shared/CardLists/CardLists.tsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.CardLists = void 0;\r\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nconst CardLists_css_1 = __importDefault(__webpack_require__(/*! ./CardLists.css */ \"./src/shared/CardLists/CardLists.css\"));\r\nconst Card_1 = __webpack_require__(/*! ./Card/Card */ \"./src/shared/CardLists/Card/Card.tsx\");\r\nfunction CardLists() {\r\n    return (react_1.default.createElement(\"ul\", { className: CardLists_css_1.default.cardLists },\r\n        react_1.default.createElement(Card_1.Card, null)));\r\n}\r\nexports.CardLists = CardLists;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardLists/CardLists.tsx?");

/***/ }),

/***/ "./src/shared/CardLists/index.ts":
/*!***************************************!*\
  !*** ./src/shared/CardLists/index.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./CardLists */ \"./src/shared/CardLists/CardLists.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/CardLists/index.ts?");

/***/ }),

/***/ "./src/shared/Content/Content.tsx":
/*!****************************************!*\
  !*** ./src/shared/Content/Content.tsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Content = void 0;\r\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nconst content_css_1 = __importDefault(__webpack_require__(/*! ./content.css */ \"./src/shared/Content/content.css\"));\r\nfunction Content({ children }) {\r\n    return react_1.default.createElement(\"main\", { className: content_css_1.default.content }, children);\r\n}\r\nexports.Content = Content;\r\n\n\n//# sourceURL=webpack:///./src/shared/Content/Content.tsx?");

/***/ }),

/***/ "./src/shared/Content/content.css":
/*!****************************************!*\
  !*** ./src/shared/Content/content.css ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"content\": \"content__content--2O9-S\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Content/content.css?");

/***/ }),

/***/ "./src/shared/Content/index.ts":
/*!*************************************!*\
  !*** ./src/shared/Content/index.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar Content_1 = __webpack_require__(/*! ./Content */ \"./src/shared/Content/Content.tsx\");\r\nObject.defineProperty(exports, \"Content\", { enumerable: true, get: function () { return Content_1.Content; } });\r\n\n\n//# sourceURL=webpack:///./src/shared/Content/index.ts?");

/***/ }),

/***/ "./src/shared/Dropdown/Dropdown.css":
/*!******************************************!*\
  !*** ./src/shared/Dropdown/Dropdown.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"container\": \"Dropdown__container--3PArd\",\n\t\"listContainer\": \"Dropdown__listContainer--2Ugfa\",\n\t\"list\": \"Dropdown__list--2KHwx\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Dropdown/Dropdown.css?");

/***/ }),

/***/ "./src/shared/Dropdown/Dropdown.tsx":
/*!******************************************!*\
  !*** ./src/shared/Dropdown/Dropdown.tsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.DropdownNotConroll = exports.Dropdown = void 0;\r\nconst react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nconst Dropdown_css_1 = __importDefault(__webpack_require__(/*! ./Dropdown.css */ \"./src/shared/Dropdown/Dropdown.css\"));\r\nconst NOOP = () => { };\r\nfunction Dropdown({ button, children, isOpen, onClose = NOOP, onOpen = NOOP, }) {\r\n    const [isDropdownOpen, setIsDropdownOpen] = react_1.useState(isOpen);\r\n    react_1.useEffect(() => setIsDropdownOpen(isOpen), [isOpen]);\r\n    react_1.useEffect(() => (isDropdownOpen ? onOpen() : onClose()), [isDropdownOpen]);\r\n    const handleOpen = () => {\r\n        // console.log(\"Dropdonw \", isOpen, isDropdownOpen);\r\n        // проверка если не перердана isopen то состояние переключается автомаитчески\r\n        if (isOpen === undefined) {\r\n            setIsDropdownOpen(!isDropdownOpen);\r\n        }\r\n    };\r\n    return (react_1.default.createElement(\"div\", { className: Dropdown_css_1.default.container },\r\n        react_1.default.createElement(\"div\", { onClick: handleOpen },\r\n            button,\r\n            isDropdownOpen && (\r\n            // контерйнер для списка\r\n            react_1.default.createElement(\"div\", { className: Dropdown_css_1.default.listContainer },\r\n                react_1.default.createElement(\"div\", { className: Dropdown_css_1.default.list, onClick: () => setIsDropdownOpen(false) }, children))))));\r\n}\r\nexports.Dropdown = Dropdown;\r\nfunction DropdownNotConroll({ button, children }) {\r\n    const [isDropdownOpen, setIsDropdownOpen] = react_1.useState(false);\r\n    return (react_1.default.createElement(\"div\", { className: Dropdown_css_1.default.container },\r\n        react_1.default.createElement(\"div\", { onClick: () => setIsDropdownOpen(!isDropdownOpen) },\r\n            button,\r\n            isDropdownOpen && (\r\n            // контерйнер для списка\r\n            react_1.default.createElement(\"div\", { className: Dropdown_css_1.default.listContainer },\r\n                react_1.default.createElement(\"div\", { className: Dropdown_css_1.default.list, onClick: () => setIsDropdownOpen(false) }, children))))));\r\n}\r\nexports.DropdownNotConroll = DropdownNotConroll;\r\n\n\n//# sourceURL=webpack:///./src/shared/Dropdown/Dropdown.tsx?");

/***/ }),

/***/ "./src/shared/Dropdown/DropdownItemClose/DropdownItemClose.css":
/*!*********************************************************************!*\
  !*** ./src/shared/Dropdown/DropdownItemClose/DropdownItemClose.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"dropdownItemClose\": \"DropdownItemClose__dropdownItemClose--qc9Yr\",\n\t\"title\": \"DropdownItemClose__title--1uuh6\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Dropdown/DropdownItemClose/DropdownItemClose.css?");

/***/ }),

/***/ "./src/shared/Dropdown/index.ts":
/*!**************************************!*\
  !*** ./src/shared/Dropdown/index.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Dropdown */ \"./src/shared/Dropdown/Dropdown.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Dropdown/index.ts?");

/***/ }),

/***/ "./src/shared/HOC/Break/Break.css":
/*!****************************************!*\
  !*** ./src/shared/HOC/Break/Break.css ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"s4\": \"Break__s4--1yGSR\",\n\t\"s8\": \"Break__s8--3uGfP\",\n\t\"s12\": \"Break__s12--225Hn\",\n\t\"s16\": \"Break__s16--30xfB\",\n\t\"s20\": \"Break__s20--8kubS\",\n\t\"inline\": \"Break__inline--3mlqf\",\n\t\"top\": \"Break__top--3oNiz\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/HOC/Break/Break.css?");

/***/ }),

/***/ "./src/shared/HOC/Break/Break.tsx":
/*!****************************************!*\
  !*** ./src/shared/HOC/Break/Break.tsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Break = void 0;\r\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nconst Break_css_1 = __importDefault(__webpack_require__(/*! ./Break.css */ \"./src/shared/HOC/Break/Break.css\"));\r\nconst classnames_1 = __importDefault(__webpack_require__(/*! classnames */ \"classnames\"));\r\nfunction Break(props) {\r\n    const { inline = false, top = false, size, mobileSize, tabletSize, desctopSize, } = props;\r\n    return (react_1.default.createElement(\"div\", { className: classnames_1.default(Break_css_1.default[`s${size}`], { [Break_css_1.default[`mobile_s${mobileSize}`]]: mobileSize }, { [Break_css_1.default[`tablet_s${tabletSize}`]]: tabletSize }, { [Break_css_1.default[`desctop_s${desctopSize}`]]: desctopSize }, { [Break_css_1.default.top]: top }) }));\r\n}\r\nexports.Break = Break;\r\n\n\n//# sourceURL=webpack:///./src/shared/HOC/Break/Break.tsx?");

/***/ }),

/***/ "./src/shared/HOC/Break/index.ts":
/*!***************************************!*\
  !*** ./src/shared/HOC/Break/index.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Break */ \"./src/shared/HOC/Break/Break.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/HOC/Break/index.ts?");

/***/ }),

/***/ "./src/shared/HOC/Icon/Icon.css":
/*!**************************************!*\
  !*** ./src/shared/HOC/Icon/Icon.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"wrapper\": \"Icon__wrapper--2ZQ9w\",\n\t\"s50\": \"Icon__s50--MSDUl\",\n\t\"s20\": \"Icon__s20--396wc\",\n\t\"s15\": \"Icon__s15--2pVJ-\",\n\t\"s14\": \"Icon__s14--_YprI\",\n\t\"w16\": \"Icon__w16--3ztsI\",\n\t\"w12\": \"Icon__w12--oQ4hx\",\n\t\"w5\": \"Icon__w5--3KCuN\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/HOC/Icon/Icon.css?");

/***/ }),

/***/ "./src/shared/HOC/Icon/Icon.tsx":
/*!**************************************!*\
  !*** ./src/shared/HOC/Icon/Icon.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Icon = exports.EIcons = void 0;\r\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nconst Icon_css_1 = __importDefault(__webpack_require__(/*! ./Icon.css */ \"./src/shared/HOC/Icon/Icon.css\"));\r\nconst classnames_1 = __importDefault(__webpack_require__(/*! classnames */ \"classnames\"));\r\nconst Icon_1 = __webpack_require__(/*! ../../Icon */ \"./src/shared/Icon/index.ts\");\r\nvar EIcons;\r\n(function (EIcons) {\r\n    EIcons[\"Comments\"] = \"Comments\";\r\n    EIcons[\"Dots\"] = \"Dots\";\r\n    EIcons[\"Hide\"] = \"Hide\";\r\n    EIcons[\"Report\"] = \"Report\";\r\n    EIcons[\"Save\"] = \"Save\";\r\n    EIcons[\"Share\"] = \"Share\";\r\n    EIcons[\"Anon\"] = \"Anon\";\r\n})(EIcons = exports.EIcons || (exports.EIcons = {}));\r\nconst IconComponentsList = {\r\n    Comments: Icon_1.MenuCommentsIconComponent,\r\n    Dots: Icon_1.MenuDotsIconComponent,\r\n    Hide: Icon_1.MenuHideIconComponent,\r\n    Report: Icon_1.MenuReportIconComponent,\r\n    Save: Icon_1.MenuSaveIconComponent,\r\n    Share: Icon_1.MenuShareIconComponent,\r\n    Anon: Icon_1.IconAnonComponent,\r\n};\r\nfunction Icon(props) {\r\n    const { name, size, width, color } = props;\r\n    const classes = classnames_1.default(Icon_css_1.default.wrapper, { [Icon_css_1.default[`s${size}`]]: size }, { [Icon_css_1.default[`w${width}`]]: width });\r\n    const IconComponent = IconComponentsList[name];\r\n    return (react_1.default.createElement(\"span\", { className: classes, style: { color } },\r\n        react_1.default.createElement(IconComponent, null)));\r\n}\r\nexports.Icon = Icon;\r\n\n\n//# sourceURL=webpack:///./src/shared/HOC/Icon/Icon.tsx?");

/***/ }),

/***/ "./src/shared/HOC/Icon/index.ts":
/*!**************************************!*\
  !*** ./src/shared/HOC/Icon/index.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Icon */ \"./src/shared/HOC/Icon/Icon.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/HOC/Icon/index.ts?");

/***/ }),

/***/ "./src/shared/HOC/Text/Text.css":
/*!**************************************!*\
  !*** ./src/shared/HOC/Text/Text.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"s28\": \"Text__s28--34yrd\",\n\t\"s20\": \"Text__s20--2rn6r\",\n\t\"s16\": \"Text__s16--2Giug\",\n\t\"s14\": \"Text__s14--3piux\",\n\t\"s12\": \"Text__s12--eZwez\",\n\t\"s10\": \"Text__s10--3BwER\",\n\t\"bold\": \"Text__bold--EYwNf\",\n\t\"orange\": \"Text__orange--QCDxF\",\n\t\"black\": \"Text__black--1r3Zy\",\n\t\"gray66\": \"Text__gray66--n5Epv\",\n\t\"gray99\": \"Text__gray99--1b8eI\",\n\t\"grayC4\": \"Text__grayC4--1t0tg\",\n\t\"grayD9\": \"Text__grayD9--3wXWz\",\n\t\"grayEC\": \"Text__grayEC--7aJra\",\n\t\"grayF3\": \"Text__grayF3--1Ikl-\",\n\t\"grayF4\": \"Text__grayF4--3mS-X\",\n\t\"green\": \"Text__green--37XOi\",\n\t\"white\": \"Text__white--3xF1S\",\n\t\"m28\": \"Text__m28--8D8JX\",\n\t\"m20\": \"Text__m20--2csuD\",\n\t\"m16\": \"Text__m16--qjiE9\",\n\t\"m14\": \"Text__m14--1F6EG\",\n\t\"m12\": \"Text__m12--6wwNo\",\n\t\"m10\": \"Text__m10--33e95\",\n\t\"t28\": \"Text__t28--Fh7s7\",\n\t\"t20\": \"Text__t20--3LuQ8\",\n\t\"t16\": \"Text__t16--2LO3Y\",\n\t\"t14\": \"Text__t14--1A5-0\",\n\t\"t12\": \"Text__t12--3XSOH\",\n\t\"t10\": \"Text__t10--2BkXO\",\n\t\"d28\": \"Text__d28--3DkRL\",\n\t\"d20\": \"Text__d20--1m1hl\",\n\t\"d16\": \"Text__d16--LnlAW\",\n\t\"d14\": \"Text__d14--2xAGy\",\n\t\"d12\": \"Text__d12--1ymlL\",\n\t\"d10\": \"Text__d10--5Svwn\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/HOC/Text/Text.css?");

/***/ }),

/***/ "./src/shared/HOC/Text/Text.tsx":
/*!**************************************!*\
  !*** ./src/shared/HOC/Text/Text.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Text = void 0;\r\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nconst Text_css_1 = __importDefault(__webpack_require__(/*! ./Text.css */ \"./src/shared/HOC/Text/Text.css\"));\r\nconst classnames_1 = __importDefault(__webpack_require__(/*! classnames */ \"classnames\"));\r\nconst Ecolors_1 = __webpack_require__(/*! ../../../types/Ecolors */ \"./src/types/Ecolors.tsx\");\r\nfunction Text(props) {\r\n    //деструкция props\r\n    const { As = \"span\", color = Ecolors_1.Ecolors.black, bold = false, children, size, mobileSize, tabletSize, descTopSize, } = props;\r\n    //использование билиотеки класснамес\r\n    //параметры -стили кот смерджим\r\n    const classes = classnames_1.default(Text_css_1.default[`${size}`], Text_css_1.default[color], { [Text_css_1.default.bold]: bold }, { [Text_css_1.default[`m${mobileSize}`]]: mobileSize }, //выполнется если передаем значение\r\n    { [Text_css_1.default[`t${tabletSize}`]]: tabletSize }, { [Text_css_1.default[`d${descTopSize}`]]: descTopSize });\r\n    return react_1.default.createElement(As, { className: classes }, children);\r\n}\r\nexports.Text = Text;\r\n// export enum Ecolors {\r\n//   black = \"var(--black)\",\r\n//   orange = \"var(--orange)\",\r\n//   green = \"var(--green)\",\r\n//   white = \"var(--white)\",\r\n//   grayF4 = \"var(--grayF4)\",\r\n//   grayF3 = \"var(--grayF3)\",\r\n//   grayC4 = \"var(--grayC4)\",\r\n//   gray66 = \"var(--gray66)\",\r\n//   gray99 = \"var(--gray99)\",\r\n//   grayEC = \"var(--grayEC)\",\r\n// }\r\n\n\n//# sourceURL=webpack:///./src/shared/HOC/Text/Text.tsx?");

/***/ }),

/***/ "./src/shared/HOC/Text/index.ts":
/*!**************************************!*\
  !*** ./src/shared/HOC/Text/index.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Text */ \"./src/shared/HOC/Text/Text.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/HOC/Text/index.ts?");

/***/ }),

/***/ "./src/shared/Header/Header.css":
/*!**************************************!*\
  !*** ./src/shared/Header/Header.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"header\": \"Header__header--2kEA_\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Header/Header.css?");

/***/ }),

/***/ "./src/shared/Header/Header.tsx":
/*!**************************************!*\
  !*** ./src/shared/Header/Header.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Header = void 0;\r\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nconst Header_css_1 = __importDefault(__webpack_require__(/*! ./Header.css */ \"./src/shared/Header/Header.css\"));\r\nconst SearchBlock_1 = __webpack_require__(/*! ./SearchBlock/SearchBlock */ \"./src/shared/Header/SearchBlock/SearchBlock.tsx\");\r\nconst ThreadTitle_1 = __webpack_require__(/*! ./ThreadTitle */ \"./src/shared/Header/ThreadTitle/index.ts\");\r\nconst SortBlock_1 = __webpack_require__(/*! ./SortBlock */ \"./src/shared/Header/SortBlock/index.ts\");\r\nfunction Header({ token }) {\r\n    return (react_1.default.createElement(\"header\", { className: Header_css_1.default.header },\r\n        react_1.default.createElement(SearchBlock_1.SearchBlock, { token: token }),\r\n        react_1.default.createElement(ThreadTitle_1.ThreadTitle, null),\r\n        react_1.default.createElement(SortBlock_1.SortBlock, null)));\r\n}\r\nexports.Header = Header;\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/Header.tsx?");

/***/ }),

/***/ "./src/shared/Header/SearchBlock/SearchBlock.css":
/*!*******************************************************!*\
  !*** ./src/shared/Header/SearchBlock/SearchBlock.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"searchBlock\": \"SearchBlock__searchBlock--3DjjD\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Header/SearchBlock/SearchBlock.css?");

/***/ }),

/***/ "./src/shared/Header/SearchBlock/SearchBlock.tsx":
/*!*******************************************************!*\
  !*** ./src/shared/Header/SearchBlock/SearchBlock.tsx ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.SearchBlock = void 0;\r\nconst react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nconst SearchBlock_css_1 = __importDefault(__webpack_require__(/*! ./SearchBlock.css */ \"./src/shared/Header/SearchBlock/SearchBlock.css\"));\r\nconst UserBlock_tsx_1 = __webpack_require__(/*! ./UserBlock.tsx */ \"./src/shared/Header/SearchBlock/UserBlock.tsx/index.ts\");\r\nconst axios_1 = __importDefault(__webpack_require__(/*! axios */ \"axios\"));\r\nfunction SearchBlock({ token }) {\r\n    const [data, setData] = react_1.useState({});\r\n    react_1.useEffect(() => {\r\n        axios_1.default\r\n            .get(\"https://api.github.com/user\", {\r\n            headers: { Authorization: `Bearer ${token}` },\r\n        })\r\n            .then((resp) => {\r\n            const userData = resp.data;\r\n            console.log(\"userData\", userData);\r\n            setData({\r\n                name: userData.name || userData.login,\r\n                iconImg: userData.avatar_url,\r\n            });\r\n        })\r\n            .catch(console.log);\r\n    }, [token]);\r\n    return (react_1.default.createElement(\"div\", { className: SearchBlock_css_1.default.searchBlock },\r\n        react_1.default.createElement(UserBlock_tsx_1.UserBlock, { avatarSrc: data.iconImg, username: data.name })));\r\n}\r\nexports.SearchBlock = SearchBlock;\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/SearchBlock/SearchBlock.tsx?");

/***/ }),

/***/ "./src/shared/Header/SearchBlock/UserBlock.tsx/UserBlock.css":
/*!*******************************************************************!*\
  !*** ./src/shared/Header/SearchBlock/UserBlock.tsx/UserBlock.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"userbox\": \"UserBlock__userbox--H6tIq\",\n\t\"avatarBox\": \"UserBlock__avatarBox---9y4D\",\n\t\"avatarbox\": \"UserBlock__avatarbox--10lMZ\",\n\t\"avatarImage\": \"UserBlock__avatarImage--2uBt9\",\n\t\"username\": \"UserBlock__username--1gv9B\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Header/SearchBlock/UserBlock.tsx/UserBlock.css?");

/***/ }),

/***/ "./src/shared/Header/SearchBlock/UserBlock.tsx/UserBlock.tsx":
/*!*******************************************************************!*\
  !*** ./src/shared/Header/SearchBlock/UserBlock.tsx/UserBlock.tsx ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.UserBlock = void 0;\r\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nconst UserBlock_css_1 = __importDefault(__webpack_require__(/*! ./UserBlock.css */ \"./src/shared/Header/SearchBlock/UserBlock.tsx/UserBlock.css\"));\r\nconst Icon_1 = __webpack_require__(/*! ../../../HOC/Icon */ \"./src/shared/HOC/Icon/index.ts\");\r\nconst Break_1 = __webpack_require__(/*! ../../../HOC/Break */ \"./src/shared/HOC/Break/index.ts\");\r\nconst Text_1 = __webpack_require__(/*! ../../../HOC/Text */ \"./src/shared/HOC/Text/index.ts\");\r\nconst Ecolors_1 = __webpack_require__(/*! ../../../../types/Ecolors */ \"./src/types/Ecolors.tsx\");\r\nfunction UserBlock({ avatarSrc, username }) {\r\n    return (react_1.default.createElement(\"a\", { href: `https://github.com/login/oauth/authorize?client_id=${'Ov23likDFj84ty9RiYFJ'}&redirect_uri=http://localhost:3000/auth&state=random_string&scope=read:user`, \r\n        // href=\"https://github.com/login/oauth/authorize?client_id=Ov23likDFj84ty9RiYFJ&redirect_uri=http://localhost:3000/auth&state=random_string&scope=read:user\"\r\n        // href=\"https://www.reddit.com/api/v1/authorize?client_id=CLIENT_ID&response_type=code&state=random_string&redirect_uri=http://localhost:3000/auth&duration=permanent&scope=read%20submit%20identity\"\r\n        className: UserBlock_css_1.default.userbox },\r\n        react_1.default.createElement(\"div\", { className: UserBlock_css_1.default.avatarbox }, avatarSrc ? (react_1.default.createElement(\"img\", { className: UserBlock_css_1.default.avatarImage })) : (react_1.default.createElement(Icon_1.Icon, { name: Icon_1.EIcons.Anon, size: 50 }))),\r\n        react_1.default.createElement(\"div\", { className: UserBlock_css_1.default.username },\r\n            react_1.default.createElement(Break_1.Break, { size: 12 }),\r\n            react_1.default.createElement(Text_1.Text, { size: 20, color: username ? Ecolors_1.Ecolors.black : Ecolors_1.Ecolors.gray99 }, username || \"Аноним\"))));\r\n}\r\nexports.UserBlock = UserBlock;\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/SearchBlock/UserBlock.tsx/UserBlock.tsx?");

/***/ }),

/***/ "./src/shared/Header/SearchBlock/UserBlock.tsx/index.ts":
/*!**************************************************************!*\
  !*** ./src/shared/Header/SearchBlock/UserBlock.tsx/index.ts ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./UserBlock */ \"./src/shared/Header/SearchBlock/UserBlock.tsx/UserBlock.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/SearchBlock/UserBlock.tsx/index.ts?");

/***/ }),

/***/ "./src/shared/Header/SortBlock/SortBlock.css":
/*!***************************************************!*\
  !*** ./src/shared/Header/SortBlock/SortBlock.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"sortBlock\": \"SortBlock__sortBlock--1XiM4\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Header/SortBlock/SortBlock.css?");

/***/ }),

/***/ "./src/shared/Header/SortBlock/SortBlock.tsx":
/*!***************************************************!*\
  !*** ./src/shared/Header/SortBlock/SortBlock.tsx ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.SortBlock = void 0;\r\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nconst SortBlock_css_1 = __importDefault(__webpack_require__(/*! ./SortBlock.css */ \"./src/shared/Header/SortBlock/SortBlock.css\"));\r\nfunction SortBlock() {\r\n    return react_1.default.createElement(\"div\", { className: SortBlock_css_1.default.sortBlock }, \"sorting dropdown\");\r\n}\r\nexports.SortBlock = SortBlock;\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/SortBlock/SortBlock.tsx?");

/***/ }),

/***/ "./src/shared/Header/SortBlock/index.ts":
/*!**********************************************!*\
  !*** ./src/shared/Header/SortBlock/index.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar SortBlock_1 = __webpack_require__(/*! ./SortBlock */ \"./src/shared/Header/SortBlock/SortBlock.tsx\");\r\nObject.defineProperty(exports, \"SortBlock\", { enumerable: true, get: function () { return SortBlock_1.SortBlock; } });\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/SortBlock/index.ts?");

/***/ }),

/***/ "./src/shared/Header/ThreadTitle/ThreadTitle.css":
/*!*******************************************************!*\
  !*** ./src/shared/Header/ThreadTitle/ThreadTitle.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"threadTitle\": \"ThreadTitle__threadTitle--1fF0q\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Header/ThreadTitle/ThreadTitle.css?");

/***/ }),

/***/ "./src/shared/Header/ThreadTitle/ThreadTitle.tsx":
/*!*******************************************************!*\
  !*** ./src/shared/Header/ThreadTitle/ThreadTitle.tsx ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.ThreadTitle = void 0;\r\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nconst ThreadTitle_css_1 = __importDefault(__webpack_require__(/*! ./ThreadTitle.css */ \"./src/shared/Header/ThreadTitle/ThreadTitle.css\"));\r\nfunction ThreadTitle() {\r\n    return react_1.default.createElement(\"h1\", { className: ThreadTitle_css_1.default.threadTitle }, \"\\u041B\\u0438\\u0447\\u043D\\u044B\\u0439 \\u043A\\u0430\\u0431\\u0438\\u043D\\u0435\\u0442\");\r\n}\r\nexports.ThreadTitle = ThreadTitle;\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/ThreadTitle/ThreadTitle.tsx?");

/***/ }),

/***/ "./src/shared/Header/ThreadTitle/index.ts":
/*!************************************************!*\
  !*** ./src/shared/Header/ThreadTitle/index.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar ThreadTitle_1 = __webpack_require__(/*! ./ThreadTitle */ \"./src/shared/Header/ThreadTitle/ThreadTitle.tsx\");\r\nObject.defineProperty(exports, \"ThreadTitle\", { enumerable: true, get: function () { return ThreadTitle_1.ThreadTitle; } });\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/ThreadTitle/index.ts?");

/***/ }),

/***/ "./src/shared/Header/index.ts":
/*!************************************!*\
  !*** ./src/shared/Header/index.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar Header_1 = __webpack_require__(/*! ./Header */ \"./src/shared/Header/Header.tsx\");\r\nObject.defineProperty(exports, \"Header\", { enumerable: true, get: function () { return Header_1.Header; } });\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/index.ts?");

/***/ }),

/***/ "./src/shared/Icon/IconAnonComponent.tsx":
/*!***********************************************!*\
  !*** ./src/shared/Icon/IconAnonComponent.tsx ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.IconAnonComponent = void 0;\r\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nfunction IconAnonComponent() {\r\n    return (react_1.default.createElement(\"svg\", { width: \"50\", height: \"50\", viewBox: \"0 0 50 50\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        react_1.default.createElement(\"path\", { d: \"M25 0C11.2 0 0 11.2 0 25C0 38.8 11.2 50 25 50C38.8 50 50 38.8 50 25C50 11.2 38.8 0 25 0ZM25 7.5C29.15 7.5 32.5 10.85 32.5 15C32.5 19.15 29.15 22.5 25 22.5C20.85 22.5 17.5 19.15 17.5 15C17.5 10.85 20.85 7.5 25 7.5ZM25 43C18.75 43 13.225 39.8 10 34.95C10.075 29.975 20 27.25 25 27.25C29.975 27.25 39.925 29.975 40 34.95C36.775 39.8 31.25 43 25 43Z\", fill: \"#D9D9D9\" })));\r\n}\r\nexports.IconAnonComponent = IconAnonComponent;\r\n\n\n//# sourceURL=webpack:///./src/shared/Icon/IconAnonComponent.tsx?");

/***/ }),

/***/ "./src/shared/Icon/MenuCommentsIconComponent.tsx":
/*!*******************************************************!*\
  !*** ./src/shared/Icon/MenuCommentsIconComponent.tsx ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.MenuCommentsIconComponent = void 0;\r\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nfunction MenuCommentsIconComponent() {\r\n    return (react_1.default.createElement(\"svg\", { width: \"15\", height: \"15\", viewBox: \"0 0 15 15\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        react_1.default.createElement(\"path\", { d: \"M12.75 0H1.41667C0.6375 0 0 0.6375 0 1.41667V9.91667C0 10.6958 0.6375 11.3333 1.41667 11.3333H11.3333L14.1667 14.1667V1.41667C14.1667 0.6375 13.5292 0 12.75 0ZM11.3333 8.5H2.83333V7.08333H11.3333V8.5ZM11.3333 6.375H2.83333V4.95833H11.3333V6.375ZM11.3333 4.25H2.83333V2.83333H11.3333V4.25Z\", fill: \"none\" })));\r\n}\r\nexports.MenuCommentsIconComponent = MenuCommentsIconComponent;\r\n\n\n//# sourceURL=webpack:///./src/shared/Icon/MenuCommentsIconComponent.tsx?");

/***/ }),

/***/ "./src/shared/Icon/MenuDotsIconComponent.tsx":
/*!***************************************************!*\
  !*** ./src/shared/Icon/MenuDotsIconComponent.tsx ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.MenuDotsIconComponent = void 0;\r\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nfunction MenuDotsIconComponent() {\r\n    return (react_1.default.createElement(\"svg\", { width: \"5\", height: \"20\", viewBox: \"0 0 5 20\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        react_1.default.createElement(\"circle\", { cx: \"2.5\", cy: \"2.5\", r: \"2.5\", fill: \"#D9D9D9\" }),\r\n        react_1.default.createElement(\"circle\", { cx: \"2.5\", cy: \"10\", r: \"2.5\", fill: \"#D9D9D9\" }),\r\n        react_1.default.createElement(\"circle\", { cx: \"2.5\", cy: \"17.5\", r: \"2.5\", fill: \"#D9D9D9\" })));\r\n}\r\nexports.MenuDotsIconComponent = MenuDotsIconComponent;\r\n\n\n//# sourceURL=webpack:///./src/shared/Icon/MenuDotsIconComponent.tsx?");

/***/ }),

/***/ "./src/shared/Icon/MenuHideIconComponent.tsx":
/*!***************************************************!*\
  !*** ./src/shared/Icon/MenuHideIconComponent.tsx ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.MenuHideIconComponent = void 0;\r\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\n//Скрыть\r\nfunction MenuHideIconComponent() {\r\n    return (react_1.default.createElement(\"svg\", { width: \"14\", height: \"14\", viewBox: \"0 0 14 14\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        react_1.default.createElement(\"path\", { d: \"M7 0C3.136 0 0 3.136 0 7C0 10.864 3.136 14 7 14C10.864 14 14 10.864 14 7C14 3.136 10.864 0 7 0ZM7 12.6C3.906 12.6 1.4 10.094 1.4 7C1.4 5.705 1.841 4.515 2.583 3.57L10.43 11.417C9.485 12.159 8.295 12.6 7 12.6ZM11.417 10.43L3.57 2.583C4.515 1.841 5.705 1.4 7 1.4C10.094 1.4 12.6 3.906 12.6 7C12.6 8.295 12.159 9.485 11.417 10.43Z\", fill: \"#999999\" })));\r\n}\r\nexports.MenuHideIconComponent = MenuHideIconComponent;\r\n\n\n//# sourceURL=webpack:///./src/shared/Icon/MenuHideIconComponent.tsx?");

/***/ }),

/***/ "./src/shared/Icon/MenuReportIconComponent.tsx":
/*!*****************************************************!*\
  !*** ./src/shared/Icon/MenuReportIconComponent.tsx ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.MenuReportIconComponent = void 0;\r\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\n//Пожаловаться\r\nfunction MenuReportIconComponent() {\r\n    return (react_1.default.createElement(\"svg\", { width: \"16\", height: \"14\", viewBox: \"0 0 16 14\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        react_1.default.createElement(\"path\", { d: \"M0 14H16L8 0L0 14ZM8.72727 11.7895H7.27273V10.3158H8.72727V11.7895ZM8.72727 8.8421H7.27273V5.89474H8.72727V8.8421Z\", fill: \"#999999\" })));\r\n}\r\nexports.MenuReportIconComponent = MenuReportIconComponent;\r\n\n\n//# sourceURL=webpack:///./src/shared/Icon/MenuReportIconComponent.tsx?");

/***/ }),

/***/ "./src/shared/Icon/MenuSaveIconComponent.tsx":
/*!***************************************************!*\
  !*** ./src/shared/Icon/MenuSaveIconComponent.tsx ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.MenuSaveIconComponent = void 0;\r\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\n//Сохранить\r\nfunction MenuSaveIconComponent() {\r\n    return (react_1.default.createElement(\"svg\", { width: \"14\", height: \"14\", viewBox: \"0 0 14 14\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        react_1.default.createElement(\"path\", { d: \"M1.4 2.8H0V12.6C0 13.37 0.63 14 1.4 14H11.2V12.6H1.4V2.8ZM12.6 0H4.2C3.43 0 2.8 0.63 2.8 1.4V9.8C2.8 10.57 3.43 11.2 4.2 11.2H12.6C13.37 11.2 14 10.57 14 9.8V1.4C14 0.63 13.37 0 12.6 0ZM11.9 6.3H9.1V9.1H7.7V6.3H4.9V4.9H7.7V2.1H9.1V4.9H11.9V6.3Z\", fill: \"#979797\" })));\r\n}\r\nexports.MenuSaveIconComponent = MenuSaveIconComponent;\r\n\n\n//# sourceURL=webpack:///./src/shared/Icon/MenuSaveIconComponent.tsx?");

/***/ }),

/***/ "./src/shared/Icon/MenuShareIconComponent.tsx":
/*!****************************************************!*\
  !*** ./src/shared/Icon/MenuShareIconComponent.tsx ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.MenuShareIconComponent = void 0;\r\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\n//Поделиться\r\nfunction MenuShareIconComponent() {\r\n    return (react_1.default.createElement(\"svg\", { width: \"12\", height: \"14\", viewBox: \"0 0 12 14\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        react_1.default.createElement(\"path\", { d: \"M10 9.89558C9.49333 9.89558 9.04 10.1064 8.69333 10.4367L3.94 7.52008C3.97333 7.35843 4 7.19679 4 7.02811C4 6.85944 3.97333 6.69779 3.94 6.53614L8.64 3.64759C9 3.999 9.47333 4.21687 10 4.21687C11.1067 4.21687 12 3.2751 12 2.10843C12 0.941767 11.1067 0 10 0C8.89333 0 8 0.941767 8 2.10843C8 2.27711 8.02667 2.43875 8.06 2.6004L3.36 5.48896C3 5.13755 2.52667 4.91968 2 4.91968C0.893333 4.91968 0 5.86145 0 7.02811C0 8.19478 0.893333 9.13655 2 9.13655C2.52667 9.13655 3 8.91867 3.36 8.56727L8.10667 11.491C8.07333 11.6386 8.05333 11.7932 8.05333 11.9478C8.05333 13.0793 8.92667 14 10 14C11.0733 14 11.9467 13.0793 11.9467 11.9478C11.9467 10.8163 11.0733 9.89558 10 9.89558Z\", fill: \"none\" })));\r\n}\r\nexports.MenuShareIconComponent = MenuShareIconComponent;\r\n\n\n//# sourceURL=webpack:///./src/shared/Icon/MenuShareIconComponent.tsx?");

/***/ }),

/***/ "./src/shared/Icon/index.ts":
/*!**********************************!*\
  !*** ./src/shared/Icon/index.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./MenuDotsIconComponent */ \"./src/shared/Icon/MenuDotsIconComponent.tsx\"), exports);\r\n__exportStar(__webpack_require__(/*! ./MenuCommentsIconComponent */ \"./src/shared/Icon/MenuCommentsIconComponent.tsx\"), exports);\r\n__exportStar(__webpack_require__(/*! ./MenuHideIconComponent */ \"./src/shared/Icon/MenuHideIconComponent.tsx\"), exports);\r\n__exportStar(__webpack_require__(/*! ./MenuReportIconComponent */ \"./src/shared/Icon/MenuReportIconComponent.tsx\"), exports);\r\n__exportStar(__webpack_require__(/*! ./MenuSaveIconComponent */ \"./src/shared/Icon/MenuSaveIconComponent.tsx\"), exports);\r\n__exportStar(__webpack_require__(/*! ./MenuShareIconComponent */ \"./src/shared/Icon/MenuShareIconComponent.tsx\"), exports);\r\n__exportStar(__webpack_require__(/*! ./IconAnonComponent */ \"./src/shared/Icon/IconAnonComponent.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Icon/index.ts?");

/***/ }),

/***/ "./src/shared/Layout/Layout.css":
/*!**************************************!*\
  !*** ./src/shared/Layout/Layout.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"layout\": \"Layout__layout--2UOc3\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Layout/Layout.css?");

/***/ }),

/***/ "./src/shared/Layout/Layout.tsx":
/*!**************************************!*\
  !*** ./src/shared/Layout/Layout.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Layout = void 0;\r\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nconst styles = __webpack_require__(/*! ./Layout.css */ \"./src/shared/Layout/Layout.css\");\r\nfunction Layout({ children }) {\r\n    return react_1.default.createElement(\"div\", { className: styles.layout }, children);\r\n}\r\nexports.Layout = Layout;\r\n\n\n//# sourceURL=webpack:///./src/shared/Layout/Layout.tsx?");

/***/ }),

/***/ "./src/types/Ecolors.tsx":
/*!*******************************!*\
  !*** ./src/types/Ecolors.tsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n//библиотека для удобного условного объединения CSS-классов\r\n//npm i classnames@2.2\r\n//npm i -D @types/classnames@2.2\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.EcolorsVar = exports.Ecolors = void 0;\r\nvar Ecolors;\r\n(function (Ecolors) {\r\n    Ecolors[\"black\"] = \"black\";\r\n    Ecolors[\"orange\"] = \"orange\";\r\n    Ecolors[\"green\"] = \"green\";\r\n    Ecolors[\"white\"] = \"white\";\r\n    Ecolors[\"grayF4\"] = \"grayF4\";\r\n    Ecolors[\"grayF3\"] = \"grayF3\";\r\n    Ecolors[\"grayC4\"] = \"grayC4\";\r\n    Ecolors[\"gray66\"] = \"gray66\";\r\n    Ecolors[\"gray99\"] = \"gray99\";\r\n    Ecolors[\"grayEC\"] = \"grayEC\";\r\n    Ecolors[\"grayD9\"] = \"grayD9\";\r\n})(Ecolors = exports.Ecolors || (exports.Ecolors = {}));\r\nvar EcolorsVar;\r\n(function (EcolorsVar) {\r\n    EcolorsVar[\"black\"] = \"var(--black)\";\r\n    EcolorsVar[\"orange\"] = \"var(--orange)\";\r\n    EcolorsVar[\"green\"] = \"var(--green)\";\r\n    EcolorsVar[\"white\"] = \"var(--white)\";\r\n    EcolorsVar[\"grayF4\"] = \"var(--grayF4)\";\r\n    EcolorsVar[\"grayF3\"] = \"var(--grayF3)\";\r\n    EcolorsVar[\"grayC4\"] = \"var(--grayC4)\";\r\n    EcolorsVar[\"gray66\"] = \"var(--gray66)\";\r\n    EcolorsVar[\"gray99\"] = \"var(--gray99)\";\r\n    EcolorsVar[\"grayEC\"] = \"var(--grayEC)\";\r\n    EcolorsVar[\"grayD9\"] = \"var(--grayD9)\";\r\n})(EcolorsVar = exports.EcolorsVar || (exports.EcolorsVar = {}));\r\n\n\n//# sourceURL=webpack:///./src/types/Ecolors.tsx?");

/***/ }),

/***/ "./src/utils/data/menuData.tsx":
/*!*************************************!*\
  !*** ./src/utils/data/menuData.tsx ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.menuData = void 0;\r\nconst MenuIcon_1 = __webpack_require__(/*! ../../assets/svg/MenuIcon */ \"./src/assets/svg/MenuIcon.tsx\");\r\nexports.menuData = [\r\n    {\r\n        title: \"Комментарии\",\r\n        icon: MenuIcon_1.MenuCommentsIcon,\r\n    },\r\n    {\r\n        title: \"Поделиться\",\r\n        icon: MenuIcon_1.MenuShareIcon,\r\n    },\r\n    {\r\n        title: \"Скрыть\",\r\n        icon: MenuIcon_1.MenuHideIcon,\r\n    },\r\n    {\r\n        title: \"Сохранить\",\r\n        icon: MenuIcon_1.MenuSaveIcon,\r\n    },\r\n    {\r\n        title: \"Пожаловаться\",\r\n        icon: MenuIcon_1.MenuReportIcon,\r\n    },\r\n];\r\n\n\n//# sourceURL=webpack:///./src/utils/data/menuData.tsx?");

/***/ }),

/***/ "./src/utils/hooks/useDeviceType.ts":
/*!******************************************!*\
  !*** ./src/utils/hooks/useDeviceType.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.useDeviceType = void 0;\r\nconst react_1 = __webpack_require__(/*! react */ \"react\");\r\n//возвращает mobile, desctop, tablet в зависимости от ширины экрана\r\nfunction useDeviceType() {\r\n    const [isTablaet, setIsTablet] = react_1.useState(\"mobile\");\r\n    react_1.useEffect(() => {\r\n        // //отслеживание брейк-поинта\r\n        // //проверка экрана useDeviceType\r\n        //медиа запрос\r\n        const mediaQuery = {\r\n            desctop: window.matchMedia(\"(min-width:1540px)\"),\r\n            tablet: window.matchMedia(\"(min-width:1024px) and (max-width:1539px)\"),\r\n            mobile: window.matchMedia(\"(max-width:1023px)\"),\r\n        };\r\n        //нчальное значение\r\n        const updateBreakpoint = () => {\r\n            if (mediaQuery.desctop.matches)\r\n                setIsTablet(\"desctop\");\r\n            if (mediaQuery.tablet.matches)\r\n                setIsTablet(\"tablet\");\r\n            if (mediaQuery.mobile.matches)\r\n                setIsTablet(\"mobile\");\r\n        };\r\n        updateBreakpoint();\r\n        //подписка\r\n        Object.values(mediaQuery).forEach((media) => {\r\n            media.addEventListener(\"change\", updateBreakpoint);\r\n        });\r\n        //очистка\r\n        return () => {\r\n            Object.values(mediaQuery).forEach((media) => {\r\n                media.removeEventListener(\"change\", updateBreakpoint);\r\n            });\r\n        };\r\n    }, []);\r\n    return isTablaet;\r\n}\r\nexports.useDeviceType = useDeviceType;\r\n\n\n//# sourceURL=webpack:///./src/utils/hooks/useDeviceType.ts?");

/***/ }),

/***/ "./src/utils/hooks/useToken.ts":
/*!*************************************!*\
  !*** ./src/utils/hooks/useToken.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.useToken = void 0;\r\nconst react_1 = __webpack_require__(/*! react */ \"react\");\r\nfunction useToken() {\r\n    const [token, setToken] = react_1.useState(\"\");\r\n    react_1.useEffect(() => {\r\n        if (window.__token__) {\r\n            setToken(window.__token__);\r\n        }\r\n    }, []);\r\n    return [token];\r\n}\r\nexports.useToken = useToken;\r\n\n\n//# sourceURL=webpack:///./src/utils/hooks/useToken.ts?");

/***/ }),

/***/ "./src/utils/js/assoc.ts":
/*!*******************************!*\
  !*** ./src/utils/js/assoc.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.assoc = void 0;\r\n//добавляет в объект некие занчения\r\n//принмает ключ и значение\r\nfunction assoc(key, value) {\r\n    //принимаем любой объект кот подходить под О\r\n    //типизация   если в объект ы был ключ мы его заменяем, если нет-добавляем\r\n    return (obj) => (Object.assign(Object.assign({}, obj), { [key]: value }));\r\n}\r\nexports.assoc = assoc;\r\n\n\n//# sourceURL=webpack:///./src/utils/js/assoc.ts?");

/***/ }),

/***/ "./src/utils/react/generateRandomIndex.ts":
/*!************************************************!*\
  !*** ./src/utils/react/generateRandomIndex.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n//генерируем рандомную строку\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.generateAssignId = exports.generateId = exports.assignId = exports.generateRandomString = void 0;\r\nconst assoc_1 = __webpack_require__(/*! ../js/assoc */ \"./src/utils/js/assoc.ts\");\r\n//nanoid\r\nexports.generateRandomString = () => Math.random().toString(36).substring(2, 15);\r\n//один раз сегнерируется generateRandomString для этого нудна доп ф-я ниже\r\n//эта ф-я вызвается один раз при вызове модуля\r\nexports.assignId = assoc_1.assoc('id', exports.generateRandomString());\r\n//вызывается каждый раз когда вызваем ф-ю\r\nexports.generateId = (obj) => assoc_1.assoc('id', exports.generateRandomString())(obj);\r\n//или\r\nexports.generateAssignId = (obj) => exports.assignId(obj);\r\n\n\n//# sourceURL=webpack:///./src/utils/react/generateRandomIndex.ts?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");\n\n//# sourceURL=webpack:///external_%22axios%22?");

/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"classnames\");\n\n//# sourceURL=webpack:///external_%22classnames%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-hot-loader/root":
/*!****************************************!*\
  !*** external "react-hot-loader/root" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-hot-loader/root\");\n\n//# sourceURL=webpack:///external_%22react-hot-loader/root%22?");

/***/ })

/******/ });