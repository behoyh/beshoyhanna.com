'use strict';

// Setting up route
angular.module('articles').config(['$httpProvider', '$stateProvider',
  function ($httpProvider, $stateProvider) {
    // Articles state routing
    $stateProvider
      .state('articles', {
        abstract: true,
        url: '/articles',
        template: '<ui-view/>'
      })
      .state('articles.list', {
        url: '',
        templateUrl: 'modules/articles/client/views/list-articles.client.view.html'
      })
      .state('articles.aboutme', {
        url: '/aboutme',
        templateUrl: 'modules/articles/client/views/aboutme-articles.client.view.html'
      })
      .state('articles.create', {
        url: '/create',
        templateUrl: 'modules/articles/client/views/create-article.client.view.html',
        data: {
          roles: ['user', 'admin']
        }
      })
      .state('articles.view', {
        url: '/:articleId',
        templateUrl: 'modules/articles/client/views/view-article.client.view.html'
      })
      .state('articles.edit', {
        url: '/:articleId/edit',
        templateUrl: 'modules/articles/client/views/edit-article.client.view.html',
        data: {
          roles: ['user', 'admin']
        }
      });
      if (!$httpProvider.defaults.headers.get)
      {
        $httpProvider.defaults.headers.get = {};
      }
      $httpProvider.defaults.headers.get['If-Modified-Since'] = 'Sun, 30 May 1993 12:12:12 GMT';
      $httpProvider.defaults.headers.get['Cache-Control'] = 'no-cache';  
      $httpProvider.defaults.headers.get['Pragma'] = 'no-cache';  

  }
]);
