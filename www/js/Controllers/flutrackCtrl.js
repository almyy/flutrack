/**
 * Created by Martin on 12.01.2016.
 */
angular.module('starter.controllers', ['starter.services'])

.controller('FlutrackCtrl', function ($scope, HttpService) {
		var data = [];
        HttpService.get('/api', '/results.json').then(function(res) {
            for(tweet in res.data) {
            	data.push(new google.maps.LatLng(res.data[tweet].latitude, res.data[tweet].longitude));
        	}
        	var mapOptions = {
        		zoom: 4,
        		center: new google.maps.LatLng(40, -98),
        		mapTypeId: google.maps.MapTypeId.SATELLITE
    		};
			var map = new google.maps.Map(document.getElementById('map'), mapOptions);
			var heatmap = new google.maps.visualization.HeatmapLayer({
				data: data,
				map: map
			});
			heatmap.set('radius', 20);
			heatmap.set('opacity', 1);
			$scope.map = map;
        }, function (error) {
            $scope.text = error;
        });


    });//test
