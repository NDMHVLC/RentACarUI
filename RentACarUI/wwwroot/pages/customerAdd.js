var app = angular.module('customeraddapp', []);

app.controller("customerAddController", function ($scope, $http) {

    angular.element(document).ready(function () {
        $scope.ReservationList();

    });


    $scope.ReservationList = function () {
        $http({
            method: "POST",
            headers: { "Contet-Type": "Application/json;charset=utf-8" },
            url: "https://localhost:44369/Api/Reservation/ReservationList",
        }).then(function (d) {
            $scope.ReservationList = d.data.data;
        });
    }


    $scope.CustomerAdd = function () {
        $http({
            method: "POST",
            headers: { "Contet-Type": "Application/json;charset=utf-8" },
            url: "https://localhost:44369/Api/Customer/CustomerAdd",
            data: $scope.customer
        }).then(function (d) {
            alert(d.data.message[0]);
        }, function (d) {
            alert(d.data.errors.Comment[0]);
        });           
        
    }
})