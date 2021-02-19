<template>
    <div class="echarts">
        <div id="charts1"></div>
        <div id="charts2"></div>
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
                text: '柱状图',
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
        var myChiart2 = this.echarts.init(document.getElementById('charts2'));
        myChiart2.setOption({   //配置图表参数
             title: {
                text: '饼图',
            },
            series: {   //系列列表
                name: '销量',
                type: 'pie',
                roseType: 'angle',
                data: [
                    { value: 690, name: '德玛西亚'},
                    { value: 263, name: '艾欧尼亚'},
                    { value: 959, name: '诺克萨斯'},
                    { value: 30, name: '祖安'},
                    { value: 655, name: '恕瑞玛'},
                    { value: 65, name: '比尔吉沃特'},
                ]   
            },
        })
    },
}
</script>

<style lang="less" scoped>
.echarts {
    height: 80vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
    div {
        width: 800px;
        height: 500px;
    }
}
</style>