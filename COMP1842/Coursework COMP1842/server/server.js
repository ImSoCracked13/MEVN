const express = require('express')
const app = express()


const mongoose = require('mongoose')
const db = "mongodb://127.0.0.1:27017/gunSkins"


mongoose.connect(db)
    .then(() => console.log('Connect to Database Success!'))
.catch((err) => console.error('Connect to Database Failed! ' + err))


const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())


const cors = require('cors')
app.use(cors())


const gunSkinRouter = require('./api/routes/gunSkinRouter')
gunSkinRouter(app)


const port = 4000
app.listen(port)