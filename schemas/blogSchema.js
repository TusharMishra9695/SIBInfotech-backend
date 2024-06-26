const mongoose = require("mongoose");
const blogSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    category: { type: String, default: "other" }, // personal , travel ,  technology  // other  // only these will used
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("blogs", blogSchema);
