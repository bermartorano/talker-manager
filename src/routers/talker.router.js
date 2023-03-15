const express = require('express');
const { readTalkersFile, writeTalkerFile } = require('../utils/readAndWrite');
const {
    tokenValidation,
    nameValidation,
    ageValidation,
    talkValidation,
    watchedAtValidation,
    rateValidation,
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

router.post('/talker',
  tokenValidation,
  nameValidation,
  ageValidation,
  talkValidation,
  watchedAtValidation,
  rateValidation,
  async (req, res) => {
    const { body } = req;
    const talkers = await readTalkersFile();
    const newId = talkers.length + 1;
    const talker = { ...body, id: newId };
    const newTalkers = [...talkers, talker];
    const newTalkersString = JSON.stringify(newTalkers, null, 2);

    await writeTalkerFile(newTalkersString);
    return res.status(201).json(talker);
  });

router.put('/talker/:id',
  tokenValidation,
  nameValidation,
  ageValidation,
  talkValidation,
  watchedAtValidation,
  rateValidation,
  async (_req, res) => {
    // const { body, params: { id } } = req;
    // const talkers = await readTalkersFile();
    // const talkersCopy = [...talkers];
    // const talkerToUpdate = talkersCopy.find((tlk) => tlk.id === id);
    // const talkerUpdated = { ...talkerToUpdate, ...body };
    // const talkerToUpdateIndex = talkerToUpdate.indexOf(talkerToUpdate);
    // talkersCopy[talkerToUpdateIndex] = talkerUpdated;
    
    // await writeTalkerFile(talkersCopy);
     res.status(201).json({ message: 'oi' });
  });

module.exports = router;