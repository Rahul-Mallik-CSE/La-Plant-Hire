# Multi-stage Dockerfile for Next.js frontend

# Build stage
FROM node:20-alpine AS builder
WORKDIR /app

# Build arguments for environment
ARG NEXT_PUBLIC_API_URL=https://api.laplanthire.com.au
ENV NEXT_PUBLIC_API_URL=${NEXT_PUBLIC_API_URL}

# Configure npm for better network reliability
RUN npm config set fetch-timeout 120000 && \
    npm config set fetch-retry-mintimeout 20000 && \
    npm config set fetch-retry-maxtimeout 120000 && \
    npm config set fetch-retries 10

COPY package*.json ./
RUN if [ -f package-lock.json ]; then npm ci --prefer-offline --no-audit; else npm install --legacy-peer-deps; fi
COPY . .
RUN npm run build

# Production runner - minimal
FROM node:20-alpine AS runner
WORKDIR /app

# Create non-root user
RUN addgroup -g 1001 -S nodejs && adduser -S nextjs -u 1001

ENV NODE_ENV=production
ENV PORT=80
ENV NEXT_TELEMETRY_DISABLED=1

# Copy only production dependencies and built artifacts
COPY --from=builder --chown=nextjs:nodejs /app/node_modules ./node_modules
COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder --chown=nextjs:nodejs /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/package.json ./

USER nextjs

EXPOSE 80
CMD ["npm", "start"]
