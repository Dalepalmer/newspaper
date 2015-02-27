newsPaper.controller('ReportersCtrl', function ReportersCtrl($scope, $stateParams, BeatsFactory, UtilitiesFactory){
  $scope.beat = UtilitiesFactory.findById(BeatsFactory.beats, $stateParams.beatId)
  $scope.addReporter = function() {
    $scope.beat.reporters.push({name: $scope.reporterName, employment: $scope.reporterEmployment, birthday: $scope.reporterBirthday });
    $scope.reporterName = null;
    $scope.reporterEmployment = null;
    $scope.reporterBirthday = null;
  }
});
