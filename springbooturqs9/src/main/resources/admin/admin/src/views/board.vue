<template>
<div class="content box5" :style='{"alignContent":"flex-start","minHeight":"100vh","flexWrap":"wrap","background":"linear-gradient(90deg, rgba(16,15,33,1) 0%, rgba(7,2,97,1) 100%)","display":"flex","width":"100%","position":"relative","height":"auto"}'>
	<!-- 标题 -->
	<div :style='{"margin":"0 0 20px 0","color":"#fff","textAlign":"center","background":"rgba(255,255,255,.1)","width":"100%","lineHeight":"64px","fontSize":"28px","height":"64px"}'>欢迎使用 {{this.$project.projectName}}</div>
	<!-- 时间 -->
	<div :style='{"top":"0","color":"#fff","display":"inline-block","lineHeight":"64px","fontSize":"16px","position":"absolute","right":"20px","height":"64px"}' class="times">{{ dates }}</div>
	<!-- 统计 -->
	<div :style='{"alignContent":"flex-start","padding":"20px","margin":"30px 1% 20px 3%","flexWrap":"wrap","background":"rgba(255,255,255,.1)","display":"flex","width":"30%","height":"300px","order":"5"}'>
<!-- 1 -->

		<div :style='{"width":"100%","alignItems":"center","background":"rgba(255,255,255,.1)","justifyContent":"center","display":"flex"}'>
			<div :style='{"width":"32px","background":"red","display":"none","height":"32px"}'></div>
			<div :style='{"padding":"0 20px","alignItems":"center","flex":"1","justifyContent":"space-between","display":"flex"}'>
				<div :style='{"lineHeight":"32px","fontSize":"16px","color":"#fff","height":"32px"}'>车子离场总数</div>
				<div :style='{"lineHeight":"32px","fontSize":"20px","color":"#fff","fontWeight":"bold","height":"32px"}'>{{chezilichangCount}}</div>
			</div>
		</div>

<!-- 2 -->

		<div :style='{"width":"100%","alignItems":"center","background":"rgba(255,255,255,.2)","justifyContent":"center","display":"flex"}'>
			<div :style='{"width":"32px","background":"yellow","display":"none","height":"32px"}'></div>
			<div :style='{"padding":"0 20px","alignItems":"center","flex":"1","justifyContent":"space-between","display":"flex"}'>
				<div :style='{"lineHeight":"32px","fontSize":"16px","color":"#fff","height":"32px"}'>违规处罚总数</div>
				<div :style='{"lineHeight":"32px","fontSize":"20px","color":"#fff","fontWeight":"bold","height":"32px"}'>{{weiguichufaCount}}</div>
			</div>
		</div>

	</div>

	
	<div class="echarts1">
		<div id="chezilichangChart1" style="width:100%;height:100%;"></div>
	</div>
	<div class="echarts2">
		<div id="chezilichangChart2" style="width:100%;height:100%;"></div>
	</div>
	<div class="echarts3">
		<div id="chezilichangChart3" style="width:100%;height:100%;"></div>
	</div>
	<div class="echarts4">
		<div id="chezilichangChart4" style="width:100%;height:100%;"></div>
	</div>
	<div class="echarts5">
		<div id="weiguichufaChart5" style="width:100%;height:100%;"></div>
	</div>

</div>


