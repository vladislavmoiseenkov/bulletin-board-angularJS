myApp.controller('editCtrl', function ($scope, $localStorage, $location) {

    $scope.ads = $localStorage.ads || [];

    $scope.data = {
        title: '',
        description: ''
    };

    if (!$localStorage.user) {
        $location.path('/');
        alert('Для доступа необходима авторизация!');
    }

    $scope.AddNew_Ad = function () {
        if($scope.data.title === undefined || $scope.data.description === undefined
            || $scope.data.title === '' || $scope.data.description  === '') {

            alert("Заполните поля!");
        } else {

            $scope.ads.push({
                title: $scope.data.title,
                description: $scope.data.description,
                author: $localStorage.user.login,
                time: new Date()
            });

            $localStorage.ads = $scope.ads;

            var newAd = $scope.ads.length - 1;

            $location.path('/ad/' + newAd);
        }
    };
});