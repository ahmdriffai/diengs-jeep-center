# 1. Gunakan image resmi Node.js
FROM node:22-alpine AS builder

# 2. Set working directory
WORKDIR /app

# 3. Salin file konfigurasi dan dependencies
COPY package*.json ./
COPY .env.local .env

# 4. Install dependencies
RUN npm install

# 5. Salin semua source code
COPY . .

# 6. Build Next.js app
RUN npm run build

# 7. Gunakan image Node yang ringan untuk production
FROM node:22-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production

# 8. Copy hasil build dan file yang dibutuhkan
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/.env .env

# 9. Jalankan aplikasi
CMD ["npm", "start"]