</template>
<script>
import * as echarts from 'echarts'
//2
//5
import router from '@/router/router-static'
export default {
	data() {
		return {
			line: {"backgroundColor":"transparent","yAxis":{"axisLabel":{"borderType":"solid","rotate":0,"padding":0,"shadowOffsetX":0,"margin":15,"backgroundColor":"transparent","borderColor":"#000","shadowOffsetY":0,"color":"#fff","shadowBlur":0,"show":true,"inside":false,"ellipsis":"...","overflow":"none","borderRadius":0,"borderWidth":0,"width":"","fontSize":12,"lineHeight":24,"shadowColor":"transparent","fontWeight":"normal","height":""},"axisTick":{"show":true,"length":5,"lineStyle":{"shadowOffsetX":0,"shadowOffsetY":0,"cap":"butt","color":"#fff","shadowBlur":0,"width":1,"type":"solid","opacity":1,"shadowColor":"rgba(0,0,0,.5)"},"inside":false},"splitLine":{"lineStyle":{"shadowOffsetX":0,"shadowOffsetY":0,"cap":"butt","color":"#ccc","shadowBlur":0,"width":1,"type":"solid","opacity":1,"shadowColor":"rgba(0,0,0,.5)"},"show":true},"axisLine":{"lineStyle":{"shadowOffsetX":0,"shadowOffsetY":0,"cap":"butt","color":"#fff","shadowBlur":0,"width":1,"type":"solid","opacity":1,"shadowColor":"rgba(0,0,0,.5)"},"show":true},"splitArea":{"show":false,"areaStyle":{"shadowOffsetX":0,"shadowOffsetY":0,"color":"rgba(250,250,250,0.3)","opacity":1,"shadowBlur":10,"shadowColor":"rgba(0,0,0,.5)"}}},"xAxis":{"axisLabel":{"borderType":"solid","rotate":0,"padding":0,"shadowOffsetX":0,"margin":4,"backgroundColor":"transparent","borderColor":"#000","shadowOffsetY":0,"color":"#fff","shadowBlur":0,"show":true,"inside":false,"ellipsis":"...","overflow":"none","borderRadius":0,"borderWidth":0,"width":"","fontSize":12,"lineHeight":24,"shadowColor":"transparent","fontWeight":"normal","height":""},"axisTick":{"show":true,"length":5,"lineStyle":{"shadowOffsetX":0,"shadowOffsetY":0,"cap":"butt","color":"#fff","shadowBlur":0,"width":1,"type":"solid","opacity":1,"shadowColor":"rgba(0,0,0,.5)"},"inside":false},"splitLine":{"lineStyle":{"shadowOffsetX":0,"shadowOffsetY":0,"cap":"butt","color":"#fff","shadowBlur":0,"width":1,"type":"solid","opacity":1,"shadowColor":"rgba(0,0,0,.5)"},"show":false},"axisLine":{"lineStyle":{"shadowOffsetX":0,"shadowOffsetY":0,"cap":"butt","color":"#fff","shadowBlur":0,"width":1,"type":"solid","opacity":1,"shadowColor":"rgba(0,0,0,.5)"},"show":true},"splitArea":{"show":false,"areaStyle":{"shadowOffsetX":0,"shadowOffsetY":0,"color":"rgba(255,255,255,.3)","opacity":1,"shadowBlur":10,"shadowColor":"rgba(0,0,0,.5)"}}},"color":["#7bbfea","#91cc75","#fac858","#ee6666","#73c0de","#3ba272","#fc8452","#9a60b4","#ea7ccc"],"legend":{"padding":5,"itemGap":10,"shadowOffsetX":0,"backgroundColor":"transparent","borderColor":"#ccc","shadowOffsetY":0,"orient":"horizontal","shadowBlur":0,"bottom":"auto","itemHeight":14,"show":true,"icon":"roundRect","borderRadius":0,"lineStyle":{"shadowOffsetX":0,"shadowOffsetY":0,"color":"inherit","shadowBlur":0,"width":"auto","type":"inherit","opacity":1,"shadowColor":"transparent"},"left":"right","borderWidth":0,"width":"80%","itemWidth":25,"textStyle":{"textBorderWidth":0,"color":"#fff","textShadowColor":"transparent","ellipsis":"...","overflow":"none","fontSize":12,"lineHeight":24,"textShadowOffsetX":0,"textShadowOffsetY":0,"textBorderType":"solid","fontWeight":500,"textBorderColor":"transparent","textShadowBlur":0},"shadowColor":"rgba(0,0,0,.3)","height":"auto"},"grid":{"left":"100","containLabel":true},"series":{"symbol":"emptyCircle","itemStyle":{"borderType":"solid","shadowOffsetX":0,"borderColor":"#fff","shadowOffsetY":0,"color":"","shadowBlur":0,"borderWidth":0,"opacity":1,"shadowColor":"#000"},"showSymbol":true,"lineStyle":{"shadowOffsetX":0,"shadowOffsetY":0,"color":"","shadowBlur":0,"width":2,"type":"solid","opacity":1,"shadowColor":"#000"},"symbolSize":4},"title":{"borderType":"solid","padding":2,"shadowOffsetX":0,"backgroundColor":"transparent","borderColor":"#ccc","shadowOffsetY":0,"shadowBlur":0,"bottom":"auto","show":true,"right":"auto","top":"auto","borderRadius":0,"left":"left","borderWidth":0,"textStyle":{"textBorderWidth":0,"color":"#fff","textShadowColor":"transparent","fontSize":14,"lineHeight":24,"textShadowOffsetX":0,"textShadowOffsetY":0,"textBorderType":"solid","fontWeight":500,"textBorderColor":"#ccc","textShadowBlur":0},"shadowColor":"transparent"}},
			bar: {"backgroundColor":"transparent","yAxis":{"axisLabel":{"borderType":"solid","rotate":0,"padding":0,"shadowOffsetX":0,"margin":15,"backgroundColor":"transparent","borderColor":"#000","shadowOffsetY":0,"color":"#fff","shadowBlur":0,"show":true,"inside":false,"ellipsis":"...","overflow":"none","borderRadius":0,"borderWidth":0,"fontSize":10,"lineHeight":24,"shadowColor":"transparent","fontWeight":"normal"},"axisTick":{"show":true,"length":5,"lineStyle":{"shadowOffsetX":0,"shadowOffsetY":0,"cap":"butt","color":"#fff","shadowBlur":0,"width":1,"type":"solid","opacity":1,"shadowColor":"rgba(0,0,0,.5)"},"inside":false},"splitLine":{"lineStyle":{"shadowOffsetX":0,"shadowOffsetY":0,"cap":"butt","color":"#ccc","shadowBlur":0,"width":1,"type":"solid","opacity":1,"shadowColor":"rgba(0,0,0,.5)"},"show":true},"axisLine":{"lineStyle":{"shadowOffsetX":0,"shadowOffsetY":0,"cap":"butt","color":"#fff","shadowBlur":0,"width":1,"type":"solid","opacity":1,"shadowColor":"rgba(0,0,0,.5)"},"show":true},"splitArea":{"show":false,"areaStyle":{"shadowOffsetX":0,"shadowOffsetY":0,"color":"rgba(250,250,250,0.3)","opacity":1,"shadowBlur":10,"shadowColor":"rgba(0,0,0,.5)"}}},"xAxis":{"axisLabel":{"borderType":"solid","rotate":0,"padding":0,"shadowOffsetX":0,"margin":4,"backgroundColor":"transparent","borderColor":"#000","shadowOffsetY":0,"color":"#fff","shadowBlur":0,"show":true,"inside":false,"ellipsis":"...","overflow":"none","borderRadius":0,"borderWidth":0,"width":"","fontSize":12,"lineHeight":24,"shadowColor":"transparent","fontWeight":"normal","height":""},"axisTick":{"show":true,"length":5,"lineStyle":{"shadowOffsetX":0,"shadowOffsetY":0,"cap":"butt","color":"#fff","shadowBlur":0,"width":1,"type":"solid","opacity":1,"shadowColor":"rgba(0,0,0,.5)"},"inside":false},"splitLine":{"lineStyle":{"shadowOffsetX":0,"shadowOffsetY":0,"cap":"butt","color":"#fff","shadowBlur":0,"width":1,"type":"solid","opacity":1,"shadowColor":"rgba(0,0,0,.5)"},"show":false},"axisLine":{"lineStyle":{"shadowOffsetX":0,"shadowOffsetY":0,"cap":"butt","color":"#fff","shadowBlur":0,"width":1,"type":"solid","opacity":1,"shadowColor":"rgba(0,0,0,.5)"},"show":true},"splitArea":{"show":false,"areaStyle":{"shadowOffsetX":0,"shadowOffsetY":0,"color":"rgba(255,255,255,.3)","opacity":1,"shadowBlur":10,"shadowColor":"rgba(0,0,0,.5)"}}},"color":["#5470c6","#91cc75","#fac858","#ee6666","#73c0de","#3ba272","#fc8452","#9a60b4","#ea7ccc"],"legend":{"padding":5,"itemGap":10,"shadowOffsetX":0,"backgroundColor":"transparent","borderColor":"#ccc","shadowOffsetY":0,"orient":"horizontal","shadowBlur":0,"bottom":"auto","itemHeight":14,"show":true,"icon":"roundRect","borderRadius":0,"lineStyle":{"shadowOffsetX":0,"shadowOffsetY":0,"color":"inherit","shadowBlur":0,"width":"auto","type":"inherit","opacity":1,"shadowColor":"transparent"},"left":"right","borderWidth":0,"width":"80%","itemWidth":25,"textStyle":{"textBorderWidth":0,"color":"#fff","textShadowColor":"transparent","ellipsis":"...","overflow":"none","fontSize":12,"lineHeight":24,"textShadowOffsetX":0,"textShadowOffsetY":0,"textBorderType":"solid","fontWeight":500,"textBorderColor":"transparent","textShadowBlur":0},"shadowColor":"rgba(0,0,0,.3)","height":"auto"},"grid":{"left":100,"containLabel":true},"series":{"symbol":"emptyCircle","itemStyle":{"borderType":"solid","shadowOffsetX":0,"borderColor":"#fff","shadowOffsetY":0,"color":"","shadowBlur":0,"borderWidth":0,"opacity":1,"shadowColor":"#000"},"showSymbol":true,"lineStyle":{"shadowOffsetX":0,"shadowOffsetY":0,"color":"","shadowBlur":0,"width":2,"type":"solid","opacity":1,"shadowColor":"#000"},"symbolSize":4},"title":{"borderType":"solid","padding":2,"shadowOffsetX":0,"backgroundColor":"transparent","borderColor":"#ccc","shadowOffsetY":0,"shadowBlur":0,"bottom":"auto","show":true,"right":"auto","top":"auto","borderRadius":0,"left":"left","borderWidth":0,"textStyle":{"textBorderWidth":0,"color":"#fff","textShadowColor":"transparent","fontSize":14,"lineHeight":24,"textShadowOffsetX":0,"textShadowOffsetY":0,"textBorderType":"solid","fontWeight":500,"textBorderColor":"#ccc","textShadowBlur":0},"shadowColor":"transparent"}},
			pie: {"backgroundColor":"transparent","yAxis":{"axisLabel":{"borderType":"solid","rotate":0,"padding":0,"shadowOffsetX":0,"margin":15,"backgroundColor":"transparent","borderColor":"#000","shadowOffsetY":0,"color":"#fff","shadowBlur":0,"show":true,"inside":false,"ellipsis":"...","overflow":"none","borderRadius":0,"borderWidth":0,"width":"","fontSize":12,"lineHeight":24,"shadowColor":"transparent","fontWeight":"normal","height":""},"axisTick":{"show":true,"length":5,"lineStyle":{"shadowOffsetX":0,"shadowOffsetY":0,"cap":"butt","color":"#fff","shadowBlur":0,"width":1,"type":"solid","opacity":1,"shadowColor":"rgba(0,0,0,.5)"},"inside":false},"splitLine":{"lineStyle":{"shadowOffsetX":0,"shadowOffsetY":0,"cap":"butt","color":"#ccc","shadowBlur":0,"width":1,"type":"solid","opacity":1,"shadowColor":"rgba(0,0,0,.5)"},"show":true},"axisLine":{"lineStyle":{"shadowOffsetX":0,"shadowOffsetY":0,"cap":"butt","color":"#fff","shadowBlur":0,"width":1,"type":"solid","opacity":1,"shadowColor":"rgba(0,0,0,.5)"},"show":true},"splitArea":{"show":false,"areaStyle":{"shadowOffsetX":0,"shadowOffsetY":0,"color":"rgba(250,250,250,0.3)","opacity":1,"shadowBlur":10,"shadowColor":"rgba(0,0,0,.5)"}}},"xAxis":{"axisLabel":{"borderType":"solid","rotate":0,"padding":0,"shadowOffsetX":0,"margin":4,"backgroundColor":"transparent","borderColor":"#000","shadowOffsetY":0,"color":"#fff","shadowBlur":0,"show":true,"inside":false,"ellipsis":"...","overflow":"none","borderRadius":0,"borderWidth":0,"width":"","fontSize":12,"lineHeight":24,"shadowColor":"transparent","fontWeight":"normal","height":""},"axisTick":{"show":true,"length":5,"lineStyle":{"shadowOffsetX":0,"shadowOffsetY":0,"cap":"butt","color":"#fff","shadowBlur":0,"width":1,"type":"solid","opacity":1,"shadowColor":"rgba(0,0,0,.5)"},"inside":false},"splitLine":{"lineStyle":{"shadowOffsetX":0,"shadowOffsetY":0,"cap":"butt","color":"#fff","shadowBlur":0,"width":1,"type":"solid","opacity":1,"shadowColor":"rgba(0,0,0,.5)"},"show":false},"axisLine":{"lineStyle":{"shadowOffsetX":0,"shadowOffsetY":0,"cap":"butt","color":"#fff","shadowBlur":0,"width":1,"type":"solid","opacity":1,"shadowColor":"rgba(0,0,0,.5)"},"show":true},"splitArea":{"show":false,"areaStyle":{"shadowOffsetX":0,"shadowOffsetY":0,"color":"rgba(255,255,255,.3)","opacity":1,"shadowBlur":10,"shadowColor":"rgba(0,0,0,.5)"}}},"color":["#5470c6","#91cc75","#fac858","#ee6666","#73c0de","#3ba272","#fc8452","#9a60b4","#ea7ccc"],"legend":{"padding":5,"itemGap":10,"shadowOffsetX":0,"backgroundColor":"transparent","borderColor":"#ccc","shadowOffsetY":0,"orient":"horizontal","shadowBlur":0,"bottom":"auto","itemHeight":14,"show":true,"icon":"roundRect","borderRadius":0,"lineStyle":{"shadowOffsetX":0,"shadowOffsetY":0,"color":"inherit","shadowBlur":0,"width":"auto","type":"inherit","opacity":1,"shadowColor":"transparent"},"left":"right","borderWidth":0,"width":"80%","itemWidth":25,"textStyle":{"textBorderWidth":0,"color":"#fff","textShadowColor":"transparent","ellipsis":"...","overflow":"none","fontSize":12,"lineHeight":24,"textShadowOffsetX":0,"textShadowOffsetY":0,"textBorderType":"solid","fontWeight":500,"textBorderColor":"transparent","textShadowBlur":0},"shadowColor":"rgba(0,0,0,.3)","height":"auto"},"grid":{"left":"100","containLabel":true},"series":{"symbol":"emptyCircle","itemStyle":{"borderType":"solid","shadowOffsetX":0,"borderColor":"#fff","shadowOffsetY":0,"color":"","shadowBlur":0,"borderWidth":0,"opacity":1,"shadowColor":"#000"},"showSymbol":true,"lineStyle":{"shadowOffsetX":0,"shadowOffsetY":0,"color":"","shadowBlur":0,"width":2,"type":"solid","opacity":1,"shadowColor":"#000"},"symbolSize":4},"title":{"borderType":"solid","padding":2,"shadowOffsetX":0,"backgroundColor":"transparent","borderColor":"#ccc","shadowOffsetY":0,"shadowBlur":0,"bottom":"auto","show":true,"right":"auto","top":"auto","borderRadius":0,"left":"left","borderWidth":0,"textStyle":{"textBorderWidth":0,"color":"#fff","textShadowColor":"transparent","fontSize":14,"lineHeight":24,"textShadowOffsetX":0,"textShadowOffsetY":0,"textBorderType":"solid","fontWeight":500,"textBorderColor":"#ccc","textShadowBlur":0},"shadowColor":"transparent"}},
			myChart0: null,
			boardDataList: [],
			dates: '',
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
    this.weiguichufaChat5();
  },
  created() {
    this.$nextTick(()=>{
		this.times()
	})
  },
  methods:{
	myChartInterval(type, xAxisData, seriesData, myChart) {
	  this.$nextTick(() => {
	    setInterval(() => {
	      let xAxis = xAxisData.shift()
	      xAxisData.push(xAxis)
	      let series = seriesData.shift()
	      seriesData.push(series)
			
			if (type == 1) {
				myChart.setOption({
				  xAxis: [{
				    data: xAxisData
				  }],
				  series: [{
				    data: seriesData
				  }]
				});
			}
			if (type == 2) {
				myChart.setOption({
				  yAxis: [{
				    data: xAxisData
				  }],
				  series: [{
				    data: seriesData
				  }]
				});
			}
	    }, $template2.back.board.bar.base.interval);
	  })
	},
	wordclouds(wordcloudData,echartsId) {
		let wordcloud = $template2.back.board.wordcloud
		wordcloud = JSON.parse(JSON.stringify(wordcloud), (k, v) => {
		  if(typeof v == 'string' && v.indexOf('function') > -1){
		    return eval("(function(){return "+v+" })()")
		  }
		  return v;
		})
		wordcloud.option.series[0].data=wordcloudData;
		
		this.myChart0 = echarts.init(document.getElementById(echartsId));
		let myChart = this.myChart0
		let img = wordcloud.maskImage
	
		if (img) {
			var maskImage = new Image();
			maskImage.src = img
			maskImage.onload = function() {
				wordcloud.option.series[0].maskImage = maskImage
				myChart.clear()
				myChart.setOption(wordcloud.option)
			}
		} else {
			delete wordcloud.option.series[0].maskImage
			myChart.clear()
			myChart.setOption(wordcloud.option)
		}
	},
    getTimeStrToDay(game_over_timestamp) {
        if (game_over_timestamp == 0)
            return "";
        var date = new Date(parseInt(game_over_timestamp));
        var now = new Date();
        var hours = date.getHours() >= 10 ? date.getHours().toString() : "0" + date.getHours();
        var minutes = date.getMinutes() >= 10 ? date.getMinutes().toString() : "0" + date.getMinutes();
        var seconds = date.getSeconds() >= 10 ? date.getSeconds().toString() : "0" + date.getSeconds();
        let arr = ["日", "一", "二", "三", "四", "五", "六"];
        let d = arr[date.getDay()]
        return date.getFullYear() + "年" + (date.getMonth() + 1) + "月" + date.getDate() + '日' + ' ' + ' ' + '星期' + d  + ' ' + "  " + hours + ":" + minutes + ":" + seconds
    },
	times() {
		setInterval(()=>{
            let date = new Date().getTime()
            this.dates = this.getTimeStrToDay(date)
		}, 1000)
	},
	filterTime(time) {
	  const date = new Date(time)
	  const Y = date.getFullYear()
	  const M = date.getMonth() + 1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1 
	  const D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
	  
	  const H = date.getHours() < 10 ? '0' + date.getHours() : date.getHours() // 小时
	  const I = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes() // 分钟
	  const S = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds() // 秒
	  
	  return `${Y}-${M}-${D} ${H}:${I}:${S}`
	},
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

//统计接口1
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
				let titleObj = this.bar.title
				titleObj.text = '车位价格'
				
				const legendObj = this.bar.legend
				
				let xAxisObj = this.bar.xAxis
				xAxisObj.type = 'category'
				xAxisObj.data = xAxis
                xAxisObj.axisLabel.rotate=70
				
				let yAxisObj = this.bar.yAxis
				yAxisObj.type = 'value'
				
				let seriesObj = {
                        data: yAxis,
                        type: 'bar'
                    }
				seriesObj = Object.assign(seriesObj , this.bar.series)

                option = {
					backgroundColor: this.bar.backgroundColor,
					color: this.bar.color,
                    title: titleObj,
					legend: legendObj,
                    tooltip: {
						trigger: 'item',
						formatter: '{b} : {c}'
                    },
                    xAxis: xAxisObj,
                    yAxis: yAxisObj,
                    series: [seriesObj]
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

//统计接口2
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
                let titleObj = this.line.title
				titleObj.text = '停车费用'
				
				const legendObj = this.line.legend
				
				let xAxisObj = this.line.xAxis
				xAxisObj.type = 'category'
				xAxisObj.boundaryGap = false
				xAxisObj.data = xAxis
                xAxisObj.axisLabel.rotate=70
				
				let yAxisObj = this.line.yAxis
				yAxisObj.type = 'value'
				
				let seriesObj = {
					data: yAxis,
					type: 'line',
				}
				seriesObj = Object.assign(seriesObj , this.line.series)
				
				option = {
                    backgroundColor: this.line.backgroundColor,
                    color: this.line.color,
                    title: titleObj,
                    legend: legendObj,
                    tooltip: {
                    	trigger: 'item',
                    	formatter: '{b} : {c}'
                    },
                    xAxis: xAxisObj,
                    yAxis: yAxisObj,
                    series: [seriesObj]
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

//统计接口3
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
				let titleObj = this.pie.title
				titleObj.text = '车位类型'
				
				const legendObj = this.pie.legend
				
				let seriesObj = {
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
				seriesObj = Object.assign(seriesObj , this.pie.series)
				
				option = {
					backgroundColor: this.pie.backgroundColor,
					color: this.pie.color,
					title: titleObj,
					legend: legendObj,
					tooltip: {
						trigger: 'item',
						formatter: '{b} : {c} ({d}%)'
					},
					series: [seriesObj]
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

//统计接口4
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
				let titleObj = this.bar.title
				titleObj.text = '用户费用'
				
				const legendObj = this.bar.legend
				
				let xAxisObj = this.bar.xAxis
				xAxisObj.type = 'value'
                xAxisObj.axisLabel.rotate=70
				
				let yAxisObj = this.bar.yAxis
				yAxisObj.type = 'category'
				yAxisObj.data = xAxis
				
				let seriesObj = {
						data: yAxis,
						type: 'bar'
					}
				seriesObj = Object.assign(seriesObj , this.bar.series)

				option = {
					backgroundColor: this.bar.backgroundColor,
					color: this.bar.color,
					title: titleObj,
					legend: legendObj,
					tooltip: {
						trigger: 'item',
						formatter: '{b} : {c}'
					},
					xAxis: xAxisObj,
					yAxis: yAxisObj,
					series: [seriesObj]
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

//统计接口1
    weiguichufaChat5() {
      this.$nextTick(()=>{
        //  chufajine
        // xingming xingming

        var weiguichufaChart5 = echarts.init(document.getElementById("weiguichufaChart5"),'macarons');
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
				let titleObj = this.bar.title
				titleObj.text = '违规处罚'
				
				const legendObj = this.bar.legend
				
				let xAxisObj = this.bar.xAxis
				xAxisObj.type = 'category'
				xAxisObj.data = xAxis
                xAxisObj.axisLabel.rotate=70
				
				let yAxisObj = this.bar.yAxis
				yAxisObj.type = 'value'
				
				let seriesObj = {
                        data: yAxis,
                        type: 'bar'
                    }
				seriesObj = Object.assign(seriesObj , this.bar.series)

                option = {
					backgroundColor: this.bar.backgroundColor,
					color: this.bar.color,
                    title: titleObj,
					legend: legendObj,
                    tooltip: {
						trigger: 'item',
						formatter: '{b} : {c}'
                    },
                    xAxis: xAxisObj,
                    yAxis: yAxisObj,
                    series: [seriesObj]
                };
                // 使用刚指定的配置项和数据显示图表。
                weiguichufaChart5.setOption(option);
				

                  //根据窗口的大小变动图表
                window.onresize = function() {
                    weiguichufaChart5.resize();
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
	
	.box5 .wordcloud {
			}
	.box5 .tables {
			}
	.box5 .echarts1 {
				background-color: rgba(255,255,255,.1);
				padding: 20px;
				margin: 0 1% 20px 35%;
				background-size: 100% 100%;
				width: 30%;
				background-image: url(http://codegen.caihongy.cn/20221029/c45a5f6646f3446db747e9c4efeae1ca.png);
				transition: 0.3s;
				height: 350px;
				order: 1;
			}
	.box5 .echarts2 {
				background-color: rgba(255,255,255,.1);
				padding: 20px;
				margin: 0 1% 20px 1%;
				background-size: 100% 100%;
				width: 30%;
				background-image: url(http://codegen.caihongy.cn/20221029/c45a5f6646f3446db747e9c4efeae1ca.png);
				transition: 0.3s;
				height: 350px;
				order: 2;
			}
	.box5 .echarts3 {
				background-color: rgba(255,255,255,.1);
				padding: 20px;
				margin: 0 1% 20px 35%;
				background-size: 100% 100%;
				width: 30%;
				background-image: url(http://codegen.caihongy.cn/20221029/c45a5f6646f3446db747e9c4efeae1ca.png);
				transition: 0.3s;
				height: 350px;
				order: 3;
			}
	.box5 .echarts4 {
				background-color: rgba(255,255,255,.1);
				padding: 20px;
				margin: 0 3% 20px 1%;
				background-size: 100% 100%;
				width: 30%;
				background-image: url(http://codegen.caihongy.cn/20221029/c45a5f6646f3446db747e9c4efeae1ca.png);
				transition: 0.3s;
				height: 350px;
				order: 4;
			}
	.box5 .echarts5 {
				background-color: rgba(255,255,255,.1);
				padding: 20px;
				margin: 0 1% 20px 1%;
				background-size: 100% 100%;
				width: 62%;
				background-image: url(http://codegen.caihongy.cn/20221029/c45a5f6646f3446db747e9c4efeae1ca.png);
				transition: 0.3s;
				height: 350px;
				order: 5;
			}
	
	.box5 .wordcloud:hover {
			}
	.box5 .tables:hover {
			}
	.box5 .echarts1:hover {
				border-radius: 8px;
				padding: 20px;
				box-shadow: 1px 1px 20px rgba(255,255,255,.12);
				margin: 0 1% 20px 35%;
				transform: translate3d(0, -10px, 0);
				z-index: 1;
				width: 30%;
				position: relative;
				height: 350px;
			}
	.box5 .echarts2:hover {
				border-radius: 8px;
				padding: 20px;
				box-shadow: 1px 1px 20px rgba(255,255,255,.12);
				margin: 0 1% 20px 1%;
				transform: translate3d(0, -10px, 0);
				z-index: 1;
				width: 30%;
				position: relative;
				height: 350px;
			}
	.box5 .echarts3:hover {
				border-radius: 8px;
				padding: 20px;
				box-shadow: 1px 1px 20px rgba(255,255,255,.12);
				margin: 0 1% 20px 35%;
				transform: translate3d(0, -10px, 0);
				z-index: 1;
				width: 30%;
				position: relative;
				height: 350px;
			}
	.box5 .echarts4:hover {
				border-radius: 8px;
				padding: 20px;
				box-shadow: 1px 1px 20px rgba(255,255,255,.12);
				margin: 0 3% 20px 1%;
				transform: translate3d(0, -10px, 0);
				z-index: 1;
				width: 30%;
				position: relative;
				height: 350px;
			}
	.box5 .echarts5:hover {
				border-radius: 8px;
				padding: 20px;
				box-shadow: 1px 1px 20px rgba(255,255,255,.12);
				transform: translate3d(0, -10px, 0);
				z-index: 1;
				position: relative;
			}
	
	// table
	.box5 .el-table /deep/ .el-table__header-wrapper thead {
			}
	
	.box5 .el-table /deep/ .el-table__header-wrapper thead tr {
			}
	
	.box5 .el-table /deep/ .el-table__header-wrapper thead tr th {
			}
	
	.box5 .el-table /deep/ .el-table__header-wrapper thead tr th .cell {
			}
	
	.box5 .el-table /deep/ .el-table__body-wrapper tbody {
			}
	
	.box5 .el-table /deep/ .el-table__body-wrapper tbody tr {
			}
	
	.box5 .el-table /deep/ .el-table__body-wrapper tbody tr td {
			}
	
		
	.box5 .el-table /deep/ .el-table__body-wrapper tbody tr:hover td {
			}
	
	.box5 .el-table /deep/ .el-table__body-wrapper tbody tr td {
			}
	
	.box5 .el-table /deep/ .el-table__body-wrapper tbody tr td .cell {
			}





</style>
