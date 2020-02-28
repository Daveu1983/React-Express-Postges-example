#alpine to reduce size and vunerabilities 
FROM node:12-alpine
#tells Docker to run the rest of the commands as node user rather than root
USER node
#As node this creates the directories for the app and the node_modules and sets ownership to node
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
#tells docker where to navigate to, to work from
WORKDIR /home/node/app
#copied dependancies over. lock is needed to ensure correct versions are used.
COPY /backend/package*.json ./
#installs dependancies which will populate the node_modules folder created above
RUN npm install
#copies over app code and the owber of the files is node.
#using the .dockerignore file tonot copy over certain files and folders.
COPY --chown=node:node /backend/. .
# docker best practice says to use node to run rather than NPM start
# there are reasons explaind in docker.com/blog/keep-nodejs-rockin-in-docker
# I think it is to do with when using kubrnetes/docker orchestration. NPM start would not
# speak to OS properly when failing/shutting down
CMD ["node", "back.js"]