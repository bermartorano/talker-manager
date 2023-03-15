const tokenValidation = (req, res, next) => {
  const { headers: { authorization } } = req;
  if (!authorization) return res.status(401).json({ message: 'Token não encontrado' });
  
  const tokenType = typeof authorization === 'string';
  const tokenLength = authorization.length === 16;
  if (!tokenType || !tokenLength) return res.status(401).json({ message: 'Token inválido' });
  next();
};

module.exports = {
  tokenValidation,
};
