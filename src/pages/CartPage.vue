<template>
    <v-container>
        <cart />
        <checkout-button @click="checkout=true" class="d-block mx-auto mt-5"/>
        <v-alert v-if="checkout" outlined type="success" text class="mx-auto mt-5" width="300">
            Поздравляем с покупкой!
        </v-alert>
    </v-container>
</template>
<script>
import CheckoutButton from '@/components/CheckoutButton.vue'
import Cart from '@/components/Cart.vue'

export default {
    name: 'CartPage',
    components: {
        CheckoutButton,
        Cart
    },
    data() {
        return {
            checkout: false
        }
    },
    methods: {
        checkoutCart() {
            this.checkout = true
        },
    },
}
</script>