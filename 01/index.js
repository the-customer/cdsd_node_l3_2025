const fs = require('fs');


// Creation de fichier:
// const fileName = "monFichier.txt";
// const msg = "Voici un exemple de message";
// function func(error){
//     if(error) throw error;
//     console.log("fichier créé avec succès");
// }
// fs.writeFile(fileName,msg,func);

// ou

// fs.writeFile("monFichier1.txt","Voici un exemple de message",error => {
//     if(error) throw error;
//     console.log("fichier créé avec succès");
// });

// Lecture de fichier :

fs.readFile("monFichier.txt","utf-8", (error, data) => {
    if(error) throw error;
    console.log(data);
})