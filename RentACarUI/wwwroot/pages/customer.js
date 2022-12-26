var app = angular.module('customerapp', []);

app.controller("customerController", function ($scope, $http) {




    $scope.GetCustomerList = function () {
        $http({
            method: "POST",
            headers: { "Contet-Type": "Application/json;charset=utf-8" },
            url: "https://localhost:44369/Api/Customer/CustomerList"
        }).then(function (d) {
            $scope.CustomerList = d.data.data
            angular.element(document).ready(function () {
                $("#dtReservation").DataTable();
            });

        });
    }
    $scope.GetCustomerList();


    $scope.CustomerDelete = function (id) {
        $http({
            method: "POST",
            headers: { "Contet-Type": "Application/json;charset=utf-8" },
            url: "https://localhost:44369/Api/Customer/CustomerDelete",
            data: { id:id }
        }).then(function (d) {
            alert(d.data.message[0]);
            $scope.GetCustomerList();
        }, function (d) {
            alert(d.data.errors.Comment[0]);
        });  

    }

});