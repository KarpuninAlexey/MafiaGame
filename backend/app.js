const express = require('express');
const app = express();

app.use(express.json());

app.get('/api/test', (req, res) => {
  res.json({message: 'success'});
});

module.exports = {
  app,
};
