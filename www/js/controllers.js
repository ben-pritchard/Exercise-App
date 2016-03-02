angular.module('crossfit.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('WorkoutsCtrl', function($scope, $http, Workouts) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

	$scope.getWorkouts = function() {
		Workouts.getWorkouts()
			.then(function(result) {
				$scope.test = result;
			});
	};

  $scope.workouts = Workouts.all();

  $scope.remove = function(workout) {
    Workouts.remove(workout);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatDate);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
