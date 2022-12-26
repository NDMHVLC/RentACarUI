var app = angular.module('caraddapp', []);

app.controller("carAddController", function ($scope, $http) {

    angular.element(document).ready(function () {
        $scope.CarServiceList();
    });

    


    $scope.CarServiceList = function () {
        $http({
            method: "POST",
            headers: { "Contet-Type": "Application/json;charset=utf-8" },
            url: "https://localhost:44369/Api/CarService/CarServiceList",
        }).then(function (d) {
            $scope.CarServiceList = d.data.data;
        });
    }


    $scope.CarAdd = function () {
        $http({
            method: "POST",
            headers: { "Contet-Type": "Application/json;charset=utf-8" },
            url: "https://localhost:44369/Api/Car/CarAdd",
            data: $scope.car
        }).then(function (d) {
            alert(d.data.message[0]);
        }, function (d) {
            alert(d.data.errors.Comment[0]);
        });           
        
    }

})