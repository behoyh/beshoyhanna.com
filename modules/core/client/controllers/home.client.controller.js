(function () {
  'use strict';

  angular
    .module('core')
    .controller('HomeController', HomeController);

  function HomeController() {
    var vm = this;

    var randomColor = 'rgba(' + (Math.floor(Math.random() * 256)) + ', '+ (Math.floor(Math.random() * 256)) + ', '+ (Math.floor(Math.random() * 256)) + ', '+ Math.random() + ')';

  }
}())
