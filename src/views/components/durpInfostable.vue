<template>
  <el-table :data="tableData.list" style="width: 100%" border>
    <el-table-column prop="number" label="编号" width="150" />
    <el-table-column prop="factory" label="厂家" width="150" />
    <el-table-column prop="durgname" label="药品名称" width="150" />
    <el-table-column prop="warehousename" label="仓库名称" width="150" />
    <el-table-column prop="price" label="价格" width="100" />
    <el-table-column prop="productiontime" label="生产日期" width="180" />
    <el-table-column prop="expirationtime" label="过期日期" width="180" />
    <el-table-column prop="prescription" label="是否为处方" width="120" />
    <el-table-column prop="class" label="分类" width="150" />
    <el-table-column prop="librarynumber" label="本库数量" width="150" />
    <el-table-column prop="regionsnumber" label="地区数量" width="150" />
    <el-table-column fixed="right" label="相关操作" width="120" v-if="userinfos.roleid == 0">
      <template #default="scope">
        <el-button type="text" size="small" @click="goToRouter('delete',scope.row)">删除</el-button>
        <el-button type="text" size="small" @click="goToRouter('UpdateDrug',scope.row)">修改</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script lang="ts" setup>
import {watch,reactive} from 'vue'
import { useRouter} from 'vue-router'
import {findDrugHandle,deleteDrugHandle} from '@/api/durpInfos-api'
const router = useRouter()
const $props = defineProps<{
  searchParams?:Object,
}>()

const tableData = reactive({
  count:0,
  list:[]
})
const searchDrupHandle = (params) => {
  findDrugHandle(params).then(res => {
    tableData.list = res.data.data.map(item => {
      item.prescription = item.prescription == 0 ? '是' : '否'
      return item
    })
  })
}

watch(() => $props.searchParams,(value)=>{
  console.log('value', value)
  searchDrupHandle(value)
},{
  deep:true,
  immediate:true
})

const userinfos = JSON.parse(localStorage.getItem('userinfos'))


const goToRouter = async (type,row) => {
  console.log('row', row)
  if (type === 'delete') {
    let res = await deleteDrugHandle({
      id:row.id
    })
    console.log('res', res)
    searchDrupHandle({})
  } else {
    router.push({
      path:type,
      query:row
    })
  }
}


</script>

