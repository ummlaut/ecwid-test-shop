<template>
    <v-container class="d-flex">
        <categories-list :categories="subCategories" title="Список подкатегорий" />
        <product-table :products="products"/>
    </v-container>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';
import { GET_SUBCATEGORIES, GET_PRODUCTS_BY_CATEGORY } from '@/store/action-constants'
import CategoriesList from '@/components/CategoriesList.vue'
import ProductTable from '@/components/ProductTable.vue'

export default {
    name: 'CategoryDetailsPage',
    components: {
        CategoriesList,
        ProductTable
    },
    data() {
        return {
            subCategories: [],
            products: []
        }
    },
    computed: {
        ...mapGetters("categories", { allSubCategories: "allSubCategories" }),
        ...mapGetters("products", { productsByCategory: "productsByCategory" })
    },
    methods: {
        async loadCategoryDeatils(categoryId) {
            await this.GET_SUBCATEGORIES(categoryId)
            this.subCategories = this.allSubCategories
            await this.GET_PRODUCTS_BY_CATEGORY(categoryId.toString())
            this.products = this.productsByCategory
        },
        ...mapActions("categories", [GET_SUBCATEGORIES]),
        ...mapActions("products", [GET_PRODUCTS_BY_CATEGORY])
    },
    async mounted(){
        await this.loadCategoryDeatils(this.$route.params.id)
    }
}
</script>