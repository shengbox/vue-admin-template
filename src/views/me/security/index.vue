<template>
  <div class="app-container">
    <el-row :gutter="20">
      <el-col :span="4" :offset="8">
        <el-button type="primary">修改密码</el-button>
      </el-col>
      <el-col :span="4">
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
