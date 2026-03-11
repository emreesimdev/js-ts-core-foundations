// SECTION 1: ARRAY FILTERING ---

const shipments = [
  { id: "TR-001", dest: "DE", weight: 15 },
  { id: "NL-002", dest: "NL", weight: 5 },
  { id: "DE-003", dest: "DE", weight: 25 },
];

const germanyShipments = shipments.filter((cargo) => cargo.dest === "DE");

console.log(germanyShipments);

// --- SECTION 2: ARRAY MAPPING ---

const cargoWeights = shipments.map((cargo) => cargo.weight);

console.log(cargoWeights);

// --- SECTION 3: ARRAY REDUCE (ACCUMULATION) ---

const totalCargoWeight = cargoWeights.reduce(
  (total, currentWeight) => total + currentWeight,
  0,
);

console.log(totalCargoWeight);
