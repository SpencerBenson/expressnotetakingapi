
//Configuring the database
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

//connecting to the database.
mongoose.connect(dbConfig.url, {
    useNewUrlParser:true
}).then(() => {
    console.log('Successfully connected to the DB')
}).catch(err => {
    console.log('could not connect to the database. Exiting...'+err);
    process.exit();
});


const express = require('express');
const bodyParser = require('body-parser');

// Create express app
const app = express();

//parse requests of content type - application/x-www-form-url-endcoded
app.use(bodyParser.urlencoded({extended:true}));

//parse requests of content-type - application/json
app.use(bodyParser.json());

// define a simple route
app.get('/', (req, res)=> {
    res.status(200).json({'message':'hello notsey!'});
});

// Require Notes routes
require('./app/routes/note.routes.js')(app);
//listen for requests
const port = 3001
app.listen(port,() => {
    console.log('Server is listening on port: ' + port);
})
