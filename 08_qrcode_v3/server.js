import express from 'express';
import bodyParser from 'body-parser';
import qr from 'qr-image';
import path from 'path';
import { fileURLToPath } from "url";
import fs from 'fs';
import slug from 'slug';

const app = express();
const PORT = 3000;
//
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
//
app.use(bodyParser.urlencoded({ extended: true }));
//Definir le dossier public pour les fichier statiques (CSS)
app.use(express.static(path.join(__dirname, 'public')));
//Definir le moteur de template à utiliser (EJS)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.get('/', (req, res) => {
    res.render('index');
});


app.post('/generate', (req, res) => {
    // const siteName = req.body.siteName;
    // const url = req.body.url;
    const { siteName, url } = req.body;

if(!siteName.trim() || !url.trim()){
    // res.render('index', { error: 'Please fill in all fields' });
    return res.send('<h4>Veuillez remplir tous les champs!</h4>');
}
//Generer le code qr en PNG:
// const qrPath = path.join(__dirname, 'public', 'rqcodes/qrcode.png');
//generer un nom d'image a partir du nom du site
const imageName = `${slug(siteName)}.png`;
const qrPath = `public/qrcodes/${imageName}`;
const qrImage = qr.image(url, { type: 'png' });
qrImage.pipe(fs.createWriteStream(qrPath));
//Attendre que le fichier soit crée:
qrImage.on('end', () => {
    res.render('show',{ siteName, qrPath: `/qrcodes/${imageName}` });
})
    

});

if(!fs.existsSync('public/qrcodes')){
    fs.mkdirSync('public/qrcodes');
}

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});