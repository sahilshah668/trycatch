const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const passport = require("passport");
// const cors = require('cors')
// const timeout = require('connect-timeout')
const app = express();
// require("dotenv").config();
const port = 5000;

//connecting mongo db
//
mongoose.Promise = global.Promise;
//connect to mongoose

// DB Config
const db = require("./config/keys").mongoURI;

// app.use(cors())

// Connect to MongoDB
mongoose
  .connect(db,{useUnifiedTopology: true ,useNewUrlParser: true })
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

//passport initializing
app.use(passport.initialize());


app.get('/', (req,res) => {
  res.send('hello world')
})
//config passport
require("./config/passport")(passport);

//middleware for body parser
app.use(bodyParser.urlencoded({ extended: false }));

//parse application json
// app.use(bodyParser.json());
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
//applying routes

// app.use(timeout('5s'))

// const Auth = require("./routes/userauth");
// const Account = require("./routes/Account");
// const Posts = require('./routes/Posts')
// const Subscribe = require('./routes/Subscribe')
// app.use("/", Auth, Account,Posts,Subscribe);

app.listen(port, () => {
  console.log(`server is up and runing on ${port} `);
});
