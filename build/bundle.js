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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/application/config/swagger.js":
/*!*******************************************!*\
  !*** ./src/application/config/swagger.js ***!
  \*******************************************/
/*! exports provided: swaggerConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "swaggerConfig", function() { return swaggerConfig; });
var swaggerConfig = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Test API',
      version: '1.0.0'
    },
    components: {
      securitySchemes: {
        ApiKeyAuth: {
          type: 'apiKey',
          name: 'x-access-token',
          "in": 'header'
        }
      }
    },
    security: [{
      ApiKeyAuth: []
    }],
    securityDefinitions: {
      basicAuth: {
        type: 'basic'
      }
    }
  },
  // Path to the API docs
  apis: ['./src/controllers/**/*.js', './src/controllers/**/*.yml']
};

/***/ }),

/***/ "./src/application/database/index.js":
/*!*******************************************!*\
  !*** ./src/application/database/index.js ***!
  \*******************************************/
/*! exports provided: db, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "db", function() { return db; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sequelize */ "sequelize");
/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sequelize__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../database */ "./src/database.js");




var database = _database__WEBPACK_IMPORTED_MODULE_3__["default"].database,
    user = _database__WEBPACK_IMPORTED_MODULE_3__["default"].user,
    password = _database__WEBPACK_IMPORTED_MODULE_3__["default"].password,
    host = _database__WEBPACK_IMPORTED_MODULE_3__["default"].host,
    forceCleanDatabase = _database__WEBPACK_IMPORTED_MODULE_3__["default"].forceCleanDatabase;
var db = new sequelize__WEBPACK_IMPORTED_MODULE_2__["Sequelize"](database, user, password, {
  host: host,
  dialect: 'mysql',
  query: {
    raw: true
  }
});
/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/(function () {
  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(onConnect) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return db.authenticate();

          case 3:
            db.sync({
              force: forceCleanDatabase
            });
            onConnect();
            console.log('Database connection OK!');
            _context.next = 11;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](0);
            console.log('Unable to connect to the database:');

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 8]]);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
})());

/***/ }),

/***/ "./src/application/documentation/index.js":
/*!************************************************!*\
  !*** ./src/application/documentation/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swagger_jsdoc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swagger-jsdoc */ "swagger-jsdoc");
/* harmony import */ var swagger_jsdoc__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(swagger_jsdoc__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var swagger_ui_express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swagger-ui-express */ "swagger-ui-express");
/* harmony import */ var swagger_ui_express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(swagger_ui_express__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config_swagger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config/swagger */ "./src/application/config/swagger.js");




var Documentation = function Documentation(app) {
  // JSON of specs
  var swaggerSpec = swagger_jsdoc__WEBPACK_IMPORTED_MODULE_0___default()(_config_swagger__WEBPACK_IMPORTED_MODULE_2__["swaggerConfig"]); // Api entrypoint

  app.use("/docs", swagger_ui_express__WEBPACK_IMPORTED_MODULE_1___default.a.serve, swagger_ui_express__WEBPACK_IMPORTED_MODULE_1___default.a.setup(swaggerSpec));
};

/* harmony default export */ __webpack_exports__["default"] = (Documentation);

/***/ }),

/***/ "./src/application/middlewares/error-handler.js":
/*!******************************************************!*\
  !*** ./src/application/middlewares/error-handler.js ***!
  \******************************************************/
/*! exports provided: asyncHandler, socketHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "asyncHandler", function() { return asyncHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "socketHandler", function() { return socketHandler; });
/*Tenemos una función que recibe como parámetro la función de cada controlador,
la ejecuta (resolve)
y si  hay algún error, lo mostrará por consola y lanzará un 500
*/
var asyncHandler = function asyncHandler(controller) {
  return function (req, res, next) {
    return Promise.resolve(controller(req, res, next))["catch"](function (err) {
      console.error('Request error:' + err.toString());
      if (err) return res.sendStatus(500).send();
    });
  };
};
var socketHandler = function socketHandler(controller) {
  return function (msg) {
    return Promise.resolve(controller(msg))["catch"](function (err) {
      console.error('Socket error:' + err);
    });
  };
};

