(function() {
  'use strict';

  angular
    .module('ionMDRipple', ['ionic'])
    .directive('ionRipple', ionRipple);

  function ionRipple() {
    return {
      restrict: 'A',
      link: link,
      scope: {
        ionRippleColor: '@'
      }
    };

    function link(scope, element, attr) {
      var x;
      var y;
      var size;
      var offsets;
      var rippleClass = 'ion-ripple';
      var animateClassName = 'ion-ripple_animate';
      var ripple = document.createElement('span');

      // Use color from ion-ripple-color attribute if possible.
      if (attr.ionRippleColor) {
        ripple.style.backgroundColor = attr.ionRippleColor;
      }

      ripple.classList.add(rippleClass);
      element[0].insertBefore(ripple, element[0].firstChild);

      element.on('click', rippleHandler);
      angular.element(ripple).on('animationend webkitAnimationEnd', deactivateRipple);

      //remove the event listener on scope destroy
      scope.$on('$destroy', function() {
        element.off('click', rippleHandler);
        angular.element(ripple).off('animationend webkitAnimationEnd', deactivateRipple);
      });

      function deactivateRipple() {
        ripple.classList.remove(animateClassName);
      }

      function rippleHandler(event) {
        if (!ripple.offsetHeight && !ripple.offsetWidth) {
          size = Math.max(element[0].offsetWidth, element[0].offsetHeight);
          ripple.style.width = ripple.style.height = size + 'px';
        }

        x = event.pageX;
        y = event.pageY;

        function getPos(element) {
          var de = document.documentElement;
          var box = element.getBoundingClientRect();
          var top = box.top + pageYOffset - de.clientTop;
          var left = box.left + pageXOffset - de.clientLeft;

          return { top: top, left: left };
        }

        offsets = getPos(element[0]);
        ripple.style.top = (y - offsets.top - size / 2) + 'px';
        ripple.style.left = (x - offsets.left - size / 2) + 'px';

        ripple.classList.add(animateClassName);
      }
    }
  }
})();
