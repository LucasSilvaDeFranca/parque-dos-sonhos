# syntax=docker/dockerfile:1.7

# ─────────────────────────────────────────────────────────────
# Base — Node 24 LTS (Alpine para imagem enxuta)
# ─────────────────────────────────────────────────────────────
FROM node:24-alpine AS base

# ─────────────────────────────────────────────────────────────
# Stage 1 — Instala dependências (cacheável)
# ─────────────────────────────────────────────────────────────
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

# ─────────────────────────────────────────────────────────────
# Stage 2 — Build do Next.js
# ─────────────────────────────────────────────────────────────
FROM base AS builder
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production

RUN npm run build

# ─────────────────────────────────────────────────────────────
# Stage 3 — Runtime mínimo (só o standalone + assets)
# ─────────────────────────────────────────────────────────────
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Usuário não-root por segurança
RUN addgroup --system --gid 1001 nodejs \
 && adduser  --system --uid 1001 nextjs

# Assets públicos (imagens, fontes, etc.)
COPY --from=builder /app/public ./public

# Saída standalone do Next + estáticos do build
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

CMD ["node", "server.js"]
