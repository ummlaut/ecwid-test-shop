import {GET_PRODUCT} from '../../action-constants'
import {SET_PRODUCT} from '../../mutation-constants'
import { getProduct } from '@/services/shop.service';

export default {
    state: {
        product: []
    },

    mutations: {
        [SET_PRODUCT] (state, product){
            state.product = product
        }
    },
    
    getters: {
        getProduct(state) {
            return state.product;
        }
    },

    actions: {
        async [GET_PRODUCT] ({commit}){
            const product = await getProduct()
            commit(SET_PRODUCT, product)
        }
    },
    
    namespaced: true
}