<template>
  <div class="permissionTable">
    <div class="body">
      <el-table :data="allInfo" height="80vh" stripe style="width: 100%">
        <el-table-column prop="id" label="id" width="80"></el-table-column>
        <el-table-column prop="userID" label="用户ID"></el-table-column>
        <el-table-column prop="username" label="用户名"></el-table-column>
        <el-table-column prop="permission" label="权限"></el-table-column>
        <el-table-column label="操作" width="150">
          <template slot-scope="scope">
            <el-button @click="editUserInfo(scope.row,scope.$index)" type="primary" icon="el-icon-edit"
                       circle></el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-dialog
          title="编辑用户信息"
          :visible.sync="dialogVisible"
          width="30%"
          :before-close="handleClose">
        <div>
          <el-form :model="edit_info" ref="edit_info" label-width="100px" :label-position="labelPosition"
                   class="demo-edit_info">
            <el-form-item label="权限" prop="permission">
              <el-select v-model="edit_info.permission" placeholder="权限">
                <el-option label="普通用户" value="0"></el-option>
                <el-option label="管理员" value="1"></el-option>
                <el-option label="超级管理员" value="2"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item style="margin: 50px 0">
              <el-button style="width: 100px" type="primary" @click="submitForm('edit_info')">提交</el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import api from "@/request/api";

export default {
  name: "permissionTable",
  components: {},
  props: ['allInfo'],
  data: function () {
    return {
      labelPosition: 'top',
      edit_info: {
        userID: 0,
        permission: 0,
      },
      dialogVisible: false,
      edit_index: '',
    }
  },
  methods: {
    editUserInfo(item, index) {
      this.edit_info = item
      this.dialogVisible = true;
      this.edit_index = index;
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          api.postPermissionData({
            ruleForm: this.edit_info
          })
              .then(response => {
                if (response.data.code === 200) {
                  this.$message.success(response.data.msg)
                }
              })
          this.dialogVisible = false
        } else {
          this.$message.error('表单验证未通过')
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    handleClose() {
      this.dialogVisible = false;
    },
  },
}
</script>

<style scoped>
.permissionTable {
  width: 100%;
}

.el-date-editor.el-input {
  width: 200px;
}

/deep/ .el-table th,
/deep/ .el-table td {
  text-align: center !important;
}
</style>