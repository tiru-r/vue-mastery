import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
    plugins: [
        vue({
            vapor: true
        })
    ],
    resolve: {
        alias: {
            'vue': fileURLToPath(new URL('./node_modules/vue/dist/vue.runtime-with-vapor.esm-browser.js', import.meta.url))
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
