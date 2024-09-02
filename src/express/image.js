const express = require('express');
const app = express();
const path = require('path');

// 静的ファイルの提供とキャッシュの有効化
app.use(express.static('public', { maxAge: 86400000 }));

// test-imageリクエスト
app.get('/test-image', (req, res) => {
  res.sendFile(path.join(__dirname, '../../', 'public', 'images', 'my_twitter_icon.jpg'));
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
