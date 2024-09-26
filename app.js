// Liste des termes chimiques avec leurs traductions
const chemicalTerms = [
  { name: "soude", formula: "NaOH" },
  { name: "hydroxyde de sodium", formula: "NaOH" },
  { name: "sel de cuisine", formula: "NaCl" },
  { name: "chlorure de sodium", formula: "NaCl" },
  { name: "acide chlorhydrique", formula: "HCl" },
  { name: "chlorure d'hydrogène", formula: "HCl" },
  { name: "chlorure de potassium", formula: "KCl" },
  { name: "ammoniac", formula: "NH3" },
  { name: "permanganate de potassium", formula: "KMnO4" },
  { name: "dioxyde de manganèse", formula: "MnO2" },
  { name: "peroxyde d'hydrogène", formula: "H2O2" },
  { name: "eau oxygénée", formula: "H2O2" },
  { name: "acide acétique", formula: "CH3COOH" },
  { name: "acide éthanoïque", formula: "CH3COOH" },
  { name: "nitrate de potassium", formula: "KNO3" },
  { name: "nitrate d'argent", formula: "AgNO3" },
  { name: "acide nitrique", formula: "HNO3" },
  { name: "acide nitreux", formula: "HNO2" },
  { name: "acide hypochloreux", formula: "HClO" },
  { name: "acide phosphorique", formula: "H3PO4" },
  { name: "dioxyde de souffre", formula: "SO2" },
  { name: "dioxyde de carbone", formula: "CO2" },
  { name: "thiosulfate de sodium", formula: "Na2S2O3" },
  { name: "sulfate de cuivre", formula: "CuSO4" },
  { name: "carbonate de calcium", formula: "CaCO3" },
  { name: "dichromate de potassium", formula: "K2Cr2O7" },
  { name: "ion hydroxyde", formula: "HO−" },
  { name: "ion oxonium", formula: "H3O+" },
  { name: "ion ammonium", formula: "NH4+" },
  { name: "ion nitrate", formula: "NO3−" },
  { name: "ion nitrite", formula: "NO2−" },
  { name: "ion sulfate", formula: "SO4 2−" },
  { name: "ion sulfite", formula: "SO3 2−" },
  { name: "ion thiosulfate", formula: "S2O3 2−" },
  { name: "ion peroxodisulfate", formula: "S2O8 2−" },
  { name: "ion tétrathionate", formula: "S4O6 2−" },
  { name: "ion carbonate", formula: "CO3 2−" },
  { name: "ion hypochlorite", formula: "ClO−" },
  { name: "ion permanganate", formula: "MnO4−" },
  { name: "ion chromate", formula: "CrO4 2−" },
  { name: "ion dichromate", formula: "Cr2O7 2−" },
  { name: "ion phosphate", formula: "PO4 3−" },
  { name: "ion fer (II)", formula: "Fe2+" },
  { name: "ion ferreux", formula: "Fe2+" },
  { name: "ion fer (III)", formula: "Fe3+" },
  { name: "ion ferrique", formula: "Fe3+" }
];

// Sélection aléatoire du terme pour la question actuelle
let currentTerm = {};
let currentQuestionType = ""; // Stocke si la question est sur le nom ou le symbole

// Sélection d'un terme aléatoire et détermination de la question (nom ou symbole)
function getRandomTerm() {
  currentTerm = chemicalTerms[Math.floor(Math.random() * chemicalTerms.length)];
  
  // Choisir aléatoirement si la question est posée sur le nom ou sur le symbole
  if (Math.random() > 0.5) {
    // Question sur le nom (réponse attendue : symbole)
    document.getElementById("french-term").textContent = `Quel est le symbole de : ${currentTerm.name} ?`;
    currentQuestionType = "name";
  } else {
    // Question sur le symbole (réponse attendue : nom complet)
    document.getElementById("french-term").textContent = `Quel est le nom du composé pour : ${currentTerm.formula} ?`;
    currentQuestionType = "formula";
  }
}

// Vérification de la réponse de l'utilisateur
function checkAnswer() {
  const userAnswer = document.getElementById("user-input").value.trim().toLowerCase();

  let correctAnswer;
  if (currentQuestionType === "name") {
    // Si la question est sur le nom, la bonne réponse est le symbole
    correctAnswer = currentTerm.formula.toLowerCase();
  } else {
    // Si la question est sur le symbole, la bonne réponse est le nom
    correctAnswer = currentTerm.name.toLowerCase();
  }

  if (userAnswer === correctAnswer) {
    document.getElementById("result").textContent = "Correct !";
    document.getElementById("result").style.color = "green";
  } else {
    document.getElementById("result").textContent = `Incorrect ! La bonne réponse est : ${correctAnswer}`;
    document.getElementById("result").style.color = "red";
  }

  document.getElementById("user-input").value = ""; // Réinitialiser le champ de saisie
  getRandomTerm(); // Passer au terme suivant automatiquement après vérification
}

// Ajouter des écouteurs d'événements
document.getElementById("check-answer").addEventListener("click", checkAnswer);
window.addEventListener("load", getRandomTerm);
