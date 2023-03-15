const express = require('express');
const routers = require('./routers');
require('express-async-errors');

const app = express();
app.use(express.json());

const HTTP_OK_STATUS = 200;
const PORT = process.env.PORT || '3001';

app.use(routers);

app.use((error, _req, res, _next) => {
  console.error(error.stack);
  res.status(500).json({ message: 'Erro na aplicação' });
});

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.listen(PORT, () => {
  console.log('Online');
});
