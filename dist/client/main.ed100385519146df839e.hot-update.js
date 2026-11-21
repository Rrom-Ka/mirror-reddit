webpackHotUpdate("main",{

/***/ "./src/utils/hooks/usePostsData.ts":
/*!*****************************************!*\
  !*** ./src/utils/hooks/usePostsData.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.usePostsData = void 0;\r\nconst axios_1 = __importDefault(__webpack_require__(/*! axios */ \"./node_modules/axios/index.js\"));\r\nconst react_1 = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\r\nfunction usePostsData() {\r\n    const [post, setPost] = react_1.useState({});\r\n    react_1.useEffect(() => {\r\n        axios_1.default\r\n            // .get(\"https://www.reddit.com/r/popular/best.json?sr_detail=true\")\r\n            .get(\"/api/posts\")\r\n            .then((resp) => {\r\n            const postData = resp.data;\r\n            // console.log(postData)\r\n            setPost(postData);\r\n        })\r\n            .catch(console.log);\r\n    }, []);\r\n    return [post.data];\r\n}\r\nexports.usePostsData = usePostsData;\r\n\n\n//# sourceURL=webpack:///./src/utils/hooks/usePostsData.ts?");

/***/ })

})