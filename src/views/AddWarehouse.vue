<template>
   <el-card class="AddWarehouse">
    <template #header>
      <div class="card-header">
        <span>添加仓库信息</span>
      </div>
    </template>
    <el-form ref="ruleFormRef" label-width="100px" :model="warehouse" style="max-width: 460px">
        <el-form-item label="仓库名称:">
          <el-input v-model="warehouse.warehousename" clearable />
        </el-form-item>
        <el-form-item label="药品分类:">
          <el-input v-model="warehouse.class" clearable/>
        </el-form-item>
        <el-form-item label="药品名称:">
          <el-input v-model="warehouse.durgname" clearable/>
        </el-form-item>
        <el-form-item label="本库数量:">
          <el-input v-model="warehouse.librarynum" clearable/>
        </el-form-item>
        <el-form-item label="出库信息:">
          <el-input v-model="warehouse.outbound" clearable/>
        </el-form-item>
        <el-form-item label="进库信息:">
          <el-input v-model="warehouse.entry" clearable/>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="addhandle(ruleFormRef)">添加</el-button>
        </el-form-item>
      </el-form>
  </el-card>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter} from 'vue-router'
import {addWarehouseHandle} from '@/api/warehouse-api'
const ruleFormRef = ref()
const router = useRouter()
const warehouse = ref({
  warehousename:'',
  class:'',
  durgname:'',
  librarynum:'',
  outbound:'',
  entry:'',
})
const addhandle =async () => {
  let res = await addWarehouseHandle(warehouse.value)
  router.replace('ViewWarehouse')
}
</script>



<style lang="scss">
.AddWarehouse{
  width: 500px;
   margin:20px auto;
}
</style>
