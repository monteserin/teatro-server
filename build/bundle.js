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

/***/ "./src/config/database.js":
/*!********************************!*\
  !*** ./src/config/database.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'teatro-server',
  connectionLimit: 10
});

/***/ }),

/***/ "./src/config/swagger.js":
/*!*******************************!*\
  !*** ./src/config/swagger.js ***!
  \*******************************/
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

/***/ "./src/controllers/api/auth/index.js":
/*!*******************************************!*\
  !*** ./src/controllers/api/auth/index.js ***!
  \*******************************************/
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
/* harmony import */ var _Utils_access__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @Utils/access */ "./src/utils/access.js");
/* harmony import */ var _Middlwares_error_handler__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @Middlwares/error-handler */ "./src/middlewares/error-handler.js");






var router = express__WEBPACK_IMPORTED_MODULE_2___default.a.Router();
router.post("/login", Object(_Middlwares_error_handler__WEBPACK_IMPORTED_MODULE_5__["asyncHandler"])( /*#__PURE__*/function () {
  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(req, res) {
    var mail, pass, user, token;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            mail = req.body.mail;
            pass = req.body.pass;

            if (!(!mail || !pass)) {
              _context.next = 4;
              break;
            }

            return _context.abrupt("return", res.send(400));

          case 4:
            _context.next = 6;
            return _Models_users__WEBPACK_IMPORTED_MODULE_3__["getUserByEmailAndPassword"](mail, pass);

          case 6:
            user = _context.sent;

            if (user) {
              _context.next = 9;
              break;
            }

            return _context.abrupt("return", res.sendStatus(403));

          case 9:
            token = Object(_Utils_access__WEBPACK_IMPORTED_MODULE_4__["createToken"])({
              id: user.id
            });
            res.send(token);

          case 11:
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
/* harmony default export */ __webpack_exports__["default"] = (router);

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
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth */ "./src/controllers/api/auth/index.js");
/* harmony import */ var _plays__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./plays */ "./src/controllers/api/plays/index.js");



/* harmony default export */ __webpack_exports__["default"] = (function (app) {
  // Public
  app.use('/auth', _auth__WEBPACK_IMPORTED_MODULE_1__["default"]);
  app.use('/plays', _plays__WEBPACK_IMPORTED_MODULE_2__["default"]); // Private

  app.use('/users', _users__WEBPACK_IMPORTED_MODULE_0__["default"]);
  app.use('/', function (req, res) {
    return res.send("Working like a charm \u0669(^\u203F^)\u06F6");
  });
});

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
/* harmony import */ var _Middlwares_error_handler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @Middlwares/error-handler */ "./src/middlewares/error-handler.js");
/* harmony import */ var _Middlwares_restricted_access__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @Middlwares/restricted-access */ "./src/middlewares/restricted-access.js");






var router = express__WEBPACK_IMPORTED_MODULE_2___default.a.Router();
router.get("/restricted-path", _Middlwares_restricted_access__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_Middlwares_error_handler__WEBPACK_IMPORTED_MODULE_4__["asyncHandler"])( /*#__PURE__*/function () {
  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(req, res) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            res.send("User id: ".concat(req.userId));

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
router.post("/create", Object(_Middlwares_error_handler__WEBPACK_IMPORTED_MODULE_4__["asyncHandler"])( /*#__PURE__*/function () {
  var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(req, res) {
    var mail, pass;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            mail = req.body.mail;
            pass = req.body.pass;
            _context2.next = 4;
            return _Models_plays__WEBPACK_IMPORTED_MODULE_3__["createPlay"](mail, pass);

          case 4:
            res.send('Play creado con éxito');

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
router["delete"]("/:id", _Middlwares_restricted_access__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_Middlwares_error_handler__WEBPACK_IMPORTED_MODULE_4__["asyncHandler"])( /*#__PURE__*/function () {
  var _ref3 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(req, res) {
    var id;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            id = req.params.id;
            _context3.next = 3;
            return _Models_plays__WEBPACK_IMPORTED_MODULE_3__["deletePlay"](id);

          case 3:
            res.send("Play id: ".concat(id, " deleted"));

          case 4:
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
router.patch("/:id", _Middlwares_restricted_access__WEBPACK_IMPORTED_MODULE_5__["default"], /*#__PURE__*/function () {
  var _ref4 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(req, res) {
    var id, body;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            id = req.params.id, body = req.body;
            _context4.next = 3;
            return _Models_plays__WEBPACK_IMPORTED_MODULE_3__["updatePlay"](id, body);

          case 3:
            res.send("Play id: ".concat(id, " updated"));

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
/* harmony import */ var _Middlwares_error_handler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @Middlwares/error-handler */ "./src/middlewares/error-handler.js");
/* harmony import */ var _Middlwares_restricted_access__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @Middlwares/restricted-access */ "./src/middlewares/restricted-access.js");






var router = express__WEBPACK_IMPORTED_MODULE_2___default.a.Router();
router.get("/rqr", Object(_Middlwares_error_handler__WEBPACK_IMPORTED_MODULE_4__["asyncHandler"])( /*#__PURE__*/function () {
  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(req, res) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            res.send("User id:");

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
router.get("/restricted-path", _Middlwares_restricted_access__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_Middlwares_error_handler__WEBPACK_IMPORTED_MODULE_4__["asyncHandler"])( /*#__PURE__*/function () {
  var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(req, res) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            res.send("User id: ".concat(req.userId));

          case 1:
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
router.post("/create", Object(_Middlwares_error_handler__WEBPACK_IMPORTED_MODULE_4__["asyncHandler"])( /*#__PURE__*/function () {
  var _ref3 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(req, res) {
    var mail, pass;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            mail = req.body.mail;
            pass = req.body.pass;
            _context3.next = 4;
            return _Models_users__WEBPACK_IMPORTED_MODULE_3__["createUser"](mail, pass);

          case 4:
            res.send('Usuario creado con éxito');

          case 5:
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
router["delete"]("/:id", _Middlwares_restricted_access__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_Middlwares_error_handler__WEBPACK_IMPORTED_MODULE_4__["asyncHandler"])( /*#__PURE__*/function () {
  var _ref4 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(req, res) {
    var id;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            id = req.params.id;
            _context4.next = 3;
            return _Models_users__WEBPACK_IMPORTED_MODULE_3__["deleteUser"](id);

          case 3:
            res.send("User id: ".concat(id, " deleted"));

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
            return _Models_users__WEBPACK_IMPORTED_MODULE_3__["updateUser"](id, body);

          case 3:
            res.send("User id: ".concat(id, " updated"));

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

/***/ "./src/database/index.js":
/*!*******************************!*\
  !*** ./src/database/index.js ***!
  \*******************************/
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
/* harmony import */ var _config_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config/database */ "./src/config/database.js");




var database = _config_database__WEBPACK_IMPORTED_MODULE_3__["default"].database,
    user = _config_database__WEBPACK_IMPORTED_MODULE_3__["default"].user,
    password = _config_database__WEBPACK_IMPORTED_MODULE_3__["default"].password,
    host = _config_database__WEBPACK_IMPORTED_MODULE_3__["default"].host;
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
            db.sync();
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

/***/ "./src/documentation/index.js":
/*!************************************!*\
  !*** ./src/documentation/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swagger_jsdoc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swagger-jsdoc */ "swagger-jsdoc");
/* harmony import */ var swagger_jsdoc__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(swagger_jsdoc__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var swagger_ui_express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swagger-ui-express */ "swagger-ui-express");
/* harmony import */ var swagger_ui_express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(swagger_ui_express__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config_swagger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config/swagger */ "./src/config/swagger.js");




var Documentation = function Documentation(app) {
  // JSON of specs
  var swaggerSpec = swagger_jsdoc__WEBPACK_IMPORTED_MODULE_0___default()(_config_swagger__WEBPACK_IMPORTED_MODULE_2__["swaggerConfig"]); // Api entrypoint

  app.use("/docs", swagger_ui_express__WEBPACK_IMPORTED_MODULE_1___default.a.serve, swagger_ui_express__WEBPACK_IMPORTED_MODULE_1___default.a.setup(swaggerSpec));
};

/* harmony default export */ __webpack_exports__["default"] = (Documentation);

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
/* harmony import */ var _middlewares__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./middlewares */ "./src/middlewares/index.js");
/* harmony import */ var _controllers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./controllers */ "./src/controllers/index.js");
/* harmony import */ var _documentation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./documentation */ "./src/documentation/index.js");
/* harmony import */ var _database__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./database */ "./src/database/index.js");
/* harmony import */ var _Middlwares_error_handler__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @Middlwares/error-handler */ "./src/middlewares/error-handler.js");









var app = express__WEBPACK_IMPORTED_MODULE_2___default()();
var router = express__WEBPACK_IMPORTED_MODULE_2___default.a.Router();
/*
Heroku utiliza la variable de entorno process.env.port para asignar el puerto donde se va ejecutar el servidor,
por eso la hemos definido en esta plantilla
*/

var port = process.env.PORT || 3005;
Object(_documentation__WEBPACK_IMPORTED_MODULE_6__["default"])(app);
Object(_middlewares__WEBPACK_IMPORTED_MODULE_4__["default"])(app);
Object(_controllers__WEBPACK_IMPORTED_MODULE_5__["default"])(app);
Object(_database__WEBPACK_IMPORTED_MODULE_7__["default"])(function () {
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

/***/ "./src/middlewares/error-handler.js":
/*!******************************************!*\
  !*** ./src/middlewares/error-handler.js ***!
  \******************************************/
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

/***/ "./src/middlewares/index.js":
/*!**********************************!*\
  !*** ./src/middlewares/index.js ***!
  \**********************************/
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

/***/ "./src/middlewares/restricted-access.js":
/*!**********************************************!*\
  !*** ./src/middlewares/restricted-access.js ***!
  \**********************************************/
/*! exports provided: getHeader, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHeader", function() { return getHeader; });
/* harmony import */ var _utils_access__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/access */ "./src/utils/access.js");

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

/***/ "./src/models/plays/index.js":
/*!***********************************!*\
  !*** ./src/models/plays/index.js ***!
  \***********************************/
/*! exports provided: createPlay, updatePlay, deletePlay */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPlay", function() { return createPlay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updatePlay", function() { return updatePlay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deletePlay", function() { return deletePlay; });
/* harmony import */ var _schema__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./schema */ "./src/models/plays/schema.js");

var createPlay = function createPlay(name) {
  return _schema__WEBPACK_IMPORTED_MODULE_0__["default"].create({
    name: name
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
  return UserSchema.destroy({
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
/* harmony import */ var _database__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../database */ "./src/database/index.js");


var _require = __webpack_require__(/*! sequelize */ "sequelize"),
    DataTypes = _require.DataTypes;

var Play = _database__WEBPACK_IMPORTED_MODULE_0__["db"].define('play', {
  name: DataTypes.STRING,
  userId: DataTypes.INTEGER
});
/* harmony default export */ __webpack_exports__["default"] = (Play);

/***/ }),

/***/ "./src/models/users/index.js":
/*!***********************************!*\
  !*** ./src/models/users/index.js ***!
  \***********************************/
/*! exports provided: createUser, updateUser, deleteUser, getUserByEmailAndPassword */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createUser", function() { return createUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateUser", function() { return updateUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteUser", function() { return deleteUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserByEmailAndPassword", function() { return getUserByEmailAndPassword; });
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

/***/ }),

/***/ "./src/models/users/schema.js":
/*!************************************!*\
  !*** ./src/models/users/schema.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _database__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../database */ "./src/database/index.js");


var _require = __webpack_require__(/*! sequelize */ "sequelize"),
    DataTypes = _require.DataTypes;

var User = _database__WEBPACK_IMPORTED_MODULE_0__["db"].define('user', {
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