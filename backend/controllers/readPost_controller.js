const PostSchema = require("../models/post_models")
const ReadPost = async (req, res) => {

  const id = req.params.id

  try {

    if (!id) return res.status(500).json("Post Not Found")
    const post = await PostSchema.findById(id)
    res.status(200).json({
      success: true,
      post
    })
  } catch (error) {
    res.status(500).json({ error: error.message })

  }
}


module.exports = ReadPost;