import { defineConfig } from 'vite'
import Unocss from 'unocss/vite'
import SvgLoader from 'vite-svg-loader'
import analyze from 'rollup-plugin-analyzer'
import { visualizer } from 'rollup-plugin-visualizer'

import vue from '@vitejs/plugin-vue'

import { resolve } from 'pathe'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '/@': resolve(__dirname, './src'),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
  },
  plugins: [vue(), Unocss(), SvgLoader()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'AsUI',
      fileName: 'as-ui',
    },
    watch: {
      include: [resolve(__dirname, 'src')],
    },
    rollupOptions: {
      plugins: [analyze(), visualizer()],
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['vue', '@vueuse/shared', '@vueuse/core'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: 'Vue',
          '@vueuse/shared': 'VueUseShared',
          '@vueuse/core': 'VueUseCore',
        },
      },
    },
  },
})