/***/ }),

/***/ "./src/application/middlewares/index.js":
/*!**********************************************!*\
  !*** ./src/application/middlewares/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cors */ "cors");
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! body-parser */ "body-parser");
/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_1__);



var Middlewares = function Middlewares(app) {
  app.use(body_parser__WEBPACK_IMPORTED_MODULE_1___default.a.urlencoded());
  app.use(body_parser__WEBPACK_IMPORTED_MODULE_1___default.a.json());
  app.use(cors__WEBPACK_IMPORTED_MODULE_0___default()()); // Use this after the variable declaration

  app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');

    if (req.method === 'OPTIONS') {
      res.end();
    } else {
      next();
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Middlewares);

/***/ }),

/***/ "./src/application/middlewares/restricted-access.js":
/*!**********************************************************!*\
  !*** ./src/application/middlewares/restricted-access.js ***!
  \**********************************************************/
/*! exports provided: getHeader, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHeader", function() { return getHeader; });
/* harmony import */ var _utils_access__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/access */ "./src/utils/access.js");

var getHeader = function getHeader(req, header) {
  return req.headers[header];
};
/* harmony default export */ __webpack_exports__["default"] = (function (req, res, next) {
  var token = getHeader(req, 'x-access-token');

  if (!token) {
    return res.status(400).send('No token provided.');
  }

  return Object(_utils_access__WEBPACK_IMPORTED_MODULE_0__["verifyToken"])(token, function (err) {
    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        id = _ref.id;

    if (err) {
      return res.status(401).send('Failed to authenticate token.');
    }

    if (!id) {
      return res.status(403).send('Wrong credentials');
    }

    req.userId = id;
    return next();
  });
});

/***/ }),

/***/ "./src/controllers/api/index.js":
/*!**************************************!*\
  !*** ./src/controllers/api/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _users__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./users */ "./src/controllers/api/users/index.js");
/* harmony import */ var _plays__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./plays */ "./src/controllers/api/plays/index.js");
/* harmony import */ var _lines__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lines */ "./src/controllers/api/lines/index.js");



/* harmony default export */ __webpack_exports__["default"] = (function (app) {
  app.use('/plays', _plays__WEBPACK_IMPORTED_MODULE_1__["default"]);
  app.use('/lines', _lines__WEBPACK_IMPORTED_MODULE_2__["default"]); // Private

  app.use('/users', _users__WEBPACK_IMPORTED_MODULE_0__["default"]);
  app.use('/', function (req, res) {
    return res.send("Working like a charmii \u0669(^\u203F^)\u06F6");
  });
});

/***/ }),

/***/ "./src/controllers/api/lines/index.js":
/*!********************************************!*\
  !*** ./src/controllers/api/lines/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Models_lines__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @Models/lines */ "./src/models/lines/index.js");
/* harmony import */ var _Middlwares_error_handler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @Middlwares/error-handler */ "./src/application/middlewares/error-handler.js");
/* harmony import */ var _Middlwares_restricted_access__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @Middlwares/restricted-access */ "./src/application/middlewares/restricted-access.js");






