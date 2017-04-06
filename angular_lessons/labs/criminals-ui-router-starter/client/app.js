const angular = require('angular');
require('angular-ui-router');

angular
  .module('criminals', ['ui.router'])
  .config(uiRouterSetup);


uiRouterSetup.$inject = ['$stateProvider', '$urlRouterProvider'];
function uiRouterSetup($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      // template: '<home></home>'
      template: '<home></home>'
    })
    .state('about', {
      url: '/about',
      template: '<about></about>'
      // template: '<h1>About</h1>'
    })
    .state('criminals', {
      url:'/criminals',
      template: '<criminals></criminals>'
    })
    // .state('criminalsNew', {
    //   url: '/criminals/new',
    //   template: '<criminals-new></criminals-new>'
    // })
    .state('criminalsShow', {
      url: '/criminals/:criminalId',
      template: '<criminals-show></criminals-show>'
    });
  $urlRouterProvider.otherwise('/');
}
