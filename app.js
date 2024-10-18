
const express = require("express");
const app = express();
const port = 3000;
const mongoose = require("mongoose");


const allroutes = require("./routes/allroutes")
const adduser = require("./routes/adduser")



const livereload = require('livereload');
const path = require('path');
const methodOverride = require('method-override');
const connectLivereload = require('connect-livereload');

const liveReloadServer = livereload.createServer();
liveReloadServer.watch(path.join(__dirname, 'public'));

// Set up the view engine and static files
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

// Use method-override middleware
app.use(methodOverride('_method')); // Corrected the spelling to '_method'

// Add connect-livereload middleware
app.use(connectLivereload());
// LiveReload connection setup
liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh('/');
  }, 100);
});





mongoose
.connect("mongodb+srv://alansir101:zH7HEQuohYAAASDa@cluster0.shce2.mongodb.net/all-data?retryWrites=true&w=majority&appName=Cluster0")
.then(() => {

  app.listen(port, () => {
    console.log(`http://localhost:${port}/`);
    
  });

})
.catch((err) => {console.log(err)});


app.use(allroutes)
app.use("/user",adduser)

























