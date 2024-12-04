const express = require('express');
const mongoose = require('mongoose');
const app = express();
const parser = require('body-parser');
const router = require('./router/route');
const cors = require('cors');
app.use(parser.json());
app.use(cors())

mongoose.connect('mongodb://localhost:27017/user');
app.use('/api',router);

app.listen(5001,()=>{
    console.log('Server started on port 5001');

});