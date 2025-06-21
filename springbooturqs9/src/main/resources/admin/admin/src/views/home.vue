<template>
<div class="content">
	<div class="text" :style='{"margin":"50px auto","fontSize":"24px","color":"rgb(51, 51, 51)","textAlign":"center","fontWeight":"bold"}'>欢迎使用 {{this.$project.projectName}}</div>
    <div class="cardView">
        <div class="cards" :style='{"margin":"0 0 20px 0","alignItems":"center","justifyContent":"center","display":"flex"}'>
			<div :style='{"boxShadow":"0 1px 6px rgba(0,0,0,.3)","margin":"0 10px","borderRadius":"40px","display":"flex"}' v-if="isAuth('chezilichang','首页总数')">
				<div :style='{"width":"80px","borderRadius":"40px","background":"#1ba7a6","height":"80px"}'></div>
				<div :style='{"width":"160px","alignItems":"center","flexDirection":"column","justifyContent":"center","display":"flex"}'>
					<div :style='{"margin":"5px 0","lineHeight":"24px","fontSize":"20px","color":"#333","fontWeight":"bold","height":"24px"}'>{{chezilichangCount}}</div>
					<div :style='{"margin":"5px 0","lineHeight":"24px","fontSize":"16px","color":"#666","height":"24px"}'>车子离场总数</div>
				</div>
			</div>
			<div :style='{"boxShadow":"0 1px 6px rgba(0,0,0,.3)","margin":"0 10px","borderRadius":"40px","display":"flex"}' v-if="isAuth('weiguichufa','首页总数')">
				<div :style='{"width":"80px","borderRadius":"40px","background":"#1ba7a6","height":"80px"}'></div>
				<div :style='{"width":"160px","alignItems":"center","flexDirection":"column","justifyContent":"center","display":"flex"}'>
					<div :style='{"margin":"5px 0","lineHeight":"24px","fontSize":"20px","color":"#333","fontWeight":"bold","height":"24px"}'>{{weiguichufaCount}}</div>
					<div :style='{"margin":"5px 0","lineHeight":"24px","fontSize":"16px","color":"#666","height":"24px"}'>违规处罚总数</div>
				</div>
			</div>
        </div>
        <div style="display: flex;align-items: center;width: 100%;margin-bottom: 10px;">
            <el-card style="width: 20%;margin: 0 10px;" v-if="isAuth('chezilichang','首页统计')">
                <div id="chezilichangChart1" style="width:100%;height:400px;"></div>
            </el-card>
            <el-card style="width: 20%;margin: 0 10px;" v-if="isAuth('chezilichang','首页统计')">
                <div id="chezilichangChart2" style="width:100%;height:400px;"></div>
            </el-card>
            <el-card style="width: 20%;margin: 0 10px;" v-if="isAuth('chezilichang','首页统计')">
                <div id="chezilichangChart3" style="width:100%;height:400px;"></div>
            </el-card>
            <el-card style="width: 20%;margin: 0 10px;" v-if="isAuth('chezilichang','首页统计')">
                <div id="chezilichangChart4" style="width:100%;height:400px;"></div>
            </el-card>
            <el-card style="width: 20%;margin: 0 10px;" v-if="isAuth('weiguichufa','首页统计')">
                <div id="weiguichufaChart1" style="width:100%;height:400px;"></div>
            </el-card>
        </div>
    </div>
