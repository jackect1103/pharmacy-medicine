export const PRODUCT_RULE = {
  name: [{ required: true, message: '请输入商品名称', trigger: 'blur' }],
  price: [{ required: true, message: '请输入商品价格', trigger: 'blur' }],
  Date: [{ required: true, message: '请选择商品生产日期', trigger: 'blur' }],
  Address: [{ required: true, message: '请输入商品生产地址', trigger: 'blur' }],
  image: [{ required: true, message: '请选择商品图片', trigger: 'blur' }],
}



