////////////Requires
//Server Express
const express = require('express');
const app = express();
//Debug
const morgan = require('morgan');
//Helmet HTTP Headers
const helmet = require('helmet');
//Routing
require('./routes/index.routes.js')(app);
//Middlewares
// const logger = require('./middlewares/logger.middleware');

//////////App sets
app.set('view engine', 'pug');
//////////App use
app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({
  extended: true
}));
app.use(helmet()); // Sending various http headers

// console.log(`NODE_ENV IS ${process.env.NODE_ENV}`);
console.log(`App Name: ${config.get('name')}`);
console.log(`Package Name: ${process.env.npm_package_name}`);
console.log(`App mode: ${app.get('env')}`);


if (app.get('env') === 'development') {
  app.use(morgan('tiny'));
}

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));