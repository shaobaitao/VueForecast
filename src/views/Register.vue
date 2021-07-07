<template>
  <div class="register_div">
    <div class="form_div">
      <el-form :model="registerForm" status-icon :rules="rules" size="medium" ref="registerForm"
               class="demo-registeForm">
        <el-form-item style="text-align: center">
          <el-link :underline="false" class="form_title">注册</el-link>
        </el-form-item>
        <el-form-item prop="username">
          <el-input @keyup.enter.native="Register('registerForm')" v-model="registerForm.username" placeholder="请输入用户名">
            <i class="el-icon-user" slot="prefix"> </i>
          </el-input>
        </el-form-item>
        <el-form-item prop="pass">
          <el-input @keyup.enter.native="Register('registerForm')" v-model="registerForm.pass" autocomplete="off"
                    placeholder="请输入密码(不少于6位)" show-password>
            <i class="el-icon-lock" slot="prefix"> </i>
          </el-input>
        </el-form-item>
        <el-form-item prop="phoneNumber">
          <el-input @keyup.enter.native="Register('registerForm')" v-model="registerForm.phoneNumber" autocomplete="off"
                    placeholder="请输入手机号">
            <i class="el-icon-phone" slot="prefix"> </i>
          </el-input>
        </el-form-item>
        <el-form-item style="display: flex; justify-content: space-between">
          <el-button type="primary" @click="Register('registerForm')">注册</el-button>
          <el-button @click="resetForm('registerForm')">重置</el-button>
        </el-form-item>
        <el-form-item style="text-align: center">
          <el-link type="primary" href="./#/login">已有账号？去登陆！</el-link>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import api from "@/request/api";

export default {
  name: "Register",
  data() {
    return {
      // 表单数据
      registerForm: {
        username: '', // 用户名
        pass: '', // 密码
        phoneNumber: '',  // 检查密码
      },
      // 验证规则
      rules: {
        // 用户名验证规则
        username: [
          {required: true, message: '账号不能为空', trigger: 'blur'},
          {max: 18, message: '账号长度最长18位', trigger: 'blur'},
          {min: 6, message: '账号长度最少为6位', trigger: 'blur'}
        ],
        // 密码验证规则
        pass: [
          {required: true, message: '密码不能为空', trigger: 'blur'},
          {max: 18, message: '密码长度不能超过18位', trigger: 'blur'},
          {min: 6, message: '密码长度最少为6位', trigger: 'blur'}
        ],
        // 手机号验证规则
        phoneNumber: [
          {required: true, message: '手机号不能为空', trigger: 'blur'},
          {max: 11, min: 11, message: '手机号为11位', trigger: 'blur'}
        ],
      },
    };
  },
  // 页面初始化
  mounted() {
    this.LoginCheck();
  },
  // 方法定义
  methods: {
    // 注册
    Register(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          let param = new URLSearchParams()
          param.append('username', this.registerForm.username)
          param.append('password', this.$md5(this.registerForm.pass))
          param.append('phoneNumber', this.registerForm.phoneNumber)
          api.register(param).then((response) => {
            if (response.data.code !== 200) {
              this.$message({
                message: response.data.msg,
                type: 'error'
              });
            } else {
              this.$message({
                title: '注册成功',
                message: '您已注册成功! 三秒后跳转登录',
                type: 'success'
              });
              setTimeout(() => {
                this.$router.push('/login')
              }, 3000);
            }
          })
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    // 表单重置
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  }
}
</script>

<style scoped>
.register_div {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url("../assets/bg.jpg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
}

.form_div {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #fff;
  border-radius: 40px;
  width: 400px;
  height: 400px;
}

.form_title {
  font-size: 22px; /*字体大小*/
  font-weight: bolder; /*字体加粗*/
  text-align: center;
  color: black;
}
</style>