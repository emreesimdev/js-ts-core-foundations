// --- SECTION 1: OBJECTS (INTRODUCTION) ---

const cargoProfile = {
  id: "TR-100",
  weight: 12.5,
  isDelivered: false,
};

console.log(cargoProfile);

// --- SECTION: 2 ACCESSING OBJECT PROPERTIES ---

console.log(`Current cargo weight: ${cargoProfile.weight}`);

let dynamicKey = "id";
console.log(`Dynamic query result: ${cargoProfile[dynamicKey]}`);
