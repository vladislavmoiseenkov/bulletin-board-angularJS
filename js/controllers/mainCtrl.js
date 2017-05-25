myApp.controller('mainCtrl', function ($scope, $localStorage) {
    $scope.totalItems = $localStorage.ads.length;
    $scope.itemsPerPage = 5;
    $scope.currentPage = 1;
});