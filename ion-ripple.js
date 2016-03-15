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
      var offsets;
      var rippleClass = 'ion-ripple';
      var animateClassName = 'ion-ripple_animate';
      var ripple = document.createElement('span');

      ripple.classList.add(rippleClass);
      element[0].insertBefore(ripple, element[0].firstChild);

      element.on('touchend mouseup', rippleHandler);

      //remove the event listener on scope destroy
      scope.$on('$destroy', function() {
        element.off('touchend mouseup', rippleHandler);
      });

      function rippleHandler(event) {
        // Remove animation effect
        ripple.classList.remove(animateClassName);

        // Set ripple size
        if (!ripple.offsetHeight && !ripple.offsetWidth) {
          size = Math.max(element[0].offsetWidth, element[0].offsetHeight);
          ripple.style.width = ripple.style.height = size + 'px';
        }
        switch (event.type) {
          case 'mouseup':
            x = event.pageX;
            y = event.pageY;
            break;
          case 'touchend':
            try {
              var origEvent;

              if (typeof event.changedTouches !== 'undefined') {
                origEvent = event.changedTouches[0];
              } else {
                origEvent = event.originalEvent;
              }

              x = origEvent.pageX;
              y = origEvent.pageY;
            } catch (e) {
              // fall back to center of el
              x = ripple.offsetWidth / 2;
              y = ripple.offsetHeight / 2;
            }
            break;
        }

        // set new ripple position by click or touch position
        function getPos(element) {
          var de = document.documentElement;
          var box = element.getBoundingClientRect();
          var top = box.top + window.pageYOffset - de.clientTop;
          var left = box.left + window.pageXOffset - de.clientLeft;

          return { top: top, left: left };
        }

        offsets = getPos(element[0]);
        ripple.style.top = (y - offsets.top - size / 2) + 'px';
        ripple.style.left = (x - offsets.left - size / 2) + 'px';

        // Add animation effect
        ripple.classList.add(animateClassName);
      }
    }
  }
})();
