<template> 
  <el-table :data="tableData.list" style="width: 100%" border>
    <el-table-column prop="warehousename" label="仓库名称" width="150" />
    <el-table-column prop="class" label="药品分类" width="150" />
    <el-table-column prop="durgname" label="药品名称" width="150" />
    <el-table-column prop="librarynum" label="本库数量" width="150" />
    <el-table-column prop="outbound" label="出库信息" width="200" />
    <el-table-column prop="entry" label="进库信息" width="150" />
    <el-table-column label="相关操作" width="150" v-if="userinfos.roleid == 0">
      <template #default="scope">
        <el-button type="text" size="small" @click="goToRouter('delete',scope.row)">删除</el-button>
        <el-button type="text" size="small" @click="goToRouter('UpdateWarehouse',scope.row)">修改</el-button>
      </template>
    </el-table-column> 
  </el-table>
</template>

<script lang="ts" setup> 
import {reactive} from 'vue'
import { useRouter} from 'vue-router'
import {findWarehouseHandle,deleteWarehouseHandle} from '@/api/warehouse-api'

const router = useRouter()
const userinfos = JSON.parse(localStorage.getItem('userinfos'))



const tableData = reactive({
  count:0,
  list:[]
})

const searchDrupHandle = () => {
  findWarehouseHandle().then(res => {
    tableData.list = res.data.data.map(item => {
      item.prescription = item.prescription == 0 ? '是' : '否'
      return item
    })
  })
}
searchDrupHandle()

const goToRouter = async (type,row) => {
  console.log('row', row)
  if (type === 'delete') {
    let res = await deleteWarehouseHandle({
      id:row.id
    })
    console.log('res', res)
    searchDrupHandle()
  } else {
    router.push({
      path:type,
      query:row
    })
  }
}
</script>