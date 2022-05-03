const express = require("express")
require("./db/mongoose")
require('dotenv').config()
const port = process.env.PORT
const productRouter = require("./Router/productRouter")

const app = express()
app.use(express.json())

app.use(productRouter)

app.listen(port, () => {
    console.log("Server is up on " + port)
})