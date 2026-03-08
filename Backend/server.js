import ENV from "./src/utils/env.js";
import ConnectDB from "./src/utils/db.js";
import app from "./src/app.js";
async function main() {
  try {
    await ConnectDB();

    app.listen(ENV.PORT, () => {
      console.log(`Server is running at ${ENV.PORT}`);
      console.log(` http://localhost:${ENV.PORT}`);
    });
  } catch (error) {
    console.log(`Error Starting the Server : ${error}`);
  }
}

main();
