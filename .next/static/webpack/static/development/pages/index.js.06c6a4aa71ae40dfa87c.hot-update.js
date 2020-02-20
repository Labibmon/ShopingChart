webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/component/CarouselComp.js":
/*!*****************************************!*\
  !*** ./pages/component/CarouselComp.js ***!
  \*****************************************/
/*! exports provided: CarouselComp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselComp", function() { return CarouselComp; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
var _jsxFileName = "D:\\Sirclo Officially\\develop\\ShopingChart\\pages\\component\\CarouselComp.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var items = [{
  src: 'https://picsum.photos/seed/picsum/3000/1000',
  altText: 'Slide 1',
  caption: 'Slide 1'
}, {
  src: 'https://picsum.photos/id/237/3000',
  altText: 'Slide 2',
  caption: 'Slide 2'
}, {
  src: 'https://picsum.photos/seed/picsum/3000/1000',
  altText: 'Slide 3',
  caption: 'Slide 3'
}];
var CarouselComp = function CarouselComp() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      activeIndex = _useState[0],
      setActiveIndex = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      animating = _useState2[0],
      setAnimating = _useState2[1];

  var next = function next() {
    if (animating) return;
    var nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  var previous = function previous() {
    if (animating) return;
    var nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  var goToIndex = function goToIndex(newIndex) {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  var slides = items.map(function (item) {
    return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CarouselItem"], {
      className: "caraousel-home",
      onExiting: function onExiting() {
        return setAnimating(true);
      },
      onExited: function onExited() {
        return setAnimating(false);
      },
      key: item.src,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, __jsx("img", {
      src: item.src,
      alt: item.altText,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CarouselCaption"], {
      captionText: item.caption,
      captionHeader: item.caption,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }));
  });
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Carousel"], {
    activeIndex: activeIndex,
    next: next,
    previous: previous,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CarouselIndicators"], {
    items: items,
    activeIndex: activeIndex,
    onClickHandler: goToIndex,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }), slides, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CarouselControl"], {
    direction: "prev",
    directionText: "Previous",
    onClickHandler: previous,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CarouselControl"], {
    direction: "next",
    directionText: "Next",
    onClickHandler: next,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  })));
};

/***/ })

})
//# sourceMappingURL=index.js.06c6a4aa71ae40dfa87c.hot-update.js.map