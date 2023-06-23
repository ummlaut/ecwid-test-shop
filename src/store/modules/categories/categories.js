import {GET_CATEGORIES} from '../../action-constants'
import {SET_CATEGORIES} from '../../mutation-constants'
import { getCategories } from '@/services/shop.service';

export default {
    state: {
        categories: []
    },

    mutations: {
        [SET_CATEGORIES] (state, categories){
            state.categories = categories
        }
    },
    
    getters: {
        allCategories(state) {
            return state.categories;
        }
    },

    actions: {
        async [GET_CATEGORIES] ({commit}){
            const categories = await getCategories()
            commit(SET_CATEGORIES, categories)
        }
    },
    
    namespaced: true
}