'use strict';

(function () {
  var KEY_ENTER = 'Enter';
  var KEY_ESC = 'Escape';

  var setupBlock = document.querySelector('.setup');
  var setupUserNameInput = document.querySelector('.setup-user-name');
  var userIcon = document.querySelector('.setup-open-icon');
  var closeDialogButton = document.querySelector('.setup-close');
  var openDialogButton = document.querySelector('.setup-open');
  var inputFileInDialog = setupBlock.querySelector('[name="avatar"]')

  var onSetupPopupEscKeydown = function (evt) {
    if (evt.key === KEY_ESC && evt.target !== setupUserNameInput) {
      closeSetupPopup();
    }
    if (evt.key === KEY_ENTER && evt.target === closeDialogButton) {
      closeSetupPopup();
    }
  };
  var openSetupPopup = function () {
    setupBlock.classList.remove('hidden');

    document.addEventListener('keydown', onSetupPopupEscKeydown);
  };
  var closeSetupPopup = function () {
    setupBlock.classList.add('hidden');

    setupBlock.style.left = '';
    setupBlock.style.top = '';

    document.removeEventListener('keydown', onSetupPopupEscKeydown);
  };

  document.addEventListener('keydown', function (evt) {
    if (evt.target === userIcon && evt.key === KEY_ENTER) {
      openSetupPopup();
    }
  });

  closeDialogButton.addEventListener('click', function () {
    closeSetupPopup();
  });

  openDialogButton.addEventListener('click', function () {
    openSetupPopup();
  });

  inputFileInDialog.addEventListener('mousedown', function (evt) {
    var startDialogCoordinates = {
      x: evt.clientX,
      y: evt.clientY
    };

    var onInputFileMouseMove = function (moveEvt) {
      var shift = {
        x: startDialogCoordinates.x - moveEvt.clientX,
        y: startDialogCoordinates.y - moveEvt.clientY
      };

      startDialogCoordinates = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      setupBlock.style.top = (setupBlock.offsetTop - shift.y) + 'px';
      setupBlock.style.left = (setupBlock.offsetLeft - shift.x) + 'px';

      var clickPreventDefault = function (e) {
        e.preventDefault();

        inputFileInDialog.removeEventListener('click', clickPreventDefault);
      };

      inputFileInDialog.addEventListener('click', clickPreventDefault);
    };

    document.addEventListener('mousemove', onInputFileMouseMove);

    document.addEventListener('mouseup', function () {
      document.removeEventListener('mousemove', onInputFileMouseMove);
    });
  });
})();
