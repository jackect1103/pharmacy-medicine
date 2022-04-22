<template>
  <el-card class="box-card"> 
    <div @click="goToRouter('QueryDrug')" class="text item">查询药品信息</div> 
    <div @click="goToRouter('ViewWarehouse')" class="text item">查看仓库信息</div>
    <div @click="goToRouter('ViewDrug')" class="text item">查看药品信息</div>
    <template v-if="userinfos.roleid == 0">
      <div @click="goToRouter('AddWarehouse')" class="text item">添加仓库信息</div>
      <!-- <div @click="goToRouter('UpdateWarehouse')" class="text item">修改仓库信息</div> -->
      <div @click="goToRouter('AddDrug')" class="text item">添加药品信息</div>
      <!-- <div @click="goToRouter('UpdateDrug')" class="text item">修改药品信息</div> -->
    </template>
    <div @click="goToRouter('login')" class="text item">退出登录</div>
  </el-card>
</template>

<script  lang="ts" setup>
import { useRouter} from 'vue-router'
const router = useRouter()
const userinfos = JSON.parse(localStorage.getItem('userinfos'))
console.log('userinfos', userinfos)
const goToRouter = (path) =>{
  if (path === 'login') {
    localStorage.clear() 
  }
  router.push({
    path
  })
}
</script>

<style lang="scss" scoped>
  .box-card{
    width: 250px;
    display: flex;
    justify-content: center;
    margin:50px auto;
  }
  
  .text {
  font-size: 14px;
}

.item {
  padding: 18px 0;
  display: flex;
  justify-content: center;
  border-bottom:1px solid #ccc;
  &:hover{
    color: red;
    cursor: pointer;
  }
}


</style>