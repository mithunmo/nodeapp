const express = require('express')
const app = express()
const request = require('request');

const tools = require('./app');


app.get("/app", (req,res) => {
    tools.prom()
    .then( (result) => {
        res.send("success");
    })
    .catch( (erro) => {
        res.send("error");
    });
    
});

app.get('/', (req, res) => res.send('Hello World!'))

app.get("/price/:code", (req,res) => {
        console.log(req.params.code);
    request("https://www.quandl.com/api/v3/datasets/NSE/" +req.params.code +".json?api_key=J3cU7jn8b_HdBT-n3sau&limit=1", { json: true }, (err, response, body) => {
            if (err) { return console.log(err); }
            arr = response.body.dataset.data[0];
            console.log(arr);
            res.send(arr);
    });
    

});

app.listen(3000, () => console.log('Example app listening on port 3000!'))