const express = require("express")
const connectDb = require("./config/dbConnection")
const dotenv = require("dotenv").config()
const app = express()

connectDb();
const port = process.env.PORT || 5000

app.listen(port, (req, res) => {
 console.log(`Running on ${port}`);
})
