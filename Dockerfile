# stage1 - build react app first 
FROM node:19-alpine3.16 as build
WORKDIR /app
# ENV PATH /app/node_modules/.bin:$PATH
COPY ./package.json .
# COPY ./package-lock.json /app/
RUN npm i
COPY . .
RUN npm run build

# CMD [ "serve","-s", "build" ]

# stage 2 - build the final image and copy the react build files
FROM nginx:1.17.8-alpine
COPY --from=build /app/build /vol/www/public
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
