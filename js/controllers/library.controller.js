let LibraryController = function($scope, PromptLyService) {
  console.log('#Lib');

  PromptLyService.getPromptLys().then ( (res) => {
    $scope.promptlys = res.data.results;
  });

};
LibraryController.$inject = ['$scope', 'PromptLyService'];
export default LibraryController;