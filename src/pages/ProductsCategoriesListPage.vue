<template>
    <section>
      123
        <categories-list />
        <product-table />
    </section>
</template>
<script>
import CategoriesList from '@/components/CategoriesList.vue'
import ProductTable from '@/components/ProductTable.vue'

export default {
  name: 'ProductsCategoriesListPage',
  components: {
    CategoriesList,
    ProductTable
  }
}
</script>
