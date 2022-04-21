
import KoaRouter from 'koa-router'
const durpInfosRouter = new KoaRouter() 

import durpInfosController from '../../controller/durpInfos/index.js'

durpInfosRouter.post('/durpInfos/findDrugHandle', durpInfosController.findDrugHandle.bind(durpInfosController));
durpInfosRouter.post('/durpInfos/addDrugHandle', durpInfosController.addDrugHandle.bind(durpInfosController));
durpInfosRouter.post('/durpInfos/updateDrugHandle', durpInfosController.updateDrugHandle.bind(durpInfosController));
durpInfosRouter.post('/durpInfos/deleteDrugHandle', durpInfosController.deleteDrugHandle.bind(durpInfosController));






export default durpInfosRouter;