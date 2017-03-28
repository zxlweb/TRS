FROM node:7.6.0
# replace this with your application's default port
EXPOSE 9999
RUN cp /usr/share/zoneinfo/Asia/Shanghai /etc/localtime
RUN npm i -g pm2@2.2.3
ENV NODE_ENV production
WORKDIR /workspace
COPY node_modules node_modules
COPY conf conf
COPY dist dist
CMD ["pm2-docker", "dist/index.js"]
