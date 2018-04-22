<template>
  	<div class="searchModel">
        
        <div class="priceSearch">
            <el-row>
                
                <div class="search">
                    <!-- 价格搜索 -->
                      <el-input name="price" style="width:100px;" type="text"   placeholder="￥" class="searchin"></el-input >-
                      <el-input name="price" style="width:100px;" type="text"   placeholder="￥" class="searchin"></el-input >
                      <el-button round style="border:none;"><i class="fa fa-search searchbtn" aria-hidden="true" style="color:#666666;"></i></el-button>
                </div>
                <div class="search">
                    <!-- 商品名称搜索 -->
                     <el-input name="name" style="width:200px;" type="text"   placeholder="请输入商品名称" class="searchin"></el-input >
                    <el-button round style="border:none;"><i class="fa fa-search searchbtn" aria-hidden="true" style="color:#666666;"></i></el-button>
                </div>
                <div class="search">
                   <!-- 按类型搜索 -->
                    <el-input name="type" style="width:200px;" type="text"   placeholder="请输入你想要搜索的类型" class="searchin"></el-input >
                    <el-button round style="border:none;"><i class="fa fa-search searchbtn" aria-hidden="true" style="color:#666666;"></i></el-button>
                </div>

            </el-row>
        </div>

        
		    <!-- <vuewaterfalleasy :imgsArr="imgsArr" @scrollLoadImg="fetchImgsData" class="rush">
              
        </vuewaterfalleasy> -->

     <!-- <img v-lazy:imgsArr="imgsArr" alt=""> -->
        

  <!-- <homeContentLastFoot class="homeContentLastFoot"></homeContentLastFoot>  -->
  
    </div>
</template>
<style scoped>
    .searchModel{
        margin-left: -120px;
    }
    .searchModel .search{
        float: left;
        margin-left: 50px;
        margin-top: 30px;
    } 
    .searchModel .rush{
        position: absolute;
        margin-left: -220px;
    }
</style>
<script>
// import vueWaterfallEasy from 'vue-waterfall-easy'

  // export default {
    // 注册瀑布流组件
    // components: {
    //     vuewaterfalleasy:vueWaterfallEasy
    // } ,
    // data () {
    // return {
      //存放所有已加载图片的数组（即当前页面会加载的所有图片）
      // imgsArr: [],         
      //存放每次滚动时下一批要加载的图片的数组
      // fetchImgsArr: [] ,   
     

    // }

  // },
  // props: {
      // gap: { // 图片间隔
      //   type: Number,
      //   default: 200
      // },
      // maxCols: { // 最大的列数
      //   type: Number,
      //   default: 3
      // },
      // imgsArr: { // 请求返回的图片数据，格式：[{src:'1.jpg','link':'url1' info:'自定义图片信息'},{src:'2.jpg','link':'url2',info:'自定义图片信息'}...]
        // type: Array,
        // required: true
      // },
//       imgWidth: { // 指定图片的统一宽度
//         type: Number,
//         default: 240
//       },
//       timeOut: { // 预加载事件小于500毫秒就不显示加载动画，增加用户体验
//         type: Number,
//         default: 500
//       }
// },
// 　　methods: {
// 　　　initImgsArr (n, m) {   //初始化图片数组的方法，把要加载的图片装入
// 　　　　var arr = []
// 　　　　for (var i = n; i < m; i++) {
// 　　　　　　arr.push({ src: `../../static/img/${i + 1}.jpg`, link: '', info: '一些图片描述文字' }) //src为加载的图片的地址、link为超链接的链接地址、

　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　//info为自定义的图片展示信息，请根据自己的情况自行填写
// 　　　　}
// 　　　　return arr
// 　　　},

// 　　　fetchImgsData () {    //获取新的图片数据的方法，用于页面滚动满足条件时调用
// 　　　　this.imgsArr = this.imgsArr.concat(this.fetchImgsArr)   //数组拼接，把下一批要加载的图片放入所有图片的数组中
// 　　　}
// 　　},
// 　　created () {
// 　　　　this.imgsArr = this.initImgsArr(0, 10)       //初始化第一次（即页面加载完毕时）要加载的图片数据
// 　　　　this.fetchImgsArr = this.initImgsArr(10, 20) // 模拟每次请求的下一批新的图片的数据数据
// 　　}
//   };
</script>
			
      