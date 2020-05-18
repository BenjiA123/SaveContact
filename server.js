const app = require("./app");
var mongoose = require("mongoose");
var port = 3000;
// mongodb+srv://Ben:queen1234@cluster0-rjlm3.mongodb.net/test?retryWrites=true&w=majority
// mongodb://localhost:27017/contacts
mongoose
  .connect("mongodb+srv://Ben:queen1234@cluster0-rjlm3.mongodb.net/test?retryWrites=true&w=majority")
  .then(() => console.log("Connected To DB"))
  .catch((err) => `Connection error:${err}`);

app.listen(process.env.PORT || port, () => {
  console.log(`Server started at Port: ${port}`);
});
