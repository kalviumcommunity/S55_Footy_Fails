const express = require('express')
const app = express();

app.get("/ping",(req,res)=>{
    res.send('Hello')
})

app.listen(3000, ()=>{
    console.log('Port 3000')
});

module.exports = app;