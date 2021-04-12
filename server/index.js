const express = require('express');
const path =  require('path');
const port = process.env.PORT || 8080;
const app = express();

const options = {
  index: false,
};
app.use('/dist', express.static(path.join(__dirname, '../dist'), options));

app.get('*', (_, res) => {
  res.sendFile(path.resolve(__dirname, '../dist/index.html'));
});

app.listen(port);
