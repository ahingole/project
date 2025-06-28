const express = require("express");
const { connectDB } = require("./config/database");
const app = express();

connectDB()
  .then(() => {
    console.log("connection established successfully ....");
    app.listen(3000, () => {
      console.log("listinng the server 3000");
    });
  })
  .catch(() => {
    console.log("connection not happend...");
  });
