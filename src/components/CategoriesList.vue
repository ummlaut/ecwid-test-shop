<template>
    <v-card class="mx-auto" max-width="300">
        <v-navigation-drawer permanent>
            <v-list-item>
                <v-list-item-content>
                    <v-list-item-title class="text-h6">
                        {{ title }}
                    </v-list-item-title>
                </v-list-item-content>
            </v-list-item>

            <v-divider></v-divider>
            <v-list v-if="categories.length" dense nav>
                <category v-for="category in categories" :key="category.id" :category="category">
                </category>
            </v-list>
            <v-list-item v-else>Подкатегории отсутствуют</v-list-item>
        </v-navigation-drawer>
    </v-card>
</template>
<script>
import Category from '@/components/Category.vue';

export default {
    name: 'CategoriesList',
    components: { 
        Category 
    },
    props: {
        categories: {
            type: Array,
            default: null
        },
        title: {
            type: String,
            default: 'Список категорий'
        }
    }
}
</script>
<style>
a {
    text-decoration: none;
    color: #000;
}
</style>