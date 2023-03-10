import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    target: 'es2018',
    lib: {
      entry: resolve(__dirname, 'src', 'my-element.ts'),
      name: 'my-element',
      fileName: (format) => `my-element.${format}.js`,
    },
    rollupOptions: {
      external: ['lit-element'],
      output: {
        globals: {
          'lit-element': 'LitElement',
        },
      },
    },
  },
})
