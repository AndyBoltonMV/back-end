const { db } = require("./config");
const app = require("./src/app");
const { port } = require("./config");

app.listen(port, async () => {
  await db.sync();
  console.log("Up and running on port " + port);
});
