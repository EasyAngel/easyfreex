<template>
	<div class="homeContentLastFoot">
				<!-- foot部分 -->
		        <div class="footer">

		        	<div class="footerContent">
		        		<!-- 商城 -->
		        		<div class="footerItem">
		        			<h6>商城</h6>
		        			<ul>
		        				<li v-for="item in banners">
		        					{{ item.text }}
		        				</li>
		        			</ul>
		        			<ul>
		        				<li v-for="item in banners">
		        					{{ item.text }}
		        				</li>
		        			</ul>
		        			<ul>
		        				<li v-for="item in banners">
		        					{{ item.text }}
		        				</li>
		        			</ul>
		        			<ul>
		        				<li v-for="item in banners">
		        					{{ item.text }}
		        				</li>
		        			</ul>
		        		</div>

						<!-- 活动 -->
		        		<div class="footerItem">
		        			<h6>活动</h6>
		        			<ul>
		        				<li v-for="item1 in banners1">
		        					{{ item1.text }}
		        				</li>
		        			</ul>
		        		</div>

		        		<!-- 活动 -->
		        		<div class="footerItem">
		        			<h6>社区</h6>
		        			<ul>
		        				<li v-for="item1 in banners2">
		        					{{ item1.text }}
		        				</li>
		        			</ul>
		        		</div>
								 
		        		<!-- 品牌中心 -->
		        		<div class="footerItem">
		        		<i class="fa fa-paw icon" aria-hidden="true" ></i>
		        			<h6>品牌简介</h6>
		        			<ul>
		        				<li v-for="item1 in banners3">
		        					{{ item1.text }}
		        				</li>
		        			</ul>
		        		</div>
	 
		        		<div class="footerItem">
		        		<i class="fa fa-paw icon" aria-hidden="true" ></i>
		        		<i class="fa fa-paw icon" aria-hidden="true" ></i>
		        			<h6>品牌简介1</h6>
		        			<ul>
		        				<li v-for="item1 in banners3">
		        					{{ item1.text }}
		        				</li>
		        			</ul>
		        			<ul>
		        				<li v-for="item1 in banners3">
		        					{{ item1.text }}
		        				</li>
		        			</ul>
		        			<ul>
		        				<li v-for="item1 in banners3">
		        					{{ item1.text }}
		        				</li>
		        			</ul>
		        		</div>

		        		<!-- 咨询热线 -->
		        		<div class="footerItem inquery">
		        			<h6>咨询热线</h6>
		        			<ul>
		        				<li v-for="item1 in banners4">
		        					{{ item1.text }}
		        				</li>
		        			</ul>
		        			<i class="fa fa-heart icon" aria-hidden="true" ></i>
		        		</div>

		        		<!-- 应用中心 -->
		        		<div class="footerItem">
		        			<h6>应用中心</h6>
		        			<ul>
		        				<li v-for="item1 in banners5">
		        					{{ item1.text }}
		        				</li>
		        			</ul>
		        		</div>

		        		<!-- 客服中心 -->
		        		<div class="footerItem">
		        			<h6>客服中心</h6>
		        			<ul>
		        				<li v-for="item1 in banners6">
		        					{{ item1.text }}
		        				</li>
		        			</ul>
		        			
		        		</div>

						<!-- 温馨提示 -->
		        		<div class="footerItemLast">
		        			<i class="fa fa-star icon" aria-hidden="true" ></i>
		        			近期有不法分子冒用品牌官网客服名义电话联系消费者进行诈骗，Easyfreex官网提醒广大小清新们，关注我们的官方网站上面的电话，除此之外的所有电话联系均非品牌客服行为，请小清新们注意辨别，提高警惕!
		        			
		        		</div>

		        	</div>

		        </div>

		        <!-- 最footer -->
		        <div class="last">
		        	<div class="lastFooter lastFooterFir">
		        		<img src="../../assets/img/logo.jpg">
		        		<i>EasyFreeX官方旗舰店</i>
		        	</div>
		        	<div class="lastFooter lastFooterSec">
		        		<p>网站使用条款&nbps1111</p>
		        		<p>客服邮件：472598609@qq.com</p>
		        		<p class="phone">客服电话：13414932122 ---<i class="fa fa-phone icon" aria-hidden="true"></i></p>
		        		<br>
		        		<!-- <br> -->
		        		<p class="address"><a href="https://www.amap.com/">公司地址:广东省广州市天河区企业开元大道123号7座255楼</a></p>
		        		<p>copyRight@2018-3-13-----All right</p>
		        	</div>
		        	<div class="lastFooter lastFooterThi">
		        		<a href="http://218.242.124.22:8081/businessCheck/verifKey.do?showType=extShow&serial=9031000020160422194659000000691979-SAIC_SHOW_310000-20120523133558226072&signData=MEYCIQD1i/TEnHFdpRzWfGc1MfG+ply9SbTfKV0QkGggzn8Q0gIhAJHNrOLT+7TbP0jbMlkVPcx861IHR+kKfjmPKGK663JC"><img src="https://www.innisfree.cn/cn_resources/images/layout/ico_footerMark11.png"></a>
		        	</div>
		        	<div class="lastFooter lastFooterFor">
		        		<img src="https://www.innisfree.cn/cn_resources/images/layout/ico_footerMark2.png">
		        	</div>
		        	<div class="lastFooter lastFooterFri">
		        		<img src="https://www.innisfree.cn/cn_resources/images/layout/ico_footerMark1.png">
		        		沪公网安备 31010602000985号
		        	</div>
		        </div>
			</div>
		
