const express = require("express");

const app = express();

const PORT = 3001;

const { adminAuth, userAuth } = require("./middlewares/auth");

// app.get("/", (req, res) => {
//Route Handler
//   res.send("Route handler using get method only using '/' ");
// });

//
// });

app.use("/admin", adminAuth);

app.post("/user/login", (req, res) => {
  // here we don't nees authoristion to call login api
  res.send("logged in successfully");
});

app.get("/user/data", userAuth, (req, res) => {
  // in this case user accessing data so we need auth here
  res.send("User Data sent");
});

app.get("/admin/getAllData", (req, res) => {
  //To check if request authorized or not
  // const token = "xyzsfdddn";
  // const isAdminAuthorized = token === "xyz";
  // if (isAdminAuthorized) {
  //   res.send("All Data sent");
  // } else {
  //   res.status(401).send("Unauthorized request");
  // }
  res.send("All Data Sent");
});

app.get("/admin/deleteUser", (req, res) => {
  res.send("Deleted a user");
});

app.listen(PORT, () => {
  console.log(`server runnig at port number ${PORT}`);
});

// Import the express module
// const express = require('express');

// Create an express app
// const app = express();

// Define a basic route
// app.get('/', (req, res) => {
//   res.send('Hello, world!');
// });

// Define the port to listen on
// const PORT = process.env.PORT || 3000;

// Start the server and listen on the specified port
// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });
