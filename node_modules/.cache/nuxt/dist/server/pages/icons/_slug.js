exports.ids = [8];
exports.modules = {

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/icons/_slug.vue?vue&type=template&id=d103f390&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('article',[_vm._ssrNode("<h1>"+_vm._ssrEscape(_vm._s(_vm.icon.title))+"</h1> <svg>"+(_vm._s(_vm.icon.code))+"</svg>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/icons/_slug.vue?vue&type=template&id=d103f390&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/icons/_slug.vue?vue&type=script&lang=js&
//
//
//
//
//
//
/* harmony default export */ var _slugvue_type_script_lang_js_ = ({
  async asyncData({
    $content,
    params
  }) {
    const icon = await $content('svg-icons', params.slug).fetch();
    const [prev, next] = await $content('svg-icons').sortBy('createdAt', 'asc').surround(params.slug).fetch();
    return {
      icon,
      prev,
      next
    };
  }

});
// CONCATENATED MODULE: ./pages/icons/_slug.vue?vue&type=script&lang=js&
 /* harmony default export */ var icons_slugvue_type_script_lang_js_ = (_slugvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/icons/_slug.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  icons_slugvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "6948a03c"
  
)

/* harmony default export */ var _slug = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=_slug.js.map