import "dotenv/config";
const ENV = {
  PORT: process.env.PORT ? +process.env.PORT : 8080,
  DB_URI: process.env.MONGO_URI,
};

export default ENV;
