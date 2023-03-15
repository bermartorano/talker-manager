const fieldsExistence = (req, res, next) => {
  const { body: { email, password } } = req;
  if (!email || email === '') {
    return res.status(400).json({ message: 'O campo "email" é obrigatório' });
  }
  if (!password || password === '') {
    return res.status(400).json({ message: 'O campo "password" é obrigatório' });
  }
  next();
};

const fieldsValidation = (req, res, next) => {
  const { body: { email, password } } = req;
  const hasArrobaAndCom = email.includes('@');
  const arrobaIndex = email.indexOf('@');
  const arrobaNeighbor = email[arrobaIndex + 1] !== '.';
  const endsCorrectly = email[email.length - 4]
    + email[email.length - 3] + email[email.length - 2] + email[email.length - 1] === '.com';
  const isPasswordValid = password.length > 5;
  const isEmailValid = hasArrobaAndCom && arrobaNeighbor && endsCorrectly;

  if (!isEmailValid) {
    return res.status(400).json({ message: 'O "email" deve ter o formato "email@email.com"' }); 
  }

  if (!isPasswordValid) {
    return res.status(400).json({ message: 'O "password" deve ter pelo menos 6 caracteres' }); 
  }

  next();
};

module.exports = {
  fieldsExistence,
  fieldsValidation,
};
