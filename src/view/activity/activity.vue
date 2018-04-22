<template>
	<div class="activity">
		<div class="actiContent">
		   <div class="title">
			   	<h4>正在进行的活动</h4>
				<p><i>快来参加EasyFreex为您准备的各种优惠好礼活动吧！</i></p>
		   </div>
			<!-- <hr> -->
			<div class="actibody">
				<div class="actibody1">
					<img src="https://www.innisfree.cn/upload/event/7310759313107832_banner.jpg" style="width: 350px;height: 180px;">
					<div class="right">
						<h4 class="rightbtn">4月官网专享</h4>
						<p class="csbtn"><img src="https://www.innisfree.cn/cn_resources/images/common/icon_eventType2.gif"></p>
						<li class="csbtn">活动时间：2018-03-31~2018-04-30</li>
					</div>
				</div>
				<div class="actibody1">
					<img src="https://www.innisfree.cn/upload/event/7310467032805319_banner.jpg" style="width: 350px;height: 180px;">
					<div class="right">
						<h4 class="rightbtn">4月买赠档</h4>
						<p class="csbtn"><img src="https://www.innisfree.cn/cn_resources/images/common/icon_eventType2.gif"></p>
						<li class="csbtn">活动时间：2018-03-31~2018-04-30</li>
					</div>
				</div>
				<div class="actibody1">
					<img src="https://www.innisfree.cn/upload/event/27601489624942433_banner.jpg" style="width: 350px;height: 180px;">
					<div class="right">
						<h4 class="rightbtn">2018 会员制度升级</h4>
						<p class="csbtn"><img src="https://www.innisfree.cn/cn_resources/images/common/icon_eventType2.gif"></p>
						<li class="csbtn">活动时间：2018-03-31~2018-04-30</li>
					</div>
				</div>
			</div>
		</div>
		<homeContentLastFoot class="homeContentLastFoot"></homeContentLastFoot> 
	</div>
</template>
<style scoped>
	.activity{
		/*position: absolute;*/
		margin-top: 30px;
		/*margin-left: 320px;*/
	}
	.activity .title h4{
		font-size: 15px;
	}
	.activity .title p{
		font-size: 12px;
		color: #666666;
		margin-top: 10px;
	}
	.activity .actibody{
		margin-top: 80px;
	}
	.activity .actibody .right{
		/*margin-top: 80px;*/
		float: right;
		margin-right: 480px;
	}
	.activity .actibody .right .rightbtn{
		line-height: 1.6;
    	font-size: 14px;
    	cursor: pointer;
    	color: #666666;
	}
	.activity .actibody .right .csbtn{
		margin-top: 12px;
		font-weight: bold;
    	color: #777777;
    	font-size: 12px;
	}
	.activity .actibody1{
		 margin-top: 30px;
	}
	.activity .homeContentLastFoot{
		width: 90%;
		margin-top: 100px;
	}
</style>
<script>
	import HomeContentLastFoot from '@/view/home_content/home_contentLastfoot';
	export default{	
		components:{
	  			homeContentLastFoot:HomeContentLastFoot
	  		},	
		data(){
			
			return{}
				
			
		},
		methods:{
				
		},
		mounted:function(){
	  	
	}
}
</script>