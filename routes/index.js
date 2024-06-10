const express = require('express');
const router = express.Router();

// Game Data routes
const getGameData = require('./gamedata/getGameData');
const updateGameData = require('./gamedata/updateGameData');

// Referral routes
const addReferral = require('./referrals/addReferral');
const updateReferral = require('./referrals/updateReferral');
const getReferrals = require('./referrals/getReferrals');

// User Information routes
const addUserInformation = require('./userinformation/addUserInformation');
const getUserInformation = require('./userinformation/getUserInformation');

// Use routes
router.use('/gamedata', getGameData);
router.use('/gamedata', updateGameData);

router.use('/referrals', addReferral);
router.use('/referrals', updateReferral);
router.use('/referrals', getReferrals);

router.use('/userinformation', addUserInformation);
router.use('/userinformation', getUserInformation);

module.exports = router;