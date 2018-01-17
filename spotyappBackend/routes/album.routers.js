var express = require('express');

var AlbumController = require('../controllers/album_controller');
var md_auth0 = require('../middelwares/auth0');


var api = express.Router();
api.get('/album/test', AlbumController.prueba);
api.post('/album/add/', md_auth0.ensureAuth0, AlbumController.saveAlbum);
api.put('/album/edit/:id', md_auth0.ensureAuth0, AlbumController.updateAlbum);
api.get('/album/get-by-id/:id', md_auth0.ensureAuth0, AlbumController.getAlbumById);
api.get('/album/:id?/:page?', md_auth0.ensureAuth0, AlbumController.getListaAlbumPage);


module.exports = api;
