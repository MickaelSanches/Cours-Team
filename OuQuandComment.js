//! Point 1 sur HTML

//? 2. Déclaration de variables :
// Vous pouvez utiliser des variables pour stocker des données et les manipuler. Par exemple :

const nom = "John";
let age = 30;



//? 3. Opérateurs :
// Vous pouvez utiliser des opérateurs pour effectuer des opérations sur vos variables :

let somme = age + 5;  // somme vaut 35



//? 4. Structures de contrôle :
// Les structures de contrôle permettent d'ajouter de la logique à votre code. Par exemple, une déclaration conditionnelle :

if (age >= 18) {
    alert(nom + " est majeur.");
} else {
    alert(nom + " est mineur.");
}



//? 5. Fonctions :
// Vous pouvez encapsuler du code dans des fonctions pour le réutiliser. Par exemple, une fonction pour saluer :

function saluer() {
    alert("Bonjour, " + nom + " !");
}

// Appeler la fonction
saluer();



//? 6. Objets et tableaux :
// Utilisez des objets et des tableaux pour organiser et stocker des données. Par exemple, un objet représentant une personne :

const personne = { nom: "John", age: 30 };
    console.log(personne.nom);  // Affiche "John" dans la console



//? 7. Événements et gestionnaires d'événements :
// Attachez des gestionnaires d'événements pour répondre aux actions de l'utilisateur. Par exemple, un bouton avec un gestionnaire de clic :

const bouton = document.getElementById("monBouton");
    bouton.addEventListener("click", function() {
        alert("Bouton cliqué !");
    });



//? 8. DOM (Document Object Model) :
// Manipulez le DOM pour modifier le contenu et la structure de la page. Par exemple, changer le texte d'un élément :

document.getElementById("monParagraphe").innerHTML = "Nouveau texte";