import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { terser } from 'rollup-plugin-terser'
// https://vitejs.dev/config/

const path = require('path')

export default defineConfig({
  plugins: [
    react(),
    terser(
      {
        compress: {
          drop_console: true
        }
      }
    )
  ],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve(__dirname, 'src')
      },
      {
        find: 'assets',
        replacement: path.resolve(__dirname, 'src/assets')
      },
      // {
      //   find: 'store',
      //   replacement: path.resolve(__dirname, 'src/store')
      // },
      {
        find: 'comps',
        replacement: path.resolve(__dirname, 'src/components')
      },
      {
        find: 'utils',
        replacement: path.resolve(__dirname, 'src/utils')
      },
      // {
      //   find: 'modules',
      //   replacement: path.resolve(__dirname, 'src/modules')
      // },
      // {
      //   find: 'router',
      //   replacement: path.resolve(__dirname, 'src/router')
      // },
      // {
      //   find: 'widgets',
      //   replacement: path.resolve(__dirname, 'src/widgets')
      // },
      // {
      //   find: 'mixins',
      //   replacement: path.resolve(__dirname, 'src/mixins')
      // }
    ]
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import \'./src/styles/variables.scss\';'
      }
    }
  }
})
