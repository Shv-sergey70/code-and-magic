'use strict';

(function () {
  var wizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
  var similarWizardsBlock = document.querySelector('.setup-similar ');
  var similarWizardsList = similarWizardsBlock.querySelector('.setup-similar-list');
  var MAX_WIZARDS_SHOW_NUMBER = 4;

  var wizardsFragment = document.createDocumentFragment();

  var renderWizard = function (wizardData) {
    var wizard = wizardTemplate.cloneNode(true);

    wizard.querySelector('.setup-similar-label').textContent = wizardData.name;
    wizard.querySelector('.wizard-coat').style.fill = wizardData.colorCoat;
    wizard.querySelector('.wizard-eyes').style.fill = wizardData.colorEyes;

    return wizard;
  };

  window.backend.load(function (response) {
    for (var j = 0; j < MAX_WIZARDS_SHOW_NUMBER; j++) {
      wizardsFragment.appendChild(renderWizard(response[j]));
    }
    similarWizardsList.appendChild(wizardsFragment);
    similarWizardsBlock.classList.remove('hidden');
  }, window.util.showUserError);
})();
