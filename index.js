const express = require('express');
const app = express();
const http = require('http').createServer(app);
const PORT = process.env.PORT || 5000;

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

http.listen(PORT, () => {
  console.log(`listening on *:${PORT}`);
});
