<script src="//unpkg.com/vue/dist/vue.js"></script>
<script src="//unpkg.com/element-ui@2.3.3/lib/index.js"></script>
<template>
  	<div class="description descriptionCss">
		
			<div class="good_des">

        <!-- 详细信息 图片部分加右边价格等-->
				<div class="good_img">

				    <!-- 左边图片部分 -->
				    <div id="content">
  					    <div id="content-left">
  					        <div id="middle">
  					          <div id="glass"></div>
  					          <img src="https://img14.360buyimg.com/n0/jfs/t18508/286/1045476950/356630/f475f2de/5aba14c0N190ea94f.jpg"/>
  					        </div>
  					        <div id="small">
  					          <ul>
  					            <li><img src="https://img10.360buyimg.com/n5/jfs/t18097/229/1084004210/429154/49b2c6e1/5aba14c6Nabb0ebf4.jpg"/></li>	   
  					            <li><img src="https://img10.360buyimg.com/n5/jfs/t17293/221/1007900538/357688/873331a7/5aba14cfN9300e5ad.jpg"/></li>
  					            <li><img src="https://img10.360buyimg.com/n5/jfs/t17293/221/1007900538/357688/873331a7/5aba14cfN9300e5ad.jpg"/></li>
  					            <li><img src="https://img10.360buyimg.com/n5/jfs/t16285/222/2726331735/278634/26d8c7b2/5aba14dbN70a81896.jpg"/></li>
  					            <li><img src="https://img10.360buyimg.com/n5/jfs/t18097/229/1084004210/429154/49b2c6e1/5aba14c6Nabb0ebf4.jpg"/></li>
  					            <li><img src="https://img10.360buyimg.com/n5/jfs/t16285/222/2726331735/278634/26d8c7b2/5aba14dbN70a81896.jpg"/></li>
  					          </ul>
  					        </div>
  					    </div>
  					    <div id="content-right">
  					        <img src="https://img14.360buyimg.com/n0/jfs/t18508/286/1045476950/356630/f475f2de/5aba14c0N190ea94f.jpg"/>
  					    </div>
					  </div>
            





  					<!-- 右边详细信息 -->
  					<div class="desRight">
  						  <p>EasyFreeX绿茶精萃平衡保湿水乳套装，济州岛纯净绿茶水的新鲜水分，打造水感透润肌肤</p>
  						  <hr>
  						  <table>
        							<tr>
          								<td>*商品编码</td>
          								<td>100000008920</td>
        							</tr>
        							<tr>
          								<td>*状态</td>
          								<td>销售中</td>
        							</tr>
        							<tr>
          								<td>*市场价</td>
          								<td style="color:red;font-size:25px;" v-model="price">￥ {{ price }}</td>
        							</tr>
        							<tr>
          								<td>*产地</td>
          								<td>韩国</td>
        							</tr>
        							<tr>
          								<td>*购买数量</td>
          								<td >
          									<el-input-number v-model="num8" controls-position="right"  @change="handleChange" @click="total" :min="1" :max="10" style="width:120px;"></el-input-number>
          								</td>
        							</tr>

                      <!-- 计算总价 -->
        							<tr>
          								<td>*总计</td>
          								<td><h2><input type="text" style="height:25px;" v-model="totalprice"></h2></td>
        							</tr>
  						  </table>
                <!-- 按钮 -->
                <div class="Btn">
                   <button class="btn buybtn">立即购买</button>
                   <button class="btn shoppingCarbtn">放入购物车</button>
                   <button class="btn starbtn">放入收藏夹</button>
                </div>

                <!-- 分享到 -->
                <div class="shareBtn">
                    <span class="title">分享到：</span>
                      <div class="shabtnall">
                            <div class="shabtn qqbtn">
                              <i class="fa fa-qq icon" aria-hidden="true"></i>
                            </div>
                            <div class="shabtn weibobtn">
                              <i class="fa fa-weibo icon" aria-hidden="true"></i>
                            </div>
                            <div class="shabtn bluetoothbtn">
                              <i class="fa fa-bluetooth icon" aria-hidden="true"></i>
                            </div>
                            <div class="shabtn wechatbtn">
                              <i class="fa fa-wechat icon" aria-hidden="true"></i>
                            </div>
                             
                      </div>
                </div>
					  </div>

				</div>
        
        <!-- 详细信息（信息可收起部分 可展开） -->
        <div class="slipdown">
            <div class="downinfo">
                <el-table :data="tableData1" class="downinfolabel">
                    <el-table-column type="expand">
                      <template slot-scope="props">
                        <el-form label-position="left" inline class="demo-table-expand">
                          <el-form-item label="商品名称">
                            <span>EasyFreeX补水保湿面膜</span>
                          </el-form-item>
                          <el-form-item label="商品类型" class="fright">
                            <span>保湿补水</span>
                          </el-form-item>
                          <br>
                          <el-form-item label="描述">
                            <span>含有纯净济州岛生绿茶水产生的绵密泡沫帮助肌肤锁住水分</span>
                          </el-form-item>
                          <el-form-item label="适合肤质" class="fright">
                            <span>所有肤质</span>
                          </el-form-item>
                           <br>
                          <el-form-item label="容量">
                            <span>150ml</span>
                          </el-form-item>
                          <el-form-item label="功效" class="fright">
                            <span>皮肤补水保湿</span>
                          </el-form-item>
                           <br>
                          <el-form-item label="店铺地址">
                            <span>广州市黄埔区企业开源大道</span>
                          </el-form-item>
                          <el-form-item label="原产地" class="fright f">
                            <span>岭南师范学院</span>
                          </el-form-item>
                        </el-form>
                      </template>
                    </el-table-column>
                    
                    <el-table-column label="商品信息" prop="name" class="labelcolor">
                    </el-table-column>
                    <el-table-column label="店铺" prop="shop" class="labelcolor">
                    </el-table-column>
                  </el-table>
      
            </div>
        </div>


			</div>


      <!-- tab切换：商品详细信息 -->
      <!-- <el-tabs v-model="activeName" @tab-click="handleClick" class="tab_desc">
          <el-tab-pane label="商品详情" name="first">
              <div class="descrpital">
                                  
                    222222                     
                  
              </div>
          </el-tab-pane>
          <el-tab-pane label="用户评价" name="second" >
            <div class="homeContent_body_carousel">
                
                     111111
                 
              </el-carousel>
              </div>
          </el-tab-pane> -->
          
         
         
          
        
        </el-tabs>
		
        <homeContentLastFoot class="homeContentLastFoot"></homeContentLastFoot> 
  	</div>
