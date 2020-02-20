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
  src: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa20%20text%20%7B%20fill%3A%23444%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa20%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23666%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22247.3203125%22%20y%3D%22218.3%22%3ESecond%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
  altText: 'Slide 2',
  caption: 'Slide 2'
}, {
  src: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa21%20text%20%7B%20fill%3A%23333%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa21%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23555%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22277%22%20y%3D%22218.3%22%3EThird%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
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
        lineNumber: 55
      },
      __self: this
    }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CarouselCaption"], {
      captionText: item.caption,
      captionHeader: item.caption,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }));
  });
  return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Carousel"], {
    activeIndex: activeIndex,
    next: next,
    previous: previous,
    style: {
      width: '100%'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CarouselIndicators"], {
    items: items,
    activeIndex: activeIndex,
    onClickHandler: goToIndex,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }), slides, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CarouselControl"], {
    direction: "prev",
    directionText: "Previous",
    onClickHandler: previous,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CarouselControl"], {
    direction: "next",
    directionText: "Next",
    onClickHandler: next,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }));
};

/***/ })

})
//# sourceMappingURL=index.js.6e72917f4eb23a5f82f2.hot-update.js.map