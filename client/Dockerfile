# build stage
FROM node:22-alpine AS build
WORKDIR /app

# copy package files first to leverage Docker cache
COPY package*.json ./

RUN npm install

# copy the rest and build
COPY . .
RUN npm run build

# production stage
FROM node:22-alpine AS production
WORKDIR /app

# set production env (optional but useful)
ENV NODE_ENV=production

# install a tiny static server
RUN npm install -g serve

# copy only the build output from the build stage
COPY --from=build /app/dist ./dist

EXPOSE 3000
CMD ["serve", "-s", "dist", "-l", "3000"]
