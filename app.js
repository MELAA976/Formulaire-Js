//selection des elements
let npNom = document.querySelector("#name"); //selection du input nom
let npPrenom = document.querySelector("#firstname"); //selection du input Prenom
let npPseudo = document.querySelector("#pseudo"); //selection du input pseudo
let npEmail = document.querySelector("#mail"); //selection du input mail
let npMessge = document.querySelector("#textMessage"); //selection du input message
let npCheck = document.querySelector("#acceptCondi"); //selection du checkbox
let npEnvoi = document.querySelector("#btnEnvo"); //selection du boutton envoi
let divErr = document.querySelector(".msgRtr"); //selection du div des messages d'erreur

//les tests des caractères
const testLettre = /[^A-z/g]/; //test des lettres
const testChifLtr = /[/\w/g]/; // test des chiffres et Lettres
const testCaraSp = /[/\W/g]/; //test caractère spéciaux
const testMail = /^[^@]+@[^@]+.[^@]+$/; //test du mail

const objectOK = {}; 

//fonction de verification de d'absence de saissie
let champsVide = (inp) => {
  valide = false;
  if (inp.value.split(" ").join("").replace(",", "").length > 0) {
    valide = true;
  } else {
    valide = false;
  }
  return valide;
};

//fonction de verification d'abscance de caractère spiciaux et de chiffre
let testNp = (Np) => {
  if (champsVide(Np) == false) {
    Np.style.backgroundColor = "red";
    Np.nextElementSibling.innerText = "veuillez remplir ce champs";
  } else if (champsVide(Np) == true && testLettre.test(Np.value) == true) {
    Np.style.backgroundColor = "red";
    Np.nextElementSibling.innerText = "Caractère interdit";
  } else if (champsVide(Np) == true && testLettre.test(Np.value) == false) {
    Np.style.backgroundColor = "green";
    Np.nextElementSibling.innerText = "";
  }
};

//fonction pour le test du checkbox
let validCheck = (check) => {
  if (check.checked == false) {
    check.style.backgroundColor = "red";
    check.previousElementSibling.innerText = "veuillez accepter les conditions";
  } else {
    check.previousElementSibling.innerText = "";
  }
};

// fonction verification de champs vide avec retour de message
let verifRetour = (nPM, message) => {
  if (champsVide(nPM) == false) {
    nPM.style.backgroundColor = "red";
    nPM.nextElementSibling.innerText = message;
  } else {
    nPM.style.backgroundColor = "green";
    nPM.nextElementSibling.innerText = "";
  }
};
//fonction test du mail valide
let mailValid = (mail) => {
  if (champsVide(mail) == false) {
    mail.style.backgroundColor = "red";
    mail.nextElementSibling.innerText = "veuillez remplir ce champs";
  } else if (champsVide(mail) == true && testMail.test(mail.value) == false) {
    mail.style.backgroundColor = "red";
    mail.nextElementSibling.innerText = " Addresse Mail Invalide";
  } else if (champsVide(mail) == true && testMail.test(npEmail.value) == true) {
    mail.style.backgroundColor = "green";
    mail.nextElementSibling.innerText = "";
  }
};

npEnvoi.addEventListener("click", () => {
  testNp(npNom); //test du nom
  testNp(npPrenom); //test du prenom
  champsVide(npPseudo); //test du pseudo
  validCheck(npCheck); //test du checkbox
  verifRetour(npPseudo, "Veuillez Entrer votre pseudo"); //test du pseudo
  verifRetour(npMessge, "Veuillez Entrer votre message"); //test du message
  mailValid(npEmail); //test du mail

  /*objectOK.nom = npNom.value;
  objectOK.prenom = npPrenom.value;
  objectOK.pseudo = npPseudo.value;
  objectOK.mail = npEmail.value;
  objectOK.message = npMessge.value;
  objectOK.check = npCheck.value;*/
});
