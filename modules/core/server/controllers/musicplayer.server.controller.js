'use strict';

/*
 * Some Dependancies
 */
var path = require('path'),
    errorHandler = require('./errors.server.controller');

    exports.shuffle = function(res) {

 
      res.status(200).send("yo");

    };
     exports.skip = function(req, res) {

      res.status(202).send("Started core-audio");
      
    };
       
        exports.play = function(res) {
      //var player = new Mplayer('/opt/mean/modules/core/client/music/01 Mr. Substitute.mp3');
      //player.play();
 
      res.status(200).send("yop");
    
      
        
      
    };
     exports.add = function(req, res) {
      //var player = new Mplayer('/opt/mean/modules/core/client/music/01 Mr. Substitute.mp3');
      //player.play();

        res.status(202).send("yoo");
      
    };

  exports.delete = function(req, res) {
      //var player = new Mplayer('/opt/mean/modules/core/client/music/01 Mr. Substitute.mp3');
      //player.play();

        res.status(202).send("yo0");
      
    };