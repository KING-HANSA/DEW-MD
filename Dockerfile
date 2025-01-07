FROM quay.io/DEW-MD-BOT/DEW-MD:latest
RUN git clone https://github.com/KING-HANSA/DEW-MD /root/DEW-MD-BOT
WORKDIR /root/DEW-MD-BOT/
RUN npm install npm@latest
RUN npm install
EXPOSE 8000
CMD ["bash", "start.sh"]
