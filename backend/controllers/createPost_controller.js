const createPost = (req, res) => {
  console.log(req.file.filename)
  console.log(req.body)
}

module.exports = createPost