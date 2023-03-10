import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    lib: {
      entry: 'src/my-element.js',
      formats: ['es'],
    },
    rollupOptions: {
      external: /^lit/,
    },
  },
  scripts: {
    preview: 'vite preview --port 8080'
  }
})
