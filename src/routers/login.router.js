const express = require('express');
const { fieldsExistence, fieldsValidation } = require('../middlewares/validateLogin');
const tokenGenerator = require('../utils/randomToken');
// const { readTalkersFile } = require('../utils/readAndWrite');

const router = express.Router();

router.post('/login', fieldsExistence, fieldsValidation, (_req, res) => {
  const token = tokenGenerator(16);
  res.status(200).json({ token });
});

module.exports = router;