// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   optimizeDeps: {
//     exclude: ['lucide-react'],
//   },
// });


import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['react-icons'], // Ensure react-icons is pre-bundled
    exclude: ['lucide-react'],
  },
  build: {
    outDir: 'build', // Specify the output directory as 'build'
    rollupOptions: {
      external: [], // Ensure no unnecessary modules are excluded
    },
  },
});

