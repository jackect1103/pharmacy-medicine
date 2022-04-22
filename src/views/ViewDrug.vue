<template>
  <p>
    查看药品信息
    <el-button v-if="userinfos.roleid === 0" type="primary" @click="goToRouter('AddDrug')" class="text item">添加药品</el-button>
  </p>
  <el-card class="durpInfostable">
    <durpInfostable></durpInfostable>
  </el-card>
</template>

<script lang="ts" setup>
import durpInfostable from "./components/durpInfostable.vue";
import { useRouter} from 'vue-router'
const router = useRouter()
const userinfos = JSON.parse(localStorage.getItem('userinfos'))
const goToRouter = (path) =>{
  router.push({
    path 
  })
}
</script>



<style lang="scss" scoped>
  p{
    font-size: 18px;
    margin: 20px 80px;
    display: flex;
    justify-content: space-between;
  }
.durpInfostable{
  width: 90%;
  margin:10px auto;
}
</style>
