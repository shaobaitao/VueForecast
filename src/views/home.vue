<template>
  <div class="home">
    <Topbar></Topbar>
    <el-row class="tac">
      <el-col class="leftArea">
        <el-menu
            default-active="1"
            class="el-menu-vertical-demo"
            @select="handleSelect">
          <el-menu-item index="1">
            <i class="el-icon-menu"></i>
            <span slot="title">我的资料</span>
          </el-menu-item>
          <el-menu-item index="2" v-if="permission>=1">
            <i class="el-icon-document"></i>
            <span slot="title">员工管理</span>
          </el-menu-item>
          <el-menu-item index="3" v-if="permission>=1">
            <i class="el-icon-setting"></i>
            <span slot="title">员工离职预测</span>
          </el-menu-item>
          <el-menu-item index="4" v-if="permission>=2">
            <i class="el-icon-setting"></i>
            <span slot="title">员工权限管理</span>
          </el-menu-item>
        </el-menu>
      </el-col>
      <el-col class="rightArea">
        <infoForm v-show="activeNow==='1'" style="overflow-y: scroll;"></infoForm>

        <dataTable v-show="activeNow==='2'" :allInfo="allInfo"></dataTable>
        <el-pagination v-show="activeNow==='2'" :page-size="25"
                       layout="prev, pager, next, jumper" @current-change="handleCurrentChange"
                       :total="allInfoCount">
        </el-pagination>

        <jsonTable v-show="activeNow==='3'" :allInfo="predictInfo"></jsonTable>

        <permissionTable v-show="activeNow==='4'" :allInfo="permissionInfo"></permissionTable>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import dataTable from "@/components/dataTable";
import jsonTable from "@/components/jsonTable";
import permissionTable from "@/components/permissionTable";
import infoForm from "@/components/infoForm";
import Topbar from "@/components/Topbar";
import api from "@/request/api";

export default {
  name: "home",
  data() {
    return {
      activeIndex: '1',
      allInfo: [],
      predictInfo: [],
      permissionInfo: [],
      allInfoCount: 0,
      predictInfoCount: 0,
      permission: 0,
    };
  },
  components: {
    infoForm,
    dataTable,
    Topbar,
    jsonTable,
    permissionTable
  },
  computed: {
    activeNow() {
      switch (this.activeIndex) {
        case '1':
          break
        case '2':
          this.getTableData(0, 25)
          this.getAllCount()
          break
        case '3':
          this.getPredictData()
          break
        case '4':
          this.getPermissionData()
      }
      return this.activeIndex
    }
  },
  methods: {
    handleSelect(key) {
      this.activeIndex = key
    },
    getTableData(a, b) {
      let param = new URLSearchParams()
      param.append('rangeA', a.toString())
      param.append('rangeB', b.toString())
      api.getTableData(param)
          .then(response => {
            this.allInfo = response.data.data
          })
    },
    getPredictData() {
      api.getPredictData()
          .then(response => {
            this.predictInfo = response.data
          })
    },
    getPermissionData() {
      api.getPermissionData()
          .then(response => {
            this.permissionInfo = response.data.data
            console.log(this.permissionInfo)
          })
    },
    getAllCount() {
      api.getAllCount()
          .then(response => {
            this.allInfoCount = response.data.data
          })
    },
    handleCurrentChange(val) {
      this.getTableData((val - 1) * 25, val * 25)
    },
    getPermission() {
      api.getPermission()
          .then(response => {
            this.permission = response.data.permission
          })
    }

  },
  mounted() {
    this.getPermission()
  }
}
</script>

<style scoped>
.home {
  height: 100vh;
  width: 100vw;
}

.tac {
  margin-top: 60px;
  width: 100vw;
  height: calc(100vh - 60px);
}

.el-menu {
  height: 100vh;
}

.leftArea {
  width: 300px;
}

.rightArea {
  width: calc(100vw - 300px);
  height: 100%;
}

/deep/ .el-pagination {
  display: flex;
  justify-content: center;
  align-items: center;
}

#TopBar {
  z-index: 10000;
}
</style>