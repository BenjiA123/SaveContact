const app = require("./app");
var mongoose = require("mongoose");
var port = 3000;

mongoose.connect("mongodb+srv://Ben:queen1234@cluster0-rjlm3.mongodb.net/test?retryWrites=true&w=majority");
mongoose.connection.on("connected", () => {
  console.log(`Connected to mongodb database @ 27017`);
});
mongoose.connection.on("error", (error) => {
  if (error) {
    console.log(`Error in database connection ${error}`);
  }
});

app.listen(process.env.PORT || port, () => {
  console.log(`Server started at Port: ${port}`);
});
