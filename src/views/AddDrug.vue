<template>
   <el-card class="AddWarehouse">
    <template #header>
      <div class="card-header">
        <span>添加药品信息</span>
      </div>
    </template>
    <el-form ref="ruleFormRef" label-width="100px" :model="durpInfos" style="max-width: 460px">
        <el-form-item label="编号:">
          <el-input v-model="durpInfos.number" />
        </el-form-item>
        <el-form-item label="厂家:">
          <el-input v-model="durpInfos.factory" />
        </el-form-item>
        <el-form-item label="药品名称:">
          <el-input v-model="durpInfos.drugname"/>
        </el-form-item>
        <el-form-item label="仓库名称:">
          <el-input v-model="durpInfos.warehousename"/>
        </el-form-item>
        <el-form-item label="价格:">
          <el-input v-model="durpInfos.price "/>
        </el-form-item>
        <el-form-item label="生产日期:">
          <el-input v-model="durpInfos.productiontime"/>
        </el-form-item>
        <el-form-item label="过期日期:">
          <el-input v-model="durpInfos.expirationtime"/>
        </el-form-item>
        <el-form-item label="是否为处方:">
          <el-radio-group v-model="durpInfos.prescription">
            <el-radio :label="0">是</el-radio>
            <el-radio :label="1">否</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="分类:">
          <el-input v-model="durpInfos.class"/>
        </el-form-item>
        <el-form-item label="本库数量:">
          <el-input v-model="durpInfos.librarynumber"/>
        </el-form-item>
        <el-form-item label="地区数量:">
          <el-input v-model="durpInfos.regionsnumber"/>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="updatehandle(ruleFormRef)">修改</el-button>
        </el-form-item>
      </el-form>
  </el-card> 
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const ruleFormRef = ref()
const durpInfos = ref({
  number:'',
  factory:'',
  drugname:'',
  warehousename:'',
  price:'',
  productiontime:'',
  expirationtime:'',
  prescription:'',
  class:'',
  librarynumber:'',
  regionsnumber:'',
})
const updatehandle = () => {
  console.log('warehouse', warehouse.value)
}
</script>



<style lang="scss">
.AddWarehouse{
  width: 500px;
}
</style>
