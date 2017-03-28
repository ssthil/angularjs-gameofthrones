var app = angular.module('app', ['ui.bootstrap']);

app.controller('MainController', ['$scope', '$http', '$modal', // <- added quotes
    function($scope, $http, $modal) {
        // order by options
        $scope.options = ['name', 'gender'];
        //$scope.alphabetic = ['All', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
        $scope.title;
        $scope.charecterTitles = [];
        $scope.characters = [];
        $http.get("http://www.anapioficeandfire.com/api/books")
            .then(function(response) {
                $scope.title = response.data[0].name;
                angular.forEach(response.data[0].characters, function(value, key) {
                    $http.get(response.data[0].characters[key])
                        .then(function(result) {

                            $scope.characters.push({
                                "name": result.data.name,
                                "gender": result.data.gender,
                                "titles": result.data.titles,
                                "tvSeries": result.data.tvSeries
                            });
                        });
                });
            });

        $scope.showTitles = function(character) {
            var modalInstance = $modal.open({
                templateUrl: 'modalTitles.html',
                controller: 'ModalDialogController',
                resolve: {
                    characters: function() {
                        return character;
                    }
                }
            });
        }

        $scope.showTvSeries = function(character) {
            var modalInstance = $modal.open({
                templateUrl: 'modalTvSeries.html',
                controller: 'ModalDialogController',
                resolve: {
                    characters: function() {
                        return character;
                    }
                }
            });
        }
    }
]);

app.controller("ModalDialogController", function($scope, $modalInstance, characters) {
    $scope.character = characters;
    $scope.cancel = function() {
        $modalInstance.close();
    };
});