// Tableau pour stocker les tâches
const tasks = [];

// Fonction pour ajouter une tâche
function ajouterTache() {
    const newTaskInput = document.getElementById("newTask");
    const taskList = document.getElementById("taskList");

    // Récupérer la valeur de l'input
    const taskText = newTaskInput.value;

    if (taskText.trim() !== "") {
        // Ajouter la tâche au tableau
        tasks.push({ text: taskText, complete: false });

        // Mettre à jour l'affichage
        afficherTaches();

        // Effacer le champ de saisie
        newTaskInput.value = "";
    }
}

// Fonction pour afficher les tâches
function afficherTaches() {
    const taskList = document.getElementById("taskList");
    // Effacer la liste actuelle
    taskList.innerHTML = "";

    // Parcourir le tableau des tâches et les afficher
    for (let i = 0; i < tasks.length; i++) {
        const taskItem = document.createElement("li");
        taskItem.className = "task";
        
        // Vérifier si la tâche est complète
        if (tasks[i].complete) {
            taskItem.className += " complete";
        }

        // Ajouter le texte de la tâche
        taskItem.appendChild(document.createTextNode(tasks[i].text));

        // Ajouter un bouton pour marquer la tâche comme complète
        const completeButton = document.createElement("button");
        completeButton.innerHTML = "Complète";
        completeButton.onclick = (function(index) {
            return function() {
                // Inverser l'état de complétion de la tâche
                tasks[index].complete = !tasks[index].complete;
                // Mettre à jour l'affichage
                afficherTaches();
            };
        })(i);

        // Ajouter un bouton pour supprimer la tâche
        const deleteButton = document.createElement("button");
        deleteButton.innerHTML = "Supprimer";
        deleteButton.onclick = (function(index) {
            return function() {
                // Supprimer la tâche du tableau
                tasks.splice(index, 1);
                // Mettre à jour l'affichage
                afficherTaches();
            };
        })(i);

        // Ajouter les boutons à l'élément de tâche
        taskItem.appendChild(completeButton);
        taskItem.appendChild(deleteButton);

        // Ajouter l'élément de tâche à la liste
        taskList.appendChild(taskItem);
    }
}