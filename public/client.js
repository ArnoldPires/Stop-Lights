//Pet info
let pet_info = {
    "name" : "Lucky",
    "weight" : 6,
    "happiness": 0
}

checkAndUpdatePetInfoInHtml();

document.querySelector('.treat-button').addEventListener('click', clickedTreatButton);
document.querySelector('.play-button').addEventListener('click', clickedPlayButton);
document.querySelector('.exercise-button').addEventListener('click', clickedExerciseButton);

function clickedTreatButton() {
    pet_info['happiness'] = pet_info['happiness'] + 1;
    pet_info['weight'] = pet_info['weight'] + 2;
    checkAndUpdatePetInfoInHtml();
}
function clickedPlayButton() {
    pet_info['happiness'] = pet_info['happiness'] + 2;
    pet_info['weight'] = pet_info['weight'] - 1;
    checkAndUpdatePetInfoInHtml();
}
function clickedExerciseButton() {
    pet_info['happiness'] = pet_info['happiness'] - 1;
    pet_info['weight'] = pet_info['weight'] - 1;
    checkAndUpdatePetInfoInHtml();
}
function checkAndUpdatePetInfoInHtml() {
    checkWeightAndHappinessBeforeUpdating();  
    updatePetInfoInHtml();
}
function checkWeightAndHappinessBeforeUpdating() {
    if (pet_info['weight'] < 1) {
        pet_info['weight'] = 1;
    }
}
function updatePetInfoInHtml() {
    document.querySelector('.name').textContent = pet_info['name'];
    document.querySelector('.weight').textContent = pet_info['weight'];
    document.querySelector('.happiness').textContent = pet_info['happiness'];
}
//The Pet
function movePetRandomly(petImage) {
  // Container dimensions
  const containerWidth = 50 * 
  parseFloat(getComputedStyle(document.documentElement).fontSize);
  const containerHeight = 500;

  //Creates random X and Y coordinates within the viewport
  const y = Math.random() * (containerHeight - petImage.height);
  const x = Math.random() * (containerWidth - petImage.width);

  //Adds transition of the pet
  petImage.style.transition = "all 3s ease-in-out";
  //Updates the pet's position
  petImage.style.top = y + 'px';
  petImage.style.left = x + 'px';

  //Pet will wait 5 seconds before moving to another position as if walking then move again
  setTimeout(() => movePetRandomly(petImage), 5000);
}
const petImage = document.querySelector('#petImage');
movePetRandomly(petImage);