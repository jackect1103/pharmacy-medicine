<template>
   <el-card class="AddWarehouse">
    <template #header>
      <div class="card-header">
        <span>添加仓库信息</span>
      </div>
    </template>
    <el-form ref="ruleFormRef" label-width="100px" :model="warehouse" style="max-width: 460px">
        <el-form-item label="仓库名称:">
          <el-input v-model="warehouse.warehousename" />
        </el-form-item>
        <el-form-item label="药品分类:">
          <el-input v-model="warehouse.drugclass" />
        </el-form-item>
        <el-form-item label="药品名称:">
          <el-input v-model="warehouse.drugname"/>
        </el-form-item>
        <el-form-item label="本库数量:">
          <el-input v-model="warehouse.librarynum"/>
        </el-form-item>
        <el-form-item label="出库信息:">
          <el-input v-model="warehouse.outbound "/>
        </el-form-item>
        <el-form-item label="进库信息:">
          <el-input v-model="warehouse.entry"/>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="addhandle(ruleFormRef)">添加</el-button>
        </el-form-item>
      </el-form>
  </el-card>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const ruleFormRef = ref()
const warehouse = ref({
  warehousename:'',
  drugclass:'',
  drugname:'',
  librarynum:'',
  outbound:'',
  entry:'',
})
const addhandle = () => {
  console.log('warehouse', warehouse)
}
</script>



<style lang="scss">
.AddWarehouse{
  width: 500px;
}
</style>
