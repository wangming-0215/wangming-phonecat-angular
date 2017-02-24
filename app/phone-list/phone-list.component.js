"use strict";

angular
    .module('phoneList')
    .component('phoneList', {
        templateUrl: 'phone-list/phone-list.template.html',
        controller: ['$http', '$scope', function PhoneListController($http, $scope) {
            $scope.orderProp = 'default';

            $scope.changeOrderProp = function(orderProp) {
                if (!orderProp) return;
                $scope.orderProp = orderProp;
            };

            $http.get('phones/phones.json').then(function(response) {
                $scope.phones = response.data;
            });
        }]
    });