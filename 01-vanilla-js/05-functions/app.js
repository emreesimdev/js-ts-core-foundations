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

// --- SECTION 2: ARROW FUNCTIONS (MODERN SYNTAX) ---

const calculateTotalFreight = (weight, distance) => {
  return weight * 10 + distance * 2;
};

console.log(calculateTotalFreight(20, 150));

// --- SECTION 3: ARROW FUNCTIONS (IMPLICIT RETURN) ---

const calculateFastFreight = (weight, distance) => weight * 10 + distance * 2;

console.log(calculateFastFreight(30, 170));

// --- SECTION 4: DEFAULT PARAMETERS ---

const calculateFinalPrice = (price, taxRate = 0.19) => price + price * taxRate;

console.log(calculateFinalPrice(100));
console.log(calculateFinalPrice(100, 0.08));
