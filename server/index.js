require('dotenv').config()

const path = require("path");
const express = require("express");
const helmet = require("helmet");
const app = express(); // create express app
app.use(helmet.frameguard({ action: 'deny' }));
app.use(helmet.xssFilter());
app.use(helmet.hidePoweredBy());

const PORT = process.env.PORT ;

app.use(express.static(path.join(process.cwd(), 'build')));

app.get('/*', function (req, res) {
    res.sendFile( 'index.html',{root: path.join(process.cwd(), 'build')});
});


// start express server on port 5000
app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});