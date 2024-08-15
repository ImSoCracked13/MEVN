const express = require('express')
const app = express()

//1) declare & config "mongoose"
const mongoose = require('mongoose')
const db = "mongodb://127.0.0.1:27017/gunSkins"

mongoose.connect(db)
    .then(() => console.log('Connect to Database Success!'))
.catch((err) => console.error('Connect to Database Failed! ' + err))

//2) declare & config "body-parser"
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

//3) declare & config CORS
//Note: must declare before any route
const cors = require('cors')
app.use(cors())

//4) declare & register router
const gunSkinRouter = require('./api/routes/gunSkinRouter')
gunSkinRouter(app)

//5) run server by listening port
const port = 4000
app.listen(port)