const express = require('express');

const urlController = require('../controllers/urlController');

const urlRouter = express.Router();

urlRouter.route('/shorten').post(urlController.shortenUrl);

urlRouter.route('/').get(urlController.showUrls);

urlRouter.route('/:code').get(urlController.directToLongUrl);

module.exports = urlRouter;
