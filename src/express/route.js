const express = require('express');
const app = express();

// GETリクエスト
app.get('/', (req, res) => {
  res.send({
    msg: 'GET request'
  });
});

// POSTリクエスト
app.post('/', (req, res) => {
  res.send({
    msg: 'POST request'
  });
});

// PUTリクエスト
app.put('/:id', (req, res) => {
  res.send({
    id: req.params.id,
    msg: 'PUT request'
  });
});

// DELETEリクエスト
app.delete('/:id', (req, res) => {
  res.send({
    id: req.params.id,
    msg: 'DELETE request'
  });
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
