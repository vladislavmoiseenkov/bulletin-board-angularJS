myApp.controller('signInCtrl', function ($scope, $localStorage) {

    $scope.signIn = function () {

        if($scope.login === undefined || $scope.password === undefined || $scope.login === "" || $scope.password === "") {
            alert("Поля авторизации не должны быть пустыми!!!")
        } else {
            checkAuthForm($scope.login, $scope.password, $localStorage.users);
        }
    };

    function checkAuthForm(login, password, database) {
        var checkLogIndex = checkLogin(login, database);

        if (checkLogIndex !== false) {
            if (checkPassword(password, database, checkLogIndex) ) {
                $localStorage.user = database[checkLogIndex];
            } else {
                alert('Неправильный пароль!');
            }
        } else {
            $localStorage.user = addNewUser($scope.login, $scope.password);
        }
    }

    function checkLogin(log, dateLog) {
        for(var i = 0; i < dateLog.length; i++) {
            if (log === dateLog[i].login) {
                return i;
            }
        }
        return false;
    }

    function checkPassword(pass, datePass, index) {
        return (pass === datePass[index].password);
    }

    function addNewUser(login, password) {
        var newUser = {
            login: login,
            password: password
        };

        alert('Доблавлен новый пользователь!');

        $localStorage.users.push(newUser);

        return newUser;
    }
});