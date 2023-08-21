class User {
  constructor(firstName, lastName, age, location) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.location = location;
  }
  differenzaEta(personaX) {
    if (this.age > personaX.age) {
      return this.firstName + " " + this.lastName + " è più grande di " + personaX.firstName + " " + personaX.lastName;
    }
  }
}

const giacomoporetti = new User("Giacomo", "Poretti", 67, "Milano");
const aldoBaglio = new User("Aldo", "Baglio", 64, "Palermo");
const comparazioneEta = giacomoporetti.differenzaEta(aldoBaglio);
console.log(comparazioneEta);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const pet = [];
let count = 0;
class Pet {
  constructor(petName, ownerName, species, breed) {
    this.petName = petName;
    this.ownerName = ownerName;
    this.species = species;
    this.breed = breed;
  }
}

function stessoPadrone(altroPet) {
  if (this.ownerName.value === altroPet.ownerName) {
    return true;
  } else {
    return false;
  }
}

const petForm = document.getElementById("petForm");
const petsList = document.getElementById("petsList");

petForm.addEventListener("submit", function (event) {
  event.preventDefault();
  let petName = document.getElementById("petName").value;
  let ownerName = document.getElementById("ownerName").value;
  let species = document.getElementById("species").value;
  let breed = document.getElementById("breed").value;

  let newPet = new Pet(petName, ownerName, species, breed);
  pet.push(newPet);
  if (pet.length > 1) {
    console.log(stessoPadrone(pet[count]));
    count++;
  }
  const listItem = document.createElement("li");
  listItem.textContent = `Nome: ${newPet.petName}, Proprietario: ${newPet.ownerName}, specie: ${newPet.species}, Razza ${newPet.breed} `;
  petsList.appendChild(listItem);
});
