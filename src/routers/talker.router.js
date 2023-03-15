const express = require('express');
const { readTalkersFile } = require('../utils/readAndWrite');
const {
    tokenValidation,
    nameValidation,
    ageValidation,
      } = require('../middlewares/validateTalkerInfo');

const router = express.Router();

router.get('/talker', async (_req, res) => {
  const result = await readTalkersFile();
  if (!result) return res.status(200).json([]);
  return res.status(200).json(result);
  });

router.get('/talker/:id', async (req, res) => {
  const { params: { id } } = req;
  const talkers = await readTalkersFile();
  const [talker] = talkers.filter((person) => person.id === +id);

  if (talker) return res.status(200).json(talker);
  return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
});

router.post('/talker', tokenValidation, nameValidation, ageValidation, (req, res) => {
  const { body } = req;
  return res.status(201).json(body);
});

module.exports = router;