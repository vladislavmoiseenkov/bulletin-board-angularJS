myApp.controller('editAdCtrl', function ($scope, $localStorage, $routeParams, $location) {
    if (!$localStorage.user) {
        $location.path('/');
        alert('Для доступа необходима авторизация!');
    }

    $scope.ads = $localStorage.ads;

    $scope.data = {
        title: $scope.ads[$routeParams.id].title,
        descriptionAd: $scope.ads[$routeParams.id].description
    };

    $scope.Save = function () {

        if($scope.data.title === undefined || $scope.data.descriptionAd === undefined
            || $scope.data.title === '' || $scope.data.descriptionAd === '') {
            alert('Заполните поля!')
        } else {
            $scope.ads[$routeParams.id].title = $scope.data.title;
            $scope.ads[$routeParams.id].description = $scope.data.descriptionAd;

            $localStorage.ads = $scope.ads;
            $location.path('/ad/' + $routeParams.id);
        }
    }
});