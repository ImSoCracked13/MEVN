const gunSkinModel = require('../models/gunSkinModel')

exports.view_all_gun_skins = async (req, res) => {
    try {
        gunSkins = await gunSkinModel.find({})
        res.json(gunSkins)
    } catch (err) {
        res.send(err)
    }
}

exports.view_a_gun_skin = async (req, res) => {
    try {
        id = req.params.id
        gunSkin = await gunSkinModel.findById(id)
        res.json(gunSkin)
    } catch (err) {
        res.send(err)
    }
}

exports.delete_a_gun_skin = async (req, res) => {
    try {
        id = req.params.id
        await gunSkinModel.findByIdAndDelete(id)
        res.json({ message : "Delete a gun skin success!"})
    } catch (err) {
        res.send(err)
    }
}

exports.delete_all_gun_skins = async (req, res) => {
    try {
        await gunSkinModel.deleteMany()
        res.json({ message: "Delete all gun skins success!" })
    } catch (err) {
        res.send(err)
    }
}

exports.add_a_gun_skin = async (req, res) => {
    try {
        gunSkin = req.body
        await gunSkinModel.create(gunSkin)
        res.json({ message: "Add (a) new gun skin(s) success!" })
    } catch (err) {
        res.send(err)
    }
}

exports.update_a_gun_skin = async (req, res) => {
    try {
        id = req.params.id
        gunSkin = req.body
        await gunSkinModel.findByIdAndUpdate(id, gunSkin)
        res.json({ message: "Update a gun skin success!" })
    } catch (err) {
        res.send(err)
    }
}   