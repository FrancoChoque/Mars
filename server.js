const dotenv = require('dotenv');
const jsonServer = require('json-server');

const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

const envFound = dotenv.config();
const port = process.env.PORT_SERVER || 3001;

if (!envFound || envFound.error) {
  console.log("⚠️  Couldn't find .env file  ⚠️");
}

server.use(middlewares);
server.use(router);
server.listen(port, () => {
  console.log(`JSON Server is ready on http://localhost:${port}`);
});
