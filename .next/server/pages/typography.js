"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/typography";
exports.ids = ["pages/typography"];
exports.modules = {

/***/ "./src/pages/typography.mdx":
/*!**********************************!*\
  !*** ./src/pages/typography.mdx ***!
  \**********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mdx-js/react */ \"@mdx-js/react\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__]);\n_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n/*@jsxRuntime automatic @jsxImportSource react*/ \n\nconst title = \"Typography\";\nconst description = \"On this page, we’ll dive into the different attachment endpoints you can use to manage attachments programmatically.\";\nconst sections = [\n    {\n        title: \"Headings\",\n        id: \"headings\",\n        ...undefined\n    },\n    {\n        title: \"Body\",\n        id: \"body\",\n        ...undefined\n    }\n];\nfunction _createMdxContent(props) {\n    const _components = Object.assign({\n        h1: \"h1\",\n        p: \"p\",\n        h2: \"h2\"\n    }, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.useMDXComponents)(), props.components);\n    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h1, {\n                children: \"Typography\"\n            }),\n            \"\\n\",\n            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                className: \"flex gap-10 mt-4\",\n                children: [\n                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                        className: \"flex flex-col\",\n                        children: [\n                            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                className: \"text-4xl text-coral\",\n                                children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {\n                                    children: \"Figtree\"\n                                })\n                            }),\n                            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                className: \"text-neutral-600\",\n                                children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {\n                                    children: \"Google fonts\"\n                                })\n                            })\n                        ]\n                    }),\n                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                        className: \"text-lg w-1/2 mt-2 text-coral font-medium\",\n                        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {\n                            children: \"AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSs\\nTtUuVvWwXxYyZz 0123456789\"\n                        })\n                    })\n                ]\n            }),\n            \"\\n\",\n            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {\n                id: \"headings\",\n                children: \"Headings\"\n            }),\n            \"\\n\",\n            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                className: \"grid grid-cols-3 max-w-5xl\",\n                children: [\n                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                        children: [\n                            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                className: \"uppercase text-xs font-bold text-neutral-500\",\n                                children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {\n                                    children: \"Name\"\n                                })\n                            }),\n                            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                className: \"text-5xl text-coral\",\n                                children: \"Heading 01\"\n                            }),\n                            \"\\n\",\n                            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                className: \"text-4xl text-coral\",\n                                children: \"Heading 02\"\n                            }),\n                            \"\\n\",\n                            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                className: \"text-3xl text-coral\",\n                                children: \"Heading 03\"\n                            }),\n                            \"\\n\",\n                            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                className: \"text-2xl text-coral\",\n                                children: \"Heading 04\"\n                            }),\n                            \"\\n\",\n                            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                className: \"text-xl text-coral\",\n                                children: \"Heading 05\"\n                            })\n                        ]\n                    }),\n                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                        children: [\n                            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                className: \"uppercase text-xs font-bold text-neutral-500\",\n                                children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {\n                                    children: \"Fontsize\"\n                                })\n                            }),\n                            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                className: \"text-5xl text-neutral-700\",\n                                children: \"48px\"\n                            }),\n                            \"\\n\",\n                            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                className: \"text-4xl text-neutral-700\",\n                                children: \"36px\"\n                            }),\n                            \"\\n\",\n                            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                className: \"text-3xl text-neutral-700\",\n                                children: \"24px\"\n                            }),\n                            \"\\n\",\n                            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                className: \"text-2xl text-neutral-700\",\n                                children: \"21px\"\n                            }),\n                            \"\\n\",\n                            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                className: \"text-xl text-neutral-700\",\n                                children: \"12px\"\n                            })\n                        ]\n                    }),\n                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                        children: [\n                            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                className: \"uppercase text-xs font-bold text-neutral-500\",\n                                children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {\n                                    children: \"Lineheight\"\n                                })\n                            }),\n                            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                className: \"text-5xl text-neutral-700\",\n                                children: \"125%\"\n                            }),\n                            \"\\n\",\n                            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                className: \"text-4xl text-neutral-700\",\n                                children: \"125%\"\n                            }),\n                            \"\\n\",\n                            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                className: \"text-3xl text-neutral-700\",\n                                children: \"150%\"\n                            }),\n                            \"\\n\",\n                            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                className: \"text-2xl text-neutral-700\",\n                                children: \"150%\"\n                            }),\n                            \"\\n\",\n                            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                className: \"text-xl text-neutral-700\",\n                                children: \"150%\"\n                            })\n                        ]\n                    })\n                ]\n            }),\n            \"\\n\",\n            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {\n                id: \"body\",\n                children: \"Body\"\n            }),\n            \"\\n\",\n            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                className: \"grid grid-cols-3 max-w-5xl\",\n                children: [\n                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                        children: [\n                            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                className: \"uppercase text-xs font-bold text-neutral-500\",\n                                children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {\n                                    children: \"Name\"\n                                })\n                            }),\n                            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                className: \"text-coral\",\n                                children: \"Paragraph\"\n                            }),\n                            \"\\n\",\n                            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                className: \"text-coral text-sm\",\n                                children: \"Paragraph small\"\n                            }),\n                            \"\\n\",\n                            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                className: \"text-coral text-xs\",\n                                children: \"Paragraph extra small\"\n                            }),\n                            \"\\n\",\n                            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                className: \"text-coral underline\",\n                                children: \"Link\"\n                            }),\n                            \"\\n\",\n                            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                className: \"text-coral italic\",\n                                children: \"Blockquote\"\n                            })\n                        ]\n                    }),\n                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                        children: [\n                            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                className: \"uppercase text-xs font-bold text-neutral-500\",\n                                children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {\n                                    children: \"Fontsize\"\n                                })\n                            }),\n                            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                className: \"text-neutral-700 font-medium\",\n                                children: \"48px\"\n                            }),\n                            \"\\n\",\n                            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                className: \"text-neutral-700 font-medium\",\n                                children: \"36px\"\n                            }),\n                            \"\\n\",\n                            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                className: \"text-neutral-700 font-medium\",\n                                children: \"24px\"\n                            }),\n                            \"\\n\",\n                            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                className: \"text-neutral-700 font-medium\",\n                                children: \"21px\"\n                            }),\n                            \"\\n\",\n                            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                className: \"text-neutral-700 font-medium\",\n                                children: \"12px\"\n                            })\n                        ]\n                    }),\n                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                        children: [\n                            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                className: \"uppercase text-xs font-bold text-neutral-500\",\n                                children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {\n                                    children: \"Lineheight\"\n                                })\n                            }),\n                            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                className: \"text-neutral-700 font-medium\",\n                                children: \"160%\"\n                            }),\n                            \"\\n\",\n                            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                className: \"text-neutral-700 font-medium\",\n                                children: \"150%\"\n                            }),\n                            \"\\n\",\n                            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                className: \"text-neutral-700 font-medium\",\n                                children: \"150%\"\n                            }),\n                            \"\\n\",\n                            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                className: \"text-neutral-700 font-medium\",\n                                children: \"160%\"\n                            }),\n                            \"\\n\",\n                            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                className: \"text-neutral-700 font-medium\",\n                                children: \"175%\"\n                            })\n                        ]\n                    })\n                ]\n            })\n        ]\n    });\n}\nfunction MDXContent(props = {}) {\n    const { wrapper: MDXLayout  } = Object.assign({}, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.useMDXComponents)(), props.components);\n    return MDXLayout ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(MDXLayout, Object.assign({}, props, {\n        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_createMdxContent, props)\n    })) : _createMdxContent(props);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MDXContent);\nconst getStaticProps = ()=>({\n        props: JSON.parse(JSON.stringify({\n            _provideComponents: _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.useMDXComponents,\n            description,\n            sections,\n            title\n        }))\n    });\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvdHlwb2dyYXBoeS5tZHguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7TUFBYUEsY0FDVDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFFRjs7Ozs7Ozs7Ozs7OzhDQUtVOzs7Ozs7OENBR0E7Ozs7Ozs7O3NDQUlKOzs7Ozs7OzswQkFLTDs7Ozs7Ozs7Ozs7OENBS1M7Ozs7OzBDQUVpQzs7NEJBQWdCOzRCQUFBQyxzREFBQUEsQ0FBQTs7MENBQ2hCOzs0QkFBZ0I7NEJBQUFBLHNEQUFBQSxDQUFBOzswQ0FDaEI7OzRCQUFnQjs0QkFBQUEsc0RBQUFBLENBQUE7OzBDQUNoQjs7NEJBQWdCOzRCQUFBQSxzREFBQUEsQ0FBQTs7MENBQ2pCOzs7Ozs7Ozs7OENBSWhDOzs7OzswQ0FFdUM7OzRCQUFVOzRCQUFBQSxzREFBQUEsQ0FBQTs7MENBQ1Y7OzRCQUFVOzRCQUFBQSxzREFBQUEsQ0FBQTs7MENBQ1Y7OzRCQUFVOzRCQUFBQSxzREFBQUEsQ0FBQTs7MENBQ1Y7OzRCQUFVOzRCQUFBQSxzREFBQUEsQ0FBQTs7MENBQ1g7Ozs7Ozs7Ozs4Q0FJdEM7Ozs7OzBDQUV1Qzs7NEJBQVU7NEJBQUFBLHNEQUFBQSxDQUFBOzswQ0FDVjs7NEJBQVU7NEJBQUFBLHNEQUFBQSxDQUFBOzswQ0FDVjs7NEJBQVU7NEJBQUFBLHNEQUFBQSxDQUFBOzswQ0FDVjs7NEJBQVU7NEJBQUFBLHNEQUFBQSxDQUFBOzswQ0FDWDs7Ozs7Ozs7OzBCQUkvQzs7Ozs7Ozs7Ozs7OENBS1M7Ozs7OzBDQUV3Qjs7NEJBQWU7NEJBQUFBLHNEQUFBQSxDQUFBOzswQ0FDUDs7NEJBQXFCOzRCQUFBQSxzREFBQUEsQ0FBQTs7MENBQ3JCOzs0QkFBMkI7NEJBQUFBLHNEQUFBQSxDQUFBOzswQ0FDekI7OzRCQUFVOzRCQUFBQSxzREFBQUEsQ0FBQTs7MENBQ2I7Ozs7Ozs7Ozs4Q0FJL0I7Ozs7OzBDQUUwQzs7NEJBQVU7NEJBQUFBLHNEQUFBQSxDQUFBOzswQ0FDVjs7NEJBQVU7NEJBQUFBLHNEQUFBQSxDQUFBOzswQ0FDVjs7NEJBQVU7NEJBQUFBLHNEQUFBQSxDQUFBOzswQ0FDVjs7NEJBQVU7NEJBQUFBLHNEQUFBQSxDQUFBOzswQ0FDVjs7Ozs7Ozs7OzhDQUkxQzs7Ozs7MENBRTBDOzs0QkFBVTs0QkFBQUEsc0RBQUFBLENBQUE7OzBDQUNWOzs0QkFBVTs0QkFBQUEsc0RBQUFBLENBQUE7OzBDQUNWOzs0QkFBVTs0QkFBQUEsc0RBQUFBLENBQUE7OzBDQUNWOzs0QkFBVTs0QkFBQUEsc0RBQUFBLENBQUE7OzBDQUNWIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGFpbHdpbmR1aS1wcm90b2NvbC8uL3NyYy9wYWdlcy90eXBvZ3JhcGh5Lm1keD8xYWI4Il0sIm5hbWVzIjpbImRlc2NyaXB0aW9uIiwiX2pzeCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/typography.mdx\n");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "@mdx-js/react":
/*!********************************!*\
  !*** external "@mdx-js/react" ***!
  \********************************/
/***/ ((module) => {

module.exports = import("@mdx-js/react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/typography.mdx"));
module.exports = __webpack_exports__;

})();