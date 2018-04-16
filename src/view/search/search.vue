<template>
  	<div class="searchModel">
        <!-- 按价格搜索 -->
        <div class="priceSearch">
            <el-row>
                
                <div class="search">
                    <!-- 价格搜索 -->
                      <el-input name="price" style="width:200px;" type="text"   placeholder="请输入价格" class="searchin"></el-input >
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

        <!-- 商品分类页 -->
        <!-- <div class="catatory" v-for="item in imglist"> -->

            <!-- <img v-lazy="item.imgUrl" alt="">
            <span v-lazy="item.introduce"></span>
            <span v-lazy="item.price"></span> -->
       <!--  <ul >
             <li v-for="item in imglist">
               
                 <img v-lazy="item.imgUrl" alt="">
                 <span>{{item.introduce}}</span>
               
               <div class="desc-info">
                 <p>价格：<span>{{item.price}}</span></p>
               </div>
               <div class="card-footer no-border"> -->
                 <!-- <a href="#" :class="['link custom-link']" @click.prevent.stop="praise">{{item.price || 0}}</a> -->
              <!--    <span></span>
                 <a href="#" class="link custom-link">编辑</a>
                 <span></span>
                 <a href="#" class="link custom-link">删除</a>
               </div>
             </li>
        </ul> -->

        <!-- </div> -->
		    <vuewaterfalleasy :imgsArr="imgsArr" @scrollLoadImg="fetchImgsData"></vuewaterfalleasy>

     
        

  <!-- <homeContentLastFoot class="homeContentLastFoot"></homeContentLastFoot>  -->
  
    </div>
</template>
<style scoped>
    .searchModel .search{
        float: left;
        margin-left: 50px;
        margin-top: 30px;
    } 
</style>
<script>
// import vueWaterfallEasy from './Waterfall/vue-waterfall-easy.vue'
import vueWaterfallEasy from 'vue-waterfall-easy'

  export default {
    // 注册瀑布流组件
    components: {
        vuewaterfalleasy:vueWaterfallEasy
    } ,
    data() {
      return {
        imgsArr:[],//存放图片
        fetchImgsArr:[]//存放滚动时下一批要加载的图片
        // imglist: [
        // { imgUrl: 'https://www.innisfree.cn/cn_resources/images/banner/mainVisual_20180228.jpg'},
      //   { imgUrl: 'https://g-search1.alicdn.com/img/bao/uploaded/i4/imgextra/i1/33423363/TB2d30qlH1YBuNjSszeXXablFXa_!!0-saturn_solar.jpg_230x230.jpg_.webp',introduce:"一叶子",price:"￥110"},
      //   { imgUrl: 'https://g-search3.alicdn.com/img/bao/uploaded/i4/i4/1665051977/TB1txf.luGSBuNjSspbXXciipXa_!!0-item_pic.jpg_230x230.jpg_.webp',introduce:"一叶子",price:"￥110"},
      //   { imgUrl: 'https://g-search2.alicdn.com/img/bao/uploaded/i4/i2/776151038/TB12RL8lx1YBuNjy1zcXXbNcXXa_!!0-item_pic.jpg_230x230.jpg_.webp',introduce:"一叶子",price:"￥110"},
      //   { imgUrl: 'https://g-search3.alicdn.com/img/bao/uploaded/i4/i1/652154536/TB2JmtcdTdYBeNkSmLyXXXfnVXa_!!652154536-0-item_pic.jpg_230x230.jpg_.webp',introduce:"一叶子",price:"￥110"},
      //    { imgUrl: 'https://g-search2.alicdn.com/img/bao/uploaded/i4/i1/693062995/TB1AGnycLImBKNjSZFlXXc43FXa_!!0-item_pic.jpg_230x230.jpg_.webp',introduce:"一叶子",price:"￥110"},
      //   { imgUrl: 'https://g-search2.alicdn.com/img/bao/uploaded/i4/i1/725677994/TB1SL9agFuWBuNjSszbXXcS7FXa_!!0-item_pic.jpg_230x230.jpg_.webp',introduce:"一叶子",price:"￥110"},
      //   { imgUrl: 'https://g-search1.alicdn.com/img/bao/uploaded/i4/i1/2786278078/TB1Y9GFlHSYBuNjSspfXXcZCpXa_!!0-item_pic.jpg_230x230.jpg_.webp',introduce:"一叶子",price:"￥110"},
      //   { imgUrl: 'https://g-search1.alicdn.com/img/bao/uploaded/i4/i1/2807304908/TB29uArcStYBeNjSspaXXaOOFXa_!!2807304908-0-sm.jpg_230x230.jpg_.webp',introduce:"一叶子",price:"￥110"},
      //    { imgUrl: 'https://g-search3.alicdn.com/img/bao/uploaded/i4/i3/693062995/TB1d9Dber9YBuNjy0FgXXcxcXXa_!!0-item_pic.jpg_230x230.jpg_.webp',introduce:"一叶子",price:"￥110"},
      //   { imgUrl: 'https://g-search1.alicdn.com/img/bao/uploaded/i4/i3/2549841410/TB2QySlgACWBuNjy0FaXXXUlXXa_!!2549841410-0-sm.jpg_230x230.jpg_.webp',introduce:"一叶子",price:"￥110"},
      //   { imgUrl: 'https://g-search3.alicdn.com/img/bao/uploaded/i4/i4/725677994/TB1SeVCl4WYBuNjy1zkXXXGGpXa_!!0-item_pic.jpg_230x230.jpg_.webp',introduce:"一叶子",price:"￥110"},
      //   { imgUrl: 'https://g-search1.alicdn.com/img/bao/uploaded/i4/imgextra/i4/121029482/TB2T6GKcL5TBuNjSspmXXaDRVXa_!!0-saturn_solar.jpg_230x230.jpg_.webp',introduce:"一叶子",price:"￥110"}
      // ]
      }
    },
    methods: {
      initImgsArr (n, m) { //初始化图片数组的方法，把要加载的图片装入
　　　　var arr = []
　　　　for (var i = n; i < m; i++) {
　　　　　　arr.push({ src: `static/img/${i + 1}.jpg`, info: '一些图片描述文字' })
 
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　//info为自定义的图片展示信息，请根据自己的情况自行填写
　　　　}
　　　　return arr
      },
      fetchImgsData () { //获取新的图片数据的方法，用于页面滚动满足条件时调用
        let that = this;
        that.imgsArr = that.imgsArr.concat(this.fetchImgsArr) //数组拼接，把下一批要加载的图片放入所有图片的数组中
　　　},
  
    mounted() {
       this.imgsArr = this.initImgsArr(1, 10) //初始化第一次（即页面加载完毕时）要加载的图片数据
       this.fetchImgsArr = this.initImgsArr(10, 20) // 模拟每次请求的下一批新的图片的数据数据
　　}

    }
  };
</script>
			
      