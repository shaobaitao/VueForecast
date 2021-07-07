<template>
  <div class="userInfoMain">
    <el-form :model="ruleForm" ref="ruleForm" :rules="rules" label-width="100px" class="demo-ruleForm"
             :label-position="labelPosition">
      <el-form-item label="年龄" prop="Age">
        <el-input-number v-model="ruleForm.Age" :min="1" :max="200" label="描述文字"></el-input-number>
      </el-form-item>
      <el-form-item label="商务差旅频率" prop="BusinessTravel">
        <el-select v-model="ruleForm.BusinessTravel" placeholder="商务差旅频率">
          <el-option label="不出差" value="Non-Travel"></el-option>
          <el-option label="不经常出差" value="Travel_Rarely"></el-option>
          <el-option label="经常出差" value="Travel_Frequently"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="所在部门" prop="Department">
        <el-select v-model="ruleForm.Department" placeholder="所在部门">
          <el-option label="销售部" value="Sales"></el-option>
          <el-option label="研发部" value="Research & Development"></el-option>
          <el-option label="人力资源部" value="Human Resources"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="公司跟家庭住址的距离(从1到29，1表示最近，29表示最远)" prop="DistanceFromHome">
        <el-input-number v-model="ruleForm.DistanceFromHome" :min="1" :max="29"></el-input-number>
      </el-form-item>
      <el-form-item label="教育程度" prop="Education">
        <el-select v-model="ruleForm.Education" placeholder="教育程度">
          <el-option label="高中及以下" value="1"></el-option>
          <el-option label="专科" value="2"></el-option>
          <el-option label="本科" value="3"></el-option>
          <el-option label="硕士研究生" value="4"></el-option>
          <el-option label="博士研究生" value="5"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="所学习的专业领域" prop="EducationField">
        <el-select v-model="ruleForm.EducationField" placeholder="所学习的专业领域">
          <el-option label="生命科学" value="Life Sciences"></el-option>
          <el-option label="医疗" value="Medical"></el-option>
          <el-option label="市场营销" value="Marketing"></el-option>
          <el-option label="技术学位" value="Technical Degree"></el-option>
          <el-option label="人力资源" value="Human Resources"></el-option>
          <el-option label="其他" value="Other"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="员工号码" prop="EmployeeNumber">
        <el-input v-model="ruleForm.EmployeeNumber"></el-input>
      </el-form-item>
      <el-form-item label="员工对于工作环境的满意程度(从1到4，1的满意程度最低，4的满意程度最高)" prop="EnvironmentSatisfaction">
        <el-input-number v-model="ruleForm.EnvironmentSatisfaction" :min="1" :max="4" label="描述文字"></el-input-number>
      </el-form-item>
      <el-form-item label="性别" prop="Gender">
        <el-select v-model="ruleForm.Gender" placeholder="性别">
          <el-option label="男" value="Male"></el-option>
          <el-option label="女" value="Female"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="员工工作投入度(从1到4，1为投入度最低，4为投入度最高)" prop="JobInvolvement">
        <el-input-number v-model="ruleForm.JobInvolvement" :min="1" :max="4"></el-input-number>
      </el-form-item>
      <el-form-item label="职业级别(从1到5，1为最低级别，5为最高级别)" prop="JobLevel">
        <el-input-number v-model="ruleForm.JobLevel" :min="1" :max="5"></el-input-number>
      </el-form-item>
      <el-form-item label="工作角色" prop="JobRole">
        <el-select v-model="ruleForm.JobRole" placeholder="工作角色">
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
        <el-input-number v-model="ruleForm.JobSatisfaction" :min="1" :max="4"></el-input-number>
      </el-form-item>
      <el-form-item label="员工婚姻状况" prop="MaritalStatus">
        <el-select v-model="ruleForm.MaritalStatus" placeholder="婚姻状况">
          <el-option label="单身" value="Single"></el-option>
          <el-option label="已婚" value="Married"></el-option>
          <el-option label="离婚" value="Divorced"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="员工月收入" prop="MonthlyIncome">
        <el-input-number v-model="ruleForm.MonthlyIncome" :min="1" :max="1000000"></el-input-number>
      </el-form-item>
      <el-form-item label="员工曾经工作过的公司数" prop="NumCompaniesWorked">
        <el-input-number v-model="ruleForm.NumCompaniesWorked" :min="1" :max="1000000"></el-input-number>
      </el-form-item>
      <el-form-item label="年龄是否超过18岁" prop="Over18">
        <el-select v-model="ruleForm.Over18" placeholder="年龄是否超过18岁">
          <el-option label="是" value="1"></el-option>
          <el-option label="否" value="0"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="是否加班" prop="OverTime">
        <el-select v-model="ruleForm.OverTime" placeholder="是否加班">
          <el-option label="加班" value="Yes"></el-option>
          <el-option label="不加班" value="No"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="工资提高的百分比" prop="PercentSalaryHike">
        <el-input-number v-model="ruleForm.PercentSalaryHike" :min="1" :max="100000"></el-input-number>
      </el-form-item>
      <el-form-item label="绩效评估" prop="PerformanceRating">
        <el-input-number v-model="ruleForm.PerformanceRating" :min="3" :max="4"></el-input-number>
      </el-form-item>
      <el-form-item label="关系满意度(从1到4，1表示满意度最低，4表示满意度最高)" prop="RelationshipSatisfaction">
        <el-input-number v-model="ruleForm.RelationshipSatisfaction" :min="1" :max="4"></el-input-number>
      </el-form-item>
      <el-form-item label="标准工时" prop="StandardHours">
        <el-input-number v-model="ruleForm.StandardHours" :min="1" :max="1000000"></el-input-number>
      </el-form-item>
      <el-form-item label="股票期权水平" prop="StockOptionLevel">
        <el-input-number v-model="ruleForm.StockOptionLevel" :min="1" :max="3"></el-input-number>
      </el-form-item>
      <el-form-item label="总工龄" prop="TotalWorkingYears">
        <el-input-number v-model="ruleForm.TotalWorkingYears" :min="0" :max="100"></el-input-number>
      </el-form-item>
      <el-form-item label="上一年的培训时长(从0到6，0表示没有培训，6表示培训时间最长)" prop="TrainingTimesLastYear">
        <el-input-number v-model="ruleForm.TrainingTimesLastYear" :min="0" :max="6"></el-input-number>
      </el-form-item>
      <el-form-item label="工作与生活平衡程度(从1到4，1表示平衡程度最低，4表示平衡程度最高)" prop="WorkLifeBalance">
        <el-input-number v-model="ruleForm.WorkLifeBalance" :min="1" :max="4"></el-input-number>
      </el-form-item>
      <el-form-item label="在目前公司工作年数" prop="YearsAtCompany">
        <el-input-number v-model="ruleForm.YearsAtCompany" :min="0" :max="100"></el-input-number>
      </el-form-item>
      <el-form-item label="在目前工作职责的工作年数" prop="YearsInCurrentRole">
        <el-input-number v-model="ruleForm.YearsInCurrentRole" :min="0" :max="100"></el-input-number>
      </el-form-item>
      <el-form-item label="距离上次升职时长" prop="YearsSinceLastPromotion">
        <el-input-number v-model="ruleForm.YearsSinceLastPromotion" :min="0" :max="100"></el-input-number>
      </el-form-item>
      <el-form-item label="跟目前的管理者共事年数" prop="YearsWithCurrManager">
        <el-input-number v-model="ruleForm.YearsWithCurrManager" :min="0" :max="100"></el-input-number>
      </el-form-item>
      <el-form-item style="margin: 50px 0">
        <el-button style="width: 100px" type="primary" @click="submitForm('ruleForm')">提交</el-button>
        <el-button style="width: 100px" @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import api from "@/request/api";

export default {
  name: "infoForm",
  data() {
    return {
      ruleForm: {
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
      labelPosition: 'top',
    };
  },
  methods: {
    submitForm(formName) {
      // let param = new URLSearchParams()
      // param.append('ruleForm', this.ruleForm.BusinessTravel)

      this.$refs[formName].validate((valid) => {
        if (valid) {
          api.postFormData({
            ruleForm: this.ruleForm
          })
              .then(response => {
                if (response.data.code === 200) {
                  this.$message.success(response.data.msg)
                }
              })
        } else {
          this.$message.error('表单验证未通过')
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    getMyInfo() {
      api.loginCheck()
          .then((response) => {
            if (response.data.code === 200) {
              api.getMyInfo({
                username:response.data.username
              })
                  .then(response =>{
                    this.ruleForm=response.data.data[0].fields
                  })
            }
          })

    }
  },
  mounted() {
    this.getMyInfo()
  }
}
</script>

<style lang="less" scoped>
.userInfoMain {
  height: 100%;
  min-width: 750px;
}


/deep/ .avatarUploader .el-upload-dragger {
  display: inline-block;
  margin-top: 30px;

}

.demo-ruleForm {
  margin-left: 100px;
}
</style>