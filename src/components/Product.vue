<template>
    <v-card class="mx-auto pb-4">
        <router-link :to="{ name: 'product', params: { id: product.id } }">
            <v-img :src="product.imageUrl" width="auto"></v-img>
            <v-card-title class="text-subtitle-1 grey--text text--darken-4">
                {{ product.name }}
            </v-card-title>
        </router-link>
        <v-card-subtitle class="text-h5 blue--text text--darken-3">
            {{ formatPrice(product.price) }}
        </v-card-subtitle>
        <v-card-text v-if="description">
            <div v-html="product.description" />
        </v-card-text>
        <div class="text-center">
            <buy-button @click="ADD_PRODUCT(product)" />
        </div>
    </v-card>
</template>
<script>
import BuyButton from './BuyButton.vue';
import { mapActions } from 'vuex';
import { formatPrice } from '@/utils/formatPrice'
import { ADD_PRODUCT } from '@/store/action-constants'

export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Product',
    components: {
        BuyButton
    },
    props: {
        product: {
            type: Object,
            default: () => ({})
        },
        description: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        ...mapActions("cart", [ADD_PRODUCT]),
        formatPrice
    }
}
</script>