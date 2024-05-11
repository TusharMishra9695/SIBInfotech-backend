const express = require("express");
const router = express.Router();
const { handleGetBlog, handlePostBlog } = require("../controllers/blogs");

router.route("/").get(handleGetBlog).post(handlePostBlog);
module.exports = router;
