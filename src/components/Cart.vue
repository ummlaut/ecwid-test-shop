<template>
    <v-simple-table>
        <template v-slot:default>
            <thead>
                <tr>
                    <th class="text-left">
                        Изображение
                    </th>
                    <th class="text-left">
                        Название
                    </th>
                    <th class="text-left">
                        Цена
                    </th>
                    <th class="text-left">
                        Удалить из корзины
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr height="70px" v-for="(product, i) in getCart" :key="i">
                    <td><v-img :src="product.imageUrl" width="50"></v-img></td>
                    <td>{{ product.name }}</td>
                    <td>{{ formatPrice(product.price) }}</td>
                    <td><remove-button @click="REMOVE_PRODUCT(i)" /></td>
                </tr>
            </tbody>
        </template>
    </v-simple-table>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import RemoveButton from '@/components/RemoveButton.vue'
import { REMOVE_PRODUCT } from '@/store/action-constants'
import { formatPrice } from '@/utils/formatPrice'

export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Cart',
    components: {
        RemoveButton
    },
    computed: {
        ...mapGetters("cart", { getCart: "getCart" })
    },
    methods: {
        ...mapActions("cart", [REMOVE_PRODUCT]),
        formatPrice
    }
}
</script>