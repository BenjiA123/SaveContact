
const path = require("path");
var express = require('express');
var cors = require('cors');
var app = express();
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

module.exports = app