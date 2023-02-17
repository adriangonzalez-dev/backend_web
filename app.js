require('dotenv/config')
const express = require('express');
const app = express();
const cors = require('cors');
const { mailRouter } = require('./routes');

//aplication Middlewares
app.use(cors({
    origin: process.env.URL_FRONTEND_DEV,
    optionsSuccessStatus: 200
}));
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//routes
app.use('/api',mailRouter);

app.listen(process.env.PORT, ()=>{
    console.log('Server in port ' + process.env.PORT)
});