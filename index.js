require("dotenv").config();
const express = require("express");
const dbConnect = require("./server/config/db");
const firstapiRoute = require("./server/routes/firstapiRoutes");

const app = express();
app.use(express.json());

app.use("/api", firstapiRoute);

PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  dbConnect()
    .then(() => {
      console.log(`server is running on ${process.env.PORT}`);
    })
    .catch((err) => {
      console.log(err);
    })
);
