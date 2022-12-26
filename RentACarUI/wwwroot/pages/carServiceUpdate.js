var app = angular.module('carserviseupdateapp', []);

app.controller("carServiceUpdateController", function ($scope, $http) {

   

    angular.element(document).ready(function () {
        $scope.CarServiceGet();
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

    $scope.CarServiceGet = function () {
        $http({
            method: "POST",
            headers: { "Contet-Type": "Application/json;charset=utf-8" },
            url: "https://localhost:44369/Api/CarService/CarServiceGet",
            data: {
                id: $scope.GetUrlParameter("Id")
            }
        }).then(function (d) {
            $scope.carService = d.data.data;
        }, function (d) {
            alert(d.data.errors.Content[0]);
        });

    }

    $scope.CarServiceUpdate = function () {
        $http({
            method: "POST",
            headers: { "Contet-Type": "Application/json;charset=utf-8" },
            url: "https://localhost:44369/Api/CarService/CarServiceUpdate",
            data: $scope.carService
        }).then(function (d) {
            alert(d.data.message[0]);
        }, function (d) {
            alert(d.data.errors.Content[0]);
        });           
        
    }

})