</template>
<script>
import Vue from 'vue';
export default {
	data() {
	    return {
	      	left_aside: false,
	      	right_aside:false,
	      	tableData:[],
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
     
	

   	},
   	mounted:function(){ 
   		
   	}
}
</script>
<style scoped>
	/*footer部分*/
	.homeContentLastFoot{
		width: 100%;
	}
	.homeContentLastFoot .footer{		
		width: 100%;
		height: 560px;
		position: relative;
		background-color: #58821c;	
	}
	.homeContentLastFoot .footer .footerContent{
		 width: 100%;
		 height: 87%;
         background: #fbf4d7;
         border-top-left-radius: 14em 3em;
         border-bottom-right-radius: 18em 3em;
         padding-top: 75px;
		 border: 1.5px dotted #008000;
		 position: absolute;
	}
	.homeContentLastFoot .footer .footerContent .footerItem{
		width: 15%;
		height: 200px;
		float: left;
		margin-left: 50px;
	}
	.homeContentLastFoot .footer .footerContent .footerItem h6{
		font-size: 15px;
	}
	.homeContentLastFoot .footer .footerContent .footerItem li{
		list-style: none;
		font-size: 14px;
		padding-top: 6px;
		opacity: 0.7;

	}
	.homeContentLastFoot .footer .footerContent .footerItem li:hover{
		cursor: pointer;
		opacity: 1;		
	}
	.homeContentLastFoot .footer .footerContent .inquery{
		margin-left: 250px;
	}
	.homeContentLastFoot .footer .footerContent .footerItemLast {
		width: 440px;
		height: 90px;	
		/*background-color: red;*/
		float: right;
		margin-right: 170px;
		margin-top: -30px;
		font-size: 14px;
		color: #666666;
	}
	
	.homeContentLastFoot .last{
		width: 97%;
		height: 150px;
		/*background-color: red;*/
		padding-top: 10px;
		padding-left: 30px;
	}
	.homeContentLastFoot .last .lastFooter{
		margin-top: 20px;
		width: 15%;
		float: left;
		padding-left: 30px;
		color: #777777;
		/*background-color: black;*/
	}

	.homeContentLastFoot .last .lastFooter.lastFooterFir img{
		width: 60%;
		height: 40%;
		border-radius: 100%;
		box-shadow: 2px 2px 2px 2px #58821c;
		transition:1s;
	}
	.homeContentLastFoot .last .lastFooter.lastFooterFir img:hover{
		transform:rotate(360deg)scale(0.5);
	}
	.homeContentLastFoot .last .lastFooter.lastFooterSec{		
		width: 35%;
		padding-left: 40px;
		font-size: 16px;
		/*background-color: black;*/
	}
	.homeContentLastFoot .last .lastFooter.lastFooterSec p{
		cursor: pointer;
	}
	.homeContentLastFoot .last .lastFooter.lastFooterSec p:hover{
		color: #000000;
	}
	.homeContentLastFoot .last .lastFooter.lastFooterThi img{
		width: 35%;
		height: 20%;
		margin-top: 90px;

	}
	.homeContentLastFoot .last .lastFooter.lastFooterFor img{
		width: 70%;
		height: 70%;
	}
	.homeContentLastFoot .last .lastFooter.lastFooterFri{
		width: 18%;
		height: 60%;
		/*background-color: red;*/
		font-size: 14px;
		color: #000000;
	}
	.homeContentLastFoot  .last .lastFooter.lastFooterFri img{
		width: 30%;
		height: 60%;
		
	}
	.homeContentLastFoot .last .lastFooter .address a{
		text-decoration: none;
		color: #666666;
	}
	.homeContentLastFoot .last .lastFooter .address a:hover{
		color: #000000;
	}
	
	.homeContentLastFoot .last .lastFooter i{
		padding-top: 10px;
		font-size: 16px;
		/*box-shadow: 2px 2px 2px 2px #58821c;*/
		
	}


</style>