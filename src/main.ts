import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'

// https://arco.design/vue/docs/start
import ArcoVue from '@arco-design/web-vue';
import '@arco-design/web-vue/dist/arco.css';





// 路由判断登录 根据路由配置文件的参数
router.beforeEach((to, from, next) => {
  // 判断该路由是否需要登录权限
  if (to.matched.some(record => record?.meta?.requireAuth)) {
    if (localStorage.token) { // 判断当前的token是否存在 ； 登录存入的token
      next();
    } else {
      next({
        path: '/login',
      })
    }

  } else {
    next();
  }
})

const app = createApp(App)
app.use(router)
app.use(ArcoVue);
// router.onReady() 已经替换为 router.isReady()
// 不带任何参数并返回 Promise
router.isReady().then(() => app.mount('#app'))