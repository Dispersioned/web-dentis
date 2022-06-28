"use strict";
self["webpackHotUpdategatsby_starter_netlify_cms"]("cms",{

/***/ "./src/components/ui/header-burger/style.js":
/*!**************************************************!*\
  !*** ./src/components/ui/header-burger/style.js ***!
  \**************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Body": function() { return /* binding */ Body; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteralLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteralLoose */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteralLoose.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/styles/styled.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/gatsby/dist/utils/fast-refresh-module.js */ "./node_modules/gatsby/dist/utils/fast-refresh-module.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.id);



var _templateObject;


var Body = (0,_mui_material__WEBPACK_IMPORTED_MODULE_1__["default"])('div')(_templateObject || (_templateObject = (0,_babel_runtime_helpers_esm_taggedTemplateLiteralLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: block;\n  width: 50px;\n  height: 50px;\n  position: relative;\n  cursor: pointer;\n  grid-template-columns: 1/2;\n  z-index: 1000;\n\n  &::before,\n  &::after,\n  span {\n    position: absolute;\n    display: block;\n    width: 35px;\n    height: 2px;\n    background-color: ", ";\n    border-radius: 5px;\n    left: 50%;\n    transition: all 0.3s ease;\n  }\n\n  &::before,\n  &::after {\n    content: '';\n  }\n\n  &::before {\n    top: ", ";\n    transform: ", ";\n  }\n\n  span {\n    left: 50%;\n    top: 50%;\n    transform: ", ";\n  }\n\n  &::after {\n    bottom: ", ";\n    transform: ", ";\n  }\n"])), function (props) {
  return props.theme.palette.primary.main;
}, function (props) {
  return props.active ? 'calc(50% - 2px)' : '20%';
}, function (props) {
  return props.active ? 'translate(-50%, 50%) rotate(45deg)' : 'translate(-50%, 50%)';
}, function (props) {
  return props.active ? 'translate(-50%, -50%) rotate(45deg)' : 'translate(-50%, -50%)';
}, function (props) {
  return props.active ? 'calc(50% - 2px)' : '20%';
}, function (props) {
  return props.active ? 'translate(-50%, -50%) rotate(135deg)' : 'translate(-50%, -50%)';
});

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
/******/ 	__webpack_require__.h = function() { return "a3e21290462fe9523baf"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=cms.588cabf4f9022be1b33d.hot-update.js.map