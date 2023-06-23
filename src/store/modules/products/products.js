import {GET_PRODUCTS} from '../../action-constants'
import {SET_PRODUCTS} from '../../mutation-constants'
import { getProducts } from '@/services/shop.service';

export default {
    state: {
        products: []
    },

    mutations: {
        [SET_PRODUCTS] (state, products){
            state.products = products
        }
    },
    
    getters: {
        allProducts(state) {
            return state.products;
        }
    },

    actions: {
        async [GET_PRODUCTS] ({commit}){
            const products = await getProducts()
            commit(SET_PRODUCTS, products)
        }
    },
    
    namespaced: true
}