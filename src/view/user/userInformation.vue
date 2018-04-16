<template>
  <div class="userInformation" >
      <!-- <h1>个人信息</h1> -->
      <el-row :gutter="5" style="margin:20px 0px;"> 
      <el-col :span="8">  
        <div class="user_img" > 
            <img :src="imageUrl"  alt="用户头像" style="width:200px;height:200px;">
            <el-upload action="https://jsonplaceholder.typicode.com/posts/" :show-file-list="false" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload"> 
                <p> 
                  <el-button type="primary"><i class="el-icon-upload"></i>上传头像</el-button>
                    <!-- </button> -->
                </p> 
            </el-upload>
        </div>   
      </el-col>

      <el-col :span="16">
          <div class="user_info">
              <h2>个人信息 
                <el-button size="small" v-if="!editable" @click="edit()" style="float:right;" icon="edit">编辑</el-button> 
              </h2>
              <div class="user_info_form" v-if="editable">             
                 <el-form label-position="right" label-width="100px" :model="personalInfo">  
                <!--  <el-form-item label="ID">
                     <el-input v-model="personalform.id" disabled></el-input>
                   </el-form-item> -->
                   <el-form-item label="姓名">
                     <el-input v-model="personalform.name"></el-input>
                     <!-- <span>{{ name.userName }}</span> -->
                   </el-form-item>
                   <el-form-item label="密码">
                     <el-input v-model="personalform.password"></el-input>
                     <!-- <span>{{ name.userName }}</span> -->
                   </el-form-item>
                   <el-form-item label="性别">
                     <el-radio-group v-model="personalform.sex">
                           <el-radio label="man">男</el-radio>
                           <el-radio label="woman">女</el-radio>
                     </el-radio-group>
                   </el-form-item>
                   <!-- <el-form-item label="管理员权限">
                     <el-input v-model="personalform.admin"></el-input>
                   </el-form-item> -->
                   <el-form-item label="注册时间">
                     <el-input v-model="personalform.resigndate" disabled></el-input>
                   </el-form-item>
                   <el-form-item label="邮件地址" >
                     <el-input v-model="personalform.email"></el-input>
                   </el-form-item>
                   <el-form-item label="电话号码" >
                     <el-input v-model="personalform.phone"></el-input>
                   </el-form-item>
                   <el-form-item label="用户名" >
                     <el-input v-model="personalform.username"></el-input>
                   </el-form-item>
                   <!-- <el-form-item label="个人简介">
                     <el-input type="textarea" v-model="personalform.introduction"></el-input>
                   </el-form-item> -->
             
                   <el-form-item>
                      <el-button type="primary" @click="submitForm()">提交</el-button>
                      <el-button @click="resetForm()">取消</el-button>
                    </el-form-item>   
                 </el-form>    
             </div>
    
              <div class="user_info_text" v-else>
                 <el-form label-position="right" label-width="100px" :model="personalInfo">
                    <!-- <el-form-item label="ID：">
                      {{ personalInfo.id }}
                    </el-form-item> -->
                    <el-form-item label="姓名：">
                      {{ personalInfo.name }}
                    </el-form-item>
                    <el-form-item label="密码:">
                      {{ personalInfo.password }}
                    </el-form-item>
                    <el-form-item label="性别：">
                      <span v-if="personalInfo.sex == 'man'">男</span>
                      <span v-else>女</span>          
                    </el-form-item>
                    <!-- <el-form-item label="管理员权限：">
                      {{ personalInfo.admin }}
                    </el-form-item> -->
                    <el-form-item label="注册时间：">
                      {{ personalInfo.resigndate }}        
                    </el-form-item>
                    <el-form-item label="邮件地址：">
                      {{ personalInfo.email }}        
                    </el-form-item>
                    <el-form-item label="电话号码：">
                      {{ personalInfo.phone }}        
                    </el-form-item>
                    <el-form-item label="用户名：">
                      {{ personalInfo.username }}        
                    </el-form-item>
                    <!-- <el-form-item label="个人简介：">
                      {{ personalInfo.introduction }}            
                    </el-form-item>  -->   
                </el-form> 
              </div>

          </div>
      </el-col>
    </el-row>

  </div>
</template>
<script>
import store from '../../store';
  export default {
    data() {
      return {
        imageUrl:require("../../assets/img/login_head.jpg"),
        editable:false,
        personalInfo:{
          name:store.state.userInfo.userName,
          password:store.state.userInfo.password,
          sex:"woman",
          resigndate:"2017-8-1",
          email:"123456789@qq.com",
          phone:"11111111111",
          username:"111111"
        },
        personalform:{
          name:"",
          password:"",
          sex:"",
          admin:"",
          resigndate:"",
          email:"",
          phone:"",
          username:""
  
        },
      };
    },
    methods:{
      //点击编辑
      edit(){
        this.editable = true
        this.personalform = JSON.parse(JSON.stringify(this.personalInfo));
      },

      //提交表单
      submitForm() {
          var vm = this;
          vm.editable = false;
          var par = {
              "name": vm.personalform.name,
              "password":vm.personalform.password,
              "sex": vm.personalform.sex,
              "resigndate": vm.personalform.resigndate,
              "email": vm.personalform.email,
              "phone": vm.personalform.phone,
              "username": vm.personalform.username,
              
          };
          this.personalInfo = par;

          this.$message({
                message: '提交信息成功',
                type: 'success'
           });

          console.log('修改信息入参为：',par)
      },
      //重置表单
      resetForm() {
          var vm = this;
          vm.editable = false;
         // vm.personalInfo = JSON.parse( JSON.stringify(vm.personalInfo_init) ) ;
      },

      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        // if (!isJPG) {
        //   this.$message.error('上传头像图片只能是 JPG 格式!');
        // }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return/* isJPG &&*/ isLt2M;
      }
    }
  }
</script>
<style scoped>

</style>
