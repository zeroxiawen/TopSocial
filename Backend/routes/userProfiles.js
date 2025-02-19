const express = require('express');
const path = require('path');
const userProfilesRouter = express.Router();
const { getUserProfileById } = require('../controllers/userProfileController');

// GET get UserProfile by id /api/userProfiles/:userId
userProfilesRouter.get('/:userId', getUserProfileById);

//

module.exports = userProfilesRouter;
