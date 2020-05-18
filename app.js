
const path = require("path");
var express = require('express');
var cors = require('cors');
var app = express();

process.on('uncaughtException', (err) => {
    console.log('UNCAUGHT EXCEPTION  Exiting...');
    console.log(err.name);
    process.exit(1);
  });
  
const route = require('./routes/contactRoutes');
//adding middle wares -cors
app.use(cors());
//body parser
app.use(express.json());
//testing server
// app.get("/", (req, res) => {
//     res.send("I am workng perfectly");
//   });

app.use("/", express.static(path.join(__dirname, "public")));
// add routes
app.use('/api', route);


process.on('unhandledRejection', (err) => {
    console.log('Unhandled Rejection  Exiting...');
    console.log(err.stack);
    server.close(() => {
      process.exit(1);
    });
  });
  

module.exports = app