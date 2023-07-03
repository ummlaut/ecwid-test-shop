import Vue from 'vue'
import VueRouter from 'vue-router'
import ProductsCategoriesListPage from '@/pages/ProductsCategoriesListPage.vue'
import ProductDetailsPage from '@/pages/ProductDetailsPage.vue'
import CategoryDetailsPage from '@/pages/CategoryDetailsPage.vue'
import CartPage from '@/pages/CartPage.vue'
import EmptyPage from '@/pages/EmptyPage.vue'

Vue.use(VueRouter)

export default new VueRouter({
    mode:'history',
    routes: [
        { path: '/', name: "home", component:  ProductsCategoriesListPage },
        { path: '/product/:id', name: "product", component: ProductDetailsPage },
        { path: '/category/:id', name: "category", component: CategoryDetailsPage },
        { path: '/cart', name: "cart", component: CartPage },
        { path: '*', name: "page-not-found", component: EmptyPage },
    ]
})