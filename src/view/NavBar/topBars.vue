<template>
	<div class="top">
		<el-row>
			<!-- <el-button class="barsBtn">
				<i class="fa fa-bars" aria-hidden="true"></i>
			</el-button> -->

			<!-- logo图片 -->
			 <i class="Img">
				<img src="../../assets/img/logo.jpg">

				
			 </i>
			 <!-- 商店名称 -->
				<i class="company">easyfreex</i>
			<span class="font-time">今天&nbsp;{{ time.month }}&nbsp;月{{ time.day }}&nbsp;日&nbsp;&nbsp;{{ todos[time.Day] }}&nbsp;&nbsp;{{ time.hours }}:{{ time.minutes }}</span>
			<ul class="menu2">
				<!-- <li> -->
					<!-- <el-dropdown class="dropdown"> -->
					    <!-- <span class="el-dropdown-link dropdown-link"> -->
					   	 	<!-- <i class="Img">
					   	 		<img src="../../assets/logo.png">
					   	 	</i> -->
					   	 	<!-- <span>{{per.name}}</span> -->
					    <!-- </span> -->
					    <!-- <el-dropdown-menu slot="dropdown">
						    <el-dropdown-item>
						    	<router-link to='/home/personal' >个人信息</router-link>
						    </el-dropdown-item>
						    <el-dropdown-item>修改密码</el-dropdown-item> 
					  	</el-dropdown-menu> -->
					<!-- </el-dropdown> -->
				<!-- </li> -->
				<li>
					<router-link to='/home/login' ><i class="fa fa-user-o" aria-hidden="true"></i>登录</router-link>
					
				</li>
				<li>
					<i class="fa fa-address-book-o" aria-hidden="true"></i>注册
				</li>
				<li>
					<i class="fa fa-car" aria-hidden="true"></i>购物车
				</li>
				<li>
					<i class="fa fa-sign-in" aria-hidden="true"></i>退出
				</li>
			</ul>
		</el-row>
	</div>
</template>
<style type="text/css" scoped>
	.top{
		line-height: 100px;
		background: #ffffff;
		/*position: fixed;*/
		/*margin-left: 20%;*/
	}
	.top .Img{
		width: 150px;
		height: 100px;
		position: relative;
	}
	.top .Img img{
		width: 150px;
		height: 80px;
		padding-left: 120px;
	}
	.top .company{
		position: absolute;
		padding-top: 38px;
		margin-left: -120px;
		color: #0088a5;
	}
	/*三横导航按钮*/
	.top .barsBtn{
		border: 0;
		border-radius: 0;
		background: #f1f1f1;
		width: 50px;
		height: 50px;
	}
	
	/*时间*/
	.top .font-time{
		margin-left: 20%;
	}
	.top .font-time,.top .dropdown,.top .menu2 li{
		color: #666;
		font-size: 14px;
	}
	.top .menu2{
		float: right;
		margin-top: 0px;
		margin-bottom: 0px;
		margin-right: 5%;
	}
	.top .menu2 li{
		display: inline-block;
		list-style: none;
		text-align: center;
		margin-left: 30px;
	}
	.top .menu2 li i{
		margin-right: 10px;
	}
	.top img{
		width: 30px;
		height: 30px;
		vertical-align: middle;   /*使得图片垂直居中*/
	}
	.top .dropdown-link{
		cursor: pointer;
	}
</style>
<script>
	import store from '../../store';
	var date=new Date();
  	export default {
  		data() {
	    	return {
	    		per:store.state.per,
	    		time:{
	    			month:date.getMonth()+1,
	    			day:date.getDate(),
	    			Day:date.getDay(),
	    			hours:date.getHours(),
	    			minutes:date.getMinutes()
	    		},
	    		todos:["周日","周一","周二","周三","周四","周五","周六"]
	    	}
   		}
  	}
</script>