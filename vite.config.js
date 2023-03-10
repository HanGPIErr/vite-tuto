import { defineConfig } from 'vite';
import copy from 'rollup-plugin-copy';

export default defineConfig({
  build: {
    lib: {
      entry: 'src/my-element.js',
      formats: ['es'],
    },
    rollupOptions: {
      external: /^lit/,
      plugins: [
        copy({
          targets: [
            { src: 'index.html', dest: 'dist' },
          ],
          flatten: true,
        }),
      ],
    },
  },
  scripts: {
    preview: 'vite preview --port 8080'
  }
})
