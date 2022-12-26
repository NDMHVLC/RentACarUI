var app = angular.module('reservationupdateapp', []);

app.controller("reservationUpdateController", function ($scope, $http) {
     
    angular.element(document).ready(function () {
        $scope.CarList();
        $scope.ReservationGet(); 
    });

    $scope.GetUrlParameter = function (parmeterName) {
        const url = location.search;
        const urlParams = new URLSearchParams(url);
        const result = urlParams.get(parmeterName);
        if (result == null) {
            return "";
        } else {
            return result;
        }
    }

    $scope.CarList = function () {
        $http({
            method: "POST",
            headers: { "Contet-Type": "Application/json;charset=utf-8" },
            url: "https://localhost:44369/Api/Car/CarList",
        }).then(function (d) {
            $scope.CarList = d.data.data;
        });
    }

    $scope.ReservationGet = function () {
        $http({
            method: "POST",
            headers: { "Contet-Type": "Application/json;charset=utf-8" },
            url: "https://localhost:44369/Api/Reservation/ReservationGet",
            data: {
                id: $scope.GetUrlParameter("Id")
            }
        }).then(function (d) {
            $scope.reservation = d.data.data;
        }, function (d) {
            alert(d.data.errors.Content[0]);
        });

    }

    $scope.ReservationUpdate = function () {
        $http({
            method: "POST",
            headers: { "Contet-Type": "Application/json;charset=utf-8" },
            url: "https://localhost:44369/Api/Reservation/ReservationUpdate",
            data: $scope.reservation
        }).then(function (d) {
            alert(d.data.message[0]);          
        }, function (d) {
            alert(d.data.errors.Content[0]);
        });           
        
    }

    

})