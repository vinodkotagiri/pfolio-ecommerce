const express = require('express')
require('dotenv').config()
const server = express()

server.get('/', (req, res) => {
    res.send('hello from node')
})

const PORT = process.env.PORT || 8000

server.listen(PORT, () => {
    console.log(`Server running on ${PORT}. . .`)
})


// mongoose
//     .connect(process.env.DATABASE, {})
//     .then(() => console.log("DB connected"))
//     .catch((err) => console.log("DB Error => ", err));