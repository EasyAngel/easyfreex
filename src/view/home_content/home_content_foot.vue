<template>
	<!-- 畅销产品区 -->
  	<div class="homeContent_foot">

		<!-- 左侧边 -->
  		<div class="left_aside" v-if="left_aside">

			<img src="https://www.innisfree.cn/cn_resources/images/layout/qrcode_renewal1.jpg">
			<img src="https://www.innisfree.cn/cn_resources/images/layout/qrcode_renewal2_171121.jpg">
  		</div>


  		<!-- 中间部分 -->
  		<div class="center">
			<hr style="font-size:20px;">
			<!-- 购买99元免运费区 -->
			<div>
				<!-- 第一块 -->
				<div class="center_first center_style">				
					<span class="first_left">
						<h5>EASYFREEX</h5>
					</span>
					<span class="first_left">
						<i>购买99元免运费</i>
					</span>
					<span class="first_left">
						<h6>(首单购买后赠送新会员礼遇)</h6>
					</span>
					<span class="first_left left_last">
						<router-link to="/home/hello">
				        	点击查看详情 
				    	</router-link>
					</span>
					<span class="first_left img">
						<img src="https://www.innisfree.cn/upload/product/1000008920_l.png">
					</span>
				</div>

				<!-- 第二块 -->
				<div class="center_second center_style">	
					<h4 class="second_left style_color">满300元赠</h4>
					<p class="second_left">悦赏随心水光眼影</p>			
					<span class="second_left">
						<img src="https://www.innisfree.cn/upload/product/1000011702_l.png">
					</span>
				</div>

				<!-- 第三块 -->
				<div class="center_second center_style">	
					<h4 class="second_left style_color">满500元赠</h4>
					<p class="second_left">石榴换岩起淀粉珠霜</p>			
					<span class="second_left">
						<img src="https://www.innisfree.cn/upload/product/1000010822_l.png">
					</span>
				</div>


				<!-- 第四块 -->
				<div class="center_second center_style">	
					<h4 class="second_left style_color_forth">满500元赠</h4>
					<p class="second_left">控油扩散粉</p>			
					<span class="second_left">
						<img src="https://www.innisfree.cn/upload/product/1000000317_l.png">
					</span>
				</div>
	  		</div>


	  		<!-- 新产品区 -->
	  		<div class="new_production">
	  			<h5>新产品区</h5>
	  			<!-- 分页内容（图片+标题） -->
	  			<div class="page">
						
					<div v-for="item in 10">
						<!-- 产品 -->
		  			  	<div class="pageContentAll">
		  			  			<!-- 图片加隐藏的预览、购物车、收藏	  			  		 -->
		  			  			<!-- mark -->
			  			  		<div class="pageContent" :data="tableData">
			  			 
			  			  			<div class="img">
			  			  			    <img :src=tableData[value].img />
			  			  			 </div>
								
									<!-- 隐藏的按钮 -->
				  			  		<div>
				  			  			<div class="hiddenBtn">
				  			  				<i class="fa fa-search icon" aria-hidden="true"></i>
				  			  				<br>
				  			  				预览
				  			  			</div>
				  			  			<div class="hiddenBtn">
				  			  				<i class="fa fa-gratipay icon" aria-hidden="true"></i>
				  			  				<br>
				  			  				收藏
				  			  			</div>
				  			  			<div class="hiddenBtn">
				  			  				<i class="fa fa-shopping-cart icon" aria-hidden="true"></i>
				  			  				<br>
				  			  				购物车
				  			  			</div>	 
				  			  		</div> 			  			
			  			  		</div>
				  			  		<!-- 标签 -->
			  			  			<span class="title"> 
			  			  				{{ tableData[value].span }}
			  			  			</span>
			  			  			<h6>
			  			  				{{ tableData[value].price }}
			  			  			</h6>
		  			  	</div>
					</div>

	  			</div>
				<el-pagination
		  			    layout="prev, pager, next"
		  			    :total="50" class="pageChange" :currentpage="1">
		  		</el-pagination>
	  		</div>


			<homeContentLastFoot class="homeContentLastFoot"></homeContentLastFoot>
		</div>
			

  		<!-- 右边侧栏 -->
  	    <div class="right_aside" v-if="right_aside">
  	    	<div class="right_aside_img">
  	    		<!-- 购物车 -->
  	  	    	<div class="img imgBorder">
  	  	    		<img src="https://www.innisfree.cn/cn_resources/images/layout/ico_renewal09_170717.jpg">
  	  	    	</div>
  	  	    	<!-- 钟 -->
  				<div class="img imgBorder">
  	  	    		<img src="https://www.innisfree.cn/cn_resources/images/layout/ico_renewal02_170717.jpg">
  	  	    	</div>
  	  	    	<!-- 微信 -->
  				<div class="img imgBorder">
  	  	    		<img src="https://www.innisfree.cn/cn_resources/images/layout/ico_renewal03_170717.jpg">
  	  	    	</div>
  	  	    	<!-- 正 -->
  				<div class="img">
  	  	    		<img src="https://www.innisfree.cn/cn_resources/images/layout/ico_renewal05.jpg">
  	  	    	</div>
  	  	    	<!-- QQ -->
  				<div class="img">
  					<img src="https://www.innisfree.cn/cn_resources/images/layout/ico_renewal06.jpg">
  				</div>
  				<!-- 微博 -->
  				<div class="img">
  					<img src="https://www.innisfree.cn/cn_resources/images/layout/ico_renewal07.jpg">
  				</div>
  				<!-- TOP -->
  				<div class="img">
  					<a href="#" class="img">TOP</a><!-- mark回到首页顶部 -->
  				</div>    		
  	    	</div>		
  		</div>
        

        
  	</div>
