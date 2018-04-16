<template>
	<!-- 轮播 -->
  	<div class="homeContent">

  	    <!-- 轮播部分 -->
  		<div class="homeContentCarousel">
	  		
			<el-carousel :interval="5000" arrow="always">
		        <el-carousel-item v-for="(item,index) in banners" :key="index">
		           <img :src="item.imgUrl" style="width:1200px;">
		        </el-carousel-item>
		    </el-carousel>
		</div>

	    <!-- 轮播脚下 -->
	    <div class="homeContentMin">
	    	<ul class="homeContentMinImg">
	    		<li v-for="item1 in banners1">
	    			<img :src="item1.imgUrl">
	    		</li>
	    	</ul>
	    </div>

		<!-- 首页内容中间部分body（home_content_body） -->
	    <homeContentBody class="homeContentBody"></homeContentBody>
  	</div>
</template>
<style scoped>
   .homeContent{
	   	top: 110px;
	   	width: 1120px;
	   	height: 1800px;
	   	z-index: -1;
    }
    /*轮播*/
    .homeContent .homeContentCarousel{
    	width: 1120px;
    	height: 400px;
    	z-index: -11;
    }
    /*轮播脚下*/
    .homeContent .homeContentMin{
    	width: 1100px;
    	height: 200px;
    	margin-top: -80px;
    	z-index: -11;
    }
    .homeContent .homeContentMin .homeContentMinImg li{
    	list-style: none;
    }
    .homeContent .homeContentMin .homeContentMinImg img{
    	width: 230px;
    	height: 150px;
    	float: left;
    	margin: 15px 20px;
    	border-radius: 5px;
    	transition: transform 1s;
    }
    .homeContent .homeContentMin .homeContentMinImg img:hover{
    	box-shadow: 0 17px 50px 0 rgba(0,0,0,0.19);
    	transform: scale(1.05,1.05);
    }
    .homeContent .homeContentBody{
    	background-color: #ffffff;
    	width: 1348px;
    	height: 460px;
    	margin-top: 3%;
    	margin-left: -200px;
    }
</style>
<script>
// 引入首页内容中间部分body（home_content_body）
import HomeContentBody from '@/view/home_content/home_content_body';
export default {
	// 首页内容中间部分body（home_content_body）
   components:{
  			homeContentBody:HomeContentBody
  		},
  // name:"slide2",
  data() {
    return {
      img:"",
      banners: [
        { imgUrl: 'https://www.innisfree.cn/cn_resources/images/banner/mainVisual_20180228.jpg'},
        {sourceUrl: '//item.mi.com/buyphone/hongmi3s', imgUrl: 'http://img.watsons.com.cn/infinityimages/sys_master/h50/h08/9021648535582.jpg'},
        {sourceUrl: '//item.mi.com/buyphone/mimax', imgUrl: 'http://img.watsons.com.cn/infinityimages/sys_master/ha3/ha7/9022985043998.jpg'},
        {sourceUrl: '//item.mi.com/buyphone/note3', imgUrl: 'http://www.pechoin.com/Uploads/pc/5a0aaf2514313.jpg'},
        {sourceUrl: '//item.mi.com/buymitv/48', imgUrl: 'http://www.pechoin.com/Uploads/pc/5a0aaf9147b61.jpg'}
      ],  
      banners1: [
        // { imgUrl: 'https://www.innisfree.cn/cn_resources/images/banner/mainVisual_20180228.jpg'},
        {sourceUrl: '//item.mi.com/buyphone/hongmi3s', imgUrl: 'http://img.watsons.com.cn/infinityimages/sys_master/h50/h08/9021648535582.jpg'},
        {sourceUrl: '//item.mi.com/buyphone/mimax', imgUrl: 'http://img.watsons.com.cn/infinityimages/sys_master/ha3/ha7/9022985043998.jpg'},
        {sourceUrl: '//item.mi.com/buyphone/note3', imgUrl: 'http://www.pechoin.com/Uploads/pc/5a0aaf2514313.jpg'},
        {sourceUrl: '//item.mi.com/buymitv/48', imgUrl: 'http://www.pechoin.com/Uploads/pc/5a0aaf9147b61.jpg'}
      ]
    }
  }
}
</script>