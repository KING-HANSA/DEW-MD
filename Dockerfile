FROM quay.io/sampandey001/secktor-md:latest

RUN git clone https://github.com/KING-HANSA/DEW-MD /root/SamPandey001

WORKDIR /root/SamPandey001/

RUN yarn install --production

RUN yarn global add pm2

CMD ["npm", "start"]
