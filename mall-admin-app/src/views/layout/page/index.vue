<template>
  <div class="index">
    <!-- 卡片 -->
    <div class="card">
      <card />
    </div>
    <!-- 图表 -->
    <div class="canvas">
      <charts />
    </div>
  </div>
</template>

<script>
import Card from "@/components/card.vue";
import Charts from "@/components/charts.vue";
export default {
  data() {
    return {};
  },
  components: {
    Card,
    Charts,
  },
};
</script>
<style scoped>
</style>