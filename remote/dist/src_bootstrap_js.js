"use strict";
(self["webpackChunkremote"] = self["webpackChunkremote"] || []).push([
  ["src_bootstrap_js"],
  {
    "./src/App.js": (module, exports, require) => {
      require.r(exports);
      require.d(exports, {
        default: () => DEFAULT_EXPORT,
      });
      var react__WEBPACK_IMPORTED_MODULE_0__ = require("./node_modules/react/index.js");
      var _NewsList__WEBPACK_IMPORTED_MODULE_1__ = require("./src/NewsList.js");
      const App = () =>
        /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
          "div",
          null,
          /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            "h1",
            null,
            "\u672C\u5730\u7EC4\u4EF6newsList"
          ),
          /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            _NewsList__WEBPACK_IMPORTED_MODULE_1__.default,
            null
          )
        );
      const DEFAULT_EXPORT = App;
    },
    "./src/NewsList.js": (module, exports, require) => {
      require.r(exports);
      require.d(exports, {
        default: () => DEFAULT_EXPORT,
      });
      var react__WEBPACK_IMPORTED_MODULE_0__ = require("./node_modules/react/index.js");
      const NewsList = () =>
        /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
          "div",
          null,
          "NewsList"
        );
      const DEFAULT_EXPORT = NewsList;
    },
    "./src/bootstrap.js": (module, exports, require) => {
      require.r(exports);
      var react__WEBPACK_IMPORTED_MODULE_0__ = require("./node_modules/react/index.js");
      var react_dom__WEBPACK_IMPORTED_MODULE_1__ = require("./node_modules/react-dom/index.js");
      var _App__WEBPACK_IMPORTED_MODULE_2__ = require("./src/App.js");
      react_dom__WEBPACK_IMPORTED_MODULE_1__.render(
        /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
          _App__WEBPACK_IMPORTED_MODULE_2__.default,
          null
        ),
        root
      );
    },
  },
]);
