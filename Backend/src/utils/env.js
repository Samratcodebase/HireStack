import "dotenv/config";

export default ENV = {
  PORT: process.env.PORT ? +process.env.PORT : 8080,
  DB_URI: process.env.DB_URI,
};
