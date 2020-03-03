const express = require("express");
const app = express();
//const app = require("express")();


app.get(("/"), (req, res) => {
    return res.send({message: "response is here"});
})
app.get(("/about"), (req, res) =>{
    return res.send({message: "something about me"})
})

app.listen(8080);