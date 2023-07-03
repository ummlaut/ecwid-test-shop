import Vue from 'vue'
import Vuex from 'vuex'
import categories from './modules/categories/categories'
import products from './modules/products/products'
import product from './modules/products/product'
import cart from './modules/cart/cart'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        categories,
        products,
        product,
        cart
    }
})