<template>
  <div class="app-container">
    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="姓名:">{{ form.name }}</el-form-item>
    </el-form>
    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="手机号码:">{{ form.phone }}</el-form-item>
    </el-form>
    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="性别:">{{ form.sex }}</el-form-item>
    </el-form>
    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="年龄:">{{ form.age }}</el-form-item>
    </el-form>
    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="注册日期:">{{ form.register_date }}</el-form-item>
    </el-form>
    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="龙伯号:">{{ form.longbo_id }}</el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '張盛',
        age: '18',
        phone: '18687678987',
        sex: '男',
        longbo_id: 123,
        type: [],
        register_date: '2018-10-11',
        desc: ''
      }
    }
  }
}
</script>
