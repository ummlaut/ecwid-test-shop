<template>
    <router-link :to="{ name: 'category', params: { id: category.id } }">
        <v-list-item link>
            <v-img :src="category.imageUrl" width="0"></v-img>
            <v-list-item-content>
                <v-list-item-title class="text-subtitle-1 pl-6">{{ category.name }}</v-list-item-title>
            </v-list-item-content>
        </v-list-item>
    </router-link>
</template>
<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Category',
    props: {
        category: {
            type: Object,
            default: () => ({})
        }
    }
}
</script>