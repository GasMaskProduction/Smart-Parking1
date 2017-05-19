angular.module('starter',['ionic','starter.controllers'])
.config(function($stateProvider,$urlRouterProvider)
{$stateProvider
.state('register',{
  url: '/register',
  templateUrl: 'templates/register.html'
    })
.state('login',{
    url: '/login',
    templateUrl: 'templates/login.html'
      })
.state('app',{url:'/app',abstract:true,
templateUrl:'templates/menu.html'})
.state('app.search',
	{url:'/search',views:{'menuContent':
	{templateUrl:'templates/search.html'
	,controller:'Search'}}})	
.state('app.setting',
	{url:'/setting',views:{'menuContent':
	{templateUrl:'templates/setting.html'
	,controller:'Setting'}}})	
.state('map',{
    url: '/map',
    templateUrl: 'templates/map.html'
      })

.state('app.playlist',{url:'/playlist',views:{'menuContent':{templateUrl:'templates/playlist.html',controller:'Search'}}})

.state('app.music',{url:'/music',views:{'menuContent':{templateUrl:'templates/music.html',controller:'TodoController'}}})

$urlRouterProvider.otherwise('/login'); });
