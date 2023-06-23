import {GET_CATEGORY} from '../../action-constants'
import {SET_CATEGORY} from '../../mutation-constants'
import { getCategory } from '@/services/shop.service';

export default {
    state: {
        category: {}
    },

    mutations: {
        [SET_CATEGORY] (state, category){
            state.category = category
        }
    },
    
    getters: {
        getCategory(state) {
            return state.category;
        }
    },

    actions: {
        async [GET_CATEGORY] ({commit}){
            const category = await getCategory()
            commit(SET_CATEGORY, category)
        }
    },
    
    namespaced: true
}