<template>
    <v-container fluid>
        <v-row>
            <v-col v-for="product in products" :key="product.id" cols="4">
                <v-card class="mx-auto"
                    max-width="344">
                    <v-img :src="product.imageUrl" width="auto"></v-img> 
                    <v-card-title class="text-subtitle-1">
                        {{ product.name }}
                    </v-card-title>
                    <v-card-subtitle class="text-h5 blue--text text--darken-3 ">
                        {{ formatPrice(product.price) }}
                    </v-card-subtitle>  
                </v-card>
            </v-col>
        </v-row>
        <!-- If using vue-router -->
    </v-container>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';
import { GET_PRODUCTS } from '@/store/action-constants'

export default {
    name: 'ProductTable',
    async created() {
        await this.GET_PRODUCTS()
        this.products = this.allProducts
    },

    data() {
        return {
            products: []
        }
    },
    computed: {
        ...mapGetters("products", { allProducts: "allProducts" }),
    },
    methods: {
        ...mapActions("products", [GET_PRODUCTS]),
        formatPrice(price){
            return new Intl.NumberFormat("ru-RU", { style: 'currency', currency: 'RUB' }).format(price);
        }
    }
}
</script>
<style></style>