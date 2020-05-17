const app = require("./app");
var mongoose = require("mongoose");
var port = 3000;

mongoose.connect("mongodb://localhost:27017/contactlist");
mongoose.connection.on("connected", () => {
  console.log(`Connected to mongodb database @ 27017`);
});
mongoose.connection.on("error", (error) => {
  if (error) {
    console.log(`Error in database connection ${error}`);
  }
});
//testing server
app.get("/", (req, res) => {
  res.send("I am workng perfectly");
});
app.listen(process.env.PORT || port, () => {
  console.log(`Server started at Port: ${port}`);
});
