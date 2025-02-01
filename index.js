const express = require('express')
const bodyParser = require('body-parser')

const admin = require('./routes/admin');
const shop = require('./routes/shop');

const app = express()

app.use(bodyParser.urlencoded({extended:false}));

app.use("/admin", admin)
app.use("/shop", shop)

app.listen(3000)

