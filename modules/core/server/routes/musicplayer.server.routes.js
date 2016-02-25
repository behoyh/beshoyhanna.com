'use strict';

var path = require('path');

module.exports = function (app) {
	
  // Root routing
  var musicplayer = require(path.resolve('./modules/core/server/controllers/musicplayer.server.controller.js'));

  // Define application route
  app.route('/api/musicplayer').get(musicplayer.shuffle).post(musicplayer.skip);

// Single article routes
  app.route('/api/musicplayer/:musicId')
    .get(musicplayer.play)
    .put(musicplayer.add)
    .delete(musicplayer.delete);


};