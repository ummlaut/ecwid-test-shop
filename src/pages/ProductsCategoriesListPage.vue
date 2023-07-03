<template>
    <v-container class="d-flex">
        <categories-list :categories="categories" />
        <product-table :products="products"/>
    </v-container>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';
import { GET_CATEGORIES, GET_PRODUCTS } from '@/store/action-constants'
import CategoriesList from '@/components/CategoriesList.vue'
import ProductTable from '@/components/ProductTable.vue'

export default {
  name: 'ProductsCategoriesListPage',
  components: {
    CategoriesList,
    ProductTable
  },
  async created() {
        await this.GET_CATEGORIES()
        this.categories = this.allCategories
        await this.GET_PRODUCTS()
        this.products = this.allProducts
    },

    data() {
        return {
            categories: [],
            products: []
        }
    },
    computed: {
        ...mapGetters("categories", { allCategories: "allCategories" }),
        ...mapGetters("products", { allProducts: "allProducts" })
    },
    methods: {
        ...mapActions("categories", [GET_CATEGORIES]),
        ...mapActions("products", [GET_PRODUCTS])
    }
}
</script>
