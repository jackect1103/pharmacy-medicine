<template>
  <p>查看仓库信息</p>
  <el-card class="durpInfostable">
    <warehousetable />
  </el-card>
</template>

<script lang="ts" setup>
import warehousetable from "./components/warehousetable.vue";
</script>



<style lang="scss" scoped>
  p{
    font-size: 18px;
    margin: 20px 80px;
  }
.durpInfostable{
  width: 90%;
  margin:10px auto;
}
</style>
