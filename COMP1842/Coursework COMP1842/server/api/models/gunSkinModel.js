const mongoose = require('mongoose')
const gunSkinSchema = mongoose.Schema(
    {
        gun: {
            type: String,
            required: "Gun Name cannot be empty!"
        },
        skin:{
            type: String,
            required: "Skin Name cannot be empty!"
        },
        price: {
            type: Number,
            required: "The price cannot be empty!"
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