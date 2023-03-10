import express from "express";
import {
  getAllPosts,
  createPost,
  deletePost,
  findPost,
} from "../controller/post.js";
import Post from "../model/Post.js";
import { paginationFunction } from "../pagination/pagination.js";
const router = express.Router();

// router.route("/").get(paginationFunction(Post), getAllPosts).post(createPost);
router.route("/").get(getAllPosts).post(createPost);
router.route("/").post(createPost);
router.route("/:id").delete(deletePost);
router.route("/:params").get(findPost);

export default router;
