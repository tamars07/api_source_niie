// Call in installed dependencies
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const logger = require('morgan');

const mainRoutes = require('./server/routes/main');

// set up express app
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(logger('dev'));

// set up mongoose
mongoose.connect('mongodb+srv://tamtran:tam@tran@2020@dgnl-hcmue.8yayn.mongodb.net/myDB?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(()=> {
    console.log('Database connected');
  })
  .catch((error)=> {
    console.log('Error connecting to database');
  });

// set up port number
const port = 3000;
// set up home route
app.get('/', (request, respond) => {
  respond.status(200).json({
    message: 'Welcome to Project Support',
  });
});

// set up main route
app.use('/api/', mainRoutes);

app.listen(port, (request, respond) => {
  console.log(`Our server is live on ${port}. Yay!`);
});