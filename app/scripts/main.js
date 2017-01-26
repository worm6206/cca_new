angular
	.module('app', [
		'ui.router'
	])
	.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
		$urlRouterProvider.otherwise('/');

		$stateProvider
			.state('home',{
				url: '/',
				templateUrl: 'templates/home.html',
			})
// ******************************* ABOUT *************************** //
			.state('mission',{
				url: '/mission',
				templateUrl: 'templates/about/mission.html',
			})
			.state('history',{
				url: '/history',
				templateUrl: 'templates/about/history.html',
			})
			.state('bylaws',{
				url: '/bylaws',
				templateUrl: 'templates/about/bylaws.html',
			})
			.state('rules',{
				url: '/rules',
				templateUrl: 'templates/about/rules.html',
			})
			.state('archives',{
				url: '/archives',
				templateUrl: 'templates/about/archives.html',
			})
// ******************************* COURSES *************************** //
			.state('chinese',{
				url: '/chinese',
				templateUrl: 'templates/courses/chinese.html',
			})
			.state('extra',{
				url: '/extra',
				templateUrl: 'templates/courses/extra.html',
			})
			.state('teachers',{
				url: '/teachers',
				templateUrl: 'templates/courses/teachers.html',
			})
			.state('classrooms',{
				url: '/classrooms',
				templateUrl: 'templates/courses/classrooms.html',
			})
			.state('calendar',{
				url: '/calendar',
				templateUrl: 'templates/courses/calendar.html',
			})
// ******************************* GALLERY *************************** //
			.state('gallery',{
				url: '/gallery',
				templateUrl: 'templates/gallery/2016newyear.html',
			})
// ******************************* ACTIVITIES *************************** //
			.state('summercamp2016',{
				url: '/summercamp2016',
				templateUrl: 'templates/activity/summercamp2016.html',
			})
			.state('FASCA',{
				url: '/FASCA',
				templateUrl: 'templates/activity/FASCA.html',
			})
// ******************************* REGISTRATION *************************** //
			.state('reg',{
				url: '/reg',
				templateUrl: 'templates/registration/reg.html',
			})
			.state('chinese_reg',{
				url: '/chinese_reg',
				templateUrl: 'templates/registration/chinese_reg.html',
			})
			.state('extra_reg',{
				url: '/extra_reg',
				templateUrl: 'templates/registration/extra_reg.html',
			})
	}])
	.run(['$rootScope', '$location', '$window', function($rootScope, $location, $window){
	     $rootScope
	        .$on('$stateChangeSuccess',
	            function(event){
	 
	                if (!$window.ga)
	                    return;
	 
	                $window.ga('send', 'pageview', { page: $location.path() });
	        });
	}]);
  