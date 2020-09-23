////////////Requires
//Server Express
const express = require('express');
const app = express();
//Debug
const startupDebugger = require('debug')(`${process.env.npm_package_name}:startup`);
const databaseDebugger = require('debug')(`${process.env.npm_package_name}:db`);
const morgan = require('morgan');
//Helmet HTTP Headers
const helmet = require('helmet');
//Controllers
require('./controllers/index.controller.js')(app);
//Middlewares
const logger = require('./middlewares/logger.middleware');

//////////App sets
app.set('view engine', 'pug');
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

// console.log(`NODE_ENV IS ${process.env.NODE_ENV}`);
console.log(`App Name: ${config.get('name')}`);
console.log(`Package Name: ${process.env.npm_package_name}`);
console.log(`Mail Server: ${config.get('mail.host')}`);
// console.log(`Mail password: ${config.get('mail.password')}`);
console.log(`App mode: ${app.get('env')}`);

app.use(helmet()); // Sending various http headers
app.use('/api/genres', genres); //api/genres
app.use('/', index); // index

if (app.get('env') === 'development') {
  app.use(morgan('tiny'));
  startupDebugger("Morgan is enabled...");
}
//BB Work
databaseDebugger("Database connected...");

app.use(express.static('public'));
app.use(logger);

const commitListRepo1 = [{
  name: "commit1"
}];
const repositoriesList = [{
    id: 1,
    name: "repo1",
    commits: commitListRepo1
  },
  {
    id: 2,
    name: "repo2"
  },
  {
    id: 3,
    name: "repo3"
  },
  {
    id: 4,
    name: "repo4"
  },
  {
    id: 5,
    name: "repo5"
  }
];

function getUser(id) {
  console.log("Reading user...");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        id: id,
        gitHubUsername: "ckjones1"
      });
    }, 2000)
  });
}

function getRepositories(user) {
  console.log("Reading repos...");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        user: user,
        repositories: repositoriesList
      })
    }, 2000);
  });
}

function handleError(error) {
  var err = new Error("Error");
  console.log(err);
}

function getCommits(repos) {
  console.log("Reading commits of repo1...");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(repos.repositories[0].commits);
    }, 2000);
  });
}

console.log("Before");
getUser(2)
  .then(user => getRepositories(user))
  .then(repos => getCommits(repos))
  .then(commitsRepo1 => console.log("commits", commitsRepo1))
  .catch(handleError);

console.log("After");

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));