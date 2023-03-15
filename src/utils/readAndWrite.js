const fs = require('fs/promises');

const talkersFilePath = 'src/talker.json';

const readTalkersFile = async () => {
  const file = await fs.readFile(talkersFilePath);
  const talkers = await JSON.parse(file);
  return talkers;
};

const writeTalkerFile = async (talker) => {
  const talkers = await readTalkersFile();
  const newId = talkers.length + 1;
  const newTalkers = [...talkers, { ...talker, id: newId }];
  const newTalkersString = JSON.stringify(newTalkers);
  console.log('Novo vetor: ', newTalkers);

  await fs.writeFile(talkersFilePath, newTalkersString);
};

module.exports = {
  readTalkersFile,
  writeTalkerFile,
};