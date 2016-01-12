/**
 * Created by Martin on 12.01.2016.
 */
angluar.module('starter.services', ['$http'])

.factory('HttpService', function($http) {

        return {
            get: function(url, query) {
                $http.get(url+query).then(function (res) {
                    return res;
                }, function (error) {
                    return error;
                });
            }
        }
    });