const http = require('http');
const port = process.env.PORT || 8888;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  const msg = 'Hello worl ->>> Blue Vine App!\n'
  res.end(msg);
});

server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}/`);
});