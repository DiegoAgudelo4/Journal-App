# Usa una imagen base de Node.js
FROM node:18

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos de configuración y de dependencias
COPY package.json yarn.lock ./

# Instala las dependencias
RUN yarn install

# Copia el resto de los archivos de la aplicación
COPY . .

# Expone el puerto en el que la aplicación se ejecutará
EXPOSE 3000

# Comando para ejecutar la aplicación en modo desarrollo
CMD ["yarn", "dev"]
