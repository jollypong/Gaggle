const router = require('express').Router();
const userRoutes = require('./userRoute');
const conversationRoutes = require('./conversationRoute');
const messageRoutes = require('./messageRoute');

router.use('/user', userRoutes);
router.use('/conversation', conversationRoutes);
router.use('/message', messageRoutes);

module.exports = router;