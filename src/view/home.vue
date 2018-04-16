<template>
	<div class ="headBar" >
	<!-- v-loading="loading2"
    element-loading-text="拼命加载中" element-loading-background="rgba(0, 0, 0, 0.5)" -->
		<!-- logo栏 -->
		<topBars class="topbar"></topBars>
		<!-- 横导航 -->
		<el-menu class="el-menu-vertical-demo menu" theme="dark">
			<el-menu-item index="1" class="menu_item">
			    <!-- 页面切换 -->
			    <router-link to="/home/hello">
			        <i class="fa fa-home icon" aria-hidden="true"></i>首页 
			    </router-link>
			</el-menu-item>

			<el-menu-item index="2" class="menu_item">
			   <router-link to="/home/search">
			      <i class="fa fa-search icon" aria-hidden="true"></i>查询
			   </router-link> 
			</el-menu-item>

			<el-menu-item index="3" class="menu_item">
				<!-- <router-link to="/home/arrange"> -->
			    	<i class="fa fa-calendar icon" aria-hidden="true"></i>品牌介绍
			    <!-- </router-link> -->
			</el-menu-item>

			<el-menu-item index="4" class="menu_item">
				<!-- <router-link to="/home/reservation"> -->
			   		<i class="fa fa-clock-o icon" aria-hidden="true"></i>购物
			   	<!-- </router-link> -->
			</el-menu-item>

			<el-menu-item index="5" class="menu_item">
				<!-- <router-link to="/home/Inquiry"> -->
			    	<i class="fa fa-plus-square icon" aria-hidden="true"></i>活动
			    <!-- </router-link> -->
			</el-menu-item>

			<el-menu-item index="6" class="menu_item">
				<!-- <router-link to="/home/project"> -->
			    	<i class="fa fa-folder-open-o icon" aria-hidden="true"></i>社区
			    <!-- </router-link> -->
			</el-menu-item>

			<el-menu-item index="7" class="menu_item">
				<router-link to="/home/user">
			    	<i class="fa fa-desktop icon" aria-hidden="true"></i>个人中心
			    </router-link>
			</el-menu-item>
		</el-menu>
		<!-- <topBars class="topbar"></topBars> -->
		<router-view class="content"></router-view>	
	</div>
</template>
<style scoped>
	/*.headBarelement-loading-text{
		margin-top: -111px;
	}*/
	.headBar .menu{
		width: 100%;
		height: auto;
		margin-top: 0px;
		/*position: fixed;*/
		top: 0;
	}
	.headBar .menu .menu_item{
		margin-left: 2.5%;
		margin-right: 2.5%;
        display: inline-block;
	}
	.headBar .menu a{
		color: #bfcbd9;
		text-decoration: none;
	}
	.headBar a.router-link-active{
		color: #20a0ff;
		text-decoration: none;
	}
	/*导航条图标*/
	.headBar .icon{
		padding-left: 15px;
		padding-right: 15px;
	}
	/*侧边栏内容*/
	.headBar .content{
		margin-left: 200px;
	}
	/*头顶的导航*/
	.headBar .topbar{
		padding: 0;
		margin-top: 0;
		/*margin-left: 200px;*/
	}
	
</style>
<script>
	import TopBars from '@/view/NavBar/topBars';
  	export default {
  		components:{
  			topBars:TopBars
  		},
  		data() {
	      return {
	      	 // loading2: true
	      }
  		}
  	}
</script>