<template>
  <div class="dataTable">
    <div class="body">
      <template>
        <el-table :data="allInfo" height="90vh" stripe style="width: 100%">
          <el-table-column prop="pk" label="id" width="80"></el-table-column>
          <el-table-column prop="fields.Age" label="Age" width="150"></el-table-column>
          <el-table-column prop="fields.BusinessTravel" label="BusinessTravel" width="150"></el-table-column>
          <el-table-column prop="fields.Department" label="Department" width="150"></el-table-column>
          <el-table-column prop="fields.DistanceFromHome" label="DistanceFromHome" width="150"></el-table-column>
          <el-table-column prop="fields.Education" label="Education" width="150"></el-table-column>
          <el-table-column prop="fields.EducationField" label="EducationField" width="150"></el-table-column>
          <el-table-column prop="fields.EmployeeNumber" label="EmployeeNumber" width="150"></el-table-column>
          <el-table-column prop="fields.EnvironmentSatisfaction" label="EnvironmentSatisfaction"
                           width="150"></el-table-column>
          <el-table-column prop="fields.Gender" label="Gender" width="150"></el-table-column>
          <el-table-column prop="fields.JobInvolvement" label="JobInvolvement" width="150"></el-table-column>
          <el-table-column prop="fields.JobLevel" label="JobLevel" width="150"></el-table-column>
          <el-table-column prop="fields.JobRole" label="JobRole" width="150"></el-table-column>
          <el-table-column prop="fields.JobSatisfaction" label="JobSatisfaction" width="150"></el-table-column>
          <el-table-column prop="fields.MaritalStatus" label="MaritalStatus" width="150"></el-table-column>
          <el-table-column prop="fields.MonthlyIncome" label="MonthlyIncome" width="150"></el-table-column>
          <el-table-column prop="fields.NumCompaniesWorked" label="NumCompaniesWorked" width="150"></el-table-column>
          <el-table-column prop="fields.Over18" label="Over18" width="150"></el-table-column>
          <el-table-column prop="fields.OverTime" label="OverTime" width="150"></el-table-column>
          <el-table-column prop="fields.PercentSalaryHike" label="PercentSalaryHike" width="150"></el-table-column>
          <el-table-column prop="fields.PerformanceRating" label="PerformanceRating" width="150"></el-table-column>
          <el-table-column prop="fields.RelationshipSatisfaction" label="RelationshipSatisfaction"
                           width="150"></el-table-column>
          <el-table-column prop="fields.StandardHours" label="StandardHours" width="150"></el-table-column>
          <el-table-column prop="fields.StockOptionLevel" label="StockOptionLevel" width="150"></el-table-column>
          <el-table-column prop="fields.TotalWorkingYears" label="TotalWorkingYears" width="150"></el-table-column>
          <el-table-column prop="fields.TrainingTimesLastYear" label="TrainingTimesLastYear"
                           width="150"></el-table-column>
          <el-table-column prop="fields.WorkLifeBalance" label="WorkLifeBalance" width="150"></el-table-column>
          <el-table-column prop="fields.YearsAtCompany" label="YearsAtCompany" width="150"></el-table-column>
          <el-table-column prop="fields.YearsInCurrentRole" label="YearsInCurrentRole" width="150"></el-table-column>
          <el-table-column prop="fields.YearsSinceLastPromotion" label="YearsSinceLastPromotion"
                           width="150"></el-table-column>
          <el-table-column prop="fields.YearsWithCurrManager" label="YearsWithCurrManager"
                           width="150"></el-table-column>
          <el-table-column fixed="right" label="操作" width="150">
            <template slot-scope="scope">
              <el-button @click="editUserInfo(scope.row,scope.$index)" type="primary" icon="el-icon-edit"
                         circle></el-button>
              <el-button @click="delUserInfo(scope.$index)" type="danger" icon="el-icon-delete" circle></el-button>
            </template>
          </el-table-column>
        </el-table>
      </template>
      <el-dialog
          title="编辑用户信息"
          :visible.sync="dialogVisible"
          width="30%"
          :before-close="handleClose">
        <div>
          <el-form :model="edit_info" ref="edit_info" label-width="100px" :label-position="labelPosition"
                   class="demo-edit_info">
            <el-form-item label="年龄" prop="Age">
              <el-input-number v-model="edit_info.Age" :min="1" :max="200" label="描述文字"></el-input-number>
            </el-form-item>
            <el-form-item label="商务差旅频率" prop="BusinessTravel">
              <el-select v-model="edit_info.BusinessTravel" placeholder="商务差旅频率">
                <el-option label="不出差" value="Non-Travel"></el-option>
                <el-option label="不经常出差" value="Travel_Rarely"></el-option>
                <el-option label="经常出差" value="Travel_Frequently"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="所在部门" prop="Department">
              <el-select v-model="edit_info.Department" placeholder="所在部门">
                <el-option label="销售部" value="Sales"></el-option>
                <el-option label="研发部" value="Research & Development"></el-option>
                <el-option label="人力资源部" value="Human Resources"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="公司跟家庭住址的距离(从1到29，1表示最近，29表示最远)" prop="DistanceFromHome">
              <el-input-number v-model="edit_info.DistanceFromHome" :min="1" :max="29"></el-input-number>
            </el-form-item>
            <el-form-item label="教育程度" prop="Education">
              <el-select v-model="edit_info.Education" placeholder="教育程度">
                <el-option label="高中及以下" value="1"></el-option>
                <el-option label="专科" value="2"></el-option>
                <el-option label="本科" value="3"></el-option>
                <el-option label="硕士研究生" value="4"></el-option>
                <el-option label="博士研究生" value="5"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="所学习的专业领域" prop="EducationField">
              <el-select v-model="edit_info.EducationField" placeholder="所学习的专业领域">
                <el-option label="生命科学" value="Life Sciences"></el-option>
                <el-option label="医疗" value="Medical"></el-option>
                <el-option label="市场营销" value="Marketing"></el-option>
                <el-option label="技术学位" value="Technical Degree"></el-option>
                <el-option label="人力资源" value="Human Resources"></el-option>
                <el-option label="其他" value="Other"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="员工号码" prop="EmployeeNumber">
              <el-input v-model="edit_info.EmployeeNumber"></el-input>
            </el-form-item>
            <el-form-item label="员工对于工作环境的满意程度(从1到4，1的满意程度最低，4的满意程度最高)" prop="EnvironmentSatisfaction">
              <el-input-number v-model="edit_info.EnvironmentSatisfaction" :min="1" :max="4"
                               label="描述文字"></el-input-number>
            </el-form-item>
            <el-form-item label="性别" prop="Gender">
              <el-select v-model="edit_info.Gender" placeholder="性别">
                <el-option label="男" value="Male"></el-option>
                <el-option label="女" value="Female"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="员工工作投入度(从1到4，1为投入度最低，4为投入度最高)" prop="JobInvolvement">
              <el-input-number v-model="edit_info.JobInvolvement" :min="1" :max="4"></el-input-number>
            </el-form-item>
            <el-form-item label="职业级别(从1到5，1为最低级别，5为最高级别)" prop="JobLevel">
              <el-input-number v-model="edit_info.JobLevel" :min="1" :max="5"></el-input-number>
            </el-form-item>
            <el-form-item label="工作角色" prop="JobRole">
              <el-select v-model="edit_info.JobRole" placeholder="工作角色">
                <el-option label="销售主管" value="Sales Executive"></el-option>
                <el-option label="科学研究员" value="Research Scientist"></el-option>
                <el-option label="实验室技术员" value="Laboratory Technician"></el-option>
                <el-option label="制造总监" value="Manufacturing Director"></el-option>
                <el-option label="医疗代表" value="Healthcare Representative"></el-option>
                <el-option label="经理" value="Manager"></el-option>
                <el-option label="销售代表" value="Sales Representative"></el-option>
                <el-option label="研究总监" value="Research Director"></el-option>
                <el-option label="人力资源" value="Human Resources"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="工作满意度(从1到4，1代表满意程度最低，4代表满意程度最高)" prop="JobSatisfaction">
              <el-input-number v-model="edit_info.JobSatisfaction" :min="1" :max="4"></el-input-number>
            </el-form-item>
            <el-form-item label="员工婚姻状况" prop="MaritalStatus">
              <el-select v-model="edit_info.MaritalStatus" placeholder="婚姻状况">
                <el-option label="单身" value="Single"></el-option>
                <el-option label="已婚" value="Married"></el-option>
                <el-option label="离婚" value="Divorced"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="员工月收入" prop="MonthlyIncome">
              <el-input-number v-model="edit_info.MonthlyIncome" :min="1" :max="1000000"></el-input-number>
            </el-form-item>
            <el-form-item label="员工曾经工作过的公司数" prop="NumCompaniesWorked">
              <el-input-number v-model="edit_info.NumCompaniesWorked" :min="1" :max="1000000"></el-input-number>
            </el-form-item>
            <el-form-item label="年龄是否超过18岁" prop="Over18">
              <el-select v-model="edit_info.Over18" placeholder="年龄是否超过18岁">
                <el-option label="是" value="1"></el-option>
                <el-option label="否" value="0"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="是否加班" prop="OverTime">
              <el-select v-model="edit_info.OverTime" placeholder="是否加班">
                <el-option label="加班" value="Yes"></el-option>
                <el-option label="不加班" value="No"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="工资提高的百分比" prop="PercentSalaryHike">
              <el-input-number v-model="edit_info.PercentSalaryHike" :min="1" :max="100000"></el-input-number>
            </el-form-item>
            <el-form-item label="绩效评估" prop="PerformanceRating">
              <el-input-number v-model="edit_info.PerformanceRating" :min="3" :max="4"></el-input-number>
            </el-form-item>
            <el-form-item label="关系满意度(从1到4，1表示满意度最低，4表示满意度最高)" prop="RelationshipSatisfaction">
              <el-input-number v-model="edit_info.RelationshipSatisfaction" :min="1" :max="4"></el-input-number>
            </el-form-item>
            <el-form-item label="标准工时" prop="StandardHours">
              <el-input-number v-model="edit_info.StandardHours" :min="1" :max="1000000"></el-input-number>
            </el-form-item>
            <el-form-item label="股票期权水平" prop="StockOptionLevel">
              <el-input-number v-model="edit_info.StockOptionLevel" :min="1" :max="3"></el-input-number>
            </el-form-item>
            <el-form-item label="总工龄" prop="TotalWorkingYears">
              <el-input-number v-model="edit_info.TotalWorkingYears" :min="0" :max="100"></el-input-number>
            </el-form-item>
            <el-form-item label="上一年的培训时长(从0到6，0表示没有培训，6表示培训时间最长)" prop="TrainingTimesLastYear">
              <el-input-number v-model="edit_info.TrainingTimesLastYear" :min="0" :max="6"></el-input-number>
            </el-form-item>
            <el-form-item label="工作与生活平衡程度(从1到4，1表示平衡程度最低，4表示平衡程度最高)" prop="WorkLifeBalance">
              <el-input-number v-model="edit_info.WorkLifeBalance" :min="1" :max="4"></el-input-number>
            </el-form-item>
            <el-form-item label="在目前公司工作年数" prop="YearsAtCompany">
              <el-input-number v-model="edit_info.YearsAtCompany" :min="0" :max="100"></el-input-number>
            </el-form-item>
            <el-form-item label="在目前工作职责的工作年数" prop="YearsInCurrentRole">
              <el-input-number v-model="edit_info.YearsInCurrentRole" :min="0" :max="100"></el-input-number>
            </el-form-item>
            <el-form-item label="距离上次升职时长" prop="YearsSinceLastPromotion">
              <el-input-number v-model="edit_info.YearsSinceLastPromotion" :min="0" :max="100"></el-input-number>
            </el-form-item>
            <el-form-item label="跟目前的管理者共事年数" prop="YearsWithCurrManager">
              <el-input-number v-model="edit_info.YearsWithCurrManager" :min="0" :max="100"></el-input-number>
            </el-form-item>
            <el-form-item style="margin: 50px 0">
              <el-button style="width: 100px" type="primary" @click="submitForm('edit_info')">提交</el-button>
              <el-button style="width: 100px" @click="resetForm('edit_info')">重置</el-button>
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
  name: "dataTable",
  components: {},
  props: ['allInfo'],
  data: function () {
    return {
      labelPosition: 'top',
      user_info: {
        Age: '',
        BusinessTravel: '',
        Department: '',
        DistanceFromHome: '',
        Education: '',
        EducationField: '',
        EmployeeNumber: '',
        EnvironmentSatisfaction: '',
        Gender: '',
        JobInvolvement: '',
        JobLevel: '',
        JobRole: '',
        JobSatisfaction: '',
        MaritalStatus: '',
        MonthlyIncome: '',
        NumCompaniesWorked: '',
        Over18: '',
        OverTime: '',
        PercentSalaryHike: '',
        PerformanceRating: '',
        RelationshipSatisfaction: '',
        StandardHours: '',
        StockOptionLevel: '',
        TotalWorkingYears: '',
        TrainingTimesLastYear: '',
        WorkLifeBalance: '',
        YearsAtCompany: '',
        YearsInCurrentRole: '',
        YearsSinceLastPromotion: '',
        YearsWithCurrManager: '',
      },
      edit_info: {
        Age: '',
        BusinessTravel: '',
        Department: '',
        DistanceFromHome: '',
        Education: '',
        EducationField: '',
        EmployeeNumber: '',
        EnvironmentSatisfaction: '',
        Gender: '',
        JobInvolvement: '',
        JobLevel: '',
        JobRole: '',
        JobSatisfaction: '',
        MaritalStatus: '',
        MonthlyIncome: '',
        NumCompaniesWorked: '',
        Over18: '',
        OverTime: '',
        PercentSalaryHike: '',
        PerformanceRating: '',
        RelationshipSatisfaction: '',
        StandardHours: '',
        StockOptionLevel: '',
        TotalWorkingYears: '',
        TrainingTimesLastYear: '',
        WorkLifeBalance: '',
        YearsAtCompany: '',
        YearsInCurrentRole: '',
        YearsSinceLastPromotion: '',
        YearsWithCurrManager: '',
      },
      rules: {
        Age: [{required: true, message: '', trigger: 'blur'},],
        BusinessTravel: [{required: true, message: '', trigger: 'blur'},],
        Department: [{required: true, message: '', trigger: 'blur'},],
        DistanceFromHome: [{required: true, message: '', trigger: 'blur'},],
        Education: [{required: true, message: '', trigger: 'blur'},],
        EducationField: [{required: true, message: '', trigger: 'blur'},],
        EmployeeNumber: [{required: true, message: '', trigger: 'blur'},],
        EnvironmentSatisfaction: [{required: true, message: '', trigger: 'blur'},],
        Gender: [{required: true, message: '', trigger: 'blur'},],
        JobInvolvement: [{required: true, message: '', trigger: 'blur'},],
        JobLevel: [{required: true, message: '', trigger: 'blur'},],
        JobRole: [{required: true, message: '', trigger: 'blur'},],
        JobSatisfaction: [{required: true, message: '', trigger: 'blur'},],
        MaritalStatus: [{required: true, message: '', trigger: 'blur'},],
        MonthlyIncome: [{required: true, message: '', trigger: 'blur'},],
        NumCompaniesWorked: [{required: true, message: '', trigger: 'blur'},],
        Over18: [{required: true, message: '', trigger: 'blur'},],
        OverTime: [{required: true, message: '', trigger: 'blur'},],
        PercentSalaryHike: [{required: true, message: '', trigger: 'blur'},],
        PerformanceRating: [{required: true, message: '', trigger: 'blur'},],
        RelationshipSatisfaction: [{required: true, message: '', trigger: 'blur'},],
        StandardHours: [{required: true, message: '', trigger: 'blur'},],
        StockOptionLevel: [{required: true, message: '', trigger: 'blur'},],
        TotalWorkingYears: [{required: true, message: '', trigger: 'blur'},],
        TrainingTimesLastYear: [{required: true, message: '', trigger: 'blur'},],
        WorkLifeBalance: [{required: true, message: '', trigger: 'blur'},],
        YearsAtCompany: [{required: true, message: '', trigger: 'blur'},],
        YearsInCurrentRole: [{required: true, message: '', trigger: 'blur'},],
        YearsSinceLastPromotion: [{required: true, message: '', trigger: 'blur'},],
        YearsWithCurrManager: [{required: true, message: '', trigger: 'blur'},],
      },
      tableData: [{
        Age: '',
        BusinessTravel: '',
        Department: '',
        DistanceFromHome: '',
        Education: '',
        EducationField: '',
        EmployeeNumber: '',
        EnvironmentSatisfaction: '',
        Gender: '',
        JobInvolvement: '',
        JobLevel: '',
        JobRole: '',
        JobSatisfaction: '',
        MaritalStatus: '',
        MonthlyIncome: '',
        NumCompaniesWorked: '',
        Over18: '',
        OverTime: '',
        PercentSalaryHike: '',
        PerformanceRating: '',
        RelationshipSatisfaction: '',
        StandardHours: '',
        StockOptionLevel: '',
        TotalWorkingYears: '',
        TrainingTimesLastYear: '',
        WorkLifeBalance: '',
        YearsAtCompany: '',
        YearsInCurrentRole: '',
        YearsSinceLastPromotion: '',
        YearsWithCurrManager: '',
      }],
      dialogVisible: false,
      edit_index: '',
    }
  },
  methods: {
    delUserInfo(index) {
      this.$confirm('确认删除？')
          .then(() => {
            api.delUserInfo({
              id: this.allInfo[index].pk
            }).then(response => {
              if (response.data.code === 200) {
                this.$message.success('删除成功')
              } else {
                this.$message.error('删除失败')
              }
            })
            this.allInfo.splice(index, 1)
          });
    },
    editUserInfo(item, index) {
      this.edit_info = item.fields
      this.dialogVisible = true;
      this.edit_index = index;
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          api.postFormData({
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
.dataTable {
  width: 100%;

}

.el-date-editor.el-input {
  width: 200px;
}

/deep/ .el-dialog {
  width: 50vw;
  min-width: 600px;
  height: 60vh;
  min-height: 500px;
  overflow-y: auto;
}

/deep/ .el-table th,
/deep/ .el-table td {
  text-align: center !important;
}
</style>