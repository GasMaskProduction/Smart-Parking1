(function () {
    'use strict';

    angular
        .module('stater', ['ngRoute', 'ngCookies'])
        .config(config)
        .run(run);

    config.$inject = ['$routeProvider', '$locationProvider'];
    function config($routeProvider, $locationProvider) {
        $routeProvider
            .when('app.search',
              {url:'/search',views:{'menuContent':{
              controller: 'HomeController',
              templateUrl:'templates/search.html', 
              controllerAs: 'vm'}}})

            .when('login',{
              controller: 'LoginController',
              url: '/login',
              templateUrl: 'templates/login.html',
              controllerAs: 'vm'
            })

            .when('register',{
              controller: 'RegisterController',
              url: '/register',
              templateUrl: 'templates/register.html',
              controllerAs: 'vm'
                })

            .otherwise({ redirectTo: 'app/login' });
    }

    run.$inject = ['$rootScope', '$location', '$cookies', '$http'];
    function run($rootScope, $location, $cookies, $http) {
        // keep user logged in after page refresh
        $rootScope.globals = $cookies.getObject('globals') || {};
        if ($rootScope.globals.currentUser) {
            $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata;
        }

        $rootScope.$on('$locationChangeStart', function (event, next, current) {
            // redirect to login page if not logged in and trying to access a restricted page
            var restrictedPage = $.inArray($location.path(), ['/login', '/register']) === -1;
            var loggedIn = $rootScope.globals.currentUser;
            if (restrictedPage && !loggedIn) {
                $location.path('/login');
            }
        });
    }

})(); 