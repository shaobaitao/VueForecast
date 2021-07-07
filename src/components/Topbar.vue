<template>
  <div id="TopBar">
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1">首页</el-menu-item>
      <el-menu-item index="2">菜单</el-menu-item>
      <el-menu-item index="4" style="float: right">
        <div>
          <!-- 未登录时显示 -->
          <template v-if="!username">
            <el-button type="primary" round @click="toLogin">登录</el-button>
            <el-button type="primary" round @click="toRegister">注册</el-button>
          </template>
          <!-- 登录时显示 -->
          <template v-else>
            <!-- 登录成功，显示用户名 -->
            <el-dropdown trigger="click" @command="handleCommand">
                            <span class="el-dropdown-link">
                            {{ username }}<i class="el-icon-arrow-down el-icon--right"></i>
                            </span>
              <!-- 退出登录 -->
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="a">退出登录</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </template>
        </div>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
import api from "@/request/api";

export default {
  name: "Topbar",
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1',
      username: null
    };
  },
  methods: {
    handleCommand(command) {
      if (command === 'a') {
        api.logOut('app/logOut/')
        this.$router.push({path: '/login'})
      }
    },
    handleSelect(key, keyPath) {
      if (key === '1') {
        if (this.$route.path !== '/index') {
          this.$router.push({path: '/index'})
        }
      }
      if (key === '2') {
        if (this.$route.path !== '/home') {
          this.$router.push({path: '/home'})
        }
      }
      console.log(keyPath)
    },
    toLogin() {
      this.$router.push({path: '/login'})
    },
    toRegister() {
      this.$router.push({path: '/register'})
    },
    LoginCheck() {
      api.loginCheck()
          .then((response) => {
            if (response.data.code === 200) {
              this.username = response.data.username
            }
          })
    }
  },
  mounted() {
    this.LoginCheck()
  },
}
</script>

<style scoped>
#TopBar {
  width: 100%;

  min-width: 1000px;
  position: absolute;
}

.el-menu {
  background: rgba(0, 0, 0, 0);

}

.el-menu.el-menu--horizontal {
  border-bottom: none;
}

.el-menu--horizontal > .el-menu-item:not(.is-disabled):focus, .el-menu--horizontal > .el-menu-item:not(.is-disabled):hover, .el-menu--horizontal > .el-submenu .el-submenu__title:hover {
  background: rgba(0, 0, 0, 0);
  color: aliceblue;
}

</style>