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
