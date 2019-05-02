'use strict';

(function () {
  window.util = {
    getMaxArrayValue: function (array) {
      var result = 0;

      for (var i = 0; i < array.length; i++) {

        if (array[i] > result) {
          result = array[i];
        }
      }

      return result;
    }
  };
})();
