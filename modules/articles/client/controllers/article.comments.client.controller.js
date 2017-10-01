(function () {
  'use strict';

  angular
    .module('comments')
    .controller('CommentsController', CommentsController);

  CommentsController.$inject = ['$scope', 'articleResolve', 'Authentication'];

  function CommentsController($scope, article, Authentication) {
    var vm = this;

    vm.article = article;
    vm.authentication = Authentication;

  }
}());
