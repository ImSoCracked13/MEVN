const router = (app) => {
    const gunSkinController = require('../controllers/gunSkinController')

    app.route('/gunSkins')
        .get(gunSkinController.view_all_gun_skins)
        .post(gunSkinController.add_a_gun_skin)
        .delete(gunSkinController.delete_all_gun_skins)
        .put(gunSkinController.update_all_gun_skins)

    
    app.route('/gunSkins/:id')
        .get(gunSkinController.view_a_gun_skin)
        .put(gunSkinController.update_a_gun_skin)
        .delete(gunSkinController.delete_a_gun_skin)
    

    // Routes for sorting gun skins
    app.route('/gunSkins/sort/asc')
        .get(gunSkinController.sort_gun_skins_ascending);

    app.route('/gunSkins/sort/desc')
        .get(gunSkinController.sort_gun_skins_descending);
    }

module.exports = router