</template>
<script>
import Vue from 'vue';
import HomeContentLastFoot from '@/view/home_content/home_contentLastfoot';
export default {
	components:{
  			homeContentLastFoot:HomeContentLastFoot
  		},
	data() {
	    return {
	      	left_aside: false,
	      	right_aside:false,
	      	tableData:[],
	      	currentpage:"",
	      	img:"",
	      	value:"",
	      	banners: [
		        { text: ' 基础护理 '},
		        { text: ' 面膜 '},
		        { text: ' 洁面与卸妆 '},
		        { text: ' 防晒'}
      	   	],
      	   	banners1: [
		        { text: ' 正在进行的活动 '},
		        { text: ' 护肤中心教育 '},
		        { text: ' 防晒 '},
		        { text: ' 界面与卸妆'}	        
      	   	],
      	   	banners2: [
		        { text: ' 分享小清新 '},
		        { text: ' 绿茶农场游戏 '},
		        { text: ' easy社交圈 '},
		        { text: ' easy粉积分'}	        
      	   	],
      	   	banners3: [
		        { text: ' 分享小清新 '},
		        { text: ' 绿茶农场游戏 '},
		        { text: ' easy社交圈 '},
		        { text: ' easy粉积分'}	        
      	   	],
      	   	banners4: [
		       	{ text: ' 分享小清新 '},
		        { text: ' 绿茶农场游戏 '},
		        { text: ' easy社交圈 '},
		        { text: ' easy粉积分'}        
      	   	],
      	   	banners5: [
		       	{ text: ' 分享小清新 '},
		        { text: ' 绿茶农场游戏 '},
		        { text: ' easy社交圈 '},
		        { text: ' easy粉积分'}        
      	   	],
      	   	banners6: [
		       	{ text: ' 分享小清新 '},
		        { text: ' 绿茶农场游戏 '},
		        { text: ' easy社交圈 '},
		        { text: ' easy粉积分'}        
      	   	],
      	   	banners7: [
		       	{ text: ' 分享小清新 '},
		        { text: ' 绿茶农场游戏 '},
		        { text: ' easy社交圈 '},
		        { text: ' easy粉积分'}        
      	   	]
	    }  
	},
  	methods: {
     //滚动的函数
	    handleScroll() { 
	    	var vm = this;
		    window.onscroll = function() {
		    	       var h= document.documentElement.scrollTop || document.body.scrollTop;
		    	       if (h > 1000) { 
		    		        vm.left_aside = true;
		    		        vm.right_aside = true;
		    	        } else {
		    	         	vm.left_aside = false;
		    	         	vm.right_aside = false;
		    	        }
		    } 
	       
	    },
	    //获取json数据
    	getLists(){
    		let that = this
	      	Vue.http.get('../../static/pageChange.json').then(response  => {
	      		console.log("请求成功了");
	      		console.log(response);
	      
	      			
	      		let data = response.data.pageChangeDatas;
	      		console.log("这是我们需要的json数据",data);
	      		that.tableData = data;


	      		// 页码	
	      		that.value = Number(that.currentpage)+1;
	      		console.log(that.value);
	      	}, response => {
	      		alert("请求失败了")
	      	})
    	},
   	},
   	mounted:function(){ 
   		this.handleScroll();
   		this.getLists();
   	}
}
</script>
<style scoped>
	.homeContent_foot{
		position: relative;
		background-color: #ffffff;
	}
	.homeContent_foot .left_aside{
		/*mark想把这个fixed住*/
		width: 10%;
		height: 500px;
		float: left;
		position: fixed;
		top: 5%;
		z-index: 1000;

	}
	.homeContent_foot .left_aside img{
		margin-top: 2%;
		padding-top: 15%;
		padding-left: 25%;
	}
	.homeContent_foot .center{
		width: 80%;
		height: auto;
		height: 2000px;
		/*background-color: #999999;*/
		float: left;
		position: absolute;
		left: 10%;
		font-size: 22px;
	}
	.homeContent_foot .center .center_style{
		float: left;
		width: 24%;
		height: 300px;		
		margin-left: 3px;
		text-align: center;
	}
	.homeContent_foot .center .center_first{
		background-color: #e3f1ab;
	}
	.homeContent_foot .center .center_first .first_left,.center_second .second_left{
		position: relative;
		padding: 10%;
		color: #1f2d3d;
	}
	.homeContent_foot .center .style_color{
		color: #9a5050;
	}
	.homeContent_foot .center .style_color_forth{
		color: #c9e0c9;
	}
	.homeContent_foot .center .center_first .first_left a{
		display: block;
		text-decoration: none;
		border:1px solid green;
		text-align: center;
		color: #1f2d3d;
		width: 200px;
		margin: auto;
	}
	.homeContent_foot .center img{
		height: 130px;
	}
	.homeContent_foot .center img:hover{
		cursor: pointer;
	}
	.homeContent_foot .center .new_production{
		background-color: #ffffff;
		width: 100%;
		height: 800px;
		margin-top: 400px;
	}
	.homeContent_foot .center .new_production h5{
		text-align: center;
		background-color: #e3f1ab;
		font-size: 16px;
	}
	/*分页内容*/
	.homeContent_foot .center .new_production .pageContentAll{
		width: 200px;
		height: 300px;
		float: left;
		margin: 0px;
		padding: 25px 5px;
		padding-top: 40px;
	}
	.homeContent_foot .center .new_production .pageContent{
		width: 200px;
		height: 207px;
		margin-top: 5px;
		/*background-color: red;*/
	}
	.homeContent_foot .center .new_production .pageContent img{
		/*text-align: center;*/
		margin-left: 15%;
		width: 80%;
		height: 150px;
		
	}
	/*隐藏的内容*/
	.homeContent_foot .center .new_production .pageContent .hiddenBtn{
		font-size: 15px;
		float: left;
		background-color: #8d959c;
		width: 32.6%;
		height: 50px;
		margin-left: 1px;
		text-align: center;
		opacity: 0.8;
		color: #ffffff;
		display: none;
	}
	.homeContent_foot .center .new_production .pageContent .hiddenBtn:hover{
		cursor: pointer;
		background-color: #055321;
	}
	/*hover后显示*/
	.homeContent_foot .center .new_production .pageContentAll:hover .pageContent{
		border: 0.1px solid #c6cacd;
	}
	.homeContent_foot .center .new_production .pageContentAll:hover .hiddenBtn{
		display: block;		
	}
	
	
	/*.homeContent_foot .center .new_production .pageContent span{
		
		
	}*/
	.homeContent_foot .center .new_production .pageContent span:hover{
		cursor: pointer;		
	}

	.homeContent_foot .center .new_production .pageContentAll span{
		font-size: 14px;
		text-align: left;
	}
	.homeContent_foot .center .new_production .pageContentAll span:hover{
		cursor: pointer;
		/*text-decoration: line-through;*/
		border-bottom: 1px solid #5a5a5a;
	}
	
	.homeContent_foot .center .new_production .pageContentAll h6{
		color: #ff2525;
	}
	.homeContent_foot .center .new_production .pageChange{
		position: absolute;
		margin-top: 67%;
		margin-left: 40%;
	}

	/*右边隐藏部分*/
	.homeContent_foot .right_aside{
		width: 8%;
		height: auto;
		height: 500px;
		float: right;
		position: fixed;
		top: 5%;
		right: 0px;
		z-index: 1000;
	}

	.homeContent_foot .right_aside .img{
		width: 60px;
		padding-top: 15%;
		margin-top: 10%;
	}
	.homeContent_foot .right_aside .img.imgBorder{
		border: 1px solid #808080;
	}
	.homeContent_foot .right_aside .img a{
		text-decoration: none;
	}
</style>