var router = express__WEBPACK_IMPORTED_MODULE_2___default.a.Router();
router.get("/:playId", Object(_Middlwares_error_handler__WEBPACK_IMPORTED_MODULE_4__["asyncHandler"])( /*#__PURE__*/function () {
  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(req, res) {
    var playId, data;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            playId = req.params.playId;
            _context.next = 3;
            return _Models_lines__WEBPACK_IMPORTED_MODULE_3__["getByPlayId"](playId);

          case 3:
            data = _context.sent;
            res.send(data);

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}()));
router.post("/", Object(_Middlwares_error_handler__WEBPACK_IMPORTED_MODULE_4__["asyncHandler"])( /*#__PURE__*/function () {
  var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(req, res) {
    var _req$body, txt, playId, order;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _req$body = req.body, txt = _req$body.txt, playId = _req$body.playId, order = _req$body.order;
            _context2.next = 3;
            return _Models_lines__WEBPACK_IMPORTED_MODULE_3__["create"](txt, playId);

          case 3:
            res.send('Line creada con éxito');

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}()));
router["delete"]("/:lineId", Object(_Middlwares_error_handler__WEBPACK_IMPORTED_MODULE_4__["asyncHandler"])( /*#__PURE__*/function () {
  var _ref3 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(req, res) {
    var lineId;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            lineId = req.params.lineId;
            console.log('*******************');
            console.log(lineId);
            _context3.next = 5;
            return _Models_lines__WEBPACK_IMPORTED_MODULE_3__["remove"](lineId);

          case 5:
            res.send('Play borrado con éxito');

          case 6:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function (_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}()));
router.put("/", Object(_Middlwares_error_handler__WEBPACK_IMPORTED_MODULE_4__["asyncHandler"])( /*#__PURE__*/function () {
  var _ref4 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(req, res) {
    var _req$body2, txt, order, lineId, result;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _req$body2 = req.body, txt = _req$body2.txt, order = _req$body2.order, lineId = _req$body2.lineId;
            _context4.prev = 1;
            _context4.next = 4;
            return _Models_lines__WEBPACK_IMPORTED_MODULE_3__["update"](txt, order, lineId);

          case 4:
            result = _context4.sent;
            console.log(result);
            _context4.next = 11;
            break;

          case 8:
            _context4.prev = 8;
            _context4.t0 = _context4["catch"](1);
            console('error', _context4.t0);

          case 11:
            res.send('Line actualizada con éxito');

          case 12:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[1, 8]]);
  }));

  return function (_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}())); ///////////////////

/* harmony default export */ __webpack_exports__["default"] = (router);

/***/ }),

/***/ "./src/controllers/api/plays/index.js":
/*!********************************************!*\
  !*** ./src/controllers/api/plays/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Models_plays__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @Models/plays */ "./src/models/plays/index.js");
/* harmony import */ var _Middlwares_error_handler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @Middlwares/error-handler */ "./src/application/middlewares/error-handler.js");
/* harmony import */ var _Middlwares_restricted_access__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @Middlwares/restricted-access */ "./src/application/middlewares/restricted-access.js");






