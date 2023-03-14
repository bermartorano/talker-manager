const express = require('express');
const talkerRouter = require('./talker.router');
const loginRouter = require('./login.router');

const router = express.Router();

router.use(talkerRouter);
router.use(loginRouter);

module.exports = router;