var express = require('express');
var cors = require('cors');
var app = express();
const route = require('./routes/contactRoutes');
//adding middle wares -cors
app.use(cors());
//body parser
app.use(express.json());
//static files 
app.use(express.static(`${__dirname}/client/dist/MeanStack/index.html`))
// add routes
app.use('/api', route);

module.exports = app