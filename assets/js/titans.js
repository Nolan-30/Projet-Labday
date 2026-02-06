// Variables pour les cartes des personnages
const classeFlip = "est-retournee";

const selecteurConteneurInterne = ".flip-cards";
const toutesLesCartes = document.querySelectorAll(".card-visual");

toutesLesCartes.forEach((carte) => {
  carte.addEventListener("click", function () {
    const conteneurInterne = carte.querySelector(selecteurConteneurInterne);
    if (conteneurInterne) {
      conteneurInterne.classList.toggle(classeFlip);
    }
  });
});