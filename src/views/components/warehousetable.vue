<template>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column prop="warehousename" label="仓库名称" width="150" />
    <el-table-column prop="drugclass" label="药品分类" width="150" />
    <el-table-column prop="drugname" label="药品名称" width="150" />
    <el-table-column prop="librarynum" label="本库数量" width="150" />
    <el-table-column prop="outbound" label="出库信息" width="200" />
    <el-table-column prop="entry" label="进库信息" width="150" />
    <el-table-column label="相关操作" width="150">
      <template #default>
        <el-button type="text" size="small" @click="handleClick">删除</el-button>
        <el-button type="text" size="small">修改</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script lang="ts" setup> 
import request from '@/utils/request'
request({
  url: '/shopList/getList',
  methon: 'post',
  data: {},
}).then( res => {
  console.log('card', res)
})
const handleClick = () => {
  console.log('click')
}

const tableData = [
  {
    warehousename: '2016-05-03',
    drugclass: 'Tom',
    drugname: 'California',
    librarynum: 'Los Angeles',
    outbound: '11',
    entry: '11',
  }
]
</script>