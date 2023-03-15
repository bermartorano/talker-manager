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

module.exports = {
  tokenValidation,
  nameValidation,
};
