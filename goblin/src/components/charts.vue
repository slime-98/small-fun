<template>
  <ve-line :data="chartData" :settings="chartSettings"></ve-line>
</template>
<script>
export default {
  data() {
    this.chartSettings = {
      area: true,
    };
    return {
      chartData: {
        columns: ["日期", "今日任务", "已完成", "总任务"],
        rows: [
          { 日期: "1/1", 今日任务: 1393, 已完成: 1093, 总任务: 0.32 },
          { 日期: "1/2", 今日任务: 1530, 已完成: 3230, 总任务: 0.26 },
          { 日期: "1/3", 今日任务: 2923, 已完成: 2623, 总任务: 0.76 },
          { 日期: "1/4", 今日任务: 1723, 已完成: 1423, 总任务: 0.49 },
          { 日期: "1/5", 今日任务: 3792, 已完成: 3492, 总任务: 0.323 },
          { 日期: "1/6", 今日任务: 4593, 已完成: 4293, 总任务: 0.78 },
        ],
      },
    };
  },
};
</script>