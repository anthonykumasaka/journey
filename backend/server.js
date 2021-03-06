const mongoose = require('mongoose'); 
const express = require('express'); 
const app = express(); 
const db = require('./config/keys').mongoURI; 
const users = require("./routes/api/users");
const bodyParser = require('body-parser'); 

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

app.use('/api/users', users); 

app.get("/", (req, res) => {
  res.send("Hello Mr Kumasaka How is your backend?"); 
}); 

const port = process.env.PORT || 5000; 

app.listen(port, () => {console.log(`Server is running on port ${port}`);});

// killall - 9 node