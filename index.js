const botonEncender = document.getElementById("btnE");
const botonApagar = document.getElementById("btnA");

botonEncender.addEventListener("click", () => {
  const bombilla = document.getElementById("bom");
  bombilla.style.backgroundColor = "yellow";
});

botonApagar.addEventListener("click", () => {
  const bombilla = document.getElementById("bom");
  bombilla.style.backgroundColor = "white";
});
