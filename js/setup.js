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



