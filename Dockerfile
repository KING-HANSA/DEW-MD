FROM quay.io/sampandey001/secktor-md:latest

RUN git clone https://github.com/KING-HANSA/DEW-MD

WORKDIR /DEW-MD

RUN yarn install --production

RUN yarn global add pm2

CMD ["npm", "start"]
