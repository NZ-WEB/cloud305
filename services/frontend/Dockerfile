FROM node:18-alpine as builder
WORKDIR /app
COPY . /app
RUN yarn
RUN yarn build

FROM builder
COPY --from=builder /app/dist /app/dist
COPY --from=builder /app/package.json /app/package.json
COPY --from=builder /app/yarn.lock /app/yarn.lock

RUN NODE_ENV=production

EXPOSE 3000

RUN yarn

CMD ["yarn", "serve", "--port", "3000", "--host"]