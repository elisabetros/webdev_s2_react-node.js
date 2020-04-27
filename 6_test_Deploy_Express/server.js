const express = require('express');
const app = express();

const fs = require('fs')

const ssrPage = fs.readFileSync('public/ssrhtml.html', 'utf8')

app.use(express.static('public'))

app.get('/', (req, res) => {
    return res.sendFile(__dirname + '/public/staticallyservedhtml.html')
})
app.get('/ssr', (req, res) => {
    return res.send(ssrPage)
})

app.listen(80, (err ) => {
    if(err){console.log("server cannot listen")}
    console.log('server running on port 80')
})