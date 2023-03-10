import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true],
  },
  username: {
    type: String,
    required: [true],
  },
  description: {
    type: String,
    required: [true],
  },
  time: {
    type: String,
    required: [true],
  },
  user_id: {
    type: String,
    required: [true],
    ref: "User",
  },
  image: {
    type: String,
    required: [true],
  },
});

const Post = mongoose.model("Post", PostSchema);

export default Post;
