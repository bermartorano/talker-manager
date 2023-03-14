const express = require('express');
// const { readTalkersFile } = require('../utils/readAndWrite');
const tokenGenerator = require('../utils/randomToken');

const router = express.Router();

router.post('/login', (req, res) => {
  // const { body: { email, password } } = req;
  const token = tokenGenerator(16);

  res.status(200).json({ token });
});

module.exports = router;