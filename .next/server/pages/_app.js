module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"pages/_app": 0
/******/ 	};
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("../" + ({}[chunkId]||chunkId) + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./i18n.json":
/*!*******************!*\
  !*** ./i18n.json ***!
  \*******************/
/*! exports provided: locales, defaultLocale, pages, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"locales\\\":[\\\"en\\\",\\\"ca\\\",\\\"es\\\"],\\\"defaultLocale\\\":\\\"en\\\",\\\"pages\\\":{\\\"*\\\":[\\\"common\\\"],\\\"/404\\\":[\\\"error\\\"],\\\"/\\\":[\\\"home\\\"],\\\"/dashboard\\\":[\\\"home\\\"],\\\"rgx:^/more-examples\\\":[\\\"more-examples\\\"]}}\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL2kxOG4uanNvbi5qcyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./i18n.json\n");

/***/ }),

/***/ "./locales lazy recursive ^\\.\\/.*\\/.*$":
/*!****************************************************!*\
  !*** ./locales lazy ^\.\/.*\/.*$ namespace object ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\"./ca/common\": [\n\t\t\"./locales/ca/common.json\",\n\t\t0\n\t],\n\t\"./ca/common.json\": [\n\t\t\"./locales/ca/common.json\",\n\t\t0\n\t],\n\t\"./ca/dynamic\": [\n\t\t\"./locales/ca/dynamic.json\",\n\t\t1\n\t],\n\t\"./ca/dynamic.json\": [\n\t\t\"./locales/ca/dynamic.json\",\n\t\t1\n\t],\n\t\"./ca/error\": [\n\t\t\"./locales/ca/error.json\",\n\t\t2\n\t],\n\t\"./ca/error.json\": [\n\t\t\"./locales/ca/error.json\",\n\t\t2\n\t],\n\t\"./ca/home\": [\n\t\t\"./locales/ca/home.json\",\n\t\t3\n\t],\n\t\"./ca/home.json\": [\n\t\t\"./locales/ca/home.json\",\n\t\t3\n\t],\n\t\"./ca/more-examples\": [\n\t\t\"./locales/ca/more-examples.json\",\n\t\t4\n\t],\n\t\"./ca/more-examples.json\": [\n\t\t\"./locales/ca/more-examples.json\",\n\t\t4\n\t],\n\t\"./en/common\": [\n\t\t\"./locales/en/common.json\",\n\t\t5\n\t],\n\t\"./en/common.json\": [\n\t\t\"./locales/en/common.json\",\n\t\t5\n\t],\n\t\"./en/dynamic\": [\n\t\t\"./locales/en/dynamic.json\",\n\t\t6\n\t],\n\t\"./en/dynamic.json\": [\n\t\t\"./locales/en/dynamic.json\",\n\t\t6\n\t],\n\t\"./en/error\": [\n\t\t\"./locales/en/error.json\",\n\t\t7\n\t],\n\t\"./en/error.json\": [\n\t\t\"./locales/en/error.json\",\n\t\t7\n\t],\n\t\"./en/home\": [\n\t\t\"./locales/en/home.json\",\n\t\t8\n\t],\n\t\"./en/home.json\": [\n\t\t\"./locales/en/home.json\",\n\t\t8\n\t],\n\t\"./en/more-examples\": [\n\t\t\"./locales/en/more-examples.json\",\n\t\t9\n\t],\n\t\"./en/more-examples.json\": [\n\t\t\"./locales/en/more-examples.json\",\n\t\t9\n\t],\n\t\"./es/common\": [\n\t\t\"./locales/es/common.json\",\n\t\t10\n\t],\n\t\"./es/common.json\": [\n\t\t\"./locales/es/common.json\",\n\t\t10\n\t],\n\t\"./es/dynamic\": [\n\t\t\"./locales/es/dynamic.json\",\n\t\t11\n\t],\n\t\"./es/dynamic.json\": [\n\t\t\"./locales/es/dynamic.json\",\n\t\t11\n\t],\n\t\"./es/error\": [\n\t\t\"./locales/es/error.json\",\n\t\t12\n\t],\n\t\"./es/error.json\": [\n\t\t\"./locales/es/error.json\",\n\t\t12\n\t],\n\t\"./es/home\": [\n\t\t\"./locales/es/home.json\",\n\t\t13\n\t],\n\t\"./es/home.json\": [\n\t\t\"./locales/es/home.json\",\n\t\t13\n\t],\n\t\"./es/more-examples\": [\n\t\t\"./locales/es/more-examples.json\",\n\t\t14\n\t],\n\t\"./es/more-examples.json\": [\n\t\t\"./locales/es/more-examples.json\",\n\t\t14\n\t]\n};\nfunction webpackAsyncContext(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\treturn Promise.resolve().then(function() {\n\t\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\t\te.code = 'MODULE_NOT_FOUND';\n\t\t\tthrow e;\n\t\t});\n\t}\n\n\tvar ids = map[req], id = ids[0];\n\treturn __webpack_require__.e(ids[1]).then(function() {\n\t\treturn __webpack_require__.t(id, 3);\n\t});\n}\nwebpackAsyncContext.keys = function webpackAsyncContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackAsyncContext.id = \"./locales lazy recursive ^\\\\.\\\\/.*\\\\/.*$\";\nmodule.exports = webpackAsyncContext;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9sb2NhbGVzIGxhenkgXlxcLlxcLy4qXFwvLiokIG5hbWVzcGFjZSBvYmplY3Q/NDQ3NSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9sb2NhbGVzIGxhenkgcmVjdXJzaXZlIF5cXC5cXC8uKlxcLy4qJC5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBtYXAgPSB7XG5cdFwiLi9jYS9jb21tb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2NhL2NvbW1vbi5qc29uXCIsXG5cdFx0MFxuXHRdLFxuXHRcIi4vY2EvY29tbW9uLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2NhL2NvbW1vbi5qc29uXCIsXG5cdFx0MFxuXHRdLFxuXHRcIi4vY2EvZHluYW1pY1wiOiBbXG5cdFx0XCIuL2xvY2FsZXMvY2EvZHluYW1pYy5qc29uXCIsXG5cdFx0MVxuXHRdLFxuXHRcIi4vY2EvZHluYW1pYy5qc29uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9jYS9keW5hbWljLmpzb25cIixcblx0XHQxXG5cdF0sXG5cdFwiLi9jYS9lcnJvclwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvY2EvZXJyb3IuanNvblwiLFxuXHRcdDJcblx0XSxcblx0XCIuL2NhL2Vycm9yLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2NhL2Vycm9yLmpzb25cIixcblx0XHQyXG5cdF0sXG5cdFwiLi9jYS9ob21lXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9jYS9ob21lLmpzb25cIixcblx0XHQzXG5cdF0sXG5cdFwiLi9jYS9ob21lLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2NhL2hvbWUuanNvblwiLFxuXHRcdDNcblx0XSxcblx0XCIuL2NhL21vcmUtZXhhbXBsZXNcIjogW1xuXHRcdFwiLi9sb2NhbGVzL2NhL21vcmUtZXhhbXBsZXMuanNvblwiLFxuXHRcdDRcblx0XSxcblx0XCIuL2NhL21vcmUtZXhhbXBsZXMuanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvY2EvbW9yZS1leGFtcGxlcy5qc29uXCIsXG5cdFx0NFxuXHRdLFxuXHRcIi4vZW4vY29tbW9uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9lbi9jb21tb24uanNvblwiLFxuXHRcdDVcblx0XSxcblx0XCIuL2VuL2NvbW1vbi5qc29uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9lbi9jb21tb24uanNvblwiLFxuXHRcdDVcblx0XSxcblx0XCIuL2VuL2R5bmFtaWNcIjogW1xuXHRcdFwiLi9sb2NhbGVzL2VuL2R5bmFtaWMuanNvblwiLFxuXHRcdDZcblx0XSxcblx0XCIuL2VuL2R5bmFtaWMuanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZW4vZHluYW1pYy5qc29uXCIsXG5cdFx0NlxuXHRdLFxuXHRcIi4vZW4vZXJyb3JcIjogW1xuXHRcdFwiLi9sb2NhbGVzL2VuL2Vycm9yLmpzb25cIixcblx0XHQ3XG5cdF0sXG5cdFwiLi9lbi9lcnJvci5qc29uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9lbi9lcnJvci5qc29uXCIsXG5cdFx0N1xuXHRdLFxuXHRcIi4vZW4vaG9tZVwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZW4vaG9tZS5qc29uXCIsXG5cdFx0OFxuXHRdLFxuXHRcIi4vZW4vaG9tZS5qc29uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9lbi9ob21lLmpzb25cIixcblx0XHQ4XG5cdF0sXG5cdFwiLi9lbi9tb3JlLWV4YW1wbGVzXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9lbi9tb3JlLWV4YW1wbGVzLmpzb25cIixcblx0XHQ5XG5cdF0sXG5cdFwiLi9lbi9tb3JlLWV4YW1wbGVzLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2VuL21vcmUtZXhhbXBsZXMuanNvblwiLFxuXHRcdDlcblx0XSxcblx0XCIuL2VzL2NvbW1vblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZXMvY29tbW9uLmpzb25cIixcblx0XHQxMFxuXHRdLFxuXHRcIi4vZXMvY29tbW9uLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2VzL2NvbW1vbi5qc29uXCIsXG5cdFx0MTBcblx0XSxcblx0XCIuL2VzL2R5bmFtaWNcIjogW1xuXHRcdFwiLi9sb2NhbGVzL2VzL2R5bmFtaWMuanNvblwiLFxuXHRcdDExXG5cdF0sXG5cdFwiLi9lcy9keW5hbWljLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2VzL2R5bmFtaWMuanNvblwiLFxuXHRcdDExXG5cdF0sXG5cdFwiLi9lcy9lcnJvclwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZXMvZXJyb3IuanNvblwiLFxuXHRcdDEyXG5cdF0sXG5cdFwiLi9lcy9lcnJvci5qc29uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9lcy9lcnJvci5qc29uXCIsXG5cdFx0MTJcblx0XSxcblx0XCIuL2VzL2hvbWVcIjogW1xuXHRcdFwiLi9sb2NhbGVzL2VzL2hvbWUuanNvblwiLFxuXHRcdDEzXG5cdF0sXG5cdFwiLi9lcy9ob21lLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2VzL2hvbWUuanNvblwiLFxuXHRcdDEzXG5cdF0sXG5cdFwiLi9lcy9tb3JlLWV4YW1wbGVzXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9lcy9tb3JlLWV4YW1wbGVzLmpzb25cIixcblx0XHQxNFxuXHRdLFxuXHRcIi4vZXMvbW9yZS1leGFtcGxlcy5qc29uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9lcy9tb3JlLWV4YW1wbGVzLmpzb25cIixcblx0XHQxNFxuXHRdXG59O1xuZnVuY3Rpb24gd2VicGFja0FzeW5jQ29udGV4dChyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbigpIHtcblx0XHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHRcdHRocm93IGU7XG5cdFx0fSk7XG5cdH1cblxuXHR2YXIgaWRzID0gbWFwW3JlcV0sIGlkID0gaWRzWzBdO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5lKGlkc1sxXSkudGhlbihmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy50KGlkLCAzKTtcblx0fSk7XG59XG53ZWJwYWNrQXN5bmNDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQXN5bmNDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0FzeW5jQ29udGV4dC5pZCA9IFwiLi9sb2NhbGVzIGxhenkgcmVjdXJzaXZlIF5cXFxcLlxcXFwvLipcXFxcLy4qJFwiO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQXN5bmNDb250ZXh0OyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./locales lazy recursive ^\\.\\/.*\\/.*$\n");

/***/ }),

