"use strict";

angular
    .module('phonecatApp')
    .config(['$routeProvider', '$locationProvider', function config($routeProvider, $locationProvider) {

        $locationProvider.hashPrefix('!');

        $routeProvider
            .when('/phones', {
                template: '<phone-list></phone-list>'
            })
            .otherwise('/phones');

    }]);