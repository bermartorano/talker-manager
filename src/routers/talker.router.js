const express = require('express');
const { readTalkersFile } = require('../utils/readAndWrite');

const router = express.Router();

router.get('/talker', async (_req, res) => {
    const result = await readTalkersFile();
    res.status(200).json(result);
  });

module.exports = router;