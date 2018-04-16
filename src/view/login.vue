<template>
	<div class="login">
		<div class="login-container">
			<el-form :model="loginForm" :rules="loginRules" ref="loginForm" class="card-box login-form">
			    <!-- title -->
			    <h1 class="title">化妆品购物商城</h1>

			    <!-- 头像图标 -->
			    <span class="logo_head"><img src="../assets/img/login_head.jpg"></span>

			    <!-- 用户登录信息 -->
				<div class="user_info">

			    <el-form-item prop="userName" class="item userItem">

			    	<!-- 用户名图标 -->
			        <span class="svg-container">
			        	<i class="fa fa-user-o" aria-hidden="true"></i>
			        </span>

			        <!-- 用户名输入框 -->
			        <el-input name="userName" type="text" v-model="loginForm.userName"  placeholder="用户名" class="input-content"></el-input>

			    </el-form-item>


			    <!-- 用户输入密码块 -->
			    <el-form-item prop="password" class="item">

					<!-- 密码图标 -->
			        <span class="svg-container">
			        	<i class="fa fa-lock" aria-hidden="true"></i>
			        </span>

			        <!-- 密码输入框 -->
			        <el-input name="password" type="password" @keyup.enter.native="handleLogin" v-model.number="loginForm.password"  placeholder="密码" class="input-content"></el-input>

			    </el-form-item>




			    <!-- 按钮块 ：登录按钮，注册按钮-->
			    <el-form-item>

			    	<!-- 登录按钮 -->
			        <el-button type="primary" class="btn" @click="handleLogin">
			            登录
			        </el-button>
					
					<!-- 注册按钮 -->
			        <el-button type="primary" class="btn">
			            <router-link to="/register">注册</router-link>
			        </el-button>

			    </el-form-item>

			    </div>
			</el-form>
		</div>
		<router-view></router-view>
	</div>
</template>
<style scoped>
	.login .login-container{
		position: relative;
		width: 500px;
		height: 280px;
		margin: 15% auto;
		background: #d5c4d7;
		text-align: center;
		border-radius: 5px;
	}
	.login .login-container .title{
		position: relative;
		top: 30px;
		font-family: "华文行楷"
	}
	.login .logo_head img{
		width: 80px;
		height: 80px;
		border-radius: 100%;
		float: left;
		margin-top: 50px;
		margin-left: 60px;
		
	}
	.login .user_info{
		position: relative;
		float: left;
		margin-left: 20px;
		margin-top: 50px;
	}
	/*.login .login-container .userItem{
		margin-top: 50px;
	}*/
	
	.login .login-container .item .svg-container{
		display: inline-block;
		width: 80px;
		text-align: center;
		color: #889aa4;
		font-size: 20px;
	}
	.login .login-container .item .input-content{
		display: inline-block;
		height: 47px;
    	width: 55%;
	}
	.login .login-container a{
		color: #fff;
		text-decoration: none;
	}
	.login .btn{
		background-color:#0573bb;
		position: relative;
		margin-left: 40px; 
	}
</style>
<script>
	import Home from '@/view/home'
	import Hello from '@/view/home_content/hello'
	import store from './../store';
	export default{		
		data(){
			var validateUserName=(rule, value, callback) =>{
				console.log("aaaa");
				if(!value){
					callback(new Error("请输入用户名"));
				}
				else{
					if(value != "1111" && value != "vuex"){
						callback(new Error("用户名不存在"));
					}		
					else{
						callback();
					}					
				}
			};
			var validatePass = (rule, value, callback) => {
	    	    if (value === '') {
	    	        callback(new Error('请输入密码'));
	    	    } 
	    	    else if(value.length<6){
	    	        callback(new Error('密码不能少于6位'));
	    	    }
	    	    else if(value != "123456")
	    	    // else if(value != this.loginForm.psw){
	    	    	callback(new Error('密码错误'));
	    	    // }
	    	    else{
	    	    	callback();
	    	    }
    		};
			return{
				loginForm:store.state.userInfo,
				loginRules:{
					userName:[
						{validator: validateUserName, trigger: 'blur' }
					],
					password:[
						{validator: validatePass, trigger: 'blur' }
					]
				}
			};
			
		},
		methods:{
			handleLogin:function(){
				 this.$refs.loginForm.validate((valid) => {
		          	if (valid) {
		           		this.$router.push({ path: 'home/hello',component:Hello});
		       		} else {
		            	console.log('error submit!!');
		            	return false;
		        	}
		      	});
			}	
		},
		mounted:function(){
	  	console.log("stor内容" ,store.state.userInfo);
	  }
	}
</script>