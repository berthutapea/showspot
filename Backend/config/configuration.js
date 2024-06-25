require('dotenv').config();

const config = {
  api : {
    key: process.env.API_KEY,
    base_url: `${process.env.BASE_URL}`
  },
  db: {
    port: process.env.DB_PORT,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
  },
  server: {
    PORT : process.env.SERVER_PORT
  }
}

module.exports = config