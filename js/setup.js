'use strict';

var KEY_ENTER = 'Enter';
var KEY_ESC = 'Escape';

var setup = document.querySelector('.setup');
var wizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var similarWizardsBlock = document.querySelector('.setup-similar ');
var similarWizardsList = similarWizardsBlock.querySelector('.setup-similar-list');

var WIZARDS_NAME = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARDS_SURNAME = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARDS_COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARDS_EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
var WIZARDS_FIREBALL_COLOR = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

var wizardsFragment = document.createDocumentFragment();
var wizards = generateWizards(4);

var closeButton = document.querySelector('.setup-close');
var openButton = document.querySelector('.setup-open');
var userIcon = document.querySelector('.setup-open-icon');
var setupUserNameInput = document.querySelector('.setup-user-name');

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

var onSetupPopupEscKeydown = function (evt) {
  if (evt.key === KEY_ESC && evt.target !== setupUserNameInput) {
    closeSetupPopup();
  }
  if (evt.key === KEY_ENTER && evt.target === closeButton) {
    closeSetupPopup();
  }
};
var openSetupPopup = function () {
  setup.classList.remove('hidden');

  document.addEventListener('keydown', onSetupPopupEscKeydown);
};
var closeSetupPopup = function () {
  setup.classList.add('hidden');

  document.removeEventListener('keydown', onSetupPopupEscKeydown);
};

closeButton.addEventListener('click', function () {
  closeSetupPopup();
});

openButton.addEventListener('click', function () {
  openSetupPopup();
});

document.addEventListener('keydown', function (evt) {
  if (evt.target === userIcon && evt.key === KEY_ENTER) {
    openSetupPopup();
  }
});

for (var j = 0; j < wizards.length; j++) {
  wizardsFragment.appendChild(renderWizard(wizards[j]));
}

similarWizardsList.appendChild(wizardsFragment);
similarWizardsBlock.classList.remove('hidden');

function getWizardData() {
  return {
    name: WIZARDS_NAME[Math.floor(Math.random() * WIZARDS_NAME.length)] + ' ' + WIZARDS_SURNAME[Math.floor(Math.random() * WIZARDS_SURNAME.length)],
    coatColor: WIZARDS_COAT_COLOR[Math.floor(Math.random() * WIZARDS_COAT_COLOR.length)],
    eyesColor: WIZARDS_EYES_COLOR[Math.floor(Math.random() * WIZARDS_EYES_COLOR.length)]
  };
}

function generateWizards(numberOfWizards) {
  var wizardsArr = [];

  for (var i = 0; i < numberOfWizards; i++) {
    wizardsArr.push(getWizardData());
  }

  return wizardsArr;
}

function renderWizard(wizardData) {
  var wizard = wizardTemplate.cloneNode(true);

  wizard.querySelector('.setup-similar-label').textContent = wizardData['name'];
  wizard.querySelector('.wizard-coat').style.fill = wizardData['coatColor'];
  wizard.querySelector('.wizard-eyes').style.fill = wizardData['eyesColor'];

  return wizard;
}
