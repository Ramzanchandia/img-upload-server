require('dotenv').config()
const express = require('express')
const app = express();
require('./db/db')
const router = require('./routes/router')
const cors = require('cors')

const port = process.env.PORT || 8005;


// Middlewares
app.use(express.json());
app.use(cors());
app.use(router);

app.use('/uploads', express.static('./uploads'));

app.listen(port, ()=> {
    console.log(`Server started at port no ${port}`);
})