// --- SECTION 1: THE AWAKENING (HELLO WORLD) ---

console.log("Hello World!");

// --- SECTION 2: VARIABLES & DATA TYPES ---

const myName = "Emre";
let age = 24;
const studentStatus = true;

console.log(
  `Hi, I am ${myName}, I am ${age} years old and my student status is: ${studentStatus}`,
);

// --- SECTION 3: CONTROL FLOW (IF/ELSE) ---

if (age >= 18 && studentStatus === true) {
  console.log(
    "Access granted: Eligible for global remote work and student discount",
  );
} else {
  console.log("Standard procedure applied");
}
