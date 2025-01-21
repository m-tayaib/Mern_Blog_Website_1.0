const PostSchema = require("../models/post_models")
const ReadAllPost = async (req, res) => {
  const post = await PostSchema.find()
  res.json({
    success: true,
    post
  })
};



module.exports = ReadAllPost