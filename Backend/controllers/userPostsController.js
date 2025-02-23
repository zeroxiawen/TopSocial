const axios = require('axios');
const USER_POSTS_API_URL = 'http://localhost:8000/userPosts';

const getUserPosts = async function (req, res, next) {
  try {
    const response = await axios.get(`${USER_POSTS_API_URL}`);
    res.status(200).json({
      msg: 'Get user posts succeed',
      data: response.data,
    });
  } catch (error) {
    next(error);
  }
};

const getUserPostById = async function (req, res, next) {
  const id = req.params.postId;
  if (!id) {
    return res.status(400).send('Id is required');
  }
  try {
    const response = await axios.get(`${USER_POSTS_API_URL}/${id}`);
    const userPost = response.data;
    console.log(userPost);
    res.status(200).json({
      msg: 'Get user post succeed',
      data: userPost,
    });
  } catch (error) {
    next(error);
  }
};

const addUserPost = async function (req, res, next) {
  const newUserPost = req.body;
  if (!Object.keys(newUserPost) || Object.keys(newUserPost).length === 0) {
    return res.status(400).send('User post is required');
  }
  try {
    await axios.post(USER_POSTS_API_URL, newUserPost, {
      headers: { 'Content-Type': 'application/json' },
    });
    res.status(200).json({
      msg: 'add new post succeed',
    });
  } catch (error) {
    next(error);
  }
};

const updateUserPost = async function (req, res, next) {
  const id = req.params.postId;
  if (!id) {
    return res.status(400).send('Post Id is required');
  }
  const updatedUserPost = req.body;
  try {
    const response = await axios.put(
      `${USER_POSTS_API_URL}/${id}`,
      updatedUserPost,
      {
        header: { 'Content-Type': 'application/json' },
      }
    );
    res.status(200).json({
      msg: 'user post has been edited',
      data: response.data,
    });
  } catch (error) {
    next(error);
  }
};

const deleteUserPost = async function (req, res, next) {
  const id = req.params.postId;
  if (!id) {
    return res.status(400).send('Post Id is required');
  }
  try {
    await axios.delete(`${USER_POSTS_API_URL}/${id}`);
    res.status(200).json({
      msg: 'user post has been deleted',
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getUserPosts,
  getUserPostById,
  addUserPost,
  updateUserPost,
  deleteUserPost,
};
