import express from 'express';
import config from './config';
import apiRouter from './api';

const server = express();

server.set('view engine', 'ejs'); // Configures 'Embedded Javascript' template language globally

server.get('/', (req, res) => {
  res.render('index', {
    content: 'Hello Express and <em>EJS</em>!'
  });
});

server.use('/api', apiRouter);
server.use(express.static('public')); // Middleware that serves static assets under the 'public' folder

server.listen(config.port, () => {
  console.info('Express listening on port ', config.port);
});