</template>
<style scoped>
	.description{
		position: absolute;
		width: 100%;
		height: 1200px;
	}
	.description.descriptionCss{
		margin-left: 0px;
	}
	.description .homeContentLastFoot{

		margin: auto;
		margin-top: 800px;
		width: 96%;
	}
     .description img{
        width: 100%;
        height: 100%;
      }
     .description #content{
        width: auto;
        height: auto;
        margin-left: 140px;
        margin-top: 60px;
      }
     .description #content-left{
        position: relative;
        width: 420px;
        height: auto;
        float: left;
      }
     .description #middle{
        border: 1px solid #d2d2d2;
        width: 418px;
        height: 418px;
      }
     .description #small{
        width: 420px;
        height: auto;
      }
     .description #glass{
        position: absolute;
        width: 200px;
        height: 200px;
        background-color: pink;
        top: 0;
        opacity: 0.5;
        z-index: 1;
        display: none;
      }
      .description ul{
        width: inherit;
        height: 60px;
      }
     .description ul li{
        display: inline;
        height: 60px;
        list-style: none;
        float: left;
        margin: 10px;
      }
     .description #content-right{
        position: relative;
        width: 418px;
        height: 418px;
        border: 1px solid #ccc;
        float: left;
        margin-left: 10px;
        overflow: hidden;
        display: none;
      }
      .description #content-right img{
        position: absolute;
        width: 836px;
        height: 836px;
      }
      .description hr{
        margin-top: 20px;
      }
      .description .desRight{
        width: 550px;
        float: right;
        margin-right: 180px;
      }
      .description .desRight tr td{
        width: 100px;
      }
      .description .desRight tr td{
        padding-top: 15px;
      }
      .description .Btn{
        margin-top: 40px;

      }
      .description .Btn .btn{
        color: #ffffff;
        width: 150px;
        height: 40px;
        float: left;
        border: 0.2px solid #b2b2b2;   
      }
      .description .Btn .btn:hover{
        opacity: 0.7;
      }
      .description .Btn .buybtn{
        background-color:#be8525; 
      }
      .description .Btn .shoppingCarbtn{
        background-color:#609b05; 
        margin-left: 20px;
      }
      .description .Btn .starbtn{
        background-color:#5d6a59; 
        margin-left: 20px;
      }
      .description .shareBtn{
        width: 300px;
        height: 100px;
        float: left;
        margin-top: 20px;
      }
      .description .shareBtn span.title{
        position: absolute;
        margin-top: 20px;
      }
      .description .shabtnall{
        margin-left: 60px;
      }
      .description .shareBtn .shabtn{
          position: relative;
          display: inline-block;
          width: 32px;
          height: 32px;
          font-size: 20px;
          border-radius: 50%;
          border: 1px solid #666;
          text-align: center;
          transition: background 0.6s ease-out 0s;
          margin-top: 20px;
          margin-left: 10px;
      }
      /*qq分享*/
      .description .shareBtn .shabtn.qqbtn{
        color: #56b6e7;
        border-color: #56b6e7;
      }
      .description .shareBtn .shabtn.qqbtn:hover{
        background: #56b6e7;
        color: #fff;
      }
      /*微博分享*/
      .description .shareBtn .shabtn.weibobtn{
        color: #ff763b;
        border-color: #ff763b
      }
      .description .shareBtn .shabtn.weibobtn:hover{
        background: #ff763b;
        color: #fff;
      }
      /*蓝牙分享*/
      .description .shareBtn .shabtn.bluetoothbtn{
        color: #FDBE3D;;
        border-color: #FDBE3D;
      }
      .description .shareBtn .shabtn.bluetoothbtn:hover{
        background: #FDBE3D;
        color: #fff;
      }
      /*微信分享*/
      .description .shareBtn .shabtn.wechatbtn{
        color: #7bc549;
        border-color: #7bc549;
      }
      .description .shareBtn .shabtn.wechatbtn:hover{
        background: #7bc549;
        color: #fff;
      }   
      .description .downinfo{
        width: 73%;
        margin-left: 130px;
      }
      .description .fright{
        float: right;
        margin-right: 280px;
        /*margin-left: 200px;*/
      }  
      .description  .f{
        margin-right: 265px;
      }  
      .description .labelcolor{
        background-color: #ffffff;
      } 
      .description .tab_desc{
        width: 70%;
        margin-left: 150px;
        margin-top: 30px;
      }
      .description .tab_desc label{
        /*float: right;*/
        margin-left: 300px;
      }
