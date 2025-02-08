import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';


inquirer
.prompt([
    {
        message: "Entrer l'url du site  :",
        name: "url"
    }
])
.then((rep)=>{
    const {url} = rep;
    //avoir dans une variale l'image du qr code:
    const qr_png = qr.image(url, { type: 'png' });
    //ecriture dans un fichier
    qr_png.pipe(fs.createWriteStream('qr-code.png'));
})
.catch((err)=>{
    console.log(err);
})