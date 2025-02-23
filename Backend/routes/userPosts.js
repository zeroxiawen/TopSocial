const express = require('express');
const userPostsRouter = express.Router();
const {
  getUserPosts,
  getUserPostById,
  addUserPost,
  updateUserPost,
  deleteUserPost,
} = require('../controllers/userPostsController');

// GET get all user posts /api/userPosts/
userPostsRouter.get('/', getUserPosts);

// GET get user post by id /api/userPosts/:postId
userPostsRouter.get('/:postId', getUserPostById);

// POST post a user post /api/userPosts
userPostsRouter.post('/', addUserPost);

// PUT update a user post by id /api/userPosts/:post_id  put提供部分data就行了， patch得全部
userPostsRouter.put('/:postId', updateUserPost);

// DELETE delete a user post by id /api/userPosts/:post_id
userPostsRouter.delete('/:postId', deleteUserPost);

module.exports = userPostsRouter;
