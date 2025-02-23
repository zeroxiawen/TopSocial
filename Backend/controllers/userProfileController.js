const axios = require('axios');
const USER_PROFILES_API_URL = 'http://localhost:8000/userProfiles';

const getUserProfileById = async function (req, res, next) {
  const id = req.params.userId;
  if (!id) {
    res.status(400).send('user id is required');
  }
  try {
    const response = await axios.get(`${USER_PROFILES_API_URL}/${id}`);
    const userProfile = response.data;
    res.status(200).json({
      msg: 'Get userProfile succeed',
      data: userProfile,
    });
  } catch (error) {
    next(error);
  }
};

const getUserProfiles = async function (req, res, next) {
  try {
    const response = await axios.get(`${USER_PROFILES_API_URL}`);
    const userProfiles = response.data;
    res.status(200).json({
      msg: 'Get all userProfile succeed',
      data: userProfiles,
    });
  } catch (error) {
    next(error);
  }
};

const patchUserProfileById = async function (req, res, next) {
  const id = req.params.userId;
  if (!id) {
    res.status(400).send('user id is required');
  }
  const newUserProfileData = req.body;
  try {
    const response = await axios.patch(
      `${USER_PROFILES_API_URL}/${id}`,
      newUserProfileData
    );
    const updatedUserProfile = response.data;
    res.status(200).json({
      msg: 'update user profile succeed',
      data: updatedUserProfile,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { getUserProfileById, getUserProfiles, patchUserProfileById };
