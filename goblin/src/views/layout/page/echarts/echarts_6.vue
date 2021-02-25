<template>
  <div class="echarts">
    <div id="charts1"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hero: {
        zhangSan: {
          atk: '',
          hp: '',
          def: '',
          parry: '',
          move: '',
          mp: '',
          speed: ''
        },
        liSi: {
          atk: '',
          hp: '',
          def: '',
          parry: '',
          move: '',
          mp: '',
          speed: ''
        }
      }
    };
  },
  created() {
    this.getData();
  },
  mounted() {

    var myChiart1 = this.echarts.init(document.getElementById("charts1"));
    myChiart1.setOption({
        legend: {
          data: [{
            name: '神·张三',
          }, '界·李四'],
          padding: [20, 0, 0, 0]
        },
        color: ['#0f0', '#00f'],
        radar: {
          indicator: [
            { name: '攻击', max: '11000', color: '#f5f'},
            { name: '血量', max: '11000', color: 'red'}, // 标签设置为红色
            { name: '防御', max: '11000', color: '#0f0'},
            { name: '格挡', max: '11000', color: 'green'},
            { name: '移速', max: '11000', color: 'cyan' },
            { name: '能量', max: '11000', color: 'blue'},
            { name: '出手速度', max: '11000', color: '#f00'}
          ],
          radius: 200,
          name: {
            show: true,
            formatter: function (value, indicator) {
                return '【' + value + '】';
            }
          },
          splitNumber: 5,
          shape: 'polygon', // circle,polygon
          axisLine: {
            lineStyle: {
              // color: 'gray',
              // width: 1
            }
          },
          splitLine: {
            lineStyle: {
              // color: '#000'
              // color: ['#ff0', '#fe1', '#fd2', '#fc3']
            }
          }
        },
        series: {
          type: 'radar',
          data : [
              {
                  value : Object.values(this.hero.zhangSan),
                  name : '神·张三',
              },
              {
                  value : Object.values(this.hero.liSi),
                  name : '界·李四'
              }
          ]
        },
        tooltip: {
          show: true
        },

    });
    
  },
  methods: {
    getRandom() {
      return Math.ceil(Math.random() * 10000);
    },
    getData() {
      for (const key in this.hero) {
        let keys = Object.keys(this.hero[key]);
        for(let i = 0; i < keys.length; i++) {
          this.hero[key][keys[i]] = this.getRandom();
        }
      }
      console.log(Object.values(this.hero.zhangSan))
    }
  }
};
</script>

<style lang="less" scoped>
#charts1 {
  width: 800px;
  height: 680px;
}
</style>