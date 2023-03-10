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
            { src: 'src/assets/**/*', dest: 'dist' }, // Inclure le sous-dossier src dans le chemin d'accès
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
