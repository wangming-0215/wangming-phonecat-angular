"use strict";

angular
    .module('navgation')
    .component('navgation', {
        templateUrl: 'common/navgation/navgation.template.html',
        controller: ['shareDataService', '$scope', function NavgationController(shareDataService, $scope) {
            $scope.$watch('query', function(newVal, oldVal) {
                if (newVal === oldVal) return;
                shareDataService.data.query = newVal;
                shareDataService.publish('query', $scope.query);
            });
        }]
    });