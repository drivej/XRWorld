import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    target: 'esnext',
    lib: {
      entry: './src/index.ts',
      name: 'XRWorld',
      formats: ['es'],
      fileName: 'index'
    },
    rollupOptions: {
      external: ['three', 'gsap'],
      output: {
        preserveModules: false,
        assetFileNames: 'assets/[name][extname]',
        globals: {
          three: 'THREE',
          gsap: 'gsap'
        }
      }
    },
    outDir: 'dist',
    emptyOutDir: true,
    sourcemap: true
  }
});
