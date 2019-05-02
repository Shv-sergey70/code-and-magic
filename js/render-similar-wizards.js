'use strict';

(function () {
  var wizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
  var similarWizardsBlock = document.querySelector('.setup-similar ');
  var similarWizardsList = similarWizardsBlock.querySelector('.setup-similar-list');

  var WIZARDS_NAME = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var WIZARDS_SURNAME = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var WIZARDS_COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var WIZARDS_EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];

  var wizardsFragment = document.createDocumentFragment();

  var getWizardData = function () {
    return {
      name: WIZARDS_NAME[Math.floor(Math.random() * WIZARDS_NAME.length)] + ' ' + WIZARDS_SURNAME[Math.floor(Math.random() * WIZARDS_SURNAME.length)],
      coatColor: WIZARDS_COAT_COLOR[Math.floor(Math.random() * WIZARDS_COAT_COLOR.length)],
      eyesColor: WIZARDS_EYES_COLOR[Math.floor(Math.random() * WIZARDS_EYES_COLOR.length)]
    };
  };

  var generateWizards = function (numberOfWizards) {
    var wizardsArr = [];

    for (var i = 0; i < numberOfWizards; i++) {
      wizardsArr.push(getWizardData());
    }

    return wizardsArr;
  };

  var renderWizard = function (wizardData) {
    var wizard = wizardTemplate.cloneNode(true);

    wizard.querySelector('.setup-similar-label').textContent = wizardData['name'];
    wizard.querySelector('.wizard-coat').style.fill = wizardData['coatColor'];
    wizard.querySelector('.wizard-eyes').style.fill = wizardData['eyesColor'];

    return wizard;
  };

  var wizards = generateWizards(4);

  for (var j = 0; j < wizards.length; j++) {
    wizardsFragment.appendChild(renderWizard(wizards[j]));
  }

  similarWizardsList.appendChild(wizardsFragment);
  similarWizardsBlock.classList.remove('hidden');
})();
