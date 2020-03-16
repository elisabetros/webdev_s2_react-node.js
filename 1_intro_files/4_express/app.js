const express = require("express");
const app = express()

const bodyParser = require('body-parser'); 

app.use(bodyParser.json()); 


app.use(bodyParser.urlencoded({extended:true}))
let arrPersons = [
    {"id":1, "name":"A" },
    {"id":2, "name":"B" },
    {"id":3, "name":"C" },
    {"id":4, "name":"D" },
    {"id":5,}
] 
let currentID = arrPersons[arrPersons.length-1].id;

app.use(express.static('puplic'))

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/puplic/index.html")
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
   const foundPerson =  arrPersons.find(person=>{
        if(id == Number(person.id)){
            return person
        }
    })
    res.send(foundPerson)
})

app.get("/search/", (req, res) => {
    console.log(req.query)
    return res.send({ })
})
app.post("/persons/", (req, res) => {
    console.log(req.body)
    const newPerson = req.body
    newPerson.id = ++currentID
    arrPersons.push(newPerson)
    return res.send({"response": 1, newPerson})

})
app.put("/persons/:id", (req, res) => {
    const id = req.params.id;
    const changedValue = req.body.name;
    const personIndex = arrPersons.findIndex(person => person.id === Number(id))
    arrPersons[personIndex] = {...arrPersons[personIndex], ...req.body}
    return res.send(arrPersons[personIndex])
})

app.delete("/persons/:id", (req, res) => {
    const id = req.params.id;
    arrPersons = arrPersons.filter( (person) =>  person.id != Number(req.params.id)
    )
    res.send(arrPersons)
})
app.listen(9090, (err) => {
    if (err) {
        console.log("error")
    }
    console.log("server running")
})