FROM node

ENV SVCPORT 8000
EXPOSE ${SVCPORT} ${SVCPORT}

COPY api /api

# locking version of mongoose due to unstable releases in head
RUN npm install -g express node-restful body-parser mongoose@3.8.25

CMD node /api/app.js
