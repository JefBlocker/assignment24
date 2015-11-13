let WriteController = function($scope, PromptLyService) {

  $scope.addPromptLy = (obj) => {
    // console.log("ok", obj);
    PromptLyService.addPromptLy(obj).then( (res) => {
      console.log(res);
      $scope.promptly = {};
    });
  };

};
WriteController.$inject = ['$scope', 'PromptLyService'];
export default WriteController;