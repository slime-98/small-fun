<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import route from './router/index.js'
export default {
  name: 'app',
  created() {
    this.$store.dispatch('changeMenuRoutes', route.options.routes);
  }
}
</script>
 
<style scoped>

</style>
