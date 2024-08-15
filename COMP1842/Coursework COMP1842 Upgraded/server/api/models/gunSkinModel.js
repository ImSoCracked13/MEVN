const mongoose = require('mongoose')
const gunSkinSchema = mongoose.Schema(
    {
        gun: {
            type: String,
            minLength: 4,
            maxLength: 16,
            required: "Gun Model cannot be empty!"
        },
        skin:{
            type: String,
            minLength: 4,
            maxLength: 20,
            required: "Skin Pattern cannot be empty!"
        },
        price: {
            type: Number,
            min: 1,
            max: 1000000,
            required: "Market Price cannot be empty!"
        },
        created_date: {
            type: Date,
            default: Date.now
        }
    },
    {
        versionKey: false
    }
)
const gunSkinModel = mongoose.model('gunSkins', gunSkinSchema) 

module.exports = gunSkinModel