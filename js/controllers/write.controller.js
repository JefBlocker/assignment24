let WriteController = function($scope, PromptLyService) {

  $scope.addPromptLy = (obj) => {
    PromptLyService.addPromptLy(obj).then( (res) => {
      $scope.promptly = {};
    });
  };

};
WriteController.$inject = ['$scope', 'PromptLyService'];
export default WriteController;