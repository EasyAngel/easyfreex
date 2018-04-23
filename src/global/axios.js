import axios from 'axios';
import Qs from 'qs';


//封装全局请求函数
let preUrl;
if(process.env.NODE_ENV == "production"){
  preUrl ="/shop";
}else{
  preUrl="http://localhost:8086/shop/"
  preUrl="http://47.98.186.20:8086/shop/"
}
const service = axios.create({
  baseURL:preUrl,
  timeout: 50000,
   transformRequest: [function (data) {
    // 对 data 进行任意转换处理
   return Qs.stringify(data)
  }],
});


service.interceptors.request.use(config => {

/*  if(config.url.indexOf('login/')==0){
    return config;
  }

  if(!config.params){
    config.params={}
  }
  if(store.state.user.tokenId){
    config.params.tokenId = store.state.user.tokenId
  }else{

    store.commit('SEVEN',false);
    return false
  }*/

  return config;
}, error => {
  // Do something with request error
  console.log(error,'请求连接出错'); // for debug
  Promise.reject(error);
})


service.interceptors.response.use(
  response => {
    if(typeof response.data == "object"){
     /* if(response.data.status&& response.data.status=='400'){
         alert('登录超时或未登录')
         store.commit('SEVEN',false);
         return false
     }*/
      response.data._superClass = response;
    }


      return response.data;

  }
)


export default service;
