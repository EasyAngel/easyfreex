<template>
	<div class="community">
		<div class="lazyimg">
			<img v-lazy="item.imgUrl" v-for="item in imglist" alt="">
			<div class="info">
                                   <h5>红酒磨砂啫喱水 180ml </h5>
                                   <ul class="desc">
                                       <li>用户名: <span class="dd">MILK</span></li>
                                       <li>皮肤问题: <span class="dd">基础护理,洁面与卸妆,面膜,底妆与防晒,身体护理,美容工具,体验套装</span></li>
                                   </ul>
                               </div>
		</div>
		<!-- <homeContentLastFoot class="homeContentLastFoot"></homeContentLastFoot>  -->
	</div>
</template>
<style scoped>
	.community{
		width: 80%;
		height: 800px;
	}
	.community .lazyimg img{
		width: 288px;
        height: 288px;
	}
	.community .lazyimg .info{
    display: block;
    min-height: 73px;
    margin-top: 5px;
    text-align: center;
    background: url(/cn_resources/images/community/BG_bestPhotoReviewinfo.gif) no-repeat left top;
	}

</style>
<script>
	import HomeContentLastFoot from '@/view/home_content/home_contentLastfoot';
	export default{	
		components:{
	  			homeContentLastFoot:HomeContentLastFoot
	  		},	
		data(){
			
			return{
				imglist: [
	       			 {imgUrl: '../../../static/img/commu1.jpg'},
	        		{imgUrl: '../../../static/img/commu2.jpg'},
	        		{imgUrl: '../../../static/img/commu3.jpg'},
	        		{imgUrl: '../../../static/img/commu4.jpg'},
	        		{imgUrl: '../../../static/img/commu5.jpg'}
	        	]
			}
				
			
		},
		methods:{
				
		},
		mounted:function(){
	  	
	}
}
</script>