<template>
	<div class="introduce">
		 <div class="title">
		 	<div class="title_cont">
		 		<h3><img src="https://www.innisfree.cn/cn_resources/images/title/h2_brand.gif"></h3>
		 		<p><img src="https://www.innisfree.cn/cn_resources/images/title/desc_brand.gif"></p>
		 	</div>	
		 </div>
		 <div class="intro_cont">
		 	<div class="intro_title">
		 		<h4>品牌理念</h4>
		 		<br>
		 		<p>肌肤纯净之导，EasyFreex</p>
		 	</div>
		 	<div class="intro_content">	 		
		 		<img v-lazy="item.imgUrl" v-for="item in imglist" alt="">
		 		<div class="intro_text">
		 		    <div class="intro_text_title">
		 		    	<h4>EasyFreex的标志</h4>
		 				<p><i>Easyfreex's - History</i></p>
		 				<p class="p_text">体现了Easyfreex通过可信赖的研究开发，将寻找的纯净自然原料装在环保容器里的美好心愿。</p>
		 		    </div>
		 			
		 			<div class="intro_text_contetn">
		 			   <div class="introConleft">
		 			   		<div class="littleIntro">
		 					<i class="fa fa-pagelines" aria-hidden="true"></i>倡导绿色自然环保理念的信念
			 				</div>
			 				<div class="littleIntro">
			 					<i class="fa fa-pagelines" aria-hidden="true"></i>从纯净自然界中获取
			 				</div>
		 			   </div>
		 				
		 				<div class="introConcenter"><img src="../../../static/img/intro3.png"></div>
		 				<div class="introConright">
			 				<div class="littleIntro">
			 					<i class="fa fa-pagelines" aria-hidden="true"></i>呈现纯净大自然丰厚馈赠的美好心愿
			 				</div>
			 				<div class="littleIntro">
			 					<i class="fa fa-pagelines" aria-hidden="true"></i>将尖端的研发能力与自然精粹相结合
			 				</div>
		 				</div>
		 			</div>
		 		</div>
		 	</div>
		 	
		 </div>
		

	</div>
</template>
<style scoped>
	.introduce{
		/*width: 100%;*/
		/*background-color: #ffffff;*/
		position: relative;
		margin-left: -200px;
	}
	.introduce .title{
		width: 80%;
		background-color: #ffffff;
		height: 100px;
	}
	.introduce .title_cont{
    	position: relative;
    	margin-left: 5px;
    	padding: 20px;
	}
	.introduce .intro_cont{
		width: 80%;
		height: 1300px;
		/*background-color: red;*/

	}
	.introduce .intro_cont h4{
		font-size: 18px;
		color: #000000;
	}
	.introduce .intro_cont .intro_title{
		width: 100%;
		height: 100px;
		background-color: #a8b549;
		text-align: center;
		padding-top: 40px;
		color: #ffffff;
		font-size: 17px;
	}
    .introduce .intro_cont .intro_content{
    	background-color: #f9f6ef;
    	width: 100%;
    	height: 480px;
    	padding-top: 10px;
    }
    /*.introduce .intro_cont .intro_content img{
    	border-radius: 60%;
    }*/
    .introduce .intro_cont .intro_content .intro_text{
    	text-align: center;
    	margin-top: 85px;
    	background-color: #f7f7f7;
    }
    .introduce .intro_cont .intro_content .intro_text h4{
    	font-size: 16px;
    }
    .introduce .intro_cont .intro_content .intro_text p{
    	font-size: 12px;
    	color: #aaaaaa;
    }
    .introduce .intro_cont .intro_content .intro_text p.p_text{
    	font-size: 16px;
    	margin-top: 40px;
    	color: #666666;
    	/*color: #aaaaaa;*/
    }
    .introduce .intro_cont .intro_content .intro_text_contetn{
    	width: 100%;
    	height: 300px;
    	/*background-color: red;*/
    	margin-top: 80px;

    }
    .introduce .intro_cont .intro_content .intro_text_contetn i{
    	font-size: 25px;
    	color: #055321;
    }
    .introduce .intro_cont .intro_content .introConleft{
    	float: left;
    	/*padding: 100px;*/
    }
    .introduce .intro_cont .intro_content .introConcenter{
    	float: left;
    	margin-top: 80px;
    }
    .introduce .intro_cont .intro_content .introConcenter img{
    	/*float: left;*/
    	/*margin-top: 100px;*/
    	border-radius: 50%;
    }
    .introduce .intro_cont .intro_content .introConright{
    	float: right;
    }
    .introduce .intro_cont .intro_content .littleIntro{
    	padding: 50px;
    }
</style>
<script>
	import VueLazyload from 'vue-lazyload'
	export default{		
		data(){
			
			return{
				
    	imglist: [
	        {imgUrl: '../../../static/img/intro1.jpg'},
	        {imgUrl: '../../../static/img/intro2.jpg'}
	   
      ]
      

	}
				
			
		},
		methods:{
				
		},
		mounted:function(){
	  	
	}
}
</script>