import { defineConfig } from 'vite';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = fileURLToPath(new URL('.', import.meta.url));
export default defineConfig({
  root,
  base: './',
  // Reuse the existing website assets in dev mode; production keeps those files
  // where the current static host already serves them.
  publicDir: path.resolve(root, '..'),
  server: { fs: { allow: [path.resolve(root, '..')] } },
  build: {
    outDir: path.resolve(root, '..'),
    // Root is the existing live static document directory; never clear it.
    emptyOutDir: false,
    copyPublicDir: false,
    assetsDir: 'assets',
    rollupOptions: { output: { entryFileNames: 'assets/devora-[hash].js', chunkFileNames: 'assets/devora-[hash].js', assetFileNames: 'assets/devora-[hash][extname]' } },
  },
  esbuild: { jsx: 'automatic' },
});
