'use strict';

/**
 * @ngdoc function
 * @name 1104MessagingProtoApp.controller:MainCtrl
 * @description
 * # Merchant List Control
 * Controller of the MessagingApp
 */

angular.module('MessagingApp')
  .controller('dealsCtrl', ['$scope', '$routeParams', 'Deal', 'Merchant', '$filter', '$timeout',
   function ($scope, $routeParams, Deal, Merchant, $filter, $timeout) {
    $scope.deals = Deal.query({merchantId: $routeParams.merchantId});

    var merchants = Merchant.query();
    merchants.$promise.then(function(merchants) {
     	$scope.merchant = $filter('filter')(merchants, {id: $routeParams.merchantId})[0];
    });

    $scope.typeFilter = '';

    $scope.showDetails = false;
    $scope.favorited = false;
    $scope.showChat = false;

    $scope.chatCounter = $timeout(function(){
      $scope.showChat = true;
    }, 60000);

  }]);