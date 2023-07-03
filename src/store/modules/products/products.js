import {GET_PRODUCTS, GET_PRODUCTS_BY_CATEGORY} from '../../action-constants'
import {SET_PRODUCTS, SET_PRODUCTS_BY_CATEGORY} from '../../mutation-constants'
import { getProducts } from '@/services/shop.service';

export default {
    state: {
        products: [],
        productsByCategory: []
    },

    mutations: {
        [SET_PRODUCTS] (state, products){
            state.products = products.items
        },
        [SET_PRODUCTS_BY_CATEGORY] (state, products){
            state.productsByCategory = products.items
        }
    },
    
    getters: {
        allProducts(state) {
            return state.products;
        },
        productsByCategory(state){
            return state.productsByCategory;
        }
    },

    actions: {
        async [GET_PRODUCTS] ({commit}){
            const products = await getProducts()
            commit(SET_PRODUCTS, products)
        },
        async [GET_PRODUCTS_BY_CATEGORY] ({commit},id){
            const products = await getProducts({categories: id})
            commit(SET_PRODUCTS, products)
        }
    },
    
    namespaced: true
}