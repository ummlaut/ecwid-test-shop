<template>
    <v-card class="mx-auto" max-width="300">
        <v-navigation-drawer permanent>
            <v-list-item>
                <v-list-item-content>
                    <v-list-item-title class="text-h6">
                        Список категорий
                    </v-list-item-title>
                </v-list-item-content>
            </v-list-item>

            <v-divider></v-divider>

            <v-list dense nav>
                <v-list-item v-for="category in categories" :key="category.id">
                    <router-link :to="{ name: 'category', params: { id: category.id } }">
                        <v-img :src="category.imageUrl" width="100"></v-img>
                        <v-list-item-content>
                            <v-list-item-title class="text-subtitle-1 pl-6">{{ category.name }}</v-list-item-title>
                        </v-list-item-content>
                    </router-link>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
    </v-card>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';
import { GET_CATEGORIES } from '@/store/action-constants'

export default {
    name: 'CategoriesList',
    async created() {
        await this.GET_CATEGORIES()
        this.categories = this.allCategories
    },

    data() {
        return {
            categories: []
        }
    },
    computed: {
        ...mapGetters("categories", { allCategories: "allCategories" })
    },
    methods: {
        ...mapActions("categories", [GET_CATEGORIES])
    }
}
</script>
<style></style>