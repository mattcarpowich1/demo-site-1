const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'client', 'build')));

app.get('*', function (req, res) {
  const index = path.join(__dirname, 'client', 'build', 'index.html');
  res.sendFile(index);
});

app.listen(process.env.PORT ?
  process.env.PORT : 5000, err => {
  if (err) console.log(err);
  console.log('Server listening on port 5000...');
});