</style>
<script>

import Vue from 'vue';
import HomeContentLastFoot from '@/view/home_content/home_contentLastfoot';
// import {api} from '../../global/api';
export default {
	components:{
  			homeContentLastFoot:HomeContentLastFoot
  		},
	data() {
      return {
        num8: 1,
        price:"230.0",
        value:"",
        totalprice:"",
   
        tableData1: [{         
          name: 'EasyFreeX补水面膜',
          shop: 'easy官方旗舰店'
        }],
      };
    },
    methods: {

      handleChange(value) {
        debugger
        let that = this;
        console.log(value);
        return value;
        that.value = value;
         // that.totalprice = Number(that.value)*Number(that.price);
         //  console.log(that.totalprice);
         //   return totalprice;
        
      },
      // 计算总价
        total(totalprice){ 
          debugger
            let that1 = this;
            console.log(that1.totalprice);
            // var totalprice = 230.0;
            // that1.totalprice = Number(that1.value)*Number(that1.price);
            
            // that.totalprice = Number(that.value)*Number(price);
            // return totalprice;
        },
         
    },
   	mounted:function(){ 
   		
   	}
}
 


    // var smallLi = document.getElementById("small").getElementsByTagName("ul")[0].getElementsByTagName("li");
    // var middle = document.getElementById("middle")
    // var middleImg = middle.getElementsByTagName("img")[0]
    // var contentRight = document.getElementById("content-right");
    // var bigImg = contentRight.getElementsByTagName("img")[0]
    // var glass = document.getElementById("glass");
    //获取放大镜大小
    // var bigImgWidth = getStyle(bigImg,"width");
    // var bigImgHeight = getStyle(bigImg,"height");
    // var contentRightWidth = getStyle(contentRight,"width");
    // var contentRightHeight = getStyle(contentRight,"height");
    // var middleWidth = getStyle(middle,"width");
    // var middleHeight = getStyle(middle,"height");
    // var glassWidth = contentRightWidth/bigImgWidth*middleWidth;
    // var glassHeight = contentRightHeight/bigImgHeight*middleHeight;
    // var middleBorder = getStyle(middle,"border")
    // glass.style.width = glassWidth + "px";
    // glass.style.height = glassHeight + "px";
    // for(var i =0;i<smallLi.length;i++){
    //   (function(index){
    //     smallLi[i].onmouseover = function(){
    //       middleImg.src = "img/0"+index+".jpg";
    //       bigImg.src = "img/00"+index+".jpg"
    //     }
    //   })((i+1));
    // }
    // middle.onmouseover = function(){
    //   contentRight.style.display = "block"
    //   glass.style.display = "block"
    //   middle.onmousemove = function(ev){
    //     var evt = ev||event
    //     var x = evt.x - content.offsetLeft -glass.offsetWidth/2 + window.scrollX - middleBorder
    //     var y = evt.y - content.offsetTop - glass.offsetHeight/2 + window.scrollY - middleBorder
    //     if(x<=middleBorder){
    //       x = middleBorder;
    //     }
    //     if(x>=middle.offsetWidth-glass.offsetWidth-middleBorder){
    //       x = middle.offsetWidth - glass.offsetWidth -middleBorder;
    //     }
    //     if(y<=middleBorder){
    //       y = middleBorder;
    //     }
    //     if(y>=middle.offsetHeight-glass.offsetHeight-middleBorder){
    //       y = middle.offsetHeight - glass.offsetHeight - middleBorder;
    //     }    //     glass.style.left = x + "px")


    //     glass.style.top = y + "px"
    //     bigImg.style.left = -x*middleWidth/glassWidth + middleBorder*2 + "px"    //     console.log(x    //     console.log(x*middleWidth/glassWidth)
    //   }
    //   middle.onmouseout = function(){

    //     bigImg.style.top = -y*middleHeight/glassHeight + middleBorder*2 + "px"
    //     contentRight.style.display = "none";
    //     glass.style.display = "none";
    //   }
    // }
    // function getStyle(obj,attr){//获取css属性
    //   return (obj.currentStyle)?parseInt(obj.currentStyle[attr]):parseInt(getComputedStyle(obj,false)[attr]);
    // }

</script>
<!-- <script src="//unpkg.com/vue/dist/vue.js"></script> -->
<!-- <script src="//unpkg.com/element-ui@2.3.3/lib/index.js"></script> -->


