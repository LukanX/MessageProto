'use strict';

/**
 * @ngdoc function
 * @name 1104MessagingProtoApp.controller:MainCtrl
 * @description
 * # Merchant List Control
 * Controller of the MessagingApp
 */

angular.module('MessagingApp')
  .controller('merchantListCtrl', ['$scope','Merchant',
   function ($scope, Merchant) {
    $scope.merchants = Merchant.query();

  }]);