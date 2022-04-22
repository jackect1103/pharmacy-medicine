<template>
  <el-card class="AddWarehouse">
    <template #header>
      <div class="card-header">
        <span>查询药品信息</span>
      </div>
    </template>
    <el-form ref="ruleFormRef" label-width="100px" :model="durpInfos" style="max-width: 460px">
        <el-form-item label="药品名称:">
          <el-input v-model="durpInfos.durgname" clearable/>
        </el-form-item>
        <el-form-item label="药品编号:">
          <el-input v-model="durpInfos.number" clearable/>
        </el-form-item>
        <el-form-item label="厂家:">
          <el-input v-model="durpInfos.factory" clearable/>
        </el-form-item>
        <el-form-item label="仓库名称:">
          <el-input v-model="durpInfos.warehousename" clearable/>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="checkdrup(ruleFormRef)">查询</el-button>
        </el-form-item>
    </el-form>
  </el-card>
  <div class="tableWrap">
    <durpInfostable :searchParams="searchParams"></durpInfostable>
  </div>
</template>

<script lang="ts" setup>
import {ref,reactive} from 'vue'
import durpInfostable from './components/durpInfostable.vue'
const ruleFormRef = ref()
let durpInfos = reactive({
  durgname:'',
  number:'',
  factory:'',
  warehousename:'',
})
let searchParams = ref({})
const checkdrup = () =>{
  searchParams.value = durpInfos
}
</script>



<style lang="scss">
.AddWarehouse{
  width: 500px;
   margin:20px auto;
}
.tableWrap{
  margin:auto;
  width: 90%;
}
</style>
