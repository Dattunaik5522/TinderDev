const express = require("express");

const app = express();

const PORT = 3001;

app.use("/", (req, res) => {
  res.send("welcome");
});

app.listen(PORT, () => {
  console.log(`server runnig at port number ${PORT}`);
});
