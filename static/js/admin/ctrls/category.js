// Generated by CoffeeScript 1.6.3
(function() {
  define(['admin/app'], function(app) {
    app.controller('categoryCtrl', [
      '$scope', '$resource', function($scope, $resource) {
        var Catgory, actions;
        actions = {
          mulit: {
            method: 'GET',
            isArray: true
          }
        };
        Catgory = $resource('/api/category', {}, actions);
        $scope.catgorys = Catgory.mulit();
      }
    ]);
  });

}).call(this);
