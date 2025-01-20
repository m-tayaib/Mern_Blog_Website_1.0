const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./database/db");


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors({
  origin: process.env.Frontend_Url,
  credentials: true
}));

connectDB();



app.get("/", (req, res) => {
  res.send("Hello World!");
});


app.listen(process.env.PORT, (req, res) => {
  console.log(`Server is running on port http://localhost:${process.env.PORT}`);
});
