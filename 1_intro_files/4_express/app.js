const express = require("express");
const app = express()
const arrPersons = [
    {"id":1, "name":"A" },
    {"id":2, "name":"B" },
    {"id":3, "name":"C" },
    {"id":4, "name":"D" }
] 

app.get("/", (req, res) => {
    res.send({"status":"hello"})
})

app.get("/pathvariable/:customvalue/:multiple", (req, res) => {
    const customvalue = req.params.customvalue
    const anothervalue = req.params.multiple
    console.log(customvalue)
    res.send({"customvalue is": customvalue,
     "anothervalue is ": anothervalue})
})
app.get("/time", (req, res) => {
    let today = new Date();
    const localeTime = today.toLocaleString()
    const time = today.getHours()+':'+today.getMinutes();
    console.log(localeTime) 
    res.send({"today is ":today.toDateString()+ " " + time,
                "weekday ": today.toLocaleDateString("en-us", {weekday:"long"}) 
    })
})
app.get("/persons", (req, res) => {
    res.send(arrPersons)
})
app.get("/persons/:id", (req, res) => {
    const id = req.params.id
    arrPersons.forEach(person=>{
        if(id == person.id){
            res.send(person)
        }
    })

})
app.get("/search/", (req, res) => {
    console.log(req.query)
    return res.send({ })
})
app.listen(9090, (err) => {
    if (err) {
        console.log("error")
    }
    console.log("server running")
})