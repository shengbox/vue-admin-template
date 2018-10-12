<template>
  <div class="app-container">
    <el-row type="flex" justify="center">
      <el-col :span="18">
        <h2 style="float: left;">个人认证</h2><img src="http://ism.yonyou.com/appstore/OCS-004/logo/OCS-004.png" style="width: 50px">
      </el-col>
    </el-row>
    <el-row type="flex" justify="center">
      <el-col :span="8">
        真实姓名：{{ form.name }}
      </el-col>
      <el-col :span="8">
        身份证号码：{{ form.ID_card_No }}
      </el-col>
    </el-row>
    <br>
    <el-row type="flex" justify="center">
      <el-col :span="18">
        <h2>企业认证</h2>
      </el-col>
    </el-row>
    <el-row type="flex" justify="center">
      <el-col :span="16">
        公司名称：{{ form.company }}
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
        ID_card_No: '33068*******5621',
        company: '杭州仙人掌科技有限公司',
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
