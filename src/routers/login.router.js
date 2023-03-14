const express = require('express');
// const { readTalkersFile } = require('../utils/readAndWrite');
const router = express.Router();

router.post('/login', (req, res) => {
  // const { body: { email, password } } = req;
  const randomNumber = Math.floor(Math.random() * (10 ** 16)) + 1;
  const randomToken = JSON.stringify(randomNumber);

  res.status(200).json({ token: randomToken });
});

module.exports = router;