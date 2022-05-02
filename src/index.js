const express = require("express")
require('dotenv').config()
const port = process.env.PORT
const productRouter = require("./Router/productRouter")
const app = express()

app.use(productRouter)

app.listen(port, () => {
    console.log("Server is up on " + port)
})