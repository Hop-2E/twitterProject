import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
  name: {
    type: String,
    required : [true]
  },
  description: {
    type: String,
    required : [true]
  },
  user_id: {
    type: String,
    required: [true],
    ref: "User",
  },
});

const Post = mongoose.model("Post", PostSchema);

export default Post;
