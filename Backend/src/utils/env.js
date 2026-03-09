import "dotenv/config";
const ENV = {
  PORT: process.env.PORT ? +process.env.PORT : 8080,
  DB_URI: process.env.MONGO_URI,
  CLIENT_URI: process.env.CLIENT_URI,
  INNGEST_EVENT_KEY: process.env.INNGEST_EVENT_KEY,
  INNGEST_SIGNING_KEY: process.env.INNGEST_SIGNING_KEY,
  STREAM_API_KEY: process.env.STREAM_API_KEY,
  STREAM_API_SECRET: process.env.STREAM_API_SECRET,
};

export default ENV;
