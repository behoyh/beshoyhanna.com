'use strict';

angular.module('core').controller('HomeController', ['$scope', 'Authentication',
  function ($scope, Authentication) {
    // This provides Authentication context.
    $scope.authentication = Authentication;
  }
])
.directive('colorSwap', ['$animate','Authentication', function ($animate, Authentication) {
    return{
    link: function($scope) {
	$scope.randomColor = 'rgba(' + (Math.floor(Math.random() * 256)) + ', '+ (Math.floor(Math.random() * 256)) + ', '+ (Math.floor(Math.random() * 256)) + ', '+ (0.6) + ')';


        if ($('#zen-intro') !== null) {
          $('#zen-intro').animate({backgroundColor: "'" + $scope.randomColor + "'"}, 2500);
           setInterval(function() {
	       $scope.randomColor = 'rgba(' + (Math.floor(Math.random() * 256)) + ', '+ (Math.floor(Math.random() * 256)) + ', '+ (Math.floor(Math.random() * 256)) + ', '+ (0.6) + ')';

               $('#zen-intro').animate({backgroundColor: "'" + $scope.randomColor + "'"},7500);
           }, 8000);
        }
	}
    };
}  	
]);
