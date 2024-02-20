const hamburgerBtn = document.getElementById("hamburgerBtn");
const overlayMenu = document.getElementById("overlayMenu");
const closeOverlayBtn = document.getElementById("closeOverlayBtn");

hamburgerBtn.addEventListener("click", () => {
  overlayMenu.classList.toggle("hidden");
});

closeOverlayBtn.addEventListener("click", () => {
  overlayMenu.classList.add("hidden");
});
