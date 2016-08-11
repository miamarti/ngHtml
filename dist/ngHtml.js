(function() {
    'use strict';
    (angular.module('ngHtml', ['ng'])).directive('ngHtml', [
        function() {
            return {
                restrict: 'E',
                link: function(scope, element, attrs) {
                    element.context.innerHTML = attrs.value;
                }
            };
        }
    ]).directive('ngHtml', [
        function() {
            return {
                restrict: 'A',
                link: function(scope, element, attrs) {
                    scope.$watch(attrs.ngHtml, function(value) {
                        if (value !== undefined) {
                            element.context.innerHTML = value;
                        }
                    });
                }
            };
        }
    ]);
})(window, document);
