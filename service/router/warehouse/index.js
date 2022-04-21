
import KoaRouter from 'koa-router'
const warehouseRouter = new KoaRouter() 

import warehouseController from '../../controller/warehouse/index.js'

warehouseRouter.post('/warehouse/addDrugHandle', warehouseController.addWarehouseHandle.bind(warehouseController));
warehouseRouter.post('/warehouse/updateDrugHandle', warehouseController.updateWarehouseHandle.bind(warehouseController));
warehouseRouter.post('/warehouse/deleteDrugHandle', warehouseController.deleteWarehouseHandle.bind(warehouseController));






export default warehouseRouter;