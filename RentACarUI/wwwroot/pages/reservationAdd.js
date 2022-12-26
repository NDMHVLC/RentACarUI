var app = angular.module('reservationaddapp', []);

app.controller("reservationAddController", function ($scope, $http) {

    angular.element(document).ready(function () {
        $scope.CarList();
       /* $scope.ReservationGet();  */ 

    });

    //$scope.GetUrlParameter = function (parmeterName) {
    //    const url = window.location.search;
    //    const urlParams = new URLSearchParams(url);
    //    const result = urlParams.get(parmeterName);
    //    if (result == null) {
    //        return "";
    //    } else {
    //        return result;
    //    }
    //}


    $scope.CarList = function () {
        $http({
            method: "POST",
            headers: { "Contet-Type": "Application/json;charset=utf-8" },
            url: "https://localhost:44369/Api/Car/CarList",
        }).then(function (d) {
            $scope.CarList = d.data.data;
        });
    }


    $scope.ReservationAdd = function () {
        $http({
            method: "POST",
            headers: { "Contet-Type": "Application/json;charset=utf-8" },
            url: "https://localhost:44369/Api/Reservation/ReservationAdd",
            data: $scope.reservation
        }).then(function (d) {
            alert(d.data.message[0]);
        }, function (d) {
            alert(d.data.errors.Comment[0]);
        });           
        
    }
})