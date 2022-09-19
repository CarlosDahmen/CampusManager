# About

The goal of this project is to develop a full stack web app to to track a school's campuses and students. The app has basic CRUD fuctionality, with two basic models for the students and campuses.

The frontend is built with react, using react hooks to manage local state and Redux to manage global state.

On the backend, there is a server running on Express, with Postgres running the relational DB and sequelize as the ORM tool.

## Server

The server is started and synced with the DB in the start.js file.

All the configuration is handled in the server/index.js file.

During development, the app is bundled with webpack and uses webpackDevMiddleware to serve the files emitted from webpack. Nodemon is uses to

THe volleyball library is used to log http requests on the backend.