/***/ "./node_modules/next/dist/pages/_app.js":
/*!**********************************************!*\
  !*** ./node_modules/next/dist/pages/_app.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _jsxDevRuntime = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n\nvar _i18n = _interopRequireDefault(__webpack_require__(/*! @next-translate-root/i18n */ \"./i18n.json\"));\n\nvar _appWithI18n = _interopRequireDefault(__webpack_require__(/*! next-translate/appWithI18n */ \"next-translate/appWithI18n\"));\n\nvar _jsxFileName = \"/Users/jellebouwman/Development/experiments/next-translate-bug-report/node_modules/next/dist/pages/_app.js\";\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction MyApp({\n  Component,\n  pageProps\n}) {\n  return /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 6,\n    columnNumber: 12\n  }, this);\n}\n\nvar _default = (0, _appWithI18n.default)(MyApp, _objectSpread(_objectSpread({}, _i18n.default), {}, {\n  skipInitialProps: true,\n  isLoader: true,\n  loadLocaleFrom: (l, n) => __webpack_require__(\"./locales lazy recursive ^\\\\.\\\\/.*\\\\/.*$\")(`./${l}/${n}`).then(m => m.default)\n}));\n\nexports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L3BhZ2VzL19hcHAuanM/MDc5NSJdLCJuYW1lcyI6WyJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImkxOG5Db25maWciLCJza2lwSW5pdGlhbFByb3BzIiwiaXNMb2FkZXIiLCJsb2FkTG9jYWxlRnJvbSIsImwiLCJuIiwidGhlbiIsIm0iLCJkZWZhdWx0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUEsU0FBU0EsS0FBVCxDQUFlO0FBQUVDLFdBQUY7QUFBYUM7QUFBYixDQUFmLEVBQXlDO0FBQ3ZDLHNCQUFPLDJCQUFDLFNBQUQsb0JBQWVBLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBQ0Q7O2VBRWMsMEJBQVlGLEtBQVosa0NBQ1ZHLGFBRFU7QUFFYkMsa0JBQWdCLEVBQUUsSUFGTDtBQUdiQyxVQUFRLEVBQUUsSUFIRztBQUliQyxnQkFBYyxFQUFFLENBQUNDLENBQUQsRUFBSUMsQ0FBSixLQUFVLGdFQUFRLEtBQStCRCxDQUFFLElBQUdDLENBQUUsRUFBOUMsRUFBaURDLElBQWpELENBQXNEQyxDQUFDLElBQUlBLENBQUMsQ0FBQ0MsT0FBN0Q7QUFKYixHIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9wYWdlcy9fYXBwLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCBpMThuQ29uZmlnIGZyb20gJ0BuZXh0LXRyYW5zbGF0ZS1yb290L2kxOG4nXG4gIGltcG9ydCBhcHBXaXRoSTE4biBmcm9tICduZXh0LXRyYW5zbGF0ZS9hcHBXaXRoSTE4bidcblxuICBmdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgICByZXR1cm4gPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICB9XG5cbiAgZXhwb3J0IGRlZmF1bHQgYXBwV2l0aEkxOG4oTXlBcHAsIHtcbiAgICAuLi5pMThuQ29uZmlnLFxuICAgIHNraXBJbml0aWFsUHJvcHM6IHRydWUsXG4gICAgaXNMb2FkZXI6IHRydWUsXG4gICAgbG9hZExvY2FsZUZyb206IChsLCBuKSA9PiBpbXBvcnQoYEBuZXh0LXRyYW5zbGF0ZS1yb290L2xvY2FsZXMvJHtsfS8ke259YCkudGhlbihtID0+IG0uZGVmYXVsdCksXG4gIH0pXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/pages/_app.js\n");

/***/ }),

/***/ 0:
/*!**********************************!*\
  !*** multi next/dist/pages/_app ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next/dist/pages/_app */"./node_modules/next/dist/pages/_app.js");


/***/ }),

/***/ "next-translate/appWithI18n":
/*!*********************************************!*\
  !*** external "next-translate/appWithI18n" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next-translate/appWithI18n\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LXRyYW5zbGF0ZS9hcHBXaXRoSTE4blwiPzdlMTAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibmV4dC10cmFuc2xhdGUvYXBwV2l0aEkxOG4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LXRyYW5zbGF0ZS9hcHBXaXRoSTE4blwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next-translate/appWithI18n\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });