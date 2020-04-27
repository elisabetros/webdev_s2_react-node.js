const router = require('express').Router();


router.get('/firstpath', (req, res, next) => {
    console.log('first path', new Date())
    // res.redirect('/secondpath')
    res.send({ response: "first path" })
    next()
})
router.get('/secondpath', (req, res, next) => {
    console.log('second path - first time')
   next()
})
router.get('/secondpath', (req, res) => {
    console.log('second path - second time')
    res.send({ response: "second path" })
})

module.exports = router;