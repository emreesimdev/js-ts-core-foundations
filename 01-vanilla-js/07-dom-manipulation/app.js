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
*/

// --- SECTION 4: ELEMENT DELETION ---

const searchInput = document.querySelector("#cargoInput");
const searchButton = document.querySelector("#searchBtn");
const cargoList = document.querySelector("#cargoList");

searchButton.addEventListener("click", () => {
  if (searchInput.value.trim() === "") {
    return;
  }
  const currentCargo = searchInput.value;
  const newCargoItem = document.createElement("li");
  newCargoItem.textContent = `Target Cargo: ${currentCargo}`;
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = `Cancel`;
  deleteBtn.addEventListener("click", () => {
    savedCargos = savedCargos.filter((item) => item !== currentCargo);
    saveToDatabase();
    newCargoItem.remove();
  });
  newCargoItem.appendChild(deleteBtn);
  cargoList.appendChild(newCargoItem);
  savedCargos.push(currentCargo);
  saveToDatabase();
  searchInput.value = "";
});

// --- SECTION 5: KEYBOARD EVENTS & EVENT OBJECT ---

searchInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    searchButton.click();
  }
});

// --- SECTION 6: LOCAL STORAGE (DATA PERSISTENCE) ---

let savedCargos = JSON.parse(localStorage.getItem("cargos")) || [];

const saveToDatabase = () => {
  localStorage.setItem("cargos", JSON.stringify(savedCargos));
};

// --- SECTION 7: INITIAL LOAD (HYDRATION) ---

savedCargos.forEach((cargo) => {
  const newCargoItem = document.createElement("li");
  newCargoItem.textContent = `Target Cargo: ${cargo}`;
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = `Cancel`;
  deleteBtn.addEventListener("click", () => {
    savedCargos = savedCargos.filter((item) => item !== cargo);
    saveToDatabase();
    newCargoItem.remove();
  });
  newCargoItem.appendChild(deleteBtn);
  cargoList.appendChild(newCargoItem);
});
