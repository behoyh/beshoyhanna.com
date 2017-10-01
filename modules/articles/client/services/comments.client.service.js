(function () {
    'use strict';
  
    angular
      .module('comments.services')
      .factory('CommentsService', CommentsService);
  
    CommentsService.$inject = ['$resource', '$log'];
  
    function CommentsService($resource, $log) {
      var Article = $resource('/api/articles/:articleId', {
        articleId: '@_id'
      });
      
      var comment =  

      angular.extend(Comment.prototype, {
        createOrUpdate: function () {
          var comment = this;
          return createOrUpdate(comment);
        }
      });
  
      return Comment;
  
      function createOrUpdate(article) {
        if (article._id) {
          return article.$update(onSuccess, onError);
        } else {
          return article.$save(onSuccess, onError);
        }
  
        // Handle successful response
        function onSuccess(article) {
          // Any required internal processing from inside the service, goes here.
        }
  
        // Handle error response
        function onError(errorResponse) {
          var error = errorResponse.data;
          // Handle error internally
          handleError(error);
        }
      }
  
      function handleError(error) {
        // Log error
        $log.error(error);
      }
    }
  }());
  