const express = require("express");
const app = express();
const port = 5000;
require("dotenv").config();
require("./utils/dbconfig");
var bodyParser = require("body-parser");
var cors = require("cors");

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

const blog_route = require("./routes/blogs");

app.use("/api/blog", blog_route);
app.listen(port, () => {
  console.log(`listening in ${port}`);
});
