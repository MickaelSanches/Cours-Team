//? 1. Variables et types de données :
// Déclaration de variables : En JavaScript, vous pouvez déclarer des variables avec `var`, `let` ou `const`.
// La différence principale entre eux réside dans la portée de la variable.

var x = 5;    // Ancienne façon de déclarer une variable (globale ou locale à la fonction)  <---------------------------------------NE S'UTILISE PLUS DUTOUT
let y = 10;   // Portée de bloc, introduite dans ECMAScript 6
const z = 15;  // Constante (ne peut pas être réaffectée)



// Types de données : JavaScript est un langage dynamiquement typé, ce qui signifie que le type de données d'une variable peut changer pendant l'exécution du programme.

const nombre = 5;           // Nombre entier (INTEGER/NUMBER)
const pi = 3.14;            // Nombre à virgule flottante (FLOAT)
const texte = "Bonjour";   // Chaîne de caractères (STRING)
const estVrai = true;       // Booléen 
const tableau = [1, 2, 3];   // Tableau (ARRAY)
const objet = { cle: "valeur" };  // Objet 




//? 2. Opérateurs :
// Les opérateurs sont des symboles spéciaux qui effectuent des opérations sur des variables ou des valeurs.

const somme = 5 + 10;
const difference = 10 - 5;
const produit = 2 * 3;
const quotient = 8 / 2;



//? 3. Structures de contrôle :
// Les structures de contrôle permettent de prendre des décisions et de répéter des actions en fonction de conditions.

if (condition) {
    //! Code à exécuter si la condition est vraie
} else {
    //! Code à exécuter si la condition est fausse
}

for (let i = 0; i < 5; i++) {
    //! Code à répéter 5 fois
}

while (condition) {
    //! Code à répéter tant que la condition est vraie
}



//? 4. Fonctions :
// Les fonctions permettent d'encapsuler du code pour le réutiliser.

function additionner(a, b) {
    return a + b;
}

let resultat = additionner(2, 3);  // resultat vaut 5



//? 5. Objets et tableaux :
// Les objets et les tableaux sont des structures de données importantes.

// Objet
const personne = {
    nom: "John",
    age: 30 
    };

// Tableau
const fruits = ["pomme", "banane", "orange"];



//? 6. Événements et gestionnaires d'événements :
// JavaScript est largement utilisé pour rendre les pages web interactives en réagissant aux événements de l'utilisateur (clic, survol, etc.).

const bouton = document.getElementById("monBouton"); // (Selectionne un element avec l'id "monButton" dans l'HTML)
bouton.addEventListener("click", function () {      // Au clique sur ce bouton 
    alert("Bouton cliqué !");                       // une fenetre alert avec ecrit "bouton cliqué" s'ouvre
});


//? DOM (Document Object Model) :

// Le DOM représente la structure hiérarchique d'une page web, et JavaScript permet de manipuler dynamiquement le contenu et la structure de la page.
document.getElementById("monElement").innerHTML = "Nouveau contenu";
