/**
 * Created by Martin on 12.01.2016.
 */
angular.module('starter.controllers', ['starter.services'])

.controller('FlutrackCtrl', function ($scope, HttpService) {
        HttpService.get('http://api.flutrack.org/', 's=feverANDcough').then(function(res) {
            $scope.text = res;
        }, function (error) {
            $scope.text = error;
        })
    });