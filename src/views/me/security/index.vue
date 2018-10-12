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
        <el-button type="primary" @click="open2">修改密码</el-button>
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
  },
  methods: {
    open2() {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '删除成功!'
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    }
  }
}
</script>
