FROM node as builder

USER node
WORKDIR /home/node

COPY package*.json ./


COPY --chown=node:node . .

RUN npm run build

# ---

FROM node


USER node
WORKDIR /home/node

COPY --from=builder --chown=node:node /home/node/package*.json ./
COPY --from=builder --chown=node:node /home/node/node_modules/ ./node_modules/
COPY --from=builder --chown=node:node /home/node/dist/ ./dist/
COPY --from=builder --chown=node:node /home/node/prisma/ ./prisma/
