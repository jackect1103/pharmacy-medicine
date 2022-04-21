<template>
  <div class="login-container">
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>用户登录</span>
        </div>
      </template>
      <!-- 表身 -->
      <el-form ref="ruleFormRef" label-width="100px" :model="loginForm" style="max-width: 460px">
        <el-form-item label="级别:">
          <el-radio-group v-model="loginForm.roleid">
            <el-radio :label="0">管理工作人员</el-radio>
            <el-radio :label="1">普通工作人员</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="账户:">
          <el-input v-model="loginForm.userName" />
        </el-form-item>
        <el-form-item label="密码:">
          <el-input v-model="loginForm.password" type="password"/>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm(ruleFormRef)">登录</el-button>
          <el-button @click="resetForm(ruleFormRef)">重置</el-button>
        </el-form-item>
      </el-form>
    </el-card>  </div>
</template>

<script lang="ts" setup>
import { ref,reactive } from 'vue'
import {login} from '@/api/common-api'
import {useRouter} from 'vue-router'
let router = useRouter()
let ruleFormRef = ref(null)
let loginForm = reactive({
  roleid: 0,
  userName: '',
  password: ''
})

const submitForm = async () => {
  console.log(loginForm)
  let res = await login(loginForm)
  if (res.code == 0) {
    localStorage.setItem('token',res.data.token)
    console.log('res', res)
    router.push('/')
  }
}
const resetForm = () => {}
</script>

<style lang="scss" scoped>
.login-container {
  width: 100vw;
  height: 100vh;
  // background-image:url('../../../public/loginBG.webp') ;
  background-color: #ccc;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;

  .card-header{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .box-card {
    width: 25%;
  }
}
</style>