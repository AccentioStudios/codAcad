////////////Requires
//Server Express
const express = require('express'),
  app = express(),
  port = parseInt(process.env.PORT) || 3000;
app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({
  extended: true
}));
//Debug
const morgan = require('morgan');
//Helmet HTTP Headers
const helmet = require('helmet');
app.use(helmet()); // Sending various http headers
//Routing
require('./routes/index.routes.js')(app);
app.set('view engine', 'pug');

console.log(`Package Name: ${process.env.npm_package_name}`);
console.log(`App mode: ${app.get('env')}`);


if (app.get('env') === 'development') {
  app.use(morgan('tiny'));
}

app.listen(port, () => console.log(`Listening on port ${port}...`));