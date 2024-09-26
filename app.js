// Liste des correspondances chimiques (en français => formule chimique)
const chemicalTerms = [
  { french: "soude ou hydroxyde de sodium", formula: "NaOH" },
  { french: "sel de cuisine ou chlorure de sodium", formula: "NaCl" },
  { french: "acide chlorhydrique (en solution) ou chlorure d’hydrogène (gaz)", formula: "HCl" },
  { french: "chlorure de potassium", formula: "KCl" },
  { french: "ammoniac", formula: "NH3" },
  { french: "permanganate de potassium", formula: "KMnO4" },
  { french: "dioxyde de manganèse", formula: "MnO2" },
  { french: "peroxyde d’hydrogène ou eau oxygénée (en solution)", formula: "H2O2" },
  { french: "acide acétique ou acide éthanoïque", formula: "CH3COOH" },
  { french: "nitrate de potassium", formula: "KNO3" },
  { french: "nitrate d’argent", formula: "AgNO3" },
  { french: "acide nitrique", formula: "HNO3" },
  { french: "acide nitreux", formula: "HNO2" },
  { french: "acide hypochloreux", formula: "HClO" },
  { french: "acide phosphorique", formula: "H3PO4" },
  { french: "dioxyde de souffre", formula: "SO2" },
  { french: "dioxyde de carbone", formula: "CO2" },
  { french: "thiosulfate de sodium", formula: "Na2S2O3" },
  { french: "sulfate de cuivre", formula: "CuSO4" },
  { french: "carbonate de calcium (calcaire)", formula: "CaCO3" },
  { french: "dichromate de potassium", formula: "K2Cr2O7" },
  // Ions
  { french: "ion hydroxyde", formula: "HO−" },
  { french: "ion oxonium", formula: "H3O+" },
  { french: "ion ammonium", formula: "NH4+" },
  { french: "ion nitrate", formula: "NO3−" },
  { french: "ion nitrite", formula: "NO2−" },
  { french: "ion sulfate", formula: "SO4 2−" },
  { french: "ion sulfite", formula: "SO3 2−" },
  { french: "ion thiosulfate", formula: "S2O3 2−" },
  { french: "ion peroxodisulfate", formula: "S2O8 2−" },
  { french: "ion tétrathionate", formula: "S4O6 2−" },
  { french: "ion carbonate", formula: "CO3 2−" },
  { french: "ion hypochlorite", formula: "ClO−" },
  { french: "ion permanganate", formula: "MnO4−" },
  { french: "ion chromate", formula: "CrO4 2−" },
  { french: "ion dichromate", formula: "Cr2O7 2−" },
  { french: "ion phosphate", formula: "PO4 3−" },
  { french: "ion fer (II) ou ferreux", formula: "Fe2+" },
  { french: "ion fer (III) ou ferrique", formula: "Fe3+" }
];

// Fonction pour choisir un terme chimique aléatoire
function getRandomTerm() {
  const randomIndex = Math.floor(Math.random() * chemicalTerms.length);
  return chemicalTerms[randomIndex];
}

// Références aux éléments du DOM
const frenchTermElement = document.getElementById("french-term");
const userInputElement = document.getElementById("user-input");
const checkAnswerButton = document.getElementById("check-answer");
const resultElement = document.getElementById("result");

// Variable pour stocker le terme actuel
let currentTerm;

// Fonction pour afficher un terme chimique aléatoire
function displayRandomTerm() {
  currentTerm = getRandomTerm();
  frenchTermElement.textContent = currentTerm.french;
  userInputElement.value = "";
  resultElement.textContent = "";
}

// Vérification de la réponse de l'utilisateur
checkAnswerButton.addEventListener("click", () => {
  const userAnswer = userInputElement.value.trim();
  if (userAnswer.toUpperCase() === currentTerm.formula.toUpperCase()) {
    resultElement.textContent = "Bonne réponse ! 🎉";
    resultElement.style.color = "green";
  } else {
    resultElement.textContent = `Faux. La bonne réponse est : ${currentTerm.formula}`;
    resultElement.style.color = "red";
  }
});

// Afficher un terme aléatoire au chargement de la page
displayRandomTerm();