var router = express__WEBPACK_IMPORTED_MODULE_2___default.a.Router();
router.get("/getPlays", Object(_Middlwares_error_handler__WEBPACK_IMPORTED_MODULE_4__["asyncHandler"])( /*#__PURE__*/function () {
  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(req, res) {
    var userId, data;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            userId = req.query.userId;
            _context.next = 3;
            return _Models_plays__WEBPACK_IMPORTED_MODULE_3__["getPlays"](userId);

          case 3:
            data = _context.sent;
            res.send(data);

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}()));
router.post("/create", Object(_Middlwares_error_handler__WEBPACK_IMPORTED_MODULE_4__["asyncHandler"])( /*#__PURE__*/function () {
  var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(req, res) {
    var _req$body, name, userId;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _req$body = req.body, name = _req$body.name, userId = _req$body.userId;
            _context2.next = 3;
            return _Models_plays__WEBPACK_IMPORTED_MODULE_3__["createPlay"](name, userId);

          case 3:
            res.send('Play creado con éxito');

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}())); ///////////////////

router.get("/restricted-path", _Middlwares_restricted_access__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_Middlwares_error_handler__WEBPACK_IMPORTED_MODULE_4__["asyncHandler"])( /*#__PURE__*/function () {
  var _ref3 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(req, res) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            res.send("User id: ".concat(req.userId));

          case 1:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function (_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}()));
router["delete"]("/:id", Object(_Middlwares_error_handler__WEBPACK_IMPORTED_MODULE_4__["asyncHandler"])( /*#__PURE__*/function () {
  var _ref4 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(req, res) {
    var id;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            id = req.params.id;
            _context4.next = 3;
            return _Models_plays__WEBPACK_IMPORTED_MODULE_3__["deletePlay"](id);

          case 3:
            res.send("Play id: ".concat(id, " deleted"));

          case 4:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function (_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}()));
router.patch("/:id", _Middlwares_restricted_access__WEBPACK_IMPORTED_MODULE_5__["default"], /*#__PURE__*/function () {
  var _ref5 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5(req, res) {
    var id, body;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            id = req.params.id, body = req.body;
            _context5.next = 3;
            return _Models_plays__WEBPACK_IMPORTED_MODULE_3__["updatePlay"](id, body);

          case 3:
            res.send("Play id: ".concat(id, " updated"));

          case 4:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function (_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}());
/* harmony default export */ __webpack_exports__["default"] = (router);

/***/ }),

/***/ "./src/controllers/api/users/index.js":
/*!********************************************!*\
  !*** ./src/controllers/api/users/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Models_users__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @Models/users */ "./src/models/users/index.js");
/* harmony import */ var _Middlwares_error_handler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @Middlwares/error-handler */ "./src/application/middlewares/error-handler.js");
/* harmony import */ var _Middlwares_restricted_access__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @Middlwares/restricted-access */ "./src/application/middlewares/restricted-access.js");






var router = express__WEBPACK_IMPORTED_MODULE_2___default.a.Router();
router.post("/googleIdExists", Object(_Middlwares_error_handler__WEBPACK_IMPORTED_MODULE_4__["asyncHandler"])( /*#__PURE__*/function () {
  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(req, res) {
    var googleId, user;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            googleId = req.body.googleId;
            _context.next = 3;
            return _Models_users__WEBPACK_IMPORTED_MODULE_3__["getIfUserExistsByGoogleId"](googleId);

          case 3:
            user = _context.sent;
            res.send({
              res: user ? true : false
            });

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}()));
router.post("/registerNewUserByGoogleId", Object(_Middlwares_error_handler__WEBPACK_IMPORTED_MODULE_4__["asyncHandler"])( /*#__PURE__*/function () {
  var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(req, res) {
    var googleId, user;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            googleId = req.body.googleId;
            _context2.next = 3;
            return _Models_users__WEBPACK_IMPORTED_MODULE_3__["registerNewUserByGoogleId"](googleId);

          case 3:
            user = _context2.sent;
            res.send({
              res: user
            });

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}()));
/* harmony default export */ __webpack_exports__["default"] = (router);

/***/ }),

/***/ "./src/controllers/index.js":
/*!**********************************!*\
  !*** ./src/controllers/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ "./src/controllers/api/index.js");


var Controllers = function Controllers(app) {
  Object(_api__WEBPACK_IMPORTED_MODULE_0__["default"])(app);
};

/* harmony default export */ __webpack_exports__["default"] = (Controllers);

/***/ }),

/***/ "./src/database.js":
/*!*************************!*\
  !*** ./src/database.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  host: 'eu-cdbr-west-03.cleardb.net',
  user: 'b84312d7539c93',
  password: '75989781',
  database: 'heroku_36dfd48c92e173b',
  connectionLimit: 10,
  forceCleanDatabase: false
});

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! http */ "http");
/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(http__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _application_middlewares__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./application/middlewares */ "./src/application/middlewares/index.js");
/* harmony import */ var _controllers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./controllers */ "./src/controllers/index.js");
/* harmony import */ var _application_documentation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./application/documentation */ "./src/application/documentation/index.js");
/* harmony import */ var _application_database__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./application/database */ "./src/application/database/index.js");
/* harmony import */ var _Middlwares_error_handler__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @Middlwares/error-handler */ "./src/application/middlewares/error-handler.js");









var app = express__WEBPACK_IMPORTED_MODULE_2___default()();
var router = express__WEBPACK_IMPORTED_MODULE_2___default.a.Router();
/*
Heroku utiliza la variable de entorno process.env.port para asignar el puerto donde se va ejecutar el servidor,
por eso la hemos definido en esta plantilla
*/

