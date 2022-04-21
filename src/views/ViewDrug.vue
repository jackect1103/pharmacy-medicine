<template>
  <p>查看药品信息</p>
  <el-card class="durpInfostable">
    <durpInfostable></durpInfostable>
  </el-card>
</template>

<script lang="ts" setup>
import durpInfostable from "./components/durpInfostable.vue";
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
