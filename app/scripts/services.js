'use strict';

/* Services */

var rmnProtoServices = angular.module('rmnProtoServices', ['ngResource']);

rmnProtoServices.factory('Merchant', ['$resource',
  function($resource){
    return $resource('json/merchants.json', {}, {
      query: {method:'GET', isArray:true}
    });
  }]);

rmnProtoServices.factory('Deal', ['$resource',
  function($resource){
    return $resource('json/:merchantId.json', {}, {
      query: {method:'GET', isArray:true}
    });
  }]);