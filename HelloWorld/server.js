const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    
    res.send("Hello")
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

app.get('/user/details', (req, res) => {
    let userdetails=req.query
    console.log("User Details done",req.query)
    res.send(userdetails)
})

