function Vampire(name, fangs, batWings, cloakColor) {
  this.name = name;
  this.fangs = fangs;
  this.batWings = batWings;
  this.cloakColor = cloakColor;
}

function createVampire() {
  const randomName = generateRandomName();

  const fangs = Math.floor(Math.random() * 10) + 2; 
  const batWings = Math.floor(Math.random() * 2) + 1; 
  const cloakColor = ["black", "red", "purple"][Math.floor(Math.random() * 3)];

  const newVampire = new Vampire(randomName, fangs, batWings, cloakColor);

  document.getElementById("name").textContent = newVampire.name;
  document.getElementById("fangs").textContent = `Fangs: ${newVampire.fangs}`;
  document.getElementById("cloak").textContent = `Bat Wings: ${newVampire.batWings} | Cloak Color: ${newVampire.cloakColor}`;
}

function generateRandomName() {
  const names = ["Dracula", "Vladimir", "Phantom"];
  return names[Math.floor(Math.random() * names.length)];
}

document.getElementById("mashButton").addEventListener("click", createVampire);
