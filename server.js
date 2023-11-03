// // dependencies
const app = require("./app");
const databaseConnection = require("./config/dbConn");
const { serverPort } = require("./secret");



app.listen(serverPort, async () => {
  console.log(`Server is running at http://localhost:${serverPort}`);
  await databaseConnection();
});