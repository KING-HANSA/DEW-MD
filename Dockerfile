FROM quay.io/sampandey001/secktor-md:latest
RUN git clone https://github.com/KING-HANSA/DEW-MD /root/KING-HANSA
WORKDIR /root/KING-HANSA/
RUN npm install npm@latest
RUN npm install
EXPOSE 8000
CMD ["bash", "start.sh"]
