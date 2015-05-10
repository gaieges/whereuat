FROM node

ENV SVCPORT 8000
EXPOSE ${SVCPORT} ${SVCPORT}

COPY api /api

RUN npm install express

CMD node /api/app.js
