const app = require("./src/server");
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});

console.log("Hallo " + process.env.NAME + "!");
