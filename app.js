var app = angular.module('app', ['ui.bootstrap']);

app.controller('MainController', ['$scope', '$http', '$modal', // <- added quotes
    function($scope, $http, $modal) {
        // order by options
        $scope.options = ['name', 'gender'];
        //$scope.alphabetic = ['All', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
        $scope.title;
        $scope.charecterTitles = [];
        $scope.characters = [];

        var fetchCharacterDetails = function(response) {
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
        };

        var errorWhileFetch = function(reason) {
            $scope.error = "Could not fetch the required data" + reason;
        }

        var bookUrl = "https://www.anapioficeandfire.com/api/books";

        $http.get(bookUrl).then(fetchCharacterDetails, errorWhileFetch);

        //html files for display Titles and TV Series
        $scope.templateUrls = {
            templateUrlTitle: "modalTitles.html",
            templateUrlTvSeries: "modalTvSeries.html",
        }
        $scope.modalDialogController = "ModalDialogController";
        //modal window for display Titles and TV Series
        $scope.showModalWindow = function(character, htmlUrl) {
            var modalInstance = $modal.open({
                templateUrl: htmlUrl,
                controller: $scope.modalDialogController,
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