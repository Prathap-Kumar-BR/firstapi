require("dotenv").config();
const express = require("express");
var cors = require("cors");
const dbConnect = require("./server/config/db");
const firstapiRoute = require("./server/routes/firstapiRoutes");

const app = express();
app.use(express.json());
app.use(cors());

app.use("/", firstapiRoute);

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
