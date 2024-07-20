import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true, // Utiliza polling para observar los cambios en archivos
      interval: 1000,   // Intervalo de polling en milisegundos
    },
    host: true,        // Permite que el servidor sea accesible desde fuera del contenedor
    port: 5173,        // Puerto en el que se ejecutará el servidor de desarrollo
  },
});
