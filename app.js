
//selection des elements
let npNom = document.querySelector("#name") //selection du input nom
console.log(npNom)
let npPrenom = document.querySelector("#firstname") //selection du input Prenom
let npPseudo = document.querySelector("#pseudo") //selection du input Pseudo
let npEmail = document.querySelector("#mail") //selection du input E-mail
let npMessge = document.querySelector("#textMessage") //selection du input Message
let npCheck = document.querySelector("#acceptCondi") //selection du input checkbox
let npEnvoi = document.querySelector("#btnEnvo") //selection du input envoi

let objectOK = {

}


npEnvoi.addEventListener("click", () =>{
    console.log(npNom.value);
    objectOK.nom = npNom.value;
    console.log(objectOK);
} 
);