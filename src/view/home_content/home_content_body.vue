<template>
	<!-- 畅销产品区 -->
  	<div class="homeContent_body">

		<!-- nav -->
  		<div class="homeContent_body_nav">
  			<!-- 标题 -->
  			<h3 class="homeContent_body_title"><i>TOP10</i>畅销产品</h3>
			
			<!-- 右侧栏边-->
			<!-- <span ><img src=".../assets/img/login_head.jpg"></span> -->
			<!-- mark -->
			<span class="aside_right">
				<hr class="hr">
				<img src="https://www.innisfree.cn/upload/mainbanner/4747760641850200mainBanner.jpg">
			</span>


			<!-- tab切换 -->
			<el-tabs v-model="activeName" @tab-click="handleClick" class="tab_change">
			    <el-tab-pane label="全部" name="first">
			      	<div class="homeContent_body_carousel">
			      		<el-carousel :interval="5000" arrow="always">
			    		    <el-carousel-item v-for="item in banners" >
			    		    	<!-- 第一张图片 -->
			    		    	<router-link to="/home/description">
			    		    	    <div class="img">
				    		    		<img :src="item.imgUrl">
				    		    		<span class="img_title">
					    		    		<a href="#">
					    		    		 	{{ item.title }}
					    		    			{{ item.price }}
					    		    		</a>
				    		    				
				    		    		</span>
			    		    		</div>	
			    		    	</router-link>
			    		    	
			    		    	<!-- 第二张图片 -->
			    		    	<div class="img">
			    		    		<img :src="item.imgUrl">
				    		        	<span class="img_title">
				    		        		<a href="#">
				    		    				{{ item.title }}
				    		    				{{ item.price }}
				    		    			</a>
			    		    			</span>
			    		    	</div>
			    		    	<!-- 第三张图片 -->
			    		        <div class="img">
			    		        	<img :src="item.imgUrl">
			    		        	<span class="img_title">
			    		    				<a href="#">
				    		    				{{ item.title }}
				    		    				{{ item.price }}
				    		    			</a>
			    		    			</span>
			    		        </div>
			    		        <!-- 第四张图片 -->
			    		        <div class="img">
			    		        	<img :src="item.imgUrl">
			    		        	<span class="img_title">
			    		    				<a href="#">
				    		    				{{ item.title }}
				    		    				{{ item.price }}
				    		    			</a>
			    		    			</span>
			    		        
			    		        </div>
			    		    </el-carousel-item>
			    		</el-carousel>
			      	</div>
			    </el-tab-pane>
			    <el-tab-pane label="基础护理" name="second">
			    	<div class="homeContent_body_carousel">
			      		<el-carousel :interval="5000" arrow="always">
			    		    <el-carousel-item v-for="item in banners" >
			    		    	<!-- 第一张图片 -->
			    		    	<div class="img">
			    		    		<img :src="item.imgUrl">
			    		    		<span class="img_title">
				    		    		<a href="#">
				    		    		 	{{ item.title }}
				    		    			{{ item.price }}
				    		    		</a>
			    		    		</span>
			    		    	</div>
			    		    	<!-- 第二张图片 -->
			    		    	<div class="img">
			    		    		<img :src="item.imgUrl">
				    		        	<span class="img_title">
				    		        		<a href="#">
				    		    				{{ item.title }}
				    		    				{{ item.price }}
				    		    			</a>
			    		    			</span>
			    		    	</div>
			    		    	<!-- 第三张图片 -->
			    		        <div class="img">
			    		        	<img :src="item.imgUrl">
			    		        	<span class="img_title">
			    		    				<a href="#">
				    		    				{{ item.title }}
				    		    				{{ item.price }}
				    		    			</a>
			    		    			</span>
			    		        </div>
			    		        <!-- 第四张图片 -->
			    		        <div class="img">
			    		        	<img :src="item.imgUrl">
			    		        	<span class="img_title">
			    		    				<a href="#">
				    		    				{{ item.title }}
				    		    				{{ item.price }}
				    		    			</a>
			    		    			</span>
			    		        </div>
			    		    </el-carousel-item>
			    		</el-carousel>
			      	</div>
			    </el-tab-pane>
			    <el-tab-pane label="面膜" name="third">
					<div class="homeContent_body_carousel">
			      		<el-carousel :interval="5000" arrow="always">
			    		    <el-carousel-item v-for="item in banners1" >
			    		    	<!-- 第一张图片 -->
			    		    	<div class="img">
			    		    		<img :src="item.imgUrl">
			    		    		<span class="img_title">
				    		    		<a href="#">
				    		    		 	{{ item.title }}
				    		    			{{ item.price }}
				    		    		</a>
			    		    				
			    		    		</span>
			    		    	</div>
			    		    	<!-- 第二张图片 -->
			    		    	<div class="img">
			    		    		<img :src="item.imgUrl">
				    		        	<span class="img_title">
				    		        		<a href="#">
				    		    				{{ item.title }}
				    		    				{{ item.price }}
				    		    			</a>
			    		    			</span>
			    		    	</div>
			    		    	<!-- 第三张图片 -->
			    		        <div class="img">
			    		        	<img :src="item.imgUrl">
			    		        	<span class="img_title">
			    		    				<a href="#">
				    		    				{{ item.title }}
				    		    				{{ item.price }}
				    		    			</a>
			    		    			</span>
			    		        </div>
			    		        <!-- 第四张图片 -->
			    		        <div class="img">
			    		        	<img :src="item.imgUrl">
			    		        	<span class="img_title">
			    		    				<a href="#">
				    		    				{{ item.title }}
				    		    				{{ item.price }}
				    		    			</a>
			    		    			</span>
			    		        
			    		        </div>
			    		    </el-carousel-item>
			    		</el-carousel>
			      	</div>
			    </el-tab-pane>
			    <el-tab-pane label="身体护理" name="fifth">
					<div class="homeContent_body_carousel">
			      		<el-carousel :interval="5000" arrow="always">
			    		    <el-carousel-item v-for="item in banners2" >
			    		    	<!-- 第一张图片 -->
			    		    	<div class="img">
			    		    		<img :src="item.imgUrl">
			    		    		<span class="img_title">
				    		    		<a href="#">
				    		    		 	{{ item.title }}
				    		    			{{ item.price }}
				    		    		</a>
			    		    				
			    		    		</span>
			    		    	</div>
			    		    	<!-- 第二张图片 -->
			    		    	<div class="img">
			    		    		<img :src="item.imgUrl">
				    		        	<span class="img_title">
				    		        		<a href="#">
				    		    				{{ item.title }}
				    		    				{{ item.price }}
				    		    			</a>
			    		    			</span>
			    		    	</div>
			    		    	<!-- 第三张图片 -->
			    		        <div class="img">
			    		        	<img :src="item.imgUrl">
			    		        	<span class="img_title">
			    		    				<a href="#">
				    		    				{{ item.title }}
				    		    				{{ item.price }}
				    		    			</a>
			    		    			</span>
			    		        </div>
			    		        <!-- 第四张图片 -->
			    		        <div class="img">
			    		        	<img :src="item.imgUrl">
			    		        	<span class="img_title">
			    		    				<a href="#">
				    		    				{{ item.title }}
				    		    				{{ item.price }}
				    		    			</a>
			    		    			</span>
			    		        
			    		        </div>
			    		    </el-carousel-item>
			    		</el-carousel>
			      	</div>
			    </el-tab-pane>
			    <el-tab-pane label="彩妆" name="sixth">
					<div class="homeContent_body_carousel">
			      		<el-carousel :interval="5000" arrow="always">
			    		    <el-carousel-item v-for="item in banners3" >
			    		    	<!-- 第一张图片 -->
			    		    	<div class="img">
			    		    		<img :src="item.imgUrl">
			    		    		<span class="img_title">
				    		    		<a href="#">
				    		    		 	{{ item.title }}
				    		    			{{ item.price }}
				    		    		</a>
			    		    				
			    		    		</span>
			    		    	</div>
			    		    	<!-- 第二张图片 -->
			    		    	<div class="img">
			    		    		<img :src="item.imgUrl">
				    		        	<span class="img_title">
				    		        		<a href="#">
				    		    				{{ item.title }}
				    		    				{{ item.price }}
				    		    			</a>
			    		    			</span>
			    		    	</div>
			    		    	<!-- 第三张图片 -->
			    		        <div class="img">
			    		        	<img :src="item.imgUrl">
			    		        	<span class="img_title">
			    		    				<a href="#">
				    		    				{{ item.title }}
				    		    				{{ item.price }}
				    		    			</a>
			    		    			</span>
			    		        </div>
			    		        <!-- 第四张图片 -->
			    		        <div class="img">
			    		        	<img :src="item.imgUrl">
			    		        	<span class="img_title">
			    		    				<a href="#">
				    		    				{{ item.title }}
				    		    				{{ item.price }}
				    		    			</a>
			    		    			</span>
			    		        
			    		        </div>
			    		    </el-carousel-item>
			    		</el-carousel>
			      	</div>
			    </el-tab-pane>
			    <el-tab-pane label="洁面与卸妆" name="seventh">
			    	<div class="homeContent_body_carousel">
			      		<el-carousel :interval="5000" arrow="always">
			    		    <el-carousel-item v-for="item in banners4">
			    		    	<!-- 第一张图片 -->
			    		    	<div class="img">
			    		    		<img :src="item.imgUrl">
			    		    		<span class="img_title">
				    		    		<a href="#">
				    		    		 	{{ item.title }}
				    		    			{{ item.price }}
				    		    		</a>
			    		    				
			    		    		</span>
			    		    	</div>
			    		    	<!-- 第二张图片 -->
			    		    	<div class="img">
			    		    		<img :src="item.imgUrl">
				    		        	<span class="img_title">
				    		        		<a href="#">
				    		    				{{ item.title }}
				    		    				{{ item.price }}
				    		    			</a>
			    		    			</span>
			    		    	</div>
			    		    	<!-- 第三张图片 -->
			    		        <div class="img">
			    		        	<img :src="item.imgUrl">
			    		        	<span class="img_title">
			    		    				<a href="#">
				    		    				{{ item.title }}
				    		    				{{ item.price }}
				    		    			</a>
			    		    			</span>
			    		        </div>
			    		        <!-- 第四张图片 -->
			    		        <div class="img">
			    		        	<img :src="item.imgUrl">
			    		        	<span class="img_title">
			    		    				<a href="#">
				    		    				{{ item.title }}
				    		    				{{ item.price }}
				    		    			</a>
			    		    			</span>
			    		        
			    		        </div>
			    		    </el-carousel-item>
			    		</el-carousel>
			      	</div>
			    </el-tab-pane>
			    <el-tab-pane label="面部底妆" name="eighth">
					<div class="homeContent_body_carousel">
			      		<el-carousel :interval="5000" arrow="always">
			    		    <el-carousel-item v-for="item in banners5" >
			    		    	<!-- 第一张图片 -->
			    		    	<div class="img">
			    		    		<img :src="item.imgUrl">
			    		    		<span class="img_title">
				    		    		<a href="#">
				    		    		 	{{ item.title }}
				    		    			{{ item.price }}
				    		    		</a>
			    		    				
			    		    		</span>
			    		    	</div>
			    		    	<!-- 第二张图片 -->
			    		    	<div class="img">
			    		    		<img :src="item.imgUrl">
				    		        	<span class="img_title">
				    		        		<a href="#">
				    		    				{{ item.title }}
				    		    				{{ item.price }}
				    		    			</a>
			    		    			</span>
			    		    	</div>
			    		    	<!-- 第三张图片 -->
			    		        <div class="img">
			    		        	<img :src="item.imgUrl">
			    		        	<span class="img_title">
			    		    				<a href="#">
				    		    				{{ item.title }}
				    		    				{{ item.price }}
				    		    			</a>
			    		    			</span>
			    		        </div>
			    		        <!-- 第四张图片 -->
			    		        <div class="img">
			    		        	<img :src="item.imgUrl">
			    		        	<span class="img_title">
			    		    				<a href="#">
				    		    				{{ item.title }}
				    		    				{{ item.price }}
				    		    			</a>
			    		    			</span>
			    		        
			    		        </div>
			    		    </el-carousel-item>
			    		</el-carousel>
			      	</div>
			    </el-tab-pane>
			    <el-tab-pane label="男士系列" name="ninth">
					<div class="homeContent_body_carousel">
			      		<el-carousel :interval="5000" arrow="always">
			    		    <el-carousel-item v-for="item in banners6" >
			    		    	<!-- 第一张图片 -->
			    		    	<div class="img">
			    		    		<img :src="item.imgUrl">
			    		    		<span class="img_title">
				    		    		<a href="#">
				    		    		 	{{ item.title }}
				    		    			{{ item.price }}
				    		    		</a>
			    		    				
			    		    		</span>
			    		    	</div>
			    		    	<!-- 第二张图片 -->
			    		    	<div class="img">
			    		    		<img :src="item.imgUrl">
				    		        	<span class="img_title">
				    		        		<a href="#">
				    		    				{{ item.title }}
				    		    				{{ item.price }}
				    		    			</a>
			    		    			</span>
			    		    	</div>
			    		    	<!-- 第三张图片 -->
			    		        <div class="img">
			    		        	<img :src="item.imgUrl">
			    		        	<span class="img_title">
			    		    				<a href="#">
				    		    				{{ item.title }}
				    		    				{{ item.price }}
				    		    			</a>
			    		    			</span>
			    		        </div>
			    		        <!-- 第四张图片 -->
			    		        <div class="img">
			    		        	<img :src="item.imgUrl">
			    		        	<span class="img_title">
			    		    				<a href="#">
				    		    				{{ item.title }}
				    		    				{{ item.price }}
				    		    			</a>
			    		    			</span>
			    		        
			    		        </div>
			    		    </el-carousel-item>
			    		</el-carousel>
			      	</div>
			    </el-tab-pane>
			    <el-tab-pane label="女士系列" name="tenth">
					<div class="homeContent_body_carousel">
			      		<el-carousel :interval="5000" arrow="always">
			    		    <el-carousel-item v-for="item in banners7">
			    		    	<!-- 第一张图片 -->
			    		    	<div class="img">
			    		    		<img :src="item.imgUrl">
			    		    		<span class="img_title">
				    		    		<a href="#">
				    		    		 	{{ item.title }}
				    		    			{{ item.price }}
				    		    		</a>
			    		    				
			    		    		</span>
			    		    	</div>
			    		    	<!-- 第二张图片 -->
			    		    	<div class="img">
			    		    		<img :src="item.imgUrl">
				    		        	<span class="img_title">
				    		        		<a href="#">
				    		    				{{ item.title }}
				    		    				{{ item.price }}
				    		    			</a>
			    		    			</span>
			    		    	</div>
			    		    	<!-- 第三张图片 -->
			    		        <div class="img">
			    		        	<img :src="item.imgUrl">
			    		        	<span class="img_title">
			    		    				<a href="#">
				    		    				{{ item.title }}
				    		    				{{ item.price }}
				    		    			</a>
			    		    			</span>
			    		        </div>
			    		        <!-- 第四张图片 -->
			    		        <div class="img">
			    		        	<img :src="item.imgUrl">
			    		        	<span class="img_title">
			    		    				<a href="#">
				    		    				{{ item.title }}
				    		    				{{ item.price }}
				    		    			</a>
			    		    			</span>
			    		        
			    		        </div>
			    		    </el-carousel-item>
			    		</el-carousel>
			      	</div>
			    </el-tab-pane>
			    <el-tab-pane label="儿童系列" name="eleventh">
					<div class="homeContent_body_carousel">
			      		<el-carousel :interval="5000" arrow="always">
			    		    <el-carousel-item v-for="item in banners8">
			    		    	<!-- 第一张图片 -->
			    		    	<div class="img">
			    		    		<img :src="item.imgUrl">
			    		    		<span class="img_title">
				    		    		<a href="#">
				    		    		 	{{ item.title }}
				    		    			{{ item.price }}
				    		    		</a>
			    		    				
			    		    		</span>
			    		    	</div>
			    		    	<!-- 第二张图片 -->
			    		    	<div class="img">
			    		    		<img :src="item.imgUrl">
				    		        	<span class="img_title">
				    		        		<a href="#">
				    		    				{{ item.title }}
				    		    				{{ item.price }}
				    		    			</a>
			    		    			</span>
			    		    	</div>
			    		    	<!-- 第三张图片 -->
			    		        <div class="img">
			    		        	<img :src="item.imgUrl">
			    		        	<span class="img_title">
			    		    				<a href="#">
				    		    				{{ item.title }}
				    		    				{{ item.price }}
				    		    			</a>
			    		    			</span>
			    		        </div>
			    		        <!-- 第四张图片 -->
			    		        <div class="img">
			    		        	<img :src="item.imgUrl">
			    		        	<span class="img_title">
			    		    				<a href="#">
				    		    				{{ item.title }}
				    		    				{{ item.price }}
				    		    			</a>
			    		    			</span>
			    		        
			    		        </div>
			    		    </el-carousel-item>
			    		</el-carousel>
			      	</div>
			    </el-tab-pane>
			    <el-tab-pane label="防晒系列" name="twelfth">
					<div class="homeContent_body_carousel">
			      		<el-carousel :interval="5000" arrow="always">
			    		    <el-carousel-item v-for="item in banners9">
			    		    	<!-- 第一张图片 -->
			    		    	<div class="img">
			    		    		<img :src="item.imgUrl">
			    		    		<span class="img_title">
				    		    		<a href="#">
				    		    		 	{{ item.title }}
				    		    			{{ item.price }}
				    		    		</a>
			    		    				
			    		    		</span>
			    		    	</div>
			    		    	<!-- 第二张图片 -->
			    		    	<div class="img">
			    		    		<img :src="item.imgUrl">
				    		        	<span class="img_title">
				    		        		<a href="#">
				    		    				{{ item.title }}
				    		    				{{ item.price }}
				    		    			</a>
			    		    			</span>
			    		    	</div>
			    		    	<!-- 第三张图片 -->
			    		        <div class="img">
			    		        	<img :src="item.imgUrl">
			    		        	<span class="img_title">
			    		    				<a href="#">
				    		    				{{ item.title }}
				    		    				{{ item.price }}
				    		    			</a>
			    		    			</span>
			    		        </div>
			    		        <!-- 第四张图片 -->
			    		        <div class="img">
			    		        	<img :src="item.imgUrl">
			    		        	<span class="img_title">
			    		    				<a href="#">
				    		    				{{ item.title }}
				    		    				{{ item.price }}
				    		    			</a>
			    		    			</span>
			    		        
			    		        </div>
			    		    </el-carousel-item>
			    		</el-carousel>
			      	</div>
			    </el-tab-pane>
			    <el-tab-pane label="美白系列" name="thirteenth">
					<div class="homeContent_body_carousel">
			      		<el-carousel :interval="5000" arrow="always">
			    		    <el-carousel-item v-for="item in banners10" >
			    		    	<!-- 第一张图片 -->
			    		    	<div class="img">
			    		    		<img :src="item.imgUrl">
			    		    		<span class="img_title">
				    		    		<a href="#">
				    		    		 	{{ item.title }}
				    		    			{{ item.price }}
				    		    		</a>
			    		    				
			    		    		</span>
			    		    	</div>
			    		    	<!-- 第二张图片 -->
			    		    	<div class="img">
			    		    		<img :src="item.imgUrl">
				    		        	<span class="img_title">
				    		        		<a href="#">
				    		    				{{ item.title }}
				    		    				{{ item.price }}
				    		    			</a>
			    		    			</span>
			    		    	</div>
			    		    	<!-- 第三张图片 -->
			    		        <div class="img">
			    		        	<img :src="item.imgUrl">
			    		        	<span class="img_title">
			    		    				<a href="#">
				    		    				{{ item.title }}
				    		    				{{ item.price }}
				    		    			</a>
			    		    			</span>
			    		        </div>
			    		        <!-- 第四张图片 -->
			    		        <div class="img">
			    		        	<img :src="item.imgUrl">
			    		        	<span class="img_title">
			    		    				<a href="#">
				    		    				{{ item.title }}
				    		    				{{ item.price }}
				    		    			</a>
			    		    			</span>
			    		        
			    		        </div>
			    		    </el-carousel-item>
			    		</el-carousel>
			      	</div>
			    </el-tab-pane>
			  </el-tabs>
  		</div>
  	    <!-- 首页内容脚部部分foot（home_content_foot）“购买99元免邮费” -->
	    <homeContentFoot class="homeContentFoot"></homeContentFoot>
  	</div>
