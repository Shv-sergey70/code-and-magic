'use strict';

(function () {
  var WIZARDS_COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var WIZARDS_EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
  var WIZARDS_FIREBALL_COLOR = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

  var playerSetupBlock = document.querySelector('.setup-player');
  var userWizardCoat = playerSetupBlock.querySelector('.setup-wizard .wizard-coat');
  var userWizardEyes = playerSetupBlock.querySelector('.setup-wizard .wizard-eyes');
  var userWizardFireball = playerSetupBlock.querySelector('.setup-fireball-wrap');
  var userWizardCoatInput = playerSetupBlock.querySelector('input[name="coat-color"]');
  var userWizardEyesInput = playerSetupBlock.querySelector('input[name="eyes-color"]');
  var userWizardFireballInput = playerSetupBlock.querySelector('input[name="fireball-color"]');

  userWizardCoat.addEventListener('click', function () {
    var coatColor = WIZARDS_COAT_COLOR[Math.floor(Math.random() * WIZARDS_COAT_COLOR.length)];

    userWizardCoat.style.fill = coatColor;
    userWizardCoatInput.value = coatColor;
  });

  userWizardEyes.addEventListener('click', function () {
    var eyesColor = WIZARDS_EYES_COLOR[Math.floor(Math.random() * WIZARDS_EYES_COLOR.length)];

    userWizardEyes.style.fill = eyesColor;
    userWizardEyesInput.value = eyesColor;
  });

  userWizardFireball.addEventListener('click', function () {
    var fireballColor = WIZARDS_FIREBALL_COLOR[Math.floor(Math.random() * WIZARDS_FIREBALL_COLOR.length)];

    userWizardFireball.style.backgroundColor = fireballColor;
    userWizardFireballInput.value = fireballColor;
  });
})();
