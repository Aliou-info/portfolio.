 // Sélectionne l'icône et le menu
 const menuToggle = document.getElementById("ter");
 const menu = document.querySelector(".menu");
 menuToggle.addEventListener("click", () => {
     menu.classList.toggle("active"); 
 });


// ***formulaire****

let form = document.getElementById("Form");

let erreur = document.getElementById("erreur");
let succes = document.getElementById("succes");
form.addEventListener("submit", function(event) {
    event.preventDefault();
    
    let prenom = document.getElementById("prenom").value.trim();
    let nom = document.getElementById("nom").value.trim();
    let email = document.getElementById("email").value.trim();
    let mdp = document.getElementById("mdp").value.trim();

    
    erreur.textContent = "";
    succes.textContent = "";

    
    let nameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ]+$/;

    if (prenom === "") {
        erreur.textContent = "Le prénom est requis.";
        return;
    }

    if (!nameRegex.test(prenom)) {
        erreur.textContent = "Le prénom ne doit contenir que des lettres.";
        return;
    }

    if (nom === "") {
        erreur.textContent = "Le nom est requis.";
        return;
    }

    if (!nameRegex.test(nom)) {
        erreur.textContent = "Le nom ne doit contenir que des lettres.";
        return;
    }

    if (email === "") {
        erreur.textContent = "L'email est requis.";
        return;
    }

    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        erreur.textContent = "L'email n'est pas valide.";
        return;
    }

    if (mdp === "") {
        erreur.textContent = "Le mot de passe est requis.";
        return;
    }

    
    succes.textContent = "Formulaire soumis avec succès !";
    form.reset();
});