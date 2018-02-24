(function () {
  'use strict';

  angular
    .module('core')
    .controller('HomeController', HomeController);

  function HomeController() {
    var vm = this;

    var randomColor = 'rgba(' + (Math.floor(Math.random() * 256)) + ', '+ (Math.floor(Math.random() * 256)) + ', '+ (Math.floor(Math.random() * 256)) + ', '+ Math.random() + ')';
    if (jQuery('#zen-intro') !== null) {
      jQuery('#zen-intro').css("backgroundColor", randomColor);
      setInterval(function() {
        randomColor = 'rgba(' + (Math.floor(Math.random() * 256)) + ', '+ (Math.floor(Math.random() * 256)) + ', '+ (Math.floor(Math.random() * 256)) + ', '+ Math.random() + ')';
        jQuery('#zen-intro').animate({backgroundColor: randomColor },7500);
      }, 8000);
    }
  }
}())
