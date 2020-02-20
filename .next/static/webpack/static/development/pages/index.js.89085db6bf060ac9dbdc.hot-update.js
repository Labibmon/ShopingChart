webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/component/SlickComp.js":
/*!**************************************!*\
  !*** ./pages/component/SlickComp.js ***!
  \**************************************/
/*! exports provided: SlickComp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlickComp", function() { return SlickComp; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-slick */ "./node_modules/react-slick/lib/index.js");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");

var _jsxFileName = "D:\\Sirclo Officially\\develop\\ShopingChart\\pages\\component\\SlickComp.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



var SlickComp = function SlickComp() {
  var product = [{
    name: 'Meja Belajar Minimalis',
    harga_lama: '300,000',
    harga_baru: '200,000',
    rating: '4',
    pict: 'https://s1.bukalapak.com/img/6079371563/s-194-194/Meja_Lipat_Set_Kursi___Meja_Belajar_Minimalis___Meja_Makan__.jpg'
  }, {
    name: 'Speaker Aktif Portable',
    harga_lama: '610,000',
    harga_baru: '400,000',
    rating: '5',
    pict: 'https://s1.bukalapak.com/img/16920882461/s-194-194/data.jpeg'
  }, {
    name: 'Lampu senter',
    harga_lama: '957,000',
    harga_baru: '800,000',
    rating: '3',
    pict: 'https://s1.bukalapak.com/img/68358989801/s-194-194/20190323_135938_Recovered.jpg'
  }, {
    name: 'Pompa Galon Elektrik',
    harga_lama: '300,000',
    harga_baru: '150,000',
    rating: '4',
    pict: 'https://s0.bukalapak.com/img/57778233051/s-194-194/Pompa_Galon_Elektrik_Touch_Screen_Child_Lock_Water_Dispenser.jpg'
  }, {
    name: 'Meja Komputer',
    harga_lama: '600,000',
    harga_baru: '400,000',
    rating: '4',
    pict: 'https://s0.bukalapak.com/img/51482781331/s-194-194/data.png.webp'
  }, {
    name: 'Senter LED',
    harga_lama: '300,000',
    harga_baru: '200,000',
    rating: '4',
    pict: 'https://s1.bukalapak.com/img/68358989801/s-194-194/20190323_135938_Recovered.jpg'
  }];
  var settings = {
    dots: true,
    infinite: false,
    slidesToShow: 5,
    slidesToScroll: 4,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 4,
        infinite: true,
        dots: true
      }
    }, {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    }, {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  };
  return __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, __jsx(react_slick__WEBPACK_IMPORTED_MODULE_2___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, settings, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }), product.map(function (row, index) {
    return __jsx("div", {
      key: index,
      className: "px-3",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Popup"], {
      trigger: __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Card"], {
        className: "p-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Image"], {
        src: row.pict,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Card"].Content, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Card"].Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, row.name), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Card"].Description, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }, __jsx("del", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }, "Rp.", row.harga_lama), __jsx("strong", {
        className: "text-danger",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }, " Rp.", row.harga_baru)))),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Popup"].Header, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99
      },
      __self: this
    }, "Rating"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Popup"].Content, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Rating"], {
      icon: "star",
      defaultRating: row.rating,
      maxRating: 4,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101
      },
      __self: this
    }))));
  })));
};

/***/ })

})
//# sourceMappingURL=index.js.89085db6bf060ac9dbdc.hot-update.js.map