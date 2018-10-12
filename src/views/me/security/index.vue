<template>
  <div class="app-container">
    <el-row type="flex" justify="center">
      <el-col :span="12" style="text-align: center">
        <img src="https://gw.alicdn.com/tps/TB1KNn4PXXXXXboaFXXXXXXXXXX-774-706.png" style="width: 200px">
      </el-col>
    </el-row>
    <br><br>
    <el-row :gutter="20" type="flex" justify="center">
      <el-col :span="12" style="text-align: right">
        <el-button type="primary">修改密码</el-button>
      </el-col>
      <el-col :span="12">
        <el-button type="primary">更换手机</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '張盛',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      }
    }
  }
}
</script>
