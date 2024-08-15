const gunSkinModel = require('../models/gunSkinModel');

// Function to view all gun skins
exports.view_all_gun_skins = async (req, res) => {
    try {
        const gunSkins = await gunSkinModel.find({});
        res.json(gunSkins);
    } catch (err) {
        res.send(err);
    }
};

// Function to view a specific gun skin
exports.view_a_gun_skin = async (req, res) => {
    try {
        const id = req.params.id;
        const gunSkin = await gunSkinModel.findById(id);
        res.json(gunSkin);
    } catch (err) {
        res.send(err);
    }
};

// Function to sort gun skins in ascending order by price
exports.sort_gun_skins_ascending = async (req, res) => {
    try {
        const gunSkins = await gunSkinModel.find().sort({ price: 1 });
        res.json(gunSkins);
    } catch (err) {
        res.send(err);
    }
};

// Function to sort gun skins in descending order by price
exports.sort_gun_skins_descending = async (req, res) => {
    try {
        const gunSkins = await gunSkinModel.find().sort({ price: -1 });
        res.json(gunSkins);
    } catch (err) {
        res.send(err);
    }
};

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


// Update Many
exports.update_all_gun_skins = async (req, res) => {
    try {
        await GunSkin.updateMany(req.body.query, req.body.update);
        res.json({ message: "Gun Skins updated successfully" });
    } catch (error) {
        res.json({ message: error.message });
    }
};





