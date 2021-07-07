<template>
  <div class="dataTable">
    <div class="body">
      <template>
        <div class="actionDiv">
          <el-button type="success" @click="downloadCSV">下载预测CSV文件<i class="el-icon-download el-icon--right"></i>
          </el-button>
        </div>
        <el-table :data="allInfo" height="80vh" stripe style="width: 100%">
          <el-table-column prop="id" label="id" width="80"></el-table-column>
          <el-table-column prop="Age" label="Age" width="150"></el-table-column>
          <el-table-column prop="BusinessTravel" label="BusinessTravel" width="150"></el-table-column>
          <el-table-column prop="Department" label="Department" width="150"></el-table-column>
          <el-table-column prop="DistanceFromHome" label="DistanceFromHome" width="150"></el-table-column>
          <el-table-column prop="Education" label="Education" width="150"></el-table-column>
          <el-table-column prop="EducationField" label="EducationField" width="150"></el-table-column>
          <el-table-column prop="EmployeeNumber" label="EmployeeNumber" width="150"></el-table-column>
          <el-table-column prop="EnvironmentSatisfaction" label="EnvironmentSatisfaction" width="150"></el-table-column>
          <el-table-column prop="Gender" label="Gender" width="150"></el-table-column>
          <el-table-column prop="JobInvolvement" label="JobInvolvement" width="150"></el-table-column>
          <el-table-column prop="JobLevel" label="JobLevel" width="150"></el-table-column>
          <el-table-column prop="JobRole" label="JobRole" width="150"></el-table-column>
          <el-table-column prop="JobSatisfaction" label="JobSatisfaction" width="150"></el-table-column>
          <el-table-column prop="MaritalStatus" label="MaritalStatus" width="150"></el-table-column>
          <el-table-column prop="MonthlyIncome" label="MonthlyIncome" width="150"></el-table-column>
          <el-table-column prop="NumCompaniesWorked" label="NumCompaniesWorked" width="150"></el-table-column>
          <el-table-column prop="Over18" label="Over18" width="150"></el-table-column>
          <el-table-column prop="OverTime" label="OverTime" width="150"></el-table-column>
          <el-table-column prop="PercentSalaryHike" label="PercentSalaryHike" width="150"></el-table-column>
          <el-table-column prop="PerformanceRating" label="PerformanceRating" width="150"></el-table-column>
          <el-table-column prop="RelationshipSatisfaction" label="RelationshipSatisfaction"
                           width="150"></el-table-column>
          <el-table-column prop="StandardHours" label="StandardHours" width="150"></el-table-column>
          <el-table-column prop="StockOptionLevel" label="StockOptionLevel" width="150"></el-table-column>
          <el-table-column prop="TotalWorkingYears" label="TotalWorkingYears" width="150"></el-table-column>
          <el-table-column prop="TrainingTimesLastYear" label="TrainingTimesLastYear" width="150"></el-table-column>
          <el-table-column prop="WorkLifeBalance" label="WorkLifeBalance" width="150"></el-table-column>
          <el-table-column prop="YearsAtCompany" label="YearsAtCompany" width="150"></el-table-column>
          <el-table-column prop="YearsInCurrentRole" label="YearsInCurrentRole" width="150"></el-table-column>
          <el-table-column prop="YearsSinceLastPromotion" label="YearsSinceLastPromotion" width="150"></el-table-column>
          <el-table-column prop="YearsWithCurrManager" label="YearsWithCurrManager" width="150"></el-table-column>
        </el-table>
      </template>
    </div>
  </div>
</template>

<script>

import api from "@/request/api";

export default {
  name: "jsonTable",
  props: ['allInfo'],
  data: function () {
    return {
      dialogVisible: false,//编辑div显示flag
      edit_index: '',//用户编辑的行编号
      words: ''//搜索的文本
    }
  },
  methods: {
    downloadCSV() {
      api.downloadPredictCSV()
          .then(response => {
            location.href = response.config.url
          })
    },
  },
}
</script>

<style scoped>
.dataTable {
  width: 100%;
}

.actionDiv {
  height: 8vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.el-date-editor.el-input {
  width: 200px;
}

/deep/ .el-table th,
/deep/ .el-table td {
  text-align: center !important;
}
</style>