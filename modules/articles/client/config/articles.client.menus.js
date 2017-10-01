(function () {
  'use strict';

  angular
    .module('articles')
    .run(menuConfig);

  menuConfig.$inject = ['menuService'];

  function menuConfig(menuService) {
    menuService.addMenuItem('topbar', {
      title: 'Articles',
      state: 'articles',
      type: 'dropdown',
      roles: ['*']
    });

    // Add the dropdown list items
    menuService.addSubMenuItem('topbar', 'articles', {
      title: 'All Articles',
      state: 'articles.list',
      roles: ['*']
    });
    menuService.addSubMenuItem('topbar', 'articles', {
      title: 'About Me',
      state: 'articles.aboutme',
      roles: ['*']
    });
  }
}());
