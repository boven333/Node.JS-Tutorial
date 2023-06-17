const express = require('express');
const app = express();
const debug = require('debug')('app');
const morgan = require('morgan');
const port = 3000;

const path = require('path');

let chalk;
import('chalk').then((chalkModule) => {
  chalk = chalkModule.default;


app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, "/public/")));

app.get("/", (req,res) => {
    res.send("Hello Kuay huadoor");
});

app.listen(port, ()=>{
    debug("Listening on port" + chalk.green(" : " + port));
});
}).catch((error) => {
    console.error('Failed to load chalk module:', error);
  });