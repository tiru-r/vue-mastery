import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
    plugins: [
        vue({
            vapor: true
        })
    ],
    resolve: {
        alias: {
            'vue': path.resolve(__dirname, 'node_modules/vue/dist/vue.runtime-with-vapor.esm-browser.js')
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

