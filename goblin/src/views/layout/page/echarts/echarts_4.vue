<template>
    <div>
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
            grid: {
                show: false
            },
            legend: {
                data: ["销量1", "销量2", "销量3", "销量4", "销量5"]
            },
            xAxis: {    //x轴配置
                name: '种类',
                nameGap: 30,
                nameRotate: 45,
                position: 'bottom',
                offset: 0,  //坐标轴偏移
                type: 'category',   //value category time log
                data: ['衬衫','羊毛衫','雪纺衫','裤子','高跟鞋','袜子'],
                // 坐标轴轴线相关设置
                axisLine: {
                    symbol: ['none', 'arrow'],
                    symbolSize: [10, 20],
                    symbolOffset: [0, 15],
                    lineStyle: {
                        color: 'red'
                    }
                },
                // 坐标轴刻度相关设置
                axisTick: {
                    show: true,
                    alignWithLabe: true,
                    interval: "auto",
                },
                // 坐标轴刻度标签相关设置
                axisLabel: {
                    show: true,
                    alignWithLabe: true,
                    interval: "auto",
                    inside: false,
                    rotate: 45,
                    margin: 18,
                },
                splitLine: {
                    show: true,
                },
            },
            yAxis: {    //y轴配置
                splitLine: { //分割线
                    show: true
                },
                axisLine: { //轴线
                    show: true,
                },
                // min: 10,    //string:dataMin    number    function
                name: '数量',
                min: function(value) {
                    return 10
                },
                max: 80
            },
            series: [
                // {   //系列列表
                //     type: 'bar',
                //     data: [
                //         ["1997/10/4", 96],
                //         ["1997/10/5", 68],
                //         ["1997/10/6", 65],
                //         ["1997/10/7", 12],
                //         ["1997/10/8", 51]
                //     ],
                // }
                {
                    name: '销量1',
                    type: 'bar',
                    data: [12, 32, 52, 45, 32, 65]
                },
                {
                    name: '销量2',
                    type: 'bar',
                    data: [12, 32, 52, 45, 32, 21]
                },
                {
                    name: '销量3',
                    type: 'bar',
                    data: [12, 32, 52, 45, 32, 56]
                },
                {
                    name: '销量4',
                    type: 'bar',
                    data: [12, 32, 52, 45, 32, 54]
                },
                {
                    name: '销量5',
                    type: 'bar',
                    data: [12, 32, 52, 45, 32, 65]
                },
            ]
        });
        var myChiart2 = this.echarts.init(document.getElementById('charts2'));
        myChiart2.setOption({
            grid: {
                show: false
            },
            legend: {
                data: ["销量1", "销量2", "销量3"]
            },
            xAxis: [
                {
                    data: ['衬衫','羊毛衫','雪纺衫','裤子','高跟鞋','袜子'],
                },
                {
                    data: ['衬衫2','羊毛衫2','雪纺衫2','裤子2','高跟鞋2','袜子2'],
                },
                {
                    data: ['衬衫3','羊毛衫3','雪纺衫3','裤子3','高跟鞋3','袜子3'],
                    offset: -50,
                }
            ],
            yAxis: {    //y轴配置
                splitLine: { //分割线
                    show: true
                },
                axisLine: { //轴线
                    show: true,
                },
            },
            series: [
                {
                    name: '销量1',
                    type: 'bar',
                    data: [12, 32, 52, 45, 32, 65]
                },
                {
                    name: '销量2',
                    type: 'bar',
                    data: [12, 32, 52, 45, 32, 21]
                },
                {
                    name: '销量3',
                    type: 'bar',
                    data: [12, 32, 52, 45, 32, 56]
                }
            ]
        })
    },
    
}
</script>

<style lang="less" scoped>
#charts1,#charts2 {
        width: 800px;
        height: 500px;
}
</style>