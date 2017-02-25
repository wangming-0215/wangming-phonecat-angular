"use strict";

angular
    .module('phoneList')
    .component('phoneList', {
        templateUrl: 'phone-list/phone-list.template.html',
        controller: ['$http', '$scope', 'shareDataService', function PhoneListController($http, $scope, shareDataService) {
            $scope.orderProp = 'default';

            $scope.changeOrderProp = function(orderProp) {
                if (!orderProp) return;
                $scope.orderProp = orderProp;
            };

            shareDataService.subscribe('query', function() {
                if (!shareDataService.data.query) return;
                var query = shareDataService.data.query;
                $scope.query = query;
            });

            $http.get('phones/phones.json').then(function(response) {
                $scope.phones = response.data;
            });
        }]
    });