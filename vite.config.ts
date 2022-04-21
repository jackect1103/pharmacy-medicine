import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// 指定解析路径
import { resolve } from 'path'
const pathResolve = (dir: string) => resolve(__dirname, dir)

// 按需引入element-plus
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],

  // 公共基础路径 base
  base: './',

  // 开发服务器选项 server
  server:{
    port:4000, // 设置服务启动端口号，如果端口已经被使用，Vite 会自动尝试下一个可用的端口
    open: true, // boolean | string 设置服务启动时是否自动打开浏览器，当此值为字符串时，会被用作 URL 的路径名
    cors: true, // 为开发服务器配置 CORS，配置为允许跨域
    proxy:{
      //这里是通过请求/api 来转发到 https://api.pingping6.com/
      //假如你要请求https://api.*.com/a/a
      //那么axios的url，可以配置为 /api/a/a
      '/api': {
        target:'http://localhost:10086',
        rewrite: (path) => path.replace(/^\/api/, '')
      },
      
    }
  },

  // 别名 resolve.alias
  resolve: {
    alias: {
      '@': pathResolve('./src'),  // 设置 `@` 指向 `src` 目录
      views: pathResolve('./src/views'), // 设置 `views` 指向 `./src/views` 目录，下同
      components: pathResolve('./src/components'),
      assets: pathResolve('./src/assets'),
    },
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json']
  },

  // 构建选项 build
  build: {
    outDir: 'dist',   // 指定打包路径，默认为项目根目录下的 dist 目录
    terserOptions: {
      compress: {
        keep_infinity: true,  // 防止 Infinity 被压缩成 1/0，这可能会导致 Chrome 上的性能问题
        drop_console: true,   // 生产环境去除 console
        drop_debugger: true   // 生产环境去除 debugger
      },
    },
    chunkSizeWarningLimit: 1500   // chunk 大小警告的限制（以 kbs 为单位）
  }
})
