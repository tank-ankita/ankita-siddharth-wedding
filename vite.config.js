import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/',
  plugins: [react(), {
    name: 'measurement-page-entry',
    enforce: 'post',
    generateBundle(_, bundle) {
      const entry = bundle['index.html'];
      if (entry) {
        for (const page of ['women-measurement', 'men-measurement']) {
          this.emitFile({ type: 'asset', fileName: `${page}/index.html`, source: entry.source });
        }
      }
    }
  }],
  server: {
    host: '0.0.0.0',
    port: 3000
  }
});
