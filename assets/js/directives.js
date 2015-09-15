'use strict';

/* Directives */

angular.module('directives', []).
  directive('appVersion', function (version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }).
  directive('inputmask', function(){
    return {
      restrict: 'A',
      link: function(scope, el, attrs){
        console.log(scope.$eval);
        console.log(attrs);
        //$(el).inputmask();
        $(el).inputmask(scope.$eval(attrs.inputmask));
        $(el).on('change', function(){
          scope.$eval(attrs.ngModel + "='" + el.val() + "'");
          // or scope[attrs.ngModel] = el.val() if your expression doesn't contain dot.
        });
      }
    };
  });

