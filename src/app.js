const express = require("express");

const app = express();

const PORT = 3001;

app.get("/getUserData", (req, res) => {
  //Logic for Db call to gett user data
  // what if any error any code or db not able fetch data or any error in js code
  // we have to hadle those cases.
  // whenever we are writing db call we should write in try-catch blocks

  try {
    throw new Error("sfosf");
    res.send("User Data sent");
  } catch (err) {
    res.status(500).send("error encountered contact support");
  }
});

app.use("/", (error, req, res, next) => {
  // error should be first parameter when error handling
  // have to follow order here
  // if keep this at the starting the route will go through this nothing because in js code executes line by line
  // if any error encoutered after this route execution it won't redirect to this as it executed at the start only.
  // always keep it at the end of the code. if any error ocurs it wii execute.
  if (error) {
    // use the parameter we mentioned to throw errors
    // log the error to know what errors we are gettig
    console.log(error); //log would be: Error: sfosf
    res.status(500).send("something went wrong");
  }
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
