myApp.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'view/main.html',
            controller: 'mainCtrl'
        })
        .when('/edit', {
            templateUrl: 'view/edit.html',
            controller: 'editCtrl'
        })
        .when('/edit/:id', {
            templateUrl: 'view/editAd.html',
            controller: 'editAdCtrl'
        })
        .when('/ad/:id', {
            templateUrl: 'view/ad.html',
            controller: 'adCtrl'
        })
        .when('/delete/:id', {
            template: '',
            controller: 'deleteCtrl'
        })
        .when('/logout', {
            template: '',
            controller: ['$localStorage', '$location', function ($localStorage, $location) {
                $localStorage.user = null;

                $location.path('#!/');
            }]
        })
        .otherwise({
            redirectTo: '/'
        });

});