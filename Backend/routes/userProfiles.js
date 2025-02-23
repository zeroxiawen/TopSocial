const express = require('express');
const path = require('path');
const userProfilesRouter = express.Router();
const {
  getUserProfileById,
  getUserProfiles,
  patchUserProfileById,
} = require('../controllers/userProfileController');

// GET get UserProfile by id /api/userProfiles/:userId
userProfilesRouter.get('/:userId', getUserProfileById);

// Get get user profiles /api/userProfiles

userProfilesRouter.get('/', getUserProfiles);

// PATCH update user profile by id /api/userProfiles/:userId
userProfilesRouter.patch('/:userId', patchUserProfileById);

module.exports = userProfilesRouter;
