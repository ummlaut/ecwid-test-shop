<template>
    <v-container>
        <product :product="product" :description="true" class="card-wrapper" />
    </v-container>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';
import { GET_PRODUCT } from '@/store/action-constants'
import Product from '@/components/Product.vue'

export default {
    name: 'ProductDetailsPage',
    components: {
        Product
    },
    data() {
        return {
            product: {}
        }
    },
    computed: {
        ...mapGetters("product", { getProduct: "getProduct" })
    },
    methods: {
        async loadProductDeatils(productId) {
            await this.GET_PRODUCT(productId)
            this.product = this.getProduct
        },

        ...mapActions("product", [GET_PRODUCT])
    },
    async mounted() {
        await this.loadProductDeatils(this.$route.params.id)
    }
}
</script>
<style scoped>
.card-wrapper {
    max-width: 500px
}
</style>