/**
 * Created by AdityaShibrady on 11/22/15.
 */
function UserTwoCtrl($scope, $http) {
    $http.get('/solution-two/data').success(function(data) {
        $scope.users = data
    })
}