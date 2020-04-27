const router = require('express').Router();

const bcrypt = require('bcrypt')
const saltRounds = 10;

const User = require("../models/User");

router.post('/users/login', async (req, res) => {
    const { username, password } = req.body
    // console.log(req.body)
    if(username && password) {
        const users = await User.query().where({ username }).limit(1);
        const user = users[0]
        if(!user){
            return res.status(404).send({ response: 'wrong username' })
        }
        
        bcrypt.compare(password, user.password, (error, isSame) => {
            if(error){
                return res.status(500).send({ response: 'error' })
            }
            if(!isSame){
                return res.status(404).send({ response: 'wrong password' })
            }else{
                return res.send({ response: {username: user.username} })
            }
        })  
    }else{
        return res.status(404).send({ response: "Missing username or password"})
    }
})


router.post('/users/register',  (req, res) => {
    const { username, password, repeatPassword } = req.body
    if( username && password && repeatPassword && password === repeatPassword){
        if(password.length < 8) {
            return res.status(400).send({ response:'password too short' })
        }else{
            bcrypt.hash(password, saltRounds, async (error, hashedPassword) => {
                if(error){
                    return res.status(500).send({ })
                }
                    try{
                        // console.log("this newly hashed password",hashedPassword)
                        const existingUser =  await User.query().select().where({ username:username }).limit(1)
                        if(existingUser[0]){
                            return res.status(500).send({ response: "user already exists"});
                        }else{
                            const newUser = await User.query().insert({ 
                                username,
                                password: hashedPassword
                            })
                            return res.status(200).send({ response: newUser })
                        }
                    }catch(error){
                        return res.status(500).send({ response: "something went wrong with the database"});
                    }
         }) 
        }
    }else{
        return res.status(404).send({ response: 'missing fields' })
    }
    // return res.send({  })
})

module.exports = router;