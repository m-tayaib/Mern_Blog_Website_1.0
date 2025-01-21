const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./database/db");
const postRouter = require("./routes/postRouter")


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

connectDB();





app.use("/api/post", postRouter)


app.listen(process.env.PORT, (req, res) => {
  console.log(`Server is running on port http://localhost:${process.env.PORT}`);
});
