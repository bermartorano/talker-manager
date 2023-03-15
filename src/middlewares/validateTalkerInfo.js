const moment = require('moment');

const tokenValidation = (req, res, next) => {
  const { headers: { authorization } } = req;
  if (!authorization) return res.status(401).json({ message: 'Token não encontrado' });
  
  const tokenType = typeof authorization === 'string';
  const tokenLength = authorization.length === 16;
  if (!tokenType || !tokenLength) return res.status(401).json({ message: 'Token inválido' });
  return next();
};

const nameValidation = (req, res, next) => {
  const { body: { name } } = req;
  if (!name) return res.status(400).json({ message: 'O campo "name" é obrigatório' });
  if (name.length < 3) {
    return res.status(400).json({ message: 'O "name" deve ter pelo menos 3 caracteres' });
  }
  return next();
};

const ageValidation = (req, res, next) => {
  const { body: { age } } = req;
  if (!age) return res.status(400).json({ message: 'O campo "age" é obrigatório' });
  if (typeof age !== 'number' || !Number.isInteger(age) || age < 18) {
    return res.status(400).json({
      message: 'O campo "age" deve ser um número inteiro igual ou maior que 18' });
  }
  next();
};

const talkValidation = (req, res, next) => {
  const { body: { talk } } = req;
  if (!talk) return res.status(400).json({ message: 'O campo "talk" é obrigatório' });
  return next();
};

const watchedAtValidation = (req, res, next) => {
  const { body: { talk: { watchedAt } } } = req;
  if (!watchedAt) return res.status(400).json({ message: 'O campo "watchedAt" é obrigatório' });
  const dateCheck = moment(watchedAt, 'DD/MM/YYYY', true).isValid();
  if (!dateCheck) {
    return (res.status(400).json({
        message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"',
      }));
  }
  return next();
};

const rateValidation = (req, res, next) => {
  const { body: { talk: { rate } } } = req;
  if (!(rate + 100)) return res.status(400).json({ message: 'O campo "rate" é obrigatório' });

  const itIsInteger = Number.isInteger(rate);
  const rightInterval = (rate < 6) && (rate > 0);
  if (!itIsInteger || !rightInterval) {
    return (
      res.status(400).json({ message: 'O campo "rate" deve ser um número inteiro entre 1 e 5' }));
  }
  return next();
};

module.exports = {
  tokenValidation,
  nameValidation,
  ageValidation,
  talkValidation,
  watchedAtValidation,
  rateValidation,
};
