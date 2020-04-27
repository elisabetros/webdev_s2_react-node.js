const express = require('express')
const app = express()

// const UserModel = import('./models/User')
// console.log(UserModel)

app.use(express.urlencoded({ extended: false }))
app.use(express.json())


// ########################
// SETUP DATABASE

const { Model } = require('objection');
const Knex = require('knex');
const knexFile = require('./knexfile.js')

const knex = Knex(knexFile.development)
// Gice the knex instance to objection
Model.knex(knex)


// limit the 
const rateLimit = require('express-rate-limit')

const authLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 4 // limit each IP to 4 requests per windowMs
})

app.use('/users/login', authLimiter) // only restrict thses user routes
app.use('/users/register', authLimiter) 

//#### set up routes with our server instance #####
const playgroundRoute = require('./routes/playground')
const userRoute = require('./routes/users')


app.use(playgroundRoute)
app.use(userRoute)



// console.log(knex.select('first_name').from('user'))

// ########################
const User = require('./models/User.js')
app.get("/", async (req, res) => {
    // const result = await knex.select().from('address')
    // res.send(result)
    res.send({result: await User.query()})
})
// ###########  start the server ########
console.log(process.env.PORT)
const port = process.env.PORT || 80

// ########################
const server= app.listen(port, (err) => {
    if(err){console.log("server couldn't connect");return;}
    console.log('server running on port ', server.address().port)
})