</template>
<style scoped>
   .homeContent_body i{
   		color: #ff0000;
   }
   .homeContent_body .homeContent_body_title{
   		margin-left: 5%;
   }
   .homeContent_body .homeContent_body_nav .aside_right{
   		float: left;
   		/*width: 360px;*/
   		width: 25%;
   		height: 300px;
   		margin-top: 3%;
   		/*background-color: red;*/
   }
   .homeContent_body .homeContent_body_nav .aside_right img{
   		width: 90%;
   		margin-top: 5%;
   		margin-left: 8%;
   		height: 315px;
   }
   .homeContent_body .tab_change{
   		margin-left: 25%;
   		margin-top: -330px;
   		float: left;
   		width: 75%;
   }
   .homeContent_body .homeContent_body_carousel{
   		width: 100%;
   		height: 255px;
   }
   .homeContent_body .homeContent_body_carousel:hover{
   		cursor: pointer;
   }
   .homeContent_body .homeContent_body_carousel .img{
   		width: 200px;
   		height: 250px;
   		/*border: 1px solid #aaaaaa;*/
   		border: 1px solid #d1dbe5;
   		border-radius: 5px;
   		display: inline-block;
   		margin-left: 35px;
   		/*margin-top: 10px;*/
   }
   .homeContent_body .homeContent_body_carousel .img:hover{
   		border: 1px solid #aaaaaa;
   }
   .homeContent_body .homeContent_body_carousel img{
   		width: 200px;
   		height: 180px;
   		transition: transform 1s;
   }
   .homeContent_body .homeContent_body_carousel img:hover{
   		transform: scale(1.05,1.05);
   		cursor: pointer;
   }
    .homeContent_body .homeContent_body_carousel .img .img_title{
		margin-left: 30%;
    }
    .homeContent_body .homeContent_body_carousel .img .img_title a{
    	text-decoration: none;
    	color: black;
    }
    .homeContent_body .homeContent_body_carousel .img .img_title a:hover{
		color: blue;
		text-decoration: line-through;
    }
    .homeContent_body .homeContentFoot{
    	width: 100%;
    	height: 800px;
    	/*background-color: red;*/
    	margin-top: 32%;
    }
