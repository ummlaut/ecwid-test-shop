<template>
    <v-container fluid>
        <v-row v-if="products.length">
            <v-col v-for="product in products" :key="product.id" cols="4" link>
                <product :product="product" class="card-wrapper" />
            </v-col>
        </v-row>
        <v-row v-else class="mx-auto">Товары отсутствуют</v-row>
    </v-container>
</template>
<script>
import Product from "@/components/Product.vue"
export default {
    name: 'ProductTable',
    components: {
        Product
    },
    props: {
        products: {
            type: Array,
            default: null
        }
    }
}
</script>
<style scoped>
.card-wrapper {
    max-width: 250px
}
</style>