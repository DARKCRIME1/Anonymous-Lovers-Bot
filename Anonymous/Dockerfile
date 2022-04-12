FROM node:latest

RUN git clone https://github.com/DARKCRIME1/Anonymous-Lovers-Bot.git /root/Anonymous-Lovers-Bot
WORKDIR /root/Anonymous-Lovers-Bot/
ENV TZ=Europe/Istanbul
RUN npm install supervisor -g
RUN yarn install --no-audit

CMD ["node", "bot.js"]
