var app = angular.module('app', []);

app.controller('MainController', ['$scope', '$http', // <- added quotes
    function($scope, $http) {
        // $scope.shows = [{
        //         title: 'Game of Thrones',
        //         favorite: true
        //     }
        // ];
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