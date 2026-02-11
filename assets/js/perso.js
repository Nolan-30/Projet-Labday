// Chrono
const boutonChrono = document.getElementById("btn-action");
const affichageChrono = document.getElementById("affichage");

// Variables pour les cartes des personnages
const classeFlip = "est-retournee";
const selecteurCartePersonnage = ".personnage-carte"; // retournement de carte
const selecteurConteneurInterne = ".flip-cards";
const toutesLesCartes = document.querySelectorAll(selecteurCartePersonnage);

toutesLesCartes.forEach((carte) => {
  carte.addEventListener("click", function () {
    const conteneurInterne = carte.querySelector(selecteurConteneurInterne);
    if (conteneurInterne) {
      conteneurInterne.classList.toggle(classeFlip);
    }
  });
});

// Logique du chronomètre
let tempsEcoule = 0;
let intervalId = null; // Stocke l'ID de l'intervalle

const gererChrono = () => {
  const conteneurCartes = document.getElementById("conteneur-cartes");
  const zoneIndice = document.getElementById("indice");
  const zoneQuiz = document.getElementById("quiz");

  // Cacher les cartes et afficher l'indice
  conteneurCartes.style.display = "none";
  zoneIndice.style.display = "block";

  // Lancer le chrono
  clearInterval(intervalId);
  tempsEcoule = 0;

  // Réinitialisation

  affichageChrono.innerText = "00:00";
  affichageChrono.style.display = "block";

  //  Lancement du nouvel intervalle
  intervalId = setInterval(() => {
    tempsEcoule += 1000; // On incrémente de 1 seconde (1000ms)

    // Calcul du temps
    const totalSecondes = Math.floor(tempsEcoule / 1000);
    const minutes = Math.floor(totalSecondes / 60);
    const secondes = totalSecondes % 60;

    const minutesFormat = String(minutes).padStart(2, "0");
    const secondesFormat = String(secondes).padStart(2, "0");

    affichageChrono.innerText = `${minutesFormat}:${secondesFormat}`;
  }, 1000); // Mise à jour toutes les secondes
  setTimeout(() => {
    // ÉTAPE 3 : Cacher l'indice et afficher le quiz
    zoneIndice.style.display = "none";
    zoneQuiz.style.display = "block";
  }, 3000);
};

boutonChrono.addEventListener("click", gererChrono);