</div>
</template>
<script>
//5
import router from '@/router/router-static'
import * as echarts from 'echarts'
export default {
	data() {
		return {
            chezilichangCount: 0,
            weiguichufaCount: 0,
		};
	},
  mounted(){
    this.init();
    this.getchezilichangCount();
    this.chezilichangChat1();
    this.chezilichangChat2();
    this.chezilichangChat3();
    this.chezilichangChat4();
    this.getweiguichufaCount();
    this.weiguichufaChat1();
  },
  methods:{
    init(){
        if(this.$storage.get('Token')){
        this.$http({
            url: `${this.$storage.get('sessionTable')}/session`,
            method: "get"
        }).then(({ data }) => {
            if (data && data.code != 0) {
            router.push({ name: 'login' })
            }
        });
        }else{
            router.push({ name: 'login' })
        }
    },
    getchezilichangCount() {
        this.$http({
            url: `chezilichang/count`,
            method: "get"
        }).then(({
            data
        }) => {
            if (data && data.code == 0) {
                this.chezilichangCount = data.data
            }
        })
    },

    chezilichangChat1() {
      this.$nextTick(()=>{
        // cheweimingcheng cheweimingcheng
        //  xiaoshidanjia

        var chezilichangChart1 = echarts.init(document.getElementById("chezilichangChart1"),'macarons');
        this.$http({
            url: `chezilichang/value/cheweimingcheng/xiaoshidanjia`,
            method: "get",
        }).then(({ data }) => {
            if (data && data.code === 0) {
                let res = data.data;
                let xAxis = [];
                let yAxis = [];
                let pArray = []
                for(let i=0;i<res.length;i++){
                    xAxis.push(res[i].cheweimingcheng);
                    yAxis.push(parseFloat((res[i].total)));
                    pArray.push({
                        value: parseFloat((res[i].total)),
                        name: res[i].cheweimingcheng
                    })
                }
                var option = {};
                option = {
                    title: {
                        text: '车位价格',
                        left: 'center'
                    },
                    tooltip: {
                      trigger: 'item',
                      formatter: '{b} : {c}'
                    },
                    xAxis: {
                        type: 'category',
                        data: xAxis
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [{
                        data: yAxis,
                        type: 'bar'
                    }]
                };
                // 使用刚指定的配置项和数据显示图表。
                chezilichangChart1.setOption(option);
                  //根据窗口的大小变动图表
                window.onresize = function() {
                    chezilichangChart1.resize();
                };
            }
        });
      })
    },

    chezilichangChat2() {
      this.$nextTick(()=>{
        // cheweimingcheng cheweimingcheng
        //  tingchefeiyong

        var chezilichangChart2 = echarts.init(document.getElementById("chezilichangChart2"),'macarons');
        this.$http({
            url: `chezilichang/value/cheweimingcheng/tingchefeiyong`,
            method: "get",
        }).then(({ data }) => {
            if (data && data.code === 0) {
                let res = data.data;
                let xAxis = [];
                let yAxis = [];
                let pArray = []
                for(let i=0;i<res.length;i++){
                    xAxis.push(res[i].cheweimingcheng);
                    yAxis.push(parseFloat((res[i].total)));
                    pArray.push({
                        value: parseFloat((res[i].total)),
                        name: res[i].cheweimingcheng
                    })
                }
                var option = {};
                option = {
                    title: {
                        text: '停车费用',
                        left: 'center'
                    },
                    tooltip: {
                      trigger: 'item',
                      formatter: '{b} : {c}'
                    },
                    xAxis: {
                        type: 'category',
                        boundaryGap: false,
                        data: xAxis
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [{
                        data: yAxis,
                        type: 'line',
                    }]
                };
                // 使用刚指定的配置项和数据显示图表。
                chezilichangChart2.setOption(option);
                  //根据窗口的大小变动图表
                window.onresize = function() {
                    chezilichangChart2.resize();
                };
            }
        });
      })
    },

    chezilichangChat3() {
      this.$nextTick(()=>{

        var chezilichangChart3 = echarts.init(document.getElementById("chezilichangChart3"),'macarons');
        this.$http({
            url: "chezilichang/group/cheweileixing",
            method: "get",
        }).then(({ data }) => {
            if (data && data.code === 0) {
                let res = data.data;
                let xAxis = [];
                let yAxis = [];
                let pArray = []
                for(let i=0;i<res.length;i++){
                    xAxis.push(res[i].cheweileixing);
                    yAxis.push(parseFloat((res[i].total)));
                    pArray.push({
                        value: parseFloat((res[i].total)),
                        name: res[i].cheweileixing
                    })
                }
                var option = {};
                option = {
                        title: {
                            text: '车位类型',
                            left: 'center'
                        },
                        tooltip: {
                          trigger: 'item',
                          formatter: '{b} : {c} ({d}%)'
                        },
                        series: [
                            {
                                type: 'pie',
                                radius: ['25%', '55%'],
                                center: ['50%', '60%'],
                                data: pArray,
                                emphasis: {
                                    itemStyle: {
                                        shadowBlur: 10,
                                        shadowOffsetX: 0,
                                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                                    }
                                }
                            }
                        ]
                };
                // 使用刚指定的配置项和数据显示图表。
                chezilichangChart3.setOption(option);
                  //根据窗口的大小变动图表
                window.onresize = function() {
                    chezilichangChart3.resize();
                };
            }
        });
      })
    },


    chezilichangChat4() {
      this.$nextTick(()=>{
        // xingming xingming
        //  tingchefeiyong

        var chezilichangChart4 = echarts.init(document.getElementById("chezilichangChart4"),'macarons');
        this.$http({
            url: `chezilichang/value/xingming/tingchefeiyong`,
            method: "get",
        }).then(({ data }) => {
            if (data && data.code === 0) {
                let res = data.data;
                let xAxis = [];
                let yAxis = [];
                let pArray = []
                for(let i=0;i<res.length;i++){
                    xAxis.push(res[i].xingming);
                    yAxis.push(parseFloat((res[i].total)));
                    pArray.push({
                        value: parseFloat((res[i].total)),
                        name: res[i].xingming
                    })
                }
                var option = {};
                option = {
                    title: {
                        text: '用户费用',
                        left: 'center'
                    },
                    tooltip: {
                      trigger: 'item',
                      formatter: '{b} : {c}'
                    },
                    xAxis: {
                        type: 'value'
                    },
                    yAxis: {
                        type: 'category',
                        data: xAxis
                    },
                    series: [{
                        data: yAxis,
                        type: 'bar'
                    }]
                };
                // 使用刚指定的配置项和数据显示图表。
                chezilichangChart4.setOption(option);
                  //根据窗口的大小变动图表
                window.onresize = function() {
                    chezilichangChart4.resize();
                };
            }
        });
      })
    },


    getweiguichufaCount() {
        this.$http({
            url: `weiguichufa/count`,
            method: "get"
        }).then(({
            data
        }) => {
            if (data && data.code == 0) {
                this.weiguichufaCount = data.data
            }
        })
    },

    weiguichufaChat1() {
      this.$nextTick(()=>{
        //  chufajine
        // xingming xingming

        var weiguichufaChart1 = echarts.init(document.getElementById("weiguichufaChart1"),'macarons');
        this.$http({
            url: `weiguichufa/value/xingming/chufajine`,
            method: "get",
        }).then(({ data }) => {
            if (data && data.code === 0) {
                let res = data.data;
                let xAxis = [];
                let yAxis = [];
                let pArray = []
                for(let i=0;i<res.length;i++){
                    xAxis.push(res[i].xingming);
                    yAxis.push(parseFloat((res[i].total)));
                    pArray.push({
                        value: parseFloat((res[i].total)),
                        name: res[i].xingming
                    })
                }
                var option = {};
                option = {
                    title: {
                        text: '违规处罚',
                        left: 'center'
                    },
                    tooltip: {
                      trigger: 'item',
                      formatter: '{b} : {c}'
                    },
                    xAxis: {
                        type: 'category',
                        data: xAxis
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [{
                        data: yAxis,
                        type: 'bar'
                    }]
                };
                // 使用刚指定的配置项和数据显示图表。
                weiguichufaChart1.setOption(option);
                  //根据窗口的大小变动图表
                window.onresize = function() {
                    weiguichufaChart1.resize();
                };
            }
        });
      })
    },






  }
};
</script>
<style lang="scss" scoped>
    .cardView {
        display: flex;
        flex-wrap: wrap;
        width: 100%;

        .cards {
            display: flex;
            align-items: center;
            width: 100%;
            margin-bottom: 10px;
            justify-content: center;
            .card {
                width: calc(25% - 20px);
                margin: 0 10px;
                /deep/.el-card__body{
                    padding: 0;
                }
            }
        }
    }
</style>
