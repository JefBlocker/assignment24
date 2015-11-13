let ReadController = function($scope, $stateParams, PromptLyService, $state) {
  
  PromptLyService.getPromptLy($stateParams.promptlyId).then( (res) => {
    $scope.singlePromptLy = res.data;
    console.log('OK', res);
  });

  $scope.delete = function (obj) {
    PromptLyService.delete(obj).then( (res) => {
      console.log(res);
      $state.go('root.library');
    });
  };

};
ReadController.$inject = ['$scope', '$stateParams', 'PromptLyService', '$state'];
export default ReadController;