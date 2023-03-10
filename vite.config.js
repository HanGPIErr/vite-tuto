import copy from 'rollup-plugin-copy';

export default {
  build: {
    target: 'es2015',
    outDir: 'dist',
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
  server: {
    port: 8080,
    open: true,
  },
};
