/// Déclaration de mon tableau Objet [{....},{....}------{....}]
                                //    val0   val1  ...   valN
const colors = [
    { bloc: '#FF5733', titre: '#FFFFFF' }, // Couleur 1
    { bloc: '#88EE33', titre: '#000000' }, // Couleur 2
    { bloc: '#F2AA33', titre: '#4B0082' }, // Couleur 3
    { bloc: '#589BC9', titre: '#FF0000' }, // Couleur 4
    { bloc: '#589A8D', titre: '#FFFF00' }, // Couleur 5
    { bloc: '#FF33A8', titre: '#008000' }, // Couleur 6
    { bloc: '#33FF57', titre: '#0000FF' }  // Couleur 7
];

// Variable pour suivre l'index de la couleur actuelle
let currentColorTab = 0;

//On Sélectionne tous les éléments avec la classe 'gridbloc' et 'titlebloc'
const divs = document.querySelectorAll('.gridbloc');
const titles = document.querySelectorAll('.titlebloc');

// L Fonction qui change les couleurs des divs et des titres
const changeCouleurs = () => {
    const currentColor = colors[currentColorTab];
    
    // On Applique les couleurs actuelles à tous les divs et titres
    divs.forEach((div, index) => {
        div.style.backgroundColor = currentColor.bloc;
        titles[index].style.color = currentColor.titre;
    });

    // On Incrémente l'index de la couleur actuelle, revient à 0 à la fin
    currentColorTab = (currentColorTab + 1) % colors.length;
};

// On Définit un intervalle pour appeler la fonction 'changeCouleurs' toutes les 2 secondes
setInterval(changeCouleurs, 2000);























// Déclaration de mon tableau Objet [{....},{....}------{....}]
                                //    val0   val1  ...   valN
/*const colors = [
    { bloc: '#FF5733', titre: '#FFFFFF' }, 
    { bloc: '#88EE33', titre: '#000000' }, 
    { bloc: '#F2AA33', titre: '#4B0082' }, 
    { bloc: '#589BC9', titre: '#FF0000' }, 
    { bloc: '#589A8D', titre: '#FFFF00' }, 
    { bloc: '#FF33A8', titre: '#008000' }, 
    { bloc: '#33FF57', titre: '#0000FF' }  
];


// Notre Variable pour suivre l'index de la couleur actuelle
let val = 0;

// Notre Fonction qui change les couleurs des divs et des titres
const changeCouleurs = () => {
    // On Sélectionne tous les éléments avec la classe 'gridbloc'
    const divs = document.querySelectorAll('.gridbloc');
    // On Sélectionne tous les éléments avec la classe 'titlebloc'
    const titrs = document.querySelectorAll('.titlebloc');

    // On Parcourt chaque div et applique la couleur de fond actuelle
    divs.forEach((e) => {
        e.style.backgroundColor = colors[val].bloc;
    });

    // On Parcourt chaque titre et applique la couleur de texte actuelle
    titrs.forEach((e) => {
        e.style.color = colors[val].titre;
    });

    // On Incrémente l'index de la couleur actuelle
    // On Réinitialise à 0 si on atteint la fin du tableau, pour un cycle continu
    val = (val + 1) % colors.length;
};

// On Définit un intervalle pour appeler la fonction 'changeCouleurs' toutes les 2 secondes (2000 millisecondes)
setInterval(changeCouleurs, 2000);*/