</style>
<script>
// 引入首页内容脚部部分foot（home_content_foot）
import HomeContentFoot from '@/view/home_content/home_content_foot';
export default {
   // 首页内容脚部部分foot（home_content_foot）
   components:{
  			homeContentFoot:HomeContentFoot
  		},
  name:"slide2",
  data() {
    return {
    	// 刷新时的定位哪一个
     	activeName: 'first',
     	banners: [
        { imgUrl: 'https://www.innisfree.cn/upload/product/1000008920_l.png',title:'精华',price:'$100'},
        {imgUrl: 'https://www.innisfree.cn/upload/product/1000010940_l.png',title:'精华',price:'$100'}
      ],
      banners1: [
        {imgUrl: 'https://www.innisfree.cn/upload/product/1000000721_l.png',title:'精华',price:'$100'},
        {imgUrl: 'https://www.innisfree.cn/upload/product/1000010940_l.png',title:'精华',price:'$100'}
      ],
      banners2: [
        {imgUrl: 'https://www.innisfree.cn/upload/product/1000011340_l.png',title:'精华',price:'$100'},
        {imgUrl: 'https://www.innisfree.cn/upload/product/1000010940_l.png',title:'精华',price:'$100'}
      ],
      banners3: [
        {imgUrl: 'https://www.innisfree.cn/upload/product/1000011360_l.png',title:'精华',price:'$100'},
        {imgUrl: 'https://www.innisfree.cn/upload/product/1000010940_l.png',title:'精华',price:'$100'}
      ],
      banners4: [
        {imgUrl: 'https://www.innisfree.cn/upload/product/1000004343_large.png',title:'精华',price:'$100'},
        {imgUrl: 'https://www.innisfree.cn/upload/product/1000011702_l.png',title:'精华',price:'$100'}
      ],
      banners5: [
        {imgUrl: 'https://www.innisfree.cn/upload/product/1000000317_l.png',title:'精华',price:'$100'},
        {imgUrl: 'https://www.innisfree.cn/upload/product/1000001681_l.png',title:'精华',price:'$100'}
      ],
      banners6: [
        {imgUrl: 'https://www.innisfree.cn/upload/product/1000004343_large.png',title:'精华',price:'$100'},
        {imgUrl: 'https://www.innisfree.cn/upload/product/1000011702_l.png',title:'精华',price:'$100'}
      ],
      banners7: [
        {imgUrl: 'https://www.innisfree.cn/upload/product/1000011643_l.png',title:'精华',price:'$100'},
        {imgUrl: 'https://www.innisfree.cn/upload/product/1000011702_l.png',title:'精华',price:'$100'}
      ],
      banners8: [
        {imgUrl: 'https://www.innisfree.cn/upload/product/1000009800_l.jpg',title:'精华',price:'$100'},
        {imgUrl: 'https://www.innisfree.cn/upload/product/1000009445_l.png',title:'精华',price:'$100'}
      ],
      banners9: [
        {imgUrl: 'https://www.innisfree.cn/upload/product/1000008681_l.png',title:'精华',price:'$100'},
        {imgUrl: 'https://www.innisfree.cn/upload/product/1000005120_large.png',title:'精华',price:'$100'}
      ],
      banners10: [
        {imgUrl: 'https://www.innisfree.cn/upload/product/1000007743_l.png',title:'精华',price:'$100'},
        {imgUrl: 'https://www.innisfree.cn/upload/product/1000008420_l.png',title:'精华',price:'$100'}
      ]
    }  
  },
  methods:{
     // tab方法,在控制台输出
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
}
// var aImages = document.images; 
// 		loadImg(aImages); 
// 		window.onscroll = function(){ 
// 			loadImg(aImages); 
// 		}; 
// 		function loadImg(arr){ 
// 			for( var i = 0,len = arr.length; i < len; i++){ 
// 				if(arr[i].getBoundingClientRect().top < document.documentElement.clientHeight && !arr[i].isLoad){ 
// 					arr[i].isLoad = true; 
// 					arr[i].style.cssText = "transition: ''; opacity: 0;" 
// 				if(arr[i].dataset){ 
// 					aftLoadImg(arr[i],arr[i].dataset.original); 
// 				}else{ 
// 					aftLoadImg(arr[i],arr[i].getAttribute("data-original")); 
// 			} 
// 		(function(i){ 
// 			setTimeout(function(){ 
// 				arr[i].style.cssText = "transition: 1s; opacity: 1;" 
// 			},16) 
// 		})(i); 
// 	} 
// } 
// } 
// 		function aftLoadImg(obj,url){ 
// 				var oImg = new Image(); 
// 				oImg.onload = function(){ 
// 				obj.src = oImg.src; 
// 				} 
// 				oImg.src = url; 
// 		} 
 
</script>