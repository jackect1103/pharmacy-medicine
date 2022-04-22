<template>
   <el-card class="AddWarehouse">
    <template #header>
      <div class="card-header">
        <span>修改药品信息</span>
      </div>
    </template>
    <el-form ref="ruleFormRef" label-width="100px" :model="druginfos" style="max-width: 460px">
        <el-form-item label="编号:">
          <el-input v-model="druginfos.number" clearable/>
        </el-form-item>
        <el-form-item label="厂家:">
          <el-input v-model="druginfos.factory" clearable/>
        </el-form-item>
        <el-form-item label="药品名称:">
          <el-input v-model="druginfos.durgname" clearable/>
        </el-form-item>
        <el-form-item label="仓库名称:">
          <el-input v-model="druginfos.warehousename" clearable/>
        </el-form-item>
        <el-form-item label="价格:">
          <el-input v-model="druginfos.price " clearable/>
        </el-form-item>
        <el-form-item label="生产日期:">
          <el-date-picker v-model="druginfos.productiontime" type="date" placeholder="生产日期" clearable/>
        </el-form-item>
        <el-form-item label="过期日期:">
          <el-date-picker v-model="druginfos.expirationtime" type="date" placeholder="过期日期" clearable/>
        </el-form-item>
        <el-form-item label="是否为处方:">
          <el-radio-group v-model="druginfos.prescription">
            <el-radio :label="'0'">是</el-radio>
            <el-radio :label="'1'">否</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="分类:">
          <el-input v-model="druginfos.class" clearable/>
        </el-form-item>
        <el-form-item label="本库数量:">
          <el-input v-model="druginfos.librarynumber" clearable/>
        </el-form-item>
        <el-form-item label="地区数量:">
          <el-input v-model="druginfos.regionsnumber" clearable/>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="updatehandle(ruleFormRef)">修改</el-button>
        </el-form-item>
      </el-form>
  </el-card>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useRoute,useRouter } from 'vue-router'
import {updateDrugHandle} from '@/api/durpInfos-api'
const route = useRoute()
const router = useRouter()
const ruleFormRef = ref()
const druginfos = ref({
  id:'',
  number:'',
  factory:'',
  durgname:'',
  warehousename:'',
  price:'',
  productiontime:'',
  expirationtime:'',
  prescription:'0',
  class:'',
  librarynumber:'',
  regionsnumber:'',
})
druginfos.value = route.query
druginfos.value.prescription = druginfos.value.prescription == '是' ? '0' : '1'

const updatehandle = async () => {
  let res = await updateDrugHandle(druginfos.value)
  console.log('res', res)
  if (res.code == 0) {
    router.replace('ViewDrug')
  }
}
</script>



<style lang="scss">
.AddWarehouse{
  width: 500px;
}
</style>
