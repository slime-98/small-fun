<template>
  <div class="echarts">
    <div id="charts1"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    };
  },
  mounted() {
    var myChiart1 = this.echarts.init(document.getElementById("charts1"));
    myChiart1.setOption({

    })
  }
};
</script>

<style lang="less" scoped>
#charts1 {
  width: 800px;
  height: 680px;
}
</style>