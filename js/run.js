myApp.run(function($rootScope, $localStorage) {
    $rootScope.$storage = $localStorage;
    $rootScope.$storage.ads = $rootScope.$storage.ads || [];
    $rootScope.$storage.users = $rootScope.$storage.users || [];
});