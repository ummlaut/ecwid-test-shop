<template>
  <div id="app">
    <v-app>
      <v-app-bar app>
        <router-link :to="{ name: 'home' }">
          <v-card-title class="cyan--text text--darken-3">MLM-test-shop</v-card-title>
        </router-link>
        <cart-button />
      </v-app-bar>
      <v-main>
        <router-view></router-view>
      </v-main>
    </v-app>
  </div>
</template>

<script>
import CartButton from './components/CartButton.vue'
export default {
  name: 'App',
  components: {
    CartButton
  }
}
</script>

<style>
.v-toolbar__content {
  display: flex;
  justify-content: space-between;
}
</style>