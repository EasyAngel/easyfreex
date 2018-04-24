import Vue from 'vue';
import Vuex from 'vuex';
import service from '../global/axios';
Vue.use(Vuex);
const store = new Vuex.Store({
		state:{
		  isLogin:false,
			userInfo:{
				userName: "",
				password: ""
			},
			per:{
				// name:'刘医生'
			}

		},
  mutations: {
    SET_IS_LOGIN  : (state, token) => {
      state.isLogin = token;
    },
  },
  actions:{
    CheckLogin({ commit, state }) {
      return new Promise((resolve, reject) => {
        service({
          url:"checklogin",
        }).then(function(response) {
          var data  = response
          if(response.success){
            commit("SET_IS_LOGIN",true)
            resolve(response);
          }else{
            reject(response);
          }
        }).catch(error => {
          reject(error);
        });

      });
    },
  }


})

export default store;
