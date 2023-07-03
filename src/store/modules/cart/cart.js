import { ADD_PRODUCT, REMOVE_PRODUCT } from '@/store/action-constants'

export default {
    state: {
        cart: JSON.parse(localStorage.getItem("cart")) || []
    },

    mutations: {
        [ADD_PRODUCT](state, product) {
            state.cart.push(product)
            localStorage.setItem("cart", JSON.stringify(state.cart))
        },
        [REMOVE_PRODUCT](state, index) {
            state.cart = state.cart.reduce((acc, val, i) => {
                if (i !== index) {
                    acc.push(val);
                }
                return acc
            }, [])
            localStorage.setItem("cart", JSON.stringify(state.cart))
        }
    },

    getters: {
        getCart(state) {
            return state.cart;
        }
    },

    actions: {
        async [ADD_PRODUCT]({ commit }, product) {
            commit(ADD_PRODUCT, product)
        },
        [REMOVE_PRODUCT]({ commit }, productId) {
            commit(REMOVE_PRODUCT, productId)
        }
    },

    namespaced: true
}