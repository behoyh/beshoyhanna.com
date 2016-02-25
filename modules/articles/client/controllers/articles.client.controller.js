'use strict';

// Articles controller
angular.module('articles').controller('ArticlesController', ['$scope', '$filter', '$stateParams', '$location', 'Authentication', 'Articles',
  function ($scope, $filter, $stateParams, $location, Authentication, Articles) {
    $scope.authentication = Authentication;

    // Create new Article
    $scope.create = function (isValid) {
      $scope.error = null;

      if (!isValid) {
        $scope.$broadcast('show-errors-check-validity', 'articleForm');

        return false;
      }

      // Create new Article object
      var article = new Articles.Articles({
        title: this.title,
        content: this.content
      });

      // Redirect after save
      article.$save(function (response) {
        $location.path('articles/' + response._id);

        // Clear form fields
        $scope.title = '';
        $scope.content = '';
      }, function (errorResponse) {
        $scope.error = errorResponse.data.message;
      });
    };

    // Remove existing Article
    $scope.remove = function (article) {
      if (article) {
        article.$remove();

        for (var i in $scope.articles) {
          if ($scope.articles[i] === article) {
            $scope.articles.splice(i, 1);
          }
        }
      } else {
        $scope.article.$remove(function () {
          $location.path('articles');
        });
      }
    };

    // Update existing Article
    $scope.update = function (isValid) {
      $scope.error = null;

      if (!isValid) {
        $scope.$broadcast('show-errors-check-validity', 'articleForm');

        return false;
      }

      var article = $scope.article;

      article.$update(function () {
        $location.path('articles/' + article._id);
      }, function (errorResponse) {
        $scope.error = errorResponse.data.message;
      });
    };

    // Find a list of Articles
    $scope.find = function () {
      $scope.articles = Articles.Articles.query();
    };

    // Find existing Article
    $scope.findOne = function () {
      $scope.article = Articles.Articles.get({
        articleId: $stateParams.articleId
      });
    };
  }
]).controller('CommentsController', ['$scope', '$stateParams', '$location', 'Authentication', 'Articles',
  function ($scope, $stateParams, $location, Authentication, Articles) {
    $scope.authentication = Authentication;

   $scope.count = 0;
    $scope.getCount = function(articleid)
    {
      Articles.Comments.query(function (response) {
        angular.forEach(response, function (item) {
          if(item.articleid == articleid)
          {
            $scope.count = $scope.count + 1;
          }
        })
      });

    }

    // Create new Comment
    $scope.create = function (isValid) {
      $scope.error = null;

      if (!isValid) {
        $scope.$broadcast('show-errors-check-validity', 'commentForm');

        return false;
      }
    
      // Create new Article object
      var comment = new Articles.Comments({
        comment: this.comment,
        articleid: $stateParams.articleId
      });

      // Redirect after save
      comment.$save(function (response) {
        location.reload();
        $scope.content = '';
      }, function (errorResponse) {
        $scope.error = errorResponse.data.message;
      });
    
    }

$scope.comments= [];
    // Find existing Comment
    $scope.find = function () {
      $scope.allComments = Articles.Comments.query(function (response) {
        angular.forEach(response, function (item) {
          if(item.articleid == $stateParams.articleId)
          {
            $scope.comments.push(item);
          }
        })
      });
    };
}
]).directive('comments', ['$rootScope','$stateParams', '$location', 'Articles',
  function ($rootScope, $stateParams, $location, Articles) {
  if ($stateParams.articleId != null){
    
   return{
    scope: true,
    template: '<blockquote class="ng-scope" style="padding: 10px; margin-bottom: 15px; border: solid thin #eee; border-left:5px solid #5bc0de;" ng-repeat="comment in comments"><p class="ng-binding" style="padding-bottom: 10px; margin-left: 5px;"> {{comment.comment}} </p><footer class="ng-binding" style="margin-left: 15px;"> {{comment.user.displayName}} </footer><p class="text-muted ng-binding" style="margin-left: 5px;">{{comment.created | date:"mediumDate"}}</p></blockquote>'
   };
  }
 }
]);


