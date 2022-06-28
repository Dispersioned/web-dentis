"use strict";
self["webpackHotUpdategatsby_starter_netlify_cms"]("cms",{

/***/ "./src/components/ui/header/Header.jsx":
/*!*********************************************!*\
  !*** ./src/components/ui/header/Header.jsx ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Button/Button.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _img_dentis_logo_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../img/dentis/logo.svg */ "./src/img/dentis/logo.svg");
/* harmony import */ var _header_navigation_HeaderNavigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../header-navigation/HeaderNavigation */ "./src/components/ui/header-navigation/HeaderNavigation.jsx");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style */ "./src/components/ui/header/style.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/gatsby/dist/utils/fast-refresh-module.js */ "./node_modules/gatsby/dist/utils/fast-refresh-module.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.id);

var _jsxFileName = "E:\\Work\\web-dentis\\src\\components\\ui\\header\\Header.jsx",
    _this = undefined,
    _s = __webpack_require__.$Refresh$.signature();








var Header = function Header() {
  _s();

  var navLinks = [{
    text: 'О нас',
    to: '/about-us'
  }, {
    text: 'Наши врачи',
    to: '/specialists'
  }, {
    text: 'Услуги и цены',
    to: '/prices'
  }, {
    text: 'Акции',
    to: '/offers'
  }, {
    text: 'Фотогалерея',
    to: '/photos'
  }, {
    text: 'Документы',
    to: '/documents'
  }];

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      isMobile = _useState[0],
      setIsMobile = _useState[1];

  useEffect(function () {
    window.addEventListener('resize', function () {
      setisMobile(window.innerWidth <= 1400);
    });
    return function () {
      window.removeEventListener('resize');
    };
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_style__WEBPACK_IMPORTED_MODULE_4__.Wrapper, {
    position: "sticky",
    top: 0,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_style__WEBPACK_IMPORTED_MODULE_4__.Content, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_0__.Link, {
    to: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_style__WEBPACK_IMPORTED_MODULE_4__.Logo, {
    src: _img_dentis_logo_svg__WEBPACK_IMPORTED_MODULE_2__["default"],
    alt: "logo",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 11
    }
  })), !isMobile && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_header_navigation_HeaderNavigation__WEBPACK_IMPORTED_MODULE_3__["default"], {
    items: navLinks,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 23
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    variant: "text",
    href: "tel:+79385058423",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    fontSize: 20,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }
  }, "+7 (938) 505 84 23")), "]", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    variant: "contained",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    fontSize: 20,
    fontWeight: "bold",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }
  }, "\u0417\u0430\u043F\u0438\u0441\u0430\u0442\u044C\u0441\u044F"))), isMobile && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_header_navigation_HeaderNavigation__WEBPACK_IMPORTED_MODULE_3__["default"], {
    items: navLinks,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 22
    }
  })));
};

_s(Header, "0VTTNJATKABQPGLm9RVT0tKGUgU=");

_c = Header;
/* harmony default export */ __webpack_exports__["default"] = (Header);

var _c;

__webpack_require__.$Refresh$.register(_c, "Header");

const currentExports = __react_refresh_utils__.getModuleExports(module.id);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.id);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.id].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "9db4e0e48a9053ea6752"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=cms.79e7b03c6315ae9edc8e.hot-update.js.map