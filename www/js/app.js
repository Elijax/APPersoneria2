// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('APPersoneria', 
['ionic',
'APPersoneria.controllers',
'APPersoneria.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    .state('tab', {
    url: "/tab",
    abstract: true,
    templateUrl: "templates/tabs.html"
  })

  // Each tab has its own nav history stack:

    .state('tab.dash', {
      url: '/dash',
      views: {
        'tab-dash': {
          templateUrl: 'templates/tab-dash.html',
          controller: 'DashCtrl'
        }
      }
    })
    .state('tab.contacto', {
        url: '/contacto',
        views: {
          'tab-contacto': {
            templateUrl: 'templates/tab-contacto.html',
            controller: 'contactoController'
          }
        }
      })
    .state('tab.glosary', {
        url: '/glosary',
        views: {
          'tab-glosary': {
            templateUrl: 'templates/tab-glosary.html',
            controller: 'glosarioController'
          }
        }
      })
    .state('tab.faq', {
      url: '/faq',
      views: {
        'tab-faq': {
          templateUrl: 'templates/tab-faq.html',
          controller: 'faqController'
        }
      }
    });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/dash');

  //http Con

});
