angular.module('tutorialCtrlModule', [])
.controller("TutorialCtrl", ["$scope", function($scope) {
    $scope.tutorialObject = {};
    $scope.tutorialObject.title = 'Angular Tutorial';
    $scope.tutorialObject.bindOutput = 2;
    $scope.timesTwo = function() {
        $scope.tutorialObject.bindOutput *= 2;
    }
}]);