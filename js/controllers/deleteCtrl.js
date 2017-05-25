myApp.controller('deleteCtrl', function($scope, $localStorage, $routeParams, $location) {
    $scope.ads = $localStorage.ads;
    $scope.ads.splice(+$routeParams.id, 1);
    $localStorage.ads = $scope.ads;
    $location.path('/')
});