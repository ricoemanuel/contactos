const express=require('express');
const cors = require('cors'); 
const app=express();

//middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cors());
//routes
app.use(require('../routes/index'));

app.listen(3000);

console.log("server on port 3000");





