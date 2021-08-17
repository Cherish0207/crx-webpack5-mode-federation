"use strict";
(self["webpackChunkhost"] = self["webpackChunkhost"] || []).push([
  ["src_bootstrap_js"],
  {
    "./src/App.js": (module, exports, require) => {
      require.r(exports);
      require.d(exports, {
        default: () => DEFAULT_EXPORT,
      });
      var react__WEBPACK_IMPORTED_MODULE_0__ = require("./node_modules/react/index.js");
      var _Slides__WEBPACK_IMPORTED_MODULE_1__ = require("./src/Slides.js");
      const RemoteNewsList =
        /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.lazy(() =>
          require
            .e("webpack_container_remote_remote_NewsList")
            .then(
              require.t.bind(
                require,
                "webpack/container/remote/remote/NewsList",
                23
              )
            )
        );
      const App = () =>
        /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
          "div",
          null,
          /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            "h2",
            null,
            "\u672C\u5730\u7EC4\u4EF6Slides, \u8FDC\u7A0B\u7EC4\u4EF6NewsList"
          ),
          /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            _Slides__WEBPACK_IMPORTED_MODULE_1__.default,
            null
          ),
          /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            react__WEBPACK_IMPORTED_MODULE_0__.Suspense,
            {
              fallback: "Loading NewsList",
            },
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              RemoteNewsList,
              null
            )
          )
        );
      const DEFAULT_EXPORT = App;
    },
    "./src/Slides.js": (module, exports, require) => {
      require.r(exports);
      require.d(exports, {
        default: () => DEFAULT_EXPORT,
      });
      var react__WEBPACK_IMPORTED_MODULE_0__ = require("./node_modules/react/index.js");
      const DEFAULT_EXPORT = () =>
        /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
          "div",
          null,
          "\u8F6E\u64AD\u56FE"
        );
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
