const http = require('http');
const url = require('url');
const path = require('path');
const fs = require('fs');

const getServerFile = (filePath, res) => {
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/html' });
      res.end('Image File Not Found');
    } else {
      const ext = path.extname(filePath);
      const contentType = {
        '.jpg': 'image/jpeg',
        '.png': 'image/png',
        '.js': 'text/javascript',
        '.css': 'text/css',
        '.html': 'text/html',
      }[ext] || 'application/octet-stream';

      res.writeHead(200, {
        'Content-Type': contentType,
        'Cache-Control': 'public, max-age=86400' //キャッシュ指定
      });
      res.write(data);
      res.end();
    }
  });
};


const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method

  console.log(method, req.url);

  if (url === '/test-image') {
    const imagePath = path.join(__dirname, '../../', 'public', 'images', 'my_x_icon.jpg');
    getServerFile(imagePath, res);
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.write('404 Not Found');
    res.end();
  }
});

server.listen(3000, () => {
  console.log('Server started on port 3000');
});