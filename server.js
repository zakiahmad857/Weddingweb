const express = require('express');
const serveStatic = require('serve-static');
const path = require('path');
const app = express();
app.use('/', serveStatic(path.join(__dirname, 'dist')));
app.use('/id', serveStatic(path.join(__dirname, 'dist')));
app.use('/en', serveStatic(path.join(__dirname, 'dist')));
app.use('*', serveStatic(path.join(__dirname, 'dist')));
const port = process.env.PORT || 80;
app.listen(port, () => {
  console.log('listening to port ' + port);
});
