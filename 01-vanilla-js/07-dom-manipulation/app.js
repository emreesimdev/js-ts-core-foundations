/*
// --- SECTION 1: DOM SELECTION & EVENTS ---

const searchInput = document.querySelector("#cargoInput");
const searchButton = document.querySelector("#searchBtn");

searchButton.addEventListener("click", () => {
  console.log(`Target Cargo: ${searchInput.value}`);
});

// --- SECTION 2: DOM UPDATING ---

const searchInput = document.querySelector("#cargoInput");
const searchButton = document.querySelector("#searchBtn");

searchButton.addEventListener("click", () => {
  document.querySelector("#resultDisplay").textContent =
    `Target Cargo: ${searchInput.value}`;
});
*/

// --- SECTION 3: DYNAMIC ELEMENT CREATION ---

const searchInput = document.querySelector("#cargoInput");
const searchButton = document.querySelector("#searchBtn");
const cargoList = document.querySelector("#cargoList");

searchButton.addEventListener("click", () => {
  const newCargoItem = document.createElement("li");
  newCargoItem.textContent = `Target Cargo: ${searchInput.value}`;
  cargoList.appendChild(newCargoItem);
  searchInput.value = "";
});