var port = process.env.PORT || 3005;
Object(_application_documentation__WEBPACK_IMPORTED_MODULE_6__["default"])(app);
Object(_application_middlewares__WEBPACK_IMPORTED_MODULE_4__["default"])(app);
Object(_controllers__WEBPACK_IMPORTED_MODULE_5__["default"])(app);
Object(_application_database__WEBPACK_IMPORTED_MODULE_7__["default"])(function () {
  var server = http__WEBPACK_IMPORTED_MODULE_3___default.a.createServer(app);
  server.listen(port, function () {
    return console.log("Server listening to http://localhost:".concat(port));
  });
});
router.get("/", Object(_Middlwares_error_handler__WEBPACK_IMPORTED_MODULE_8__["asyncHandler"])( /*#__PURE__*/function () {
  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(req, res) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            res.send("working \u0669(^\u203F^)\u06F6");

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}()));

/***/ }),

/***/ "./src/models/lines/index.js":
/*!***********************************!*\
  !*** ./src/models/lines/index.js ***!
  \***********************************/
/*! exports provided: create, getByUserId, getByPlayId, update, remove */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return create; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getByUserId", function() { return getByUserId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getByPlayId", function() { return getByPlayId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "update", function() { return update; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return remove; });
/* harmony import */ var _schema__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./schema */ "./src/models/lines/schema.js");

var create = function create(txt, playId) {
  _schema__WEBPACK_IMPORTED_MODULE_0__["default"].create({
    txt: txt,
    playId: playId
  });
};
var getByUserId = function getByUserId(userId) {
  return _schema__WEBPACK_IMPORTED_MODULE_0__["default"].findAll({
    raw: true,
    where: {
      userId: userId
    }
  });
};
var getByPlayId = function getByPlayId(playId) {
  return _schema__WEBPACK_IMPORTED_MODULE_0__["default"].findAll({
    raw: true,
    where: {
      playId: playId
    }
  });
};
var update = function update(txt, order, lineId) {
  return _schema__WEBPACK_IMPORTED_MODULE_0__["default"].update({
    txt: txt
  }, {
    where: {
      id: lineId
    }
  });
};
var remove = function remove(lineId) {
  return _schema__WEBPACK_IMPORTED_MODULE_0__["default"].destroy({
    where: {
      id: lineId
    }
  });
};

/***/ }),

/***/ "./src/models/lines/schema.js":
/*!************************************!*\
  !*** ./src/models/lines/schema.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _application_database__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../application/database */ "./src/application/database/index.js");


var _require = __webpack_require__(/*! sequelize */ "sequelize"),
    DataTypes = _require.DataTypes;

/* harmony default export */ __webpack_exports__["default"] = (_application_database__WEBPACK_IMPORTED_MODULE_0__["db"].define('line', {
  txt: DataTypes.STRING,
  playId: DataTypes.INTEGER
}));

/***/ }),

/***/ "./src/models/plays/index.js":
/*!***********************************!*\
  !*** ./src/models/plays/index.js ***!
  \***********************************/
/*! exports provided: createPlay, getPlays, updatePlay, deletePlay */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPlay", function() { return createPlay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPlays", function() { return getPlays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updatePlay", function() { return updatePlay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deletePlay", function() { return deletePlay; });
/* harmony import */ var _schema__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./schema */ "./src/models/plays/schema.js");

var createPlay = function createPlay(name, userId) {
  _schema__WEBPACK_IMPORTED_MODULE_0__["default"].create({
    name: name,
    userId: userId
  });
};
var getPlays = function getPlays(userId) {
  return _schema__WEBPACK_IMPORTED_MODULE_0__["default"].findAll({
    raw: true,
    where: {
      userId: userId
    }
  });
};
var updatePlay = function updatePlay(id, data) {
  return _schema__WEBPACK_IMPORTED_MODULE_0__["default"].update(data, {
    where: {
      id: id
    }
  });
};
var deletePlay = function deletePlay(id) {
  return _schema__WEBPACK_IMPORTED_MODULE_0__["default"].destroy({
    where: {
      id: id
    }
  });
};

/***/ }),

/***/ "./src/models/plays/schema.js":
/*!************************************!*\
  !*** ./src/models/plays/schema.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _application_database__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../application/database */ "./src/application/database/index.js");


