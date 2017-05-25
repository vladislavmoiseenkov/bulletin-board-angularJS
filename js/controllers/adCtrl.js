myApp.controller('adCtrl', function ($scope, $localStorage, $routeParams) {

    $scope.index = +$routeParams.id;

    $scope.vm = {
        title: $localStorage.ads[+$routeParams.id].title,
        description: $localStorage.ads[+$routeParams.id].description,
        author: $localStorage.ads[+$routeParams.id].author,
        time: $localStorage.ads[+$routeParams.id].time
    }
});