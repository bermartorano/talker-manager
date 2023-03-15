const fs = require('fs/promises');

const talkersFilePath = 'src/talker.json';

const readTalkersFile = async () => {
  const file = await fs.readFile(talkersFilePath);
  const talkers = await JSON.parse(file);
  return talkers;
};

const writeTalkerFile = async (newTalkers) => {
  await fs.writeFile(talkersFilePath, newTalkers);
};

module.exports = {
  readTalkersFile,
  writeTalkerFile,
};