var app = angular.module('customerupdateapp', []);

app.controller("customerUpdateController", function ($scope, $http) {
     
    angular.element(document).ready(function () {
        $scope.ReservationList();
        $scope.CustomerGet(); 
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

    $scope.ReservationList = function () {
        $http({
            method: "POST",
            headers: { "Contet-Type": "Application/json;charset=utf-8" },
            url: "https://localhost:44369/Api/Reservation/ReservationList",
        }).then(function (d) {
            $scope.ReservationList = d.data.data;
        });
    }

    $scope.CustomerGet = function () {
        $http({
            method: "POST",
            headers: { "Contet-Type": "Application/json;charset=utf-8" },
            url: "https://localhost:44369/Api/Customer/CustomerGetList",
            data: {
                id: $scope.GetUrlParameter("Id")
            }
        }).then(function (d) {
            $scope.customer = d.data.data;
        }, function (d) {
            alert(d.data.errors.Content[0]);
        });

    }

    $scope.CustomerUpdate = function () {
        $http({
            method: "POST",
            headers: { "Contet-Type": "Application/json;charset=utf-8" },
            url: "https://localhost:44369/Api/Customer/CustomerUpdate",
            data: $scope.customer
        }).then(function (d) {
            alert(d.data.message[0]);          
        }, function (d) {
            alert(d.data.errors.Content[0]);
        });           
        
    }

    

})