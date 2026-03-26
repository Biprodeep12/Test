# syntax=docker/dockerfile:1

ARG NODE_VERSION=22.15.0

# --- Build stage: install all deps and compile TypeScript ---
FROM node:${NODE_VERSION}-alpine AS build

WORKDIR /usr/src/app

RUN --mount=type=bind,source=package.json,target=package.json \
    --mount=type=bind,source=package-lock.json,target=package-lock.json \
    --mount=type=cache,target=/root/.npm \
    npm ci

COPY tsconfig.json .
COPY src/ src/

RUN npx tsc

# --- Production stage: only compiled JS + production deps ---
FROM node:${NODE_VERSION}-alpine

ENV NODE_ENV production

WORKDIR /usr/src/app

RUN --mount=type=bind,source=package.json,target=package.json \
    --mount=type=bind,source=package-lock.json,target=package-lock.json \
    --mount=type=cache,target=/root/.npm \
    npm ci --omit=dev

# Copy compiled output from the build stage.
COPY --from=build /usr/src/app/dist ./dist

USER node

EXPOSE 3000

# Run the compiled JS directly (no tsc needed at runtime).
CMD ["node", "dist/server.js"]
