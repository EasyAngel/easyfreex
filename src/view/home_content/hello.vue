<template>
  	<div class="hello">

	    <!-- 侧边导航栏 -->
	    <div class="xm_container">
	        <div class="xm_header-navs">
	            <ul class="navs">
	                <li v-for="item in navs" v-if="item.type">
	                    <a href="javascript: void(0);" class="nav-item"
	                       @mouseenter="evtHeaderEnter(item.type)"
	                       @mouseleave="evtHeaderLeave()"
	                      >{{item.name}}
	                    </a>
	                </li>
					        <li v-else>
	                    <a :href="item.sourceUrl" target="_blank" class="nav-item">{{item.name}}</a>
	                </li>
	            </ul>
	        </div>
	 	</div>

  	  <!-- 隐藏的部分 -->
	  	<div class="hidden-menu"
	        @mouseenter="evtHeaderEnter()"
	        @mouseleave="evtHeaderLeave()"
	        v-show="headerStatus"
	        transition="fadein">
	        <ul class="menus clearfix">
	          	<li class="product" v-for="item in currentcontent" >
		            <router-link to="/home/description">

                   <div class="product-name">
                       {{item.name}}
                   </div>
		            </router-link>

	          	</li>
	        </ul>
	  	</div>

	  	<!-- 引入首页内容(轮播) -->
    	<homeContent class="homeContent"></homeContent>
  	</div>
</template>

<script>

import  yxmjs from   '../../assets/js/jquery-1.11.3.js';     //这里用到

// 引入首页内容（轮播）
import HomeContent from '@/view/home_content/home_content';
export default{
	// 首页内容（轮播）
   components:{
  			homeContent:HomeContent
  		},
   data(){
    return{
      headerStatus:false,
      hotStatus:true,
      currentcontent:"this.constrution",
      tids: '',
      name:'',

      // 侧边栏
      navs: [
        {name: '品牌简介', type: 'constrution'},
        {name: '产品类型', type: 'red'},
        {name: '护肤系列', type: 'flats'},
        {name: '绿茶系列', type: 'tv'},
        {name: '裸妆系列', type: 'box'},
        {name: '底妆系列', type: 'router'},
        {name: '素颜系列', type: 'hardware'},
        {name: '客服服务'},
        {name: '活动区'}
      ],
      // 品牌简介子目录
      constrution: [
        {name: '品牌介绍'},
        {name: '公益项目'},
        {name: 'easyfreex' },
        {name: '玩转小清新'}

      ],
      // 产品类型子目录
      red: [
        {name: '基础护理'},
        {name: '面膜'},
        {name: '洁面与卸妆'},
        {name: '防晒类型'},
        {name: '面部底妆'},

      ],
      // 护肤系列子目录
      flats: [
        {name: '绿茶精粹'},
        {name: '橄榄美品'},
        {name: '火山岩泥'},
        {name: '生机展颜'},

      ],
      // 绿茶系列子目录
      tv: [
        {name: '发酵豆'},
        {name: '雪耳'},
        {name: '温泉水' },
        {name: '九重镇纸' },

      ],
      // 裸妆系列子目录
      box: [
        {name: '底妆粉'},
        {name: '眉笔'},
        {name: '眼线笔'},
        {name: '眼影'},

      ],
      // 底妆系列子目录
      router: [
        {name: '发型'},
        {name: '隔离霜'},
        {name: '粉底'},
        {name: '遮瑕产品'},
        {name: '双用粉饼'},

      ],
      // 素颜系列
      hardware: [
        {name: 'bb霜'},
        {name: 'cc霜'},
        {name: 'dd霜'},
        {name: 'ee霜'},
        {name: 'ff霜'},

      ],

      }
   },


   methods:{

    evtHeaderEnter (menuType) {
      if (menuType) {
         this.currentcontent = this[menuType]
        $(".hidden-menu").slideDown("slow");
        }
        this.headerStatus = true;
        clearTimeout(this.tids)
    },
    evtHeaderLeave () {
        let self = this
        this.tids = setTimeout(function () {
        $(".hidden-menu").slideUp("slow");
        self.headerStatus = false
      }, 300)
    }
   },


  }
</script>
<style scoped>
body{
	margin: 0;
}
.hello{
	position: relative;
	margin-top: 25px;
}
.hello .xm_container{
	position:absolute;
	margin-left: -12%;
	margin-top: -25px;
	/*background-color: #324157;*/
}
.hello .navs{
	height:60px;
	/*width: 100px;*/
	text-align: center;
	margin: 0;
	padding: 0;
}
.hello .navs>li{
	list-style:none;
	width: 100px;
	height:100%;
	font-size: 15px;
	line-height: 60px;
	opacity: 0.8;
	background-color: #324157;
}
.hello .navs>li:hover{
	opacity: 0.8;
	background-color: #48576a;
	text-align: center;
	font-size: 20px;
}
.hello .navs>li>a{
	text-decoration:none;
	display:block;
	padding:0px 10px;
	color: #bfcbd9;
}
/*隐藏部分*/
.hello .hidden-menu {
	margin-left: -4%;
	width: 300px;
	/*height: 100%;*/
	position: absolute;
	left: 1%;
	top: 0;
	background: #d5c4d7;
	box-shadow: 0 1px 5px #ccc;
	z-index: 1000;
}
.hello .hidden-menu .menus {
	list-style: none;
	margin: 0;
}
.hello .hidden-menu .menus .product{
	color: #666666;
}
.hello .hidden-menu .menus  .product  a {
	display: block;
	padding: 0 30px;
	border-right: 1px solid #ccc;
}
.hello .hidden-menu .menus  .product  a:nth-last-child(1) {
   border-right: 0;
}
.hello .hidden-menu .product-img {
	width: 100%;
	width: 160px;
	height: 110px;
}
.hello .hidden-menu .product-name {
	width: 100%;
	height: 30px;
	margin-top: 16px;
	font-size: 12px;
	text-align: center;
}
.hello .hidden-menu .product-name:hover {
	background-color: #ffffff;
	cursor: pointer;
	font-size: 20px;
	border-radius: 5%;
	height: 30px;
}


.hello .hidden-menu .hot-word {
	position: absolute;
	top: 17px;
	right: 62px;
	z-index: 2;
	text-align: right;
}
.hello .hidden-menu .fadeOut-transition {
	transition: all .3s ease;
	opacity: 1;
}
.hello .hidden-menu .fadeOut-enter, .fadeOut-leave {
	opacity: 0;
}
.hello .hidden-menu .search-ipt {
	float: left;
	width: 240px;
	height: 100%;
	border: 0;
	outline: none;
}
/*.hello .product-name{
  text-decoration: none;
}*/
/*.*//*hello .item-name {
	float: left;
	font-size: 12px;
}
.hello .item-num {
	float: right;
	font-size: 10px;
	color: #b0b0b0;
}*/
</style>
