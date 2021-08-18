const Sequelize = require("sequelize");
const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

////import route file
const v1 = require("./routes/router");
app.use("/",v1);
// app.use(express());

app.use(cors());
 app.use(bodyParser.urlencoded({ extended: false }));
 app.use(bodyParser.json());


app.listen(3000,()=>{
    console.log("server is listen on port",+3000)
});
