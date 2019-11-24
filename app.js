var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');
var path = require('path');
var app = express();
var port = 3000;
const route = require('./routes/route');
//adding middle wares -cors
app.use(cors());
//body parser
app.use(bodyparser.json());
//static files 
app.use(express.static(path.join(__dirname, 'public')))
// add routes
app.use('/api', route);
// success connection
mongoose.connect("mongodb://localhost:27017/contactlist")
mongoose.connection.on('connected', () => {
    console.log(`Connected to mongodb database @ 27017`)
})
mongoose.connection.on('error', (error) => {
    if (error) {
        console.log(`Error in database connection ${error}`)
    }
});
//testing server
app.get('/', (req, res) => {
    res.send('I am workng perfectly')
});
app.listen(process.env.PORT || port, () => {
    console.log(`Server started at Port: ${port}`);
});