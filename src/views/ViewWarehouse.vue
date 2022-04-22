<template>
  <p>查看仓库信息 
    <el-button v-if="userinfos.roleid === 0"  type="primary" @click="goToRouter('AddWarehouse')" class="text item">添加仓库</el-button>
  </p>
  <el-card class="durpInfostable">
    <warehousetable />
  </el-card>
</template>

<script lang="ts" setup>
import warehousetable from "./components/warehousetable.vue";
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
