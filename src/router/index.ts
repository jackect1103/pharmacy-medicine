import {createRouter, createWebHistory,RouteRecordRaw,} from 'vue-router'

const HOME = () => import('views/index.vue')
const Login = () => import('views/login/index.vue')
const QueryDrug = () => import('views/QueryDrug.vue')
const ViewWarehouse = () => import('views/ViewWarehouse.vue')
const ViewDrug = () => import('views/ViewDrug.vue')
const AddWarehouse = () => import('views/AddWarehouse.vue')
const UpdateWarehouse = () => import('views/UpdateWarehouse.vue')
const AddDrug = () => import('views/AddDrug.vue')
const UpdateDrug = () => import('views/UpdateDrug.vue')

const routes:Array<RouteRecordRaw> = [
  {
    path:'/login',
    name: 'Login', 
    component: Login
  },{
    path:'/',
    name: 'HOME', 
    component: HOME
  },{
    path:'/QueryDrug',
    name: 'QueryDrug', 
    component: QueryDrug
  },{
    path:'/ViewWarehouse',
    name: 'ViewWarehouse', 
    component: ViewWarehouse
  },{
    path:'/ViewDrug',
    name: 'ViewDrug', 
    component: ViewDrug
  },{
    path:'/AddWarehouse',
    name: 'AddWarehouse', 
    component: AddWarehouse
  },{
    path:'/UpdateWarehouse',
    name: 'UpdateWarehouse', 
    component: UpdateWarehouse
  },{
    path:'/AddDrug',
    name: 'AddDrug', 
    component: AddDrug
  },{
    path:'/UpdateDrug',
    name: 'UpdateDrug', 
    component: UpdateDrug
  },
  
  {
    path: "/:params(.*)*",
    component: () => import('views/404.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),    
  routes,
})

export default router