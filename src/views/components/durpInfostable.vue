<template>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column prop="number" label="编号" width="150" />
    <el-table-column prop="factory" label="厂家" width="120" />
    <el-table-column prop="drugname" label="药品名称" width="120" />
    <el-table-column prop="warehousename" label="仓库名称" width="120" />
    <el-table-column prop="price" label="价格" width="60" />
    <el-table-column prop="productiontime" label="生产日期" width="120" />
    <el-table-column prop="expirationtime" label="过期日期" width="120" />
    <el-table-column prop="prescription" label="是否为处方" width="120" />
    <el-table-column prop="class" label="分类" width="120" />
    <el-table-column prop="librarynumber" label="本库数量" width="120" />
    <el-table-column prop="regionsnumber" label="地区数量" width="120" />
    <el-table-column fixed="right" label="Operations" width="120">
      <template #default>
        <el-button type="text" size="small" @click="handleClick">删除</el-button>
        <el-button type="text" size="small">修改</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script lang="ts" setup>
const handleClick = () => {
  console.log('click')
}

const tableData = [
  {
    number: '2016-05-03',
    factory: 'Tom',
    drugname: 'California',
    warehousename: 'Los Angeles',
    price: '11',
    productiontime: 'CA 90036',
    expirationtime: 'Home',
    prescription: 'Home',
    class: 'Home',
    librarynumber: 'Home',
    regionsnumber: 'Home',
  }
]
</script>