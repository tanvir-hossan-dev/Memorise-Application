require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const postRouters = require("./routers/postRouters")
const app = express()
app.use(cors())
app.use(express.json())

app.use("/post", postRouters)

const port = process.env.PORT || 8000
console.log(port);
mongoose.connect(process.env.MONGODB).then(()=>{
    app.listen(port,()=>{
        console.log(`${port} is listening`)
    })
})


