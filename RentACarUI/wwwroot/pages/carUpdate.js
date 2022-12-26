var app = angular.module('carupdateapp', []);

app.controller("carUpdateController", function ($scope, $http) {   

    angular.element(document).ready(function () {
        $scope.CarServiceList();
        $scope.CarGet();
    });

    $scope.GetUrlParameter = function (parmeterName) {
        const url = window.location.search;
        const urlParams = new URLSearchParams(url);
        const result = urlParams.get(parmeterName);
        if (result == null) {
            return "";
        } else {
            return result;
        }
    }

    $scope.CarGet = function () {
        $http({
            method: "POST",
            headers: { "Contet-Type": "Application/json;charset=utf-8" },
            url: "https://localhost:44369/Api/Car/CarGetList",
            data: {
                id: $scope.GetUrlParameter("Id")
            }
        }).then(function (d) {
            $scope.car = d.data.data;
        }, function (d) {
            alert(d.data.errors.Content[0]);
        });

    }

    $scope.CarServiceList = function () {
        $http({
            method: "POST",
            headers: { "Contet-Type": "Application/json;charset=utf-8" },
            url: "https://localhost:44369/Api/CarService/CarServiceList",
        }).then(function (d) {
            $scope.CarServiceList = d.data.data;
        });
    }

    $scope.CarUpdate = function () {
        $http({
            method: "POST",
            headers: { "Contet-Type": "Application/json;charset=utf-8" },
            url: "https://localhost:44369/Api/Car/CarUpdate",
            data: $scope.car
        }).then(function (d) {
            alert(d.data.message[0]);
        }, function (d) {
            alert(d.data.errors.Content[0]);
        });           
        
    }

})