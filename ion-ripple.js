(function() {
  'use strict';

  angular.module('ionMDRipple', ['ionic'])
    .directive('ionRipple', ionRipple);

  ionRipple.$inject = [];

  function ionRipple() {
    var directive = {
      restrict: 'A',
      link: link
    };

    return directive;

    function link(scope, element, attr) {
      var x;
      var y;
      var size;
      var rippleClass = 'ion-ripple';
      var animateClassName = 'ion-ripple_animate';
      var ripple = document.createElement('span');

      ripple.classList.add(rippleClass);
      element[0].insertBefore(ripple, element[0].firstChild);

      // Set ripple size
      if (!ripple.offsetHeight && !ripple.offsetWidth) {
        size = Math.max(element[0].offsetWidth, element[0].offsetHeight);
        ripple.style.width = ripple.style.height = size + 'px';
      }

      element.on('touchend mouseup', rippleHandler);

      //remove the event listener on scope destroy
      scope.$on('$destroy', function() {
        element.off('touchend mouseup', rippleHandler);
      });

      function rippleHandler(event) {
        // Remove animation effect
        ripple.classList.remove(animateClassName);

        ripple.style.top = (event.offsetX - ripple.offsetWidth / 2) + 'px';
        ripple.style.left = (event.offsetY - ripple.offsetHeight / 2) + 'px';

        // Add animation effect
        ripple.classList.add(animateClassName);
      }
    }
  }
})();
