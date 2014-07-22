(function( window ) {
	'use strict';

	// Your starting point. Enjoy the ride

  var app = angular.module("TodoMVC", [])

  app.controller("TodoCtrl", function($scope){
    $scope.message = "HELLO WORLD"
    $scope.todos = []
    $scope.done = function(todo) {
      var indexOf = $scope.todos.indexOf(todo)
      if (indexOf !== -1) {
        $scope.todos.splice(indexOf, 1)
      }
    };
    $scope.add = function(e) {
      if (e.which && e.which === 13) {
        $scope.todos.push({
          title: $scope.newTodo,
          completed: false
        });
        $scope.newTodo = "";
      }
    }
  });
})( window );
