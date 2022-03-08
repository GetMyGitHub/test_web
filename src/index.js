// On vérifie si le navigateur prend en charge
// l'élément HTML template en vérifiant la présence
// de l'attribut content pour l'élément template.
if ("content" in document.createElement("template")) {

    // On prépare une ligne pour le tableau
    var template = document.querySelector("#productrow");
  
    // On clone la ligne et on l'insère dans le tableau
    var tbody = document.querySelector("tbody");
    var clone = document.importNode(template.content, true);
    var td = clone.querySelectorAll("td");
    td[0].textContent = "1235646565";
    td[1].textContent = "Stuff";
  
    tbody.appendChild(clone);
  
    // On fait de même pour une autre ligne
    var clone2 = document.importNode(template.content, true);
    td = clone2.querySelectorAll("td");
    td[0].textContent = "0384928528";
    td[1].textContent = "Acme Kidney Beans";
  
    // Puis on insère
    tbody.appendChild(clone2);
  
  } else {
    // Une autre méthode pour ajouter les lignes
    // car l'élément HTML n'est pas pris en charge.
  }
  