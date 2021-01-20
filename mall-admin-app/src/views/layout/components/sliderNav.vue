<template>
  <div class="main-header">
    <a-button
      type="primary"
      style="margin-bottom: 16px"
      @click="toggleCollapsed"
    >
      <a-icon :type="$store.state.collapsed ? 'menu-unfold' : 'menu-fold'" />
    </a-button>
    <div class="breadcrumb">
      <a-breadcrumb>
        <a-breadcrumb-item><a href="">Application Center</a></a-breadcrumb-item>
        <a-breadcrumb-item>An Application</a-breadcrumb-item>
      </a-breadcrumb>
    </div>
    <div class="user-info">
      <a-dropdown>
        <a class="ant-dropdown-link" @click="(e) => e.preventDefault()"
          >{{ $store.state.user.username }}&nbsp;<a-icon type="down" />
        </a>
        <a-menu slot="overlay" style="text-align: center">
          <a-menu-item>
            <a href="javascript:;" @click="logout">退出</a>
          </a-menu-item>
        </a-menu>
      </a-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
        
    };
  },
  methods: {
    toggleCollapsed() {
      this.$store.dispatch('changeCollapsed');
    },
    logout(){
      this.$store.dispatch('removeUserInfo');
      this.$router.push({
        name: 'Login'
      })
    }
  },
};
</script>