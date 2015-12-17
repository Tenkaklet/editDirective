var directiveApp = angular.module('directiveApp',[]);

directiveApp.directive('makeEditable', function () {
    return {
        restrict: 'A',
        templateUrl: 'make-edit.html',
        scope: true,
    };
});
// directiveApp.directive('contenteditable', function() {
//     return {
//         restrict: 'A',
//         require: 'ngModel',
//         scope: true,
//         link: function(scope, element, attrs, ngModel) {
//             function read () {
//                 ngModel.$setViewValue(element.html());
//             }
//             ngModel.$render = function () {
//                 element.html(ngModel.$viewValue || "");
//             };
//             element.bind("blur keyup change", function() {
//                 scope.$apply(read);
//             });
//         }
//     };
// });
directiveApp.controller('dirCtrl', function ($scope){
    $scope.editText = false;
    $scope.editButton = 'Edit';
    $scope.edit = function () {
        $scope.editText = !$scope.editText;
        if ($scope.editText) {
            $scope.editButton = 'Save';
        }  else {
            $scope.editButton = 'Edit';
        }

    };
});
