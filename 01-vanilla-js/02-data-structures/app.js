// --- SECTION 1: ARRAYS & COLLECTIONS (INTRODUCTION) ---
// Note: While loops are often used for unknown iteration counts, like sensor data.

let temperature = -15;

while (temperature >= -18) {
  console.log(`ALARM: Temperature is ${temperature}! Cooling down...`);
  temperature--;
}

// --- SECTION 2: ARRAYS (DATA COLLECTIONS) ---

const shipments = ["TR-100", "DE-200", "NL-300"];

console.log(shipments);
console.log(shipments[1]);
console.log(`Total active shipments: ${shipments.length}`);

// --- SECTION 3: ARRAY METHODS (MUTATION) ---

shipments.push("FR-400");
console.log(shipments);
console.log(`Total active shipments: ${shipments.length}`);

let canceledShipment = shipments.pop();
console.log(`Canceled Shipment: ${canceledShipment}`);
console.log(shipments);

// --- SECTION 4: ARRAY METHODS (SHIFT & UNSHIFT) ---

shipments.unshift("DE-URGENT-001");
console.log(shipments);
console.log(shipments[0]);

let processedShipment = shipments.shift();
console.log(`Priority Processed: ${processedShipment}`);
console.log(shipments);

// --- SECTION 5: ARRAY METHODS (SEARCHING) ---

if (shipments.includes("NL-300")) {
  let targetIndex = shipments.indexOf("NL-300");
  console.log(`Target locked. Shipment NL-300 found at ${targetIndex}`);
} else {
  console.log(`Shipment not found in current manifest`);
}
