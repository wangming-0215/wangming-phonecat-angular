"use strict";

angular.module('phoneDetail').component('phoneDetail', {
    templateUrl: 'phone-detail/phone-detail.template.html',
    controller: ['$http', '$routeParams', '$scope', function PhoneDetailController($http, $routeParams, $scope) {
        $http.get('phones/' + $routeParams.phoneId + '.json').then(function(response) {
            $scope.phone = response.data;
        });

        $scope.setImageUrl = function(imageUrl) {
            $scope.mainImgaeUrl = imageUrl;
        };


    }]
});