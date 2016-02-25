'use strict';

angular.module('core').controller('HomeController', ['$scope', 'Authentication',
  function ($scope, Authentication) {
    // This provides Authentication context.
    $scope.authentication = Authentication;
  }
])
.directive('colorSwap', ['$animate','Authentication', function ($animate, Authentication) {

       

        if ($('#zen-intro') !== null){
          $('#zen-intro').animate({backgroundColor:'rgba(' + (Math.floor(Math.random() * 256)) + ', '+ (Math.floor(Math.random() * 256)) + ', '+ (Math.floor(Math.random() * 256)) + ', '+ (0.6) + ')'}, 2500);
           setInterval(function() {
               $('#zen-intro').animate({backgroundColor:'rgba(' + (Math.floor(Math.random() * 256)) + ', '+ (Math.floor(Math.random() * 256)) + ', '+ (Math.floor(Math.random() * 256)) + ', '+ (0.6) + ')'},7500);
           }, 8000);
        }
      

    
    return{

    };
}  	
]);
