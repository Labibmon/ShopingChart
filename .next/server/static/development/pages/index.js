module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/component/CarouselComp.js":
/*!*****************************************!*\
  !*** ./pages/component/CarouselComp.js ***!
  \*****************************************/
/*! exports provided: CarouselComp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselComp", function() { return CarouselComp; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\Sirclo Officially\\develop\\ShopingChart\\pages\\component\\CarouselComp.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const items = [{
  src: 'https://picsum.photos/id/1059/1500/800',
  altText: 'Slide 1',
  caption: 'Slide 1'
}, {
  src: 'https://picsum.photos/id/26/1500/500',
  altText: 'Slide 2',
  caption: 'Slide 2'
}, {
  src: 'https://picsum.photos/id/1025/1500/1000',
  altText: 'Slide 3',
  caption: 'Slide 3'
}];
const CarouselComp = () => {
  const {
    0: activeIndex,
    1: setActiveIndex
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const {
    0: animating,
    1: setAnimating
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = newIndex => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map(item => {
    return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CarouselItem"], {
      className: "caraousel-home",
      onExiting: () => setAnimating(true),
      onExited: () => setAnimating(false),
      key: item.src,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: undefined
    }, __jsx("img", {
      src: item.src,
      alt: item.altText,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: undefined
    }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CarouselCaption"], {
      captionText: item.caption,
      captionHeader: item.caption,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: undefined
    }));
  });
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: undefined
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Carousel"], {
    activeIndex: activeIndex,
    next: next,
    previous: previous,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: undefined
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CarouselIndicators"], {
    items: items,
    activeIndex: activeIndex,
    onClickHandler: goToIndex,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: undefined
  }), slides, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CarouselControl"], {
    direction: "prev",
    directionText: "Previous",
    onClickHandler: previous,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: undefined
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CarouselControl"], {
    direction: "next",
    directionText: "Next",
    onClickHandler: next,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: undefined
  })));
};

/***/ }),

/***/ "./pages/component/HeadTag.js":
/*!************************************!*\
  !*** ./pages/component/HeadTag.js ***!
  \************************************/
/*! exports provided: HeadTag */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeadTag", function() { return HeadTag; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\Sirclo Officially\\develop\\ShopingChart\\pages\\component\\HeadTag.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const HeadTag = () => {
  return __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  }, __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, "Hello"), __jsx("link", {
    rel: "stylesheet",
    href: "https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css",
    integrity: "sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T",
    crossOrigin: "anonymous",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }), __jsx("link", {
    rel: "stylesheet",
    href: "//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }));
};

/***/ }),

/***/ "./pages/component/NavbarComp.js":
/*!***************************************!*\
  !*** ./pages/component/NavbarComp.js ***!
  \***************************************/
/*! exports provided: NavbarComp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComp", function() { return NavbarComp; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "D:\\Sirclo Officially\\develop\\ShopingChart\\pages\\component\\NavbarComp.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const NavbarComp = () => {
  const {
    0: isOpen,
    1: setIsOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const toggle = () => setIsOpen(!isOpen);

  return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Navbar"], {
    color: "light",
    light: true,
    expand: "md",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavbarBrand"], {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, "Brand Logo"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavbarToggler"], {
    onClick: toggle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Collapse"], {
    isOpen: isOpen,
    navbar: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Nav"], {
    className: "mr-auto",
    navbar: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavItem"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }, "Home")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavItem"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }, "About")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["UncontrolledDropdown"], {
    nav: true,
    inNavbar: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["DropdownToggle"], {
    nav: true,
    caret: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }, "Shope"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["DropdownMenu"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["DropdownItem"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  }, "Man"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["DropdownItem"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: undefined
  }, "Woman"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["DropdownItem"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  }, "All")))), __jsx("div", {
    className: "d-flex",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: undefined
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    className: "mr-3",
    size: "mini",
    icon: "search",
    placeholder: "Search...",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: undefined
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    size: "sm",
    color: "primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: undefined
  }, "Login"))));
};

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/styles.scss */ "./styles/styles.scss");
/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_styles_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _component_HeadTag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component/HeadTag */ "./pages/component/HeadTag.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _component_NavbarComp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./component/NavbarComp */ "./pages/component/NavbarComp.js");
/* harmony import */ var _component_CarouselComp__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./component/CarouselComp */ "./pages/component/CarouselComp.js");
var _jsxFileName = "D:\\Sirclo Officially\\develop\\ShopingChart\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







class Index extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    const {
      router
    } = this.props;
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_component_HeadTag__WEBPACK_IMPORTED_MODULE_3__["HeadTag"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }), __jsx(_component_NavbarComp__WEBPACK_IMPORTED_MODULE_5__["NavbarComp"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Container"], {
      className: "w-100 py-3",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, __jsx(_component_CarouselComp__WEBPACK_IMPORTED_MODULE_6__["CarouselComp"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }), __jsx("div", {
      className: "card-promo",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, __jsx("img", {
      className: "my-3",
      src: "https://fibercreme.com/wp-content/uploads/2019/05/banner-dummy-JKN.jpg",
      alt: "banner-promo",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Card"], {
      href: "#card-example-link-card",
      header: "Elliot Baker",
      meta: "Friend",
      description: "Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(Index));

/***/ }),

/***/ "./styles/styles.scss":
/*!****************************!*\
  !*** ./styles/styles.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Sirclo Officially\develop\ShopingChart\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "reactstrap":
/*!*****************************!*\
  !*** external "reactstrap" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ }),

/***/ "semantic-ui-react":
/*!************************************!*\
  !*** external "semantic-ui-react" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map