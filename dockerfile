# Image Base
FROM node:20-alpine

# Cria o diretório de trabalho dentro do container
WORKDIR /app 

# Copia apenas package.json e package-lock.json primeiro
COPY package*.json ./

# Instalar as dependências
RUN npm install

# Copia o restante do código
COPY . .

# Gera o Prisma Client
RUN npx prisma generate

# Expõe a porta
EXPOSE 3000

# Comando para iniciar o servidor
CMD ["npm", "run", "start"]