var _require = __webpack_require__(/*! sequelize */ "sequelize"),
    DataTypes = _require.DataTypes;

var Play = _application_database__WEBPACK_IMPORTED_MODULE_0__["db"].define('play', {
  name: DataTypes.STRING,
  userId: DataTypes.INTEGER
});
/* harmony default export */ __webpack_exports__["default"] = (Play);

/***/ }),

/***/ "./src/models/users/index.js":
/*!***********************************!*\
  !*** ./src/models/users/index.js ***!
  \***********************************/
/*! exports provided: createUser, updateUser, deleteUser, getUserByEmailAndPassword, getIfUserExistsByGoogleId, registerNewUserByGoogleId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createUser", function() { return createUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateUser", function() { return updateUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteUser", function() { return deleteUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserByEmailAndPassword", function() { return getUserByEmailAndPassword; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIfUserExistsByGoogleId", function() { return getIfUserExistsByGoogleId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerNewUserByGoogleId", function() { return registerNewUserByGoogleId; });
/* harmony import */ var _schema__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./schema */ "./src/models/users/schema.js");

var createUser = function createUser(username, password) {
  return _schema__WEBPACK_IMPORTED_MODULE_0__["default"].create({
    username: username,
    password: password
  });
};
var updateUser = function updateUser(id, data) {
  return _schema__WEBPACK_IMPORTED_MODULE_0__["default"].update(data, {
    where: {
      id: id
    }
  });
};
var deleteUser = function deleteUser(id) {
  return _schema__WEBPACK_IMPORTED_MODULE_0__["default"].destroy({
    where: {
      id: id
    }
  });
};
var getUserByEmailAndPassword = function getUserByEmailAndPassword(username, password) {
  return _schema__WEBPACK_IMPORTED_MODULE_0__["default"].findOne({
    where: {
      username: username,
      password: password
    }
  });
};
var getIfUserExistsByGoogleId = function getIfUserExistsByGoogleId(googleId) {
  return _schema__WEBPACK_IMPORTED_MODULE_0__["default"].findOne({
    where: {
      googleId: googleId
    }
  });
};
var registerNewUserByGoogleId = function registerNewUserByGoogleId(googleId) {
  return _schema__WEBPACK_IMPORTED_MODULE_0__["default"].create({
    googleId: googleId
  });
};

/***/ }),

/***/ "./src/models/users/schema.js":
/*!************************************!*\
  !*** ./src/models/users/schema.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _application_database__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../application/database */ "./src/application/database/index.js");


var _require = __webpack_require__(/*! sequelize */ "sequelize"),
    DataTypes = _require.DataTypes;

var User = _application_database__WEBPACK_IMPORTED_MODULE_0__["db"].define('user', {
  password: DataTypes.STRING,
  username: DataTypes.STRING,
  googleId: DataTypes.STRING
});
/* harmony default export */ __webpack_exports__["default"] = (User);

/***/ }),

/***/ "./src/utils/access.js":
/*!*****************************!*\
  !*** ./src/utils/access.js ***!
  \*****************************/
/*! exports provided: decodeToken, createToken, verifyToken */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decodeToken", function() { return decodeToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createToken", function() { return createToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "verifyToken", function() { return verifyToken; });
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);

var secret = 'secret';
var decodeToken = jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default.a.decode;
var createToken = function createToken(data) {
  return jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default.a.sign(data, secret);
};
var verifyToken = function verifyToken(token, callback) {
  return jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default.a.verify(token, secret, callback);
};

/***/ }),

/***/ "@babel/runtime/helpers/asyncToGenerator":
/*!**********************************************************!*\
  !*** external "@babel/runtime/helpers/asyncToGenerator" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/asyncToGenerator");

/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "sequelize":
/*!****************************!*\
  !*** external "sequelize" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("sequelize");

/***/ }),

/***/ "swagger-jsdoc":
/*!********************************!*\
  !*** external "swagger-jsdoc" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("swagger-jsdoc");

/***/ }),

/***/ "swagger-ui-express":
/*!*************************************!*\
  !*** external "swagger-ui-express" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("swagger-ui-express");

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map