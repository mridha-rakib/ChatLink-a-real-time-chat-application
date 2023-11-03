require("dotenv").config();
const serverPort = process.env.SERVER_PORT || 3030;
const mongodbURL = process.env.MONGODB_ATLAS_URL;
const cookie_secret = process.env.COOKIE_SECRET;

module.exports = {
  serverPort,
  mongodbURL,
  cookie_secret,
};
