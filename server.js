const express = require('express');

const app = express();

const index = require('./routes/index');

//Free Cors
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


app.use('/', index);

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server running on Port ${port}`))
