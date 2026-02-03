// Variables pour les cartes des personnages
const classeFlip = "est-retournee";
const selecteurCarteTitans = "."; // retournement de carte
const selecteurConteneurInterne = ".flip-cards";
const toutesLesCartes = document.querySelectorAll(selecteurCarteTitans);

toutesLesCartes.forEach((carte) => {
  carte.addEventListener("click", function () {
    const conteneurInterne = carte.querySelector(selecteurConteneurInterne);
    if (conteneurInterne) {
      conteneurInterne.classList.toggle(classeFlip);
    }
  });
});
