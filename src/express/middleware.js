const express = require('express');
const app = express();

const loggerMiddleware = function (req, res, next) {
  console.log(`ミドルウェア発動！${req.method}:${req.url}`);
  next();
};

// ここでミドルウェアを登録
app.use(loggerMiddleware);

// GETリクエスト
app.get('/', (req, res) => {
  res.send({
    msg: 'GET request'
  });
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
