function recupInfos() {
    var lastName = document.getElementById("lastName").value;
    var firstName = document.getElementById("firstName").value;
    var city = document.getElementById("city").value;
    alert("Bonjour, " + firstName + " " + lastName + " de " + city);
}

// recupInfos pour linker avec l'id du bouton dans le HTML.
// Faire attention à la synthaxe !
// Les parenthèses au recapInfos() sont obligatoire dans une optique de bonne pratique.
// var, l'id (où le name) de l'élément HTML en question, = (signifie "stock la valeur de ..." et non pas "est égal à ..."), document.getElementById comme son nom l'indique est linké à l'id de l'élément en question, ("lastName") pour citer l'id dont on veut récupérer la donnée, .value pour ordonner d'afficher sa valeur finale après remplissage par utilisateur.
// alert pour créer une boîte de dialogue.