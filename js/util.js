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
    },
    showUserError: function (errorMessage) {
      var errorBlock = document.querySelector('.errors');
      errorBlock.textContent = errorMessage;
      errorBlock.classList.remove('hidden');
    },
    showDevError: function (errorMessage) {
      console.error('Возникла ошибка: ' + errorMessage);
    }
  };
})();
