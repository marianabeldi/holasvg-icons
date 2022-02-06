exports.ids = [7,1,5];
exports.modules = {

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/AppSearchInput.vue?vue&type=template&id=4e0da0e2&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<input type=\"search\" autocomplete=\"off\" placeholder=\"Search Articles\""+(_vm._ssrAttr("value",(_vm.searchQuery)))+" class=\"block w-full pl-10 pr-3 py-2 truncate leading-5 placeholder-gray-500 border border-gray-500 text-gray-700 focus:border-gray-300 rounded-md focus:outline-none focus:bg-white bg-white\"> "),(_vm.articles.length)?_vm._ssrNode("<ul class=\"z-10 absolute w-auto flex-1 top-40 bg-white dark:bg-gray-900 rounded-md border border-gray-300 overflow-hidden\">","</ul>",_vm._l((_vm.articles),function(article){return _vm._ssrNode("<li>","</li>",[_c('NuxtLink',{staticClass:"flex px-4 py-2 items-center leading-5 transition ease-in-out duration-150 text-green-500 hover:text-black",attrs:{"to":{ name: 'blog-slug', params: { slug: article.slug } }}},[_vm._v("\n        "+_vm._s(article.title)+"\n      ")])],1)}),0):_vm._e()],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/AppSearchInput.vue?vue&type=template&id=4e0da0e2&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/AppSearchInput.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var AppSearchInputvue_type_script_lang_js_ = ({
  data() {
    return {
      searchQuery: '',
      articles: []
    };
  },

  watch: {
    async searchQuery(searchQuery) {
      if (!searchQuery) {
        this.articles = [];
        return;
      }

      this.articles = await this.$content('articles').limit(6).search(searchQuery).fetch();
    }

  }
});
// CONCATENATED MODULE: ./components/AppSearchInput.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_AppSearchInputvue_type_script_lang_js_ = (AppSearchInputvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/AppSearchInput.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_AppSearchInputvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "23d447b2"
  
)

/* harmony default export */ var AppSearchInput = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Logo.vue?vue&type=template&id=24a7debb&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{staticClass:"NuxtLogo",attrs:{"width":"80","height":"40","viewBox":"0 0 452 342","xmlns":"http://www.w3.org/2000/svg"}},[_vm._ssrNode("<path d=\"M139 330l-1-2c-2-4-2-8-1-13H29L189 31l67 121 22-16-67-121c-1-2-9-14-22-14-6 0-15 2-22 15L5 303c-1 3-8 16-2 27 4 6 10 12 24 12h136c-14 0-21-6-24-12z\" fill=\"#00C58E\"></path> <path d=\"M447 304L317 70c-2-2-9-15-22-15-6 0-15 3-22 15l-17 28v54l39-67 129 230h-49a23 23 0 0 1-2 14l-1 1c-6 11-21 12-23 12h76c3 0 17-1 24-12 3-5 5-14-2-26z\" fill=\"#108775\"></path> <path d=\"M376 330v-1l1-2c1-4 2-8 1-12l-4-12-102-178-15-27h-1l-15 27-102 178-4 12a24 24 0 0 0 2 15c4 6 10 12 24 12h190c3 0 18-1 25-12zM256 152l93 163H163l93-163z\" fill=\"#2F495E\"></path>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Logo.vue?vue&type=template&id=24a7debb&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Logo.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "2ed1fd08"
  
)

/* harmony default export */ var Logo = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/TheHeader.vue?vue&type=template&id=87720086&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('header',{staticClass:"flex"},[_c('NuxtLink',{attrs:{"to":"/"}},[_c('Logo',{staticClass:"mb-4"})],1),_vm._ssrNode(" "),_c('AppSearchInput',{staticClass:"ml-8"})],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/TheHeader.vue?vue&type=template&id=87720086&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/TheHeader.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "1bcbfedd"
  
)

/* harmony default export */ var TheHeader = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Logo: __webpack_require__(29).default,AppSearchInput: __webpack_require__(28).default})


/***/ })

};;
//# sourceMappingURL=the-header.js.map