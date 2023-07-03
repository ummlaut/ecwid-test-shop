<template>
    <div class="btn-wrapper">
        <router-link :to="{ name: 'cart' }">
            <v-btn class="mx-2" fab outlined small color="cartBtn">
                <v-icon>
                    mdi-cart-outline
                </v-icon>
            </v-btn>
        </router-link>
        <span class="counter" color="cartBtnCounter">{{ getCart.length }}</span>
    </div>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
    name: 'CartButton',
    computed: {
        ...mapGetters("cart", { getCart: "getCart" })
    }
}
</script>
<style>
.btn-wrapper {
    position: relative
}

.counter {
    position: absolute;
    top: 0;
    right: 0;
    width: 20px;
    height: 20px;
    background: #C62828;
    border-radius: 10px;
    color: #fff;
    align-items: center;
    display: flex;
    justify-content: center;
    font-size: .825rem;
}
</style>