<template>
  <div class="app-container">
    <el-input v-model="form.name"/>
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
