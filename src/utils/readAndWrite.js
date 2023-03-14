const fs = require('fs/promises');

const readTalkersFile = async () => {
  const file = await fs.readFile('src/talker.json');
  const talkers = await JSON.parse(file);
  return talkers;
};

module.exports = {
  readTalkersFile,
};