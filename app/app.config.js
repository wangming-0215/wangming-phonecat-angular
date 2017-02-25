"use strict";

angular
    .module('phonecatApp')
    .config(['$routeProvider', '$locationProvider', function config($routeProvider, $locationProvider) {

        $locationProvider.hashPrefix('!');

        $routeProvider
            .when('/phones', {
                template: '<phone-list></phone-list>'
            })
            .when('/phone/:phoneId', {
                template: '<phone-detail></phone-detail>'
            })
            .otherwise('/phones');

    }]);