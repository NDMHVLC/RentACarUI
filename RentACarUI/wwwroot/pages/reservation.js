var app = angular.module('reservationapp', []);

app.controller("reservationController", function ($scope, $http) {




    $scope.GetReservationList = function () {
        $http({
            method: "POST",
            headers: { "Contet-Type": "Application/json;charset=utf-8" },
            url: "https://localhost:44369/Api/Reservation/ReservationList"
        }).then(function (d) {
            $scope.ReservationList = d.data.data
            angular.element(document).ready(function () {
                $("#dtReservation").DataTable();
            });

        });
    }
    $scope.GetReservationList();


    $scope.ReservationDelete = function (id) {
        $http({
            method: "POST",
            headers: { "Contet-Type": "Application/json;charset=utf-8" },
            url: "https://localhost:44369/Api/Reservation/ReservationDelete",
            data: { id:id }
        }).then(function (d) {
            alert(d.data.message[0]);
            $scope.GetReservationList();
        }, function (d) {
            alert(d.data.errors.Comment[0]);
        });  

    }

});