const router = (app) => {
    const gunSkinController = require('../controllers/gunSkinController')

    app.route('/gunSkins')
        .get(gunSkinController.view_all_gun_skins)
        .post(gunSkinController.add_a_gun_skin)
        .delete(gunSkinController.delete_all_gun_skins)
    
    app.route('/gunSkins/:id')
        .get(gunSkinController.view_a_gun_skin)
        .put(gunSkinController.update_a_gun_skin)
        .delete(gunSkinController.delete_a_gun_skin)
    }

module.exports = router