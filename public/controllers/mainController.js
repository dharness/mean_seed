myapp.controller('mainController', function($scope) {

    console.log('in main controller');

    //adds the img src
    $scope.revealseed = function() {

        $scope.image = {
            src: "./images/seed.png"
        };
    }



});