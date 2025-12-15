// retournement des cartes au click

const CLASSE_FLIP = "est-retournee";
const SELECTEUR_CARTE_PERSONNAGE = ".personnage-carte";
const SELECTEUR_CONTENEUR_INTERNE = ".flip-cards";

const toutesLesCartes = document.querySelectorAll(SELECTEUR_CARTE_PERSONNAGE);

toutesLesCartes.forEach((carte) => {
  carte.addEventListener("click", function () {
    const conteneurInterne = carte.querySelector(SELECTEUR_CONTENEUR_INTERNE);

    // Si l'élément est trouvé on le flip
    if (conteneurInterne) {
      conteneurInterne.classList.toggle(CLASSE_FLIP);
    }
  });
});
