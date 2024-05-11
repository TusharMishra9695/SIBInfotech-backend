const Blog = require("../schemas/blogSchema");
async function handlePostBlog(req, res) {
  try {
    const data = new Blog(req.body);
    await data.save();
    res.status(201).send({
      result: data,
      message: "Blog Posted Successfully",
      success: true,
    });
  } catch (e) {
    res.status(500).send("some thing went wrong in post blog list");
  }
}

async function handleGetBlog(req, res) {
  try {
    const result = await Blog.find(req.query);
    res.status(200).send({
      result: result,
      message: "Blog list fetched successfully",
      success: true,
    });
  } catch (e) {
    res.status(500).send("some thing went wrong in get blog list");
  }
}
module.exports = {
  handleGetBlog,
  handlePostBlog,
};
