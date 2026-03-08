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

// --- SECTION 3: OBJECT MUTATION (ADD, UPDATE, DELETE) ---

cargoProfile.weight = 15.5; // Update

cargoProfile.customsTax = 45; // Add

delete cargoProfile.isDelivered; // Delete

console.log(cargoProfile);
