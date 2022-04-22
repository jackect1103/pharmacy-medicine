
import KoaRouter from 'koa-router'
const warehouseRouter = new KoaRouter() 

import warehouseController from '../../controller/warehouse/index.js'

warehouseRouter.get('/warehouse/findWarehouseHandle', warehouseController.findWarehouseHandle.bind(warehouseController));
warehouseRouter.post('/warehouse/addWarehouseHandle', warehouseController.addWarehouseHandle.bind(warehouseController));
warehouseRouter.post('/warehouse/updateWarehouseHandle', warehouseController.updateWarehouseHandle.bind(warehouseController));
warehouseRouter.post('/warehouse/deleteWarehouseHandle', warehouseController.deleteWarehouseHandle.bind(warehouseController));
 





export default warehouseRouter;