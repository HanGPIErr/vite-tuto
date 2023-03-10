import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    target: 'es2018',
    lib: {
      entry: resolve(__dirname, 'src', 'my-element.ts'),
      name: 'my-element',
      fileName: (format) => `my-element.${format}.js`,
    },
    rollupOptions: {
      external: /^lit/,
    },
  },
})
