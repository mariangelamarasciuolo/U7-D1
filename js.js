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

class Pets{
    constructor(petName, ownerName, species, breed) {
        this.petName = petName
        this.ownerName = ownerName
        this.species = species
        this.breed = breed
    }
    stessoPadrone(altroPet){
        return this.ownerName === altroPet.ownerName
    }
    
}
const petForm = document.getElementById("petForm")
const petsList = document.getElementById("petsList")

petForm.addEventListener("submit", function(event){
event.preventDefault();
let petName = document.getElementById("petName").value;
let ownerName = document.getElementById("ownerName").value;
let species = document.getElementById("species").value;
let breed = document.getElementById("breed").value;

let newPet = new Pets(petName, ownerName, species, breed);
const listItem = document.createElement("li")
listItem.textContent = `Nome: ${newPet.petName}, Proprietario: ${newPet.ownerName}, specie: ${newPet.species}, Razza ${newPet.breed} `
petsList.appendChild(listItem);

});
