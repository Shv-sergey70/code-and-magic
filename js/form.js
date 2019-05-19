'use strict';

(function () {
  var wizardForm = document.querySelector('.setup-wizard-form');
  wizardForm.addEventListener('submit', function (evt) {
    evt.preventDefault();
    window.backend.save(new FormData(wizardForm), function () {
      window.closeSetupPopup();
    }, window.util.showUserError);
  });
})();
