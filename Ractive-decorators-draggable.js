(function ( global, factory ) {

  'use strict';

  // Common JS (i.e. browserify) environment
  if ( typeof module !== 'undefined' && module.exports && typeof require === 'function' ) {
    factory( require( 'Ractive' ), require( 'hammerjs' ) );
  }

  // AMD?
  else if ( typeof define === 'function' && define.amd ) {
    define([ 'Ractive', 'hammerjs' ], factory );
  }

  // browser global
  else if ( global.Ractive && global.Hammer) {
    factory( global.Ractive, global.Hammer );
  }

  else {
    throw new Error( 'Could not find Ractive! It must be loaded before the draggable decorator plugin' );
  }


}( typeof window !== 'undefined' ? window : this, function ( Ractive, Hammer ) {

  'use strict';

    var draggable = function (node) {

        Hammer(node).on("dragmove", function(event) {
            // TODO: probably should be nice and:
            //   1) not clobber existing webkitTransforms
            //   2) use all necessary prefixes

            node.style.webkitTransform = 'translate3d(' + event.gesture.deltaX + 'px,' + event.gesture.deltaY + 'px,0)'
        });

        return {
            teardown : function (){} //TODO: need some teardown code!
        }

    }

    Ractive.decorators.draggable = draggable;


}));
