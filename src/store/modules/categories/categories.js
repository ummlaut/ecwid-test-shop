import {GET_CATEGORIES, GET_SUBCATEGORIES} from '../../action-constants'
import {SET_CATEGORIES, SET_SUBCATEGORIES} from '../../mutation-constants'
import { getCategories } from '@/services/shop.service';

export default {
    state: {
        categories: [],
        subCategories: []
    },

    mutations: {
        [SET_CATEGORIES] (state, categories){
            state.categories = categories.items
        },

        [SET_SUBCATEGORIES] (state, subCategories){
            state.subCategories = subCategories.items
        }
    },
    
    getters: {
        allCategories(state) {
            return state.categories;
        },

        allSubCategories(state) {
            return state.subCategories;
        }
    },

    actions: {
        async [GET_CATEGORIES] ({commit}){
            const categories = await getCategories()
            commit(SET_CATEGORIES, categories)
        },
        
        async [GET_SUBCATEGORIES] ({commit}, id){
            const subCategories = await getCategories({parent: id})
            commit(SET_SUBCATEGORIES, subCategories)
        }
    },
    
    namespaced: true
}