// --- SECTION 1: ARRAY OF OBJECTS (MANIFEST) ---

const cargoManifest = [
  { id: "TR-001", weight: 10, isActive: true },
  { id: "DE-002", weight: 25, isActive: true },
  { id: "NL-003", weight: 15, isActive: false },
];

console.log(cargoManifest[1].weight);

// --- SECTION 2: ITERATING ARRAY OF OBJECTS ---

for (let i = 0; i < cargoManifest.length; i++) {
  if (cargoManifest[i].id === "NL-003") {
    console.log(`Target found! NL-003 weighs ${cargoManifest[i].weight} kg.`);
  }
}
