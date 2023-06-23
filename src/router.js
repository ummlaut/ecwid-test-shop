import { createRouter } from 'vue-router'
import { ProductsCategoriesList } from './pages/ProductsCategoriesList.vue'
import { ProductDetails } from './pages/ProductDetails.vue'
import { CategoryDetails } from './pages/CategoryDetails.vue'
import { CartPage } from './pages/CartPage.vue'
import { EmptyPage } from './pages/EmptyPage.vue'

export default createRouter({
    routes: [
        { path: '/', component: ProductsCategoriesList },
        { path: '/product/:id', component: ProductDetails },
        { path: '/category/:id', component: CategoryDetails },
        { path: '/cart', component: CartPage },
        { path: '*', component: EmptyPage },
    ]
})