const express = require("express");
const Router = express.Router();
const readAllPost = require("../controllers/readAllPost_controller")
const createPost = require("../controllers/createPost_controller")
const ReadPost = require("../controllers/readPost_controller")
const upload = require("../utils/multer")


// CRUD OPERATION 

Router.post("/create", upload.single("image"), createPost);
Router.get("/readPost", readAllPost);
Router.get("/postShow/:id", ReadPost)


module.exports = Router;