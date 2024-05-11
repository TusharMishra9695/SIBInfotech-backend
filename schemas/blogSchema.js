const mongoose = require("mongoose");
const blogSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("blogs", blogSchema);
