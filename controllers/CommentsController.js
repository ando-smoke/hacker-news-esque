hackerNews.controller("CommentsCtrl",
  function CommentsCtrl($scope, $stateParams, LinksFactory) {
  $scope.links = LinksFactory.links;
  $scope.LinksFactory = LinksFactory;
  $scope.link = LinksFactory.findLinkByID($stateParams.linkId);
  $scope.addComment = function() {
    $scope.link.comments.push({
      name: $scope.userName,
      comment: $scope.comment,
      id: $scope.link.comments.length + 1
    });
  $scope.userName = null;
  $scope.comment = null;
  }
});
