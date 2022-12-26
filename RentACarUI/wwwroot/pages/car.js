var app = angular.module('carapp', []);

app.controller("carController", function ($scope, $http) {




    $scope.GetCarList = function () {
        $http({
            method: "POST",
            headers: { "Contet-Type": "Application/json;charset=utf-8" },
            url: "https://localhost:44369/Api/Car/CarList"
        }).then(function (d) {
            $scope.CarList = d.data.data
            angular.element(document).ready(function () {
                $("#dtCar").DataTable();
            });

        });
    }
    $scope.GetCarList();


    $scope.CarDelete = function (id) {
        $http({
            method: "POST",
            headers: { "Contet-Type": "Application/json;charset=utf-8" },
            url: "https://localhost:44369/Api/Car/CarDelete",
            data: { id:id }
        }).then(function (d) {
            alert(d.data.message[0]);
            $scope.GetCarList();
        }, function (d) {
            alert(d.data.errors.Comment[0]);
        });  

    }

});