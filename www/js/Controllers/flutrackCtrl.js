/**
 * Created by Martin on 12.01.2016.
 */
angular.module('starter.controllers', ['starter.services'])

.controller('FlutrackCtrl', function ($scope, HttpService) {
        HttpService.get('/api', '?results').then(function(res) {
            $scope.text = res;
        }, function (error) {
            $scope.text = error;
        })
    });
