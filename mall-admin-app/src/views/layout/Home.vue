<template>
  <div class="home">
    <left-menu />
    <div :class="{ 'main-app': true, 'menu-unfold': $store.state.collapsed }">
      <slider-nav />
    </div>
  </div>
</template>

<script>
import LeftMenu from "./components/menu.vue";
import SliderNav from "./components/sliderNav.vue";
export default {
  components: { LeftMenu, SliderNav },
  data() {
    return {
      collapsed: false,
    };
  },
};
</script>
<style lang="less">
@import url("~@/assets/css/home.less");
</style>Menu