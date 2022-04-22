<template>
   <el-card class="AddWarehouse">
    <template #header>
      <div class="card-header">
        <span>添加药品信息</span>
      </div>
    </template>
    <el-form ref="ruleFormRef" label-width="100px" :model="durpInfos" style="max-width: 460px">
        <el-form-item label="编号:">
          <el-input v-model="durpInfos.number" clearable/>
        </el-form-item>
        <el-form-item label="厂家:">
          <el-input v-model="durpInfos.factory" clearable/>
        </el-form-item>
        <el-form-item label="药品名称:">
          <el-input v-model="durpInfos.durgname" clearable/>
        </el-form-item>
        <el-form-item label="仓库名称:">
          <el-input v-model="durpInfos.warehousename" clearable/>
        </el-form-item>
        <el-form-item label="价格:">
          <el-input v-model="durpInfos.price " clearable/>
        </el-form-item>
        <el-form-item label="生产日期:">
          <el-date-picker v-model="durpInfos.productiontime" type="date" placeholder="生产日期" clearable/>
        </el-form-item>
        <el-form-item label="过期日期:">
          <el-date-picker v-model="durpInfos.expirationtime" type="date" placeholder="过期日期" clearable/>
        </el-form-item>
        <el-form-item label="是否为处方:">
          <el-radio-group v-model="durpInfos.prescription">
            <el-radio :label="'0'">是</el-radio>
            <el-radio :label="'1'">否</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="分类:">
          <el-input v-model="durpInfos.class" clearable/>
        </el-form-item>
        <el-form-item label="本库数量:">
          <el-input v-model="durpInfos.librarynumber" clearable/>
        </el-form-item>
        <el-form-item label="地区数量:">
          <el-input v-model="durpInfos.regionsnumber" clearable/>
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
import {addDrugHandle} from '@/api/durpInfos-api'
const ruleFormRef = ref()
const router = useRouter()
const durpInfos = ref({
  number:'',
  factory:'',
  durgname:'',
  warehousename:'',
  price:'',
  productiontime:'',
  expirationtime:'',
  prescription:'1',
  class:'',
  librarynumber:'',
  regionsnumber:'',
})
const addhandle =async () => {
  await addDrugHandle(durpInfos.value)
  router.replace({
    path:'ViewDrug',
  })
}
</script>



<style lang="scss">
.AddWarehouse{
  width: 500px;
  margin:20px auto;
}
</style>
