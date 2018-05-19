 var myApp = angular.module('myApp', []);
 myApp.controller('AppCtrl', ['$timeout','$scope', '$http', function($timeout,$scope, $http) {

 	$scope.result = "33S";
 	$scope.initial;

 	$scope.submit = function(data){
 		 $http({
          method: 'POST',
          url: '/calcResPos',
          data: data,
        }).then(function (success){
        	$scope.result = success.data;
        },function (error){
          console.log("oops something went wrong");
        });
 	}
}])