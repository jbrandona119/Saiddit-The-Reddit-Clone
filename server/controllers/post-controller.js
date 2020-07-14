// import models
const { Post, User } = require("../models");
// import sign token function from auth
const { signToken } = require('../utils/auth');
const { searchPosts } = require("../../client/src/utils/API");

module.exports = {
  // get all users
  async getAllPosts(req, res) {
    const posts = await Post.find();
    return res.json(posts);
  },
  // get a single user by either their id or their username
  async getSinglePost({ user = null, params }, res) {
    const foundUser = await User.findOne({
      $or: [{ aithorID: user ? user._id : params.id }, { author: params.username }],
    });

    if (!foundUser) {
      return res.status(400).json({ message: 'Cannot find a post with this id!' });
    }

    res.json(foundUser);
  },
  async searchPosts(req, res){
      const searchedPosts = await Post.find({title:`/${req}/i`});
      return res.json(searchedPosts);
  }
};
