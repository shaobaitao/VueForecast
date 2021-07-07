<template>
  <div id="index_div">
    <Topbar></Topbar>
    <div id="main">
      <h1>员工离职预测系统</h1>
      <el-button type="danger" round @click="toUse">开始使用</el-button>
    </div>
  </div>
</template>

<script>
import api from "@/request/api";
import Topbar from "../components/Topbar";

export default {
  name: "Index",
  components: {
    Topbar
  },
  methods: {
    toUse() {
      api.loginCheck()
          .then(response => {
            if (response.data.code === 200) {
              this.$router.push({path: '/home'})
            } else {
              this.$router.push({path: '/login'})
            }
          })
    },
  }
}

</script>

<style scoped>
::-webkit-scrollbar {
  width: 0 !important;
}

::-webkit-scrollbar {
  width: 0 !important;
  height: 0;
}

#index_div {
  height: 100%;
  width: 100%;
  min-width: 1000px;
  background-image: url("../assets/bg.jpg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
}

#main {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

h1 {
  margin-bottom: 30px;
  color: #ce5e8a;
}

.el-button {
  background: #ce5e8a;
  border-color: #ce5e8a;
  color: aliceblue;
  border-radius: 50px;
}

.el-button:hover {
  background: #F56C6C;
  border-color: #F56C6C;
}

</style>