const PostSchema = require("../models/post_models")
const createPost = async (req, res) => {
  const { title, stack, description, publisher, content } = req.body
  console.log(publisher)
  const post = await PostSchema.create({
    title,
    stack,
    description,
    publisher,
    content,
    image: req.file.filename
  })
  res.json({
    success: true,
    message: "Post Upload."
  })
  console.log(post)
}

module.exports = createPost