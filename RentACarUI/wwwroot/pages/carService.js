var app = angular.module('carserviseapp', []);

app.controller("carserviceController", function ($scope, $http) {




    $scope.GetCarServiceList = function () {
        $http({
            method: "POST",
            headers: { "Contet-Type": "Application/json;charset=utf-8" },
            url: "https://localhost:44369/Api/CarService/CarServiceList"
        }).then(function (d) {
            $scope.CarServiceList = d.data.data
            angular.element(document).ready(function () {
                $("#dtCarService").DataTable();
            });

        });
    }

    $scope.GetCarServiceList();

    $scope.CarServiceDelete = function (id) {
        $http({
            method: "POST",
            headers: { "Contet-Type": "Application/json;charset=utf-8" },
            url: "https://localhost:44369/Api/CarService/CarServiceDelete",
            data: { id:id }
        }).then(function (d) {
            alert(d.data.message[0]);
            $scope.GetCarServiceList();
        }, function (d) {
            alert(d.data.errors.Comment[0]);
        });  

    }

});