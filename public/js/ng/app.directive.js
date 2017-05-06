/**
 * Created by lyz on 2016-09-18.
 */
require('../../less/progress.less')
require('../../lib/flexible')
import Progress from 'myprogress'
let dire = angular.module('app.directive', []);
dire.directive('score', [() => {
  return {
    restrict: 'EA',
    link: function (scope, ele, attrs) {
      new Progress('outer', 'inner', attrs.scored, 'score').init('scorecontainer')
    },
    templateUrl: './score.html',
    replace: true
  }
}])
