'use strict';

var userSetup = document.querySelector('.setup');
userSetup.classList.remove('hidden');

var wizardNames = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон'
];

var wizardSurnames = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг'
];

var coatColors = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'

];

var eyesColors = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];

var getRandomIndex = function (arrayLength) {
  return Math.floor(Math.random() * arrayLength);
};

var makePlayer = function () {
  var nameIndex = getRandomIndex(wizardNames.length);
  var surnameIndex = getRandomIndex(wizardSurnames.length);
  var coatColorIndex = getRandomIndex(coatColors.length);
  var eyesColorIndex = getRandomIndex(eyesColors.length);
  var player = {
    name: wizardNames[nameIndex] + ' ' + wizardSurnames[surnameIndex],
    coatColor: coatColors[coatColorIndex],
    eyesColor: eyesColors[eyesColorIndex]
  };
  return player;
};

var makeArrayOfWizards = function (numOfWizards) {
  var wizards = [];
  for (var i = 0; i < numOfWizards; i++) {
    wizards[i] = makePlayer();
  }
  console.log(wizards);
  return wizards;
};

var wizards = makeArrayOfWizards(4);

var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

var similarList = document.querySelector('.setup-similar-list');

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  console.log(wizard);
  for (var i = 0; i < wizards.length; i++) {
    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  }
   return wizardElement;
};


var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarList.appendChild(fragment);

document.querySelector('.setup-similar').classList.remove('hidden');

