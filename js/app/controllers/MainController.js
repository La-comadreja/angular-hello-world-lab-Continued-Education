function MainController($scope) {
  $scope.name = 'Example';
  $scope.email = 'someone@example.com';
  $scope.phone = '(800) 888-8888';
}

angular
  .module('app')
  .controller('MainController', MainController);