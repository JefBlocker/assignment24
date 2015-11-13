let ReviseController = function($scope, $stateParams, PromptLyService) {
  
  PromptLyService.getPromptLy($stateParams.promptlyId).then( (res) => {
    $scope.singlePromptLy = res.data;
  });

  $scope.updatePromptLy = function (obj) {
    PromptLyService.update(obj).then( (res) => {
      console.log(res);
    });
  };
  

};
ReviseController.$inject = ['$scope', '$stateParams', 'PromptLyService'];
export default ReviseController;