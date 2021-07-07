<template>
  <div class="login_div">
    <div class="form_div">
      <el-form ref="loginForm" :rules="rules" :model="loginForm">
        <el-form-item style="text-align: center">
          <el-link :underline="false" class="form_title">登录</el-link>
        </el-form-item>
        <el-form-item prop="username">
          <el-input @keyup.enter.native="toLogin('loginForm')" icon="el-icon-search" placeholder="请输入用户名"
                    v-model="loginForm.username">
            <i class="el-icon-user" slot="prefix"> </i>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input @keyup.enter.native="toLogin('loginForm')" placeholder="请输入密码" v-model="loginForm.password"
                    show-password>
            <i class="el-icon-lock" slot="prefix"> </i>
          </el-input>
        </el-form-item>
        <el-form-item style="text-align: center">
          <el-button type="primary" @click="toLogin('loginForm')" style="width: 150px">登 录</el-button>
        </el-form-item>
        <el-form-item style="text-align: center">
          <el-link type="primary" href="./#/register">没有账号？去注册！</el-link>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import api from "@/request/api";

export default {
  name: "Login",
  data() {
    return {
      userName: null,
      // 表单数据
      loginForm: {
        username: '',  //用户名
        password: '',  //密码
      },
      rules: {
        //表单验证（用户名验证规则）
        username: [
          {required: true, message: '账号不能为空', trigger: 'blur'},
          {max: 18, message: '账号长度最长18位', trigger: 'blur'},
          {min: 6, message: '账号长度最小6位', trigger: 'blur'}
        ],
        //表单验证（密码验证规则）
        password: [
          {required: true, message: '密码不能为空', trigger: 'blur'},
          {max: 18, message: '密码长度最长18位', trigger: 'blur'},
          {min: 6, message: '密码长度最少为6位', trigger: 'blur'}
        ],
      },
    };
  },
  methods: {
    toLogin(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          let param = new URLSearchParams()
          param.append('username', this.loginForm.username)
          param.append('password', this.$md5(this.loginForm.password))
          api.login(param).then((response) => {
            if (response.data.code !== 200) {
              this.$message({
                message: response.data.msg,
                type: 'error'
              });
            } else {
              this.$router.push('/home')
            }
          })
        } else {
          console.log('error submit!!');
          return false;
        }
      });

    },
  },
  mounted() {
    this.LoginCheck();
  },
}
</script>

<style scoped>
.login_div {
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