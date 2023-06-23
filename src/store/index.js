import Vue from 'vue'
import Vuex from 'vuex'
import categories from './modules/categories/categories'
import products from './modules/products/products'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        categories,
        products
    }
})