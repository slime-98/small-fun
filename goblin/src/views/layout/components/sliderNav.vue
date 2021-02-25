<template>
  <div class="main-header">
    <a-button
      type="primary"
      style="margin-bottom: 16px;height: 22px"
      @click="toggleCollapsed"
    >
      <a-icon :type="$store.state.collapsed ? 'menu-unfold' : 'menu-fold'" />
    </a-button>
    <div class="breadcrumb">
      <a-breadcrumb>
        <a-breadcrumb-item>
          {{ currentRoute.matched[0].meta.title }}
        </a-breadcrumb-item>
        <a-breadcrumb-item>
          <router-link :to="{name: currentRoute.matched[1].name}">
            {{ currentRoute.matched[1].meta.title }}
          </router-link>
        </a-breadcrumb-item>
      </a-breadcrumb>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
        currentRoute: this.$router.currentRoute
    };
  },
  watch: {
    $route (){
      // console.log(this.$router.currentRoute.matched[1].meta.title)
      this.currentRoute = this.$router.currentRoute
    }
  },
  methods: {
    toggleCollapsed() {
      this.$store.dispatch('changeCollapsed');
    },
  },
};
</script>