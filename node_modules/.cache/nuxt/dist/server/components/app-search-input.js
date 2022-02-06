exports.ids = [1];
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

/***/ })

};;
//# sourceMappingURL=app-search-input.js.map