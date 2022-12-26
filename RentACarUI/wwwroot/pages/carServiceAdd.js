var app = angular.module('carserviseaddapp', []);

app.controller("carServiceAddController", function ($scope, $http) {

   


    $scope.CarServiceAdd = function () {
        $http({
            method: "POST",
            headers: { "Contet-Type": "Application/json;charset=utf-8" },
            url: "https://localhost:44369/Api/CarService/CarServiceAdd",
            data: $scope.carService
        }).then(function (d) {
            alert(d.data.message[0]);
        }, function (d) {
            alert(d.data.errors.Comment[0]);
        });           
        
    }

})