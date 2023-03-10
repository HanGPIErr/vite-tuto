import { defineConfig } from 'vite';
import copy from 'rollup-plugin-copy';

export default defineConfig({
  build: {
    // ...
    rollupOptions: {
      // ...
      plugins: [
        copy({
          targets: [
            { src: 'index.html', dest: 'dist' },
            { src: 'src/assets/bg-pokemon.jpg', dest: 'dist/assets' },
          ],
          flatten: true,
        }),
      ],
    },
  },
  scripts: {
    preview: 'vite preview --port 8080'
  }
});
