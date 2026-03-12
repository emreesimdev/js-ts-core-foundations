// --- SECTION 1: DOM SELECTION & EVENTS ---

const searchInput = document.querySelector("#cargoInput");
const searchButton = document.querySelector("#searchBtn");

searchButton.addEventListener("click", () => {
  console.log(`Target Cargo: ${searchInput.value}`);
});
