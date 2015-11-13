let config = function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');
  
  $stateProvider
    .state('root', {
      abstract: true,
      controller: ['$scope', function ($scope) {
        $scope.siteTitle = 'PromptLy';
      }],
      templateUrl: 'templates/layout.tpl.html'
    })
    .state('root.library', {
      url: '/',
      controller: 'LibraryController',
      templateUrl: 'templates/library.tpl.html'
    })
    .state('root.about', {
      url: '/about',
      controller: 'AboutController',
      templateUrl: 'templates/about.tpl.html'
    })
    .state('root.contact', {
      url: '/contact',
      controller: 'ContactController',
      templateUrl: 'templates/contact.tpl.html'
    })
    .state('root.read', {
      url: '/read/:promptlyId',     
      controller: 'ReadController',
      templateUrl: 'templates/read.tpl.html'
    })
    .state('root.write', {
      url: '/write',      
      controller: 'WriteController',
      templateUrl: 'templates/write.tpl.html'
    })
    .state('root.revise', {
      url: '/revise/:promptlyId',      
      controller: 'ReviseController',
      templateUrl: 'templates/revise.tpl.html'
    });    

};

config.$inject = ['$stateProvider', '$urlRouterProvider'];

export default config;