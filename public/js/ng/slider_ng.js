require('../../less/slider.less')
const app = angular.module('app', [])
app.controller('myctrl', ['$scope', '$http', ($scope, $http) => {
  $scope.items = [
    {url: '../../img/slider/扬州.jpg'},
    {url: '../../img/slider/董平.jpg'},
    {url: '../../img/slider/鲁智深.jpg'},
    {url: '../../img/slider/秦明.jpg'},
    {url: '../../img/slider/关胜.jpg'},
    {url: '../../img/slider/宋江.jpg'},
    {url: '../../img/slider/林冲.jpg'},
    {url: '../../img/slider/呼延灼.jpg'},
    {url: '../../img/slider/武松.jpg'},
    {url: '../../img/slider/徐宁.jpg'},
    {url: '../../img/slider/索超.jpg'},
    {url: '../../img/slider/扬州.jpg'},
    {url: '../../img/slider/董平.jpg'},
    {url: '../../img/slider/鲁智深.jpg'}]
}])
app.directive('slider', ['$interval', ($interval) => {
  return {
    restrict: 'EA',
    templateUrl: './slider.html',
    link: function (scope, ele, attrs) {
      scope.$on('loaded', () => {
        let oneleft = parseInt(angular.element('img').css('margin-left')) + parseInt(angular.element('img').css('width'))
        scope.num = 0
        angular.element('#go').bind('click', () => {
          scope.num ++
          if (scope.num > 11) {
            angular.element(attrs.container).css('left', 0);
            scope.num = 1
          }
          angular.element(attrs.container).stop().animate({left: -scope.num * oneleft + 'px'});
        })
        angular.element('#prev').bind('click', () => {
          scope.num --
          if (scope.num < 0) {
            angular.element(attrs.container).css('left', -oneleft * 11 + 'px');
            scope.num = 10;
          }
          angular.element(attrs.container).stop().animate({left: -scope.num * oneleft + 'px'});
        })
        scope.timer = setInterval(() => {
          angular.element('#go').trigger('click')
        }, 1000)
        angular.element('#go, #prev, img').hover(() => {
          clearInterval(scope.timer)
          scope.timer = null
        }, () => {
          scope.timer = setInterval(() => {
            angular.element('#go').trigger('click')
          }, 1000);
        })
      })
    }
  }
}])
app.directive('loadsuc', [() => {
  return {
    restrict: 'EA',
    link: function (scope, ele, attrs) {
      if (scope.$last) {
        scope.$emit('loaded')
      }
    }
  }
}])
