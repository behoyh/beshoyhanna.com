'use strict';


 angular.module("musicplayer").factory('Music', ['$resource', 
 	function ($resource) {
        return $resource('api/musicplayer');
        
 }]).service('Player', ['Music',
	function(Music) {
        this.play = function()
        {
            console.log(Music.query());
        }
 }]).controller("MusicController", ['$scope', 'Player',
    function($scope, Player)
    {
       var musicplayer = document.getElementById('musicplayer');
         var m = Math.floor(Math.random() * 15);
         musicplayer.src = "/music/" + m.toString() + ".mp3";


      $scope.onPlay = function()
      {
        if($scope.isPlaying != true)
        {
         $scope.isPlaying = true;
         musicplayer.play();
         musicplayer.addEventListener('ended',function(){
             var x = Math.floor(Math.random() * 14);
             musicplayer.src = "/music/" + x.toString() + ".mp3";
             musicplayer.play(); 
         });        
       }
       else{
        $scope.isPlaying = false;
         document.getElementById('musicplayer').pause();
       }
      }
    

 }]).directive("musicPlayer", [
       function()
       {
        return{

              };

 }]);