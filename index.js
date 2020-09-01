const express = require('express');
const app = express();
// app.set('trust proxy', true)
app.get('/',(req,res) => {
    // console.log(req.connection.remoteAddress)
    // console.log(req.headers['x-forwarded-for'])
    console.log(req.ip)
    res.send('Recieved')
})

app.get('/a',(req,res) => {
    // console.log(req.connection.remoteAddress)
    // console.log(req.headers['x-forwarded-for'])
    var ip = req.headers['x-real-ip'] ;
    console.log(ip);
    console.log(Object.keys(req.headers))
    res.send({status:200})
})

app.listen(5000)