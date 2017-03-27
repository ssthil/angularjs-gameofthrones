var app = angular.module('app', []);

app.controller('MainController', ['$scope', '$http', // <- added quotes
    function($scope, $http) {
        // order by options
        $scope.options = ['name', 'gender'];
        //$scope.alphabetic = ['All', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
        $scope.title;
        $scope.characters = [];
        $http.get("http://www.anapioficeandfire.com/api/books")
            .then(function(response) {
                $scope.title = response.data[0].name;
                angular.forEach(response.data[0].characters, function(value, key) {
                    $http.get(response.data[0].characters[key])
                        .then(function(result) {
                            $scope.characters.push({
                                "name": result.data.name,
                                //"playedBy": result.data.playedBy,
                                "gender": result.data.gender
                            });
                        });
                });
            });


    }
]);