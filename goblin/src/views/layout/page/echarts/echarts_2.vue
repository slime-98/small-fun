<template>
    <div class="echarts">
        <div id="charts1"></div>
    </div>
</template>

<script>
export default {
    data() {
        return {}
    },
    mounted() {
        var myChiart1 = this.echarts.init(document.getElementById('charts1'));
        myChiart1.setOption({   //配置图表参数
            title: {
                text: '当月销售业绩\n清单',
                show: true, // 是否显示标题组件
                link: '',
                textStyle: {
                    color: '#bbb',
                    fontSize: '24px',
                    lineHeight: 20
                },
                subtext: '副标题',
                padding: [20, 20],
                left: 0,  // 0 left 0%
            },
            legend: {   //图例
                data: ['销量']
            },
            xAxis: {    //x轴配置
                data: ['衬衫','羊毛衫','雪纺衫','裤子','高跟鞋','袜子']
            },
            yAxis: {    //y轴配置
                
            },
            series: {   //系列列表
                name: '销量',
                type: 'bar',
                data: [10,12,45,6,20,3]
            }
        });
    },
}
</script>

<style lang="less" scoped>
.echarts {
    height: 80vh;
    // display: flex;
    // justify-content: space-around;
    // align-items: center;
    div {
        width: 800px;
        height: 500px;
    }
}
</style>