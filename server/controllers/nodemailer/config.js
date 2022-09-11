require('dotenv').config();

module.exports = {
  user: process.env.GOOGLE_USER,
  clientId: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIEND_SECRET,
  refreshToken: process.env.GOOGLE_CLIENT_REFRESH_TOKEN,
};
