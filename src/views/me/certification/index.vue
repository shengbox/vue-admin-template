<template>
  <div class="app-container">
    <el-form ref="form" :model="form" label-width="140px">
      <el-row>
        <el-col :span="18">
          <h3 style="display: inline-block">个人认证</h3><img src="http://ism.yonyou.com/appstore/OCS-004/logo/OCS-004.png" style="width: 40px;margin-bottom: -8px;">
        </el-col>
      </el-row>
      <el-form-item label="真实姓名:"> {{ form.name }} </el-form-item>
      <el-form-item label="身份证号码:"> {{ form.ID_card_No }} </el-form-item>
      <el-row>
        <el-col><h3>企业认证</h3></el-col>
      </el-row>
      <el-form-item label="公司名称"> {{ form.company }} </el-form-item>
      <el-form-item label="统一社会信用代码"> {{ form.companyUniteNo }} </el-form-item>
      <el-form-item label="法人身份证号码"> {{ form.idCardNo }} </el-form-item>
      <el-form-item label="法人姓名"> {{ form.name }} </el-form-item>
      <el-form-item label="对公银行账户"> {{ form.bankCardNo }} </el-form-item>
      <el-form-item label="开户行"> {{ form.bankName }} </el-form-item>
    </el-form>
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
        companyUniteNo: '91330104MA2CD0AL8C',
        bankCardNo: '03335100040029654',
        idCardNo: '210902197601042517',
        delivery: false,
        type: [],
        bankName: '中国农业银行',
        desc: ''
      }
    }
  }
}
</script>
