import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'


export default defineConfig({
    plugins: [
        vue({
            vapor: true
        })
    ],
    resolve: {
        alias: {
            'vue': `${import.meta.dir}/node_modules/vue/dist/vue.runtime-with-vapor.esm-browser.js`
        }
    },
    server: {
        port: 5173,
        open: false
    },
    build: {
        target: 'esnext'
    }
})

