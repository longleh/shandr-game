import path from 'path'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
            '@assets': path.resolve(__dirname, './public'),
            '@constants': path.resolve(__dirname, './src/constants'),
            '@scenes': path.resolve(__dirname, './src/scenes'),
        },
    },
})
