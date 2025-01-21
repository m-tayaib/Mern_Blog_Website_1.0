const PostSchema = require("../models/post_models")
const createPost = (req, res) => {
  const { title, stack, description, content } = req.body
  console.log(req.file)
  console.log(title, stack, description, content)
}

module.exports = createPost