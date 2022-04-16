const express = require('express');

const app = express();

const PORT = process.env.PORT || 8000;

const ejs = require('ejs');

const path = require('path');
const expressLayouts = require('express-ejs-layouts');


app.get('/',(req,res) => {
    res.render('home');
})


//Set templete engine
app.use(expressLayouts);
app.set('views',path.join(__dirname,'/resources/views'));
app.set('view engine','ejs');





app.listen(PORT, (err) => {
    if(err){
        console.log("Error while listening to the port ",PORT);
    }
    else{
        console.log("Successfully Listening to the port ",PORT)
    }
})
