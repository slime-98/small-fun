<template>
    <div id="charts1"></div>
</template>

<script>
export default {
    data() {
        return {}
    },
    mounted() {
        var myChiart1 = this.echarts.init(document.getElementById('charts1'));
        myChiart1.setOption({   //配置图表参数
            grid: {
                show: true
            },
            xAxis: {    //x轴配置
                // data: ['衬衫','羊毛衫','雪纺衫','裤子','高跟鞋','袜子']
                splitLine: {
                    show: false
                },
                axisLine: {
                    show: false
                }
            },
            yAxis: {    //y轴配置
                splitLine: {
                    show: false
                },
                axisLine: {
                    show: false
                }
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
#charts1 {
        width: 800px;
        height: 500px;
}
</style>