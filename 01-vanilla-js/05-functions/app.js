// --- SECTION 1: FUNCTION DECLARATION ---

function calculateCustomsTax(weight) {
  if (weight > 20) {
    return weight * 2.5;
  } else {
    return weight * 1.5;
  }
}

console.log(calculateCustomsTax(25));
console.log(calculateCustomsTax(10));
