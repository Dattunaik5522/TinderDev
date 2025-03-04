const express = require("express");

const app = express();

const PORT = 3001;

// app.get("/", (req, res) => {
//Route Handler
//   res.send("Route handler using get method only using '/' ");
// });

app.use(
  "/user",
  (req, res, next) => {
    //Route Handler
    res.send("Route handler 1");
    next(); //Cannot set headers after they are sent to the client "we'll get this error"
  },
  (req, res, next) => {
    console.log("handling route user 2");
    res.send("2nd response");
    next();
  },
  (req, res) => {
    console.log("3rd response");
  }
);

app.use("/", (req, res) => {
  //Route Handler
  //this will select all the routes mathcing with '/' so we have to mmake sure it'll written last in the code.
  res.send("Route handler with use '/'");
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
