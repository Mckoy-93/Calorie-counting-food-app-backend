const app = require("./app.js");

require("dotenv").config();

const PORT = process.env.PORT;

app.listen(process.env.PORT || 5005, () => {
  console.log(`We out cheaa' on port: ${PORT}!!`);
});