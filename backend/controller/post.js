import Post from "../model/Post.js";
// import { nanoid } from "nanoid";

export const getAllPosts = async (req, res) => {
  try {
    const post = await Post.find({});
    res.status(200).send({
      data: post,
    });
  } catch (error) {
    res.status(400).send({
      success: true,
      data: error.message,
    });
  }
};

export const createPost = async (req, res) => {
  try {
    // const shortlink = nanoid(4); //=> "V1StGXR8_Z5jdHi6B-myT"
    const post = await Post.create({...req.body});
    res.status(200).send({
      success: true,
      data: post,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      data: error.message,
    });
  }
};

export const deletePost = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await Post.findByIdAndRemove({ _id: id });
    res.status(200).send({
      success: true,
      data: post,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      data: error.message,
    });
  }
};

export const findPost = async (req, res) => {
  try {
    const { params } = req.params;
    const post = await Post.findOne({
      description: params,
    });
    res.status(200).send({
      success: true,
      data: post,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      data: error.message,
    });
  }
};
