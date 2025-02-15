const express = require('express');
const bodyParser = require('body-parser');
const qr = require('qr-image');

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

// Route pour afficher le formulaire:
app.get('/', (req, res) => {
    res.send(`
                <div style="display: flex; justify-content: center; align-items: center; height: 100vh; flex-direction: column;">
                    <h2 style="color: #008CBA; font-size: 2rem; margin-bottom: 1rem;">Generateur de QRCODE</h2>
                    <form action="/generate" method="post">
                    <label for="siteName">Nom du site:</label>
                    <input type="text" id="siteName" name="siteName"><br><br>
                    <label for="url">URL du site:</label>
                    <input type="text" id="url" name="url"><br><br>
                    <button style="color: #fff; background-color: #008CBA; border: none; padding: 0.5rem 1rem; cursor: pointer; font-size: 1rem; border-radius: 5px; transition: background-color 0.3s ease;" value=type="submit">Generer le QR Code</button>
                    </form>
                </div>
            `)
});

app.post('/generate', (req, res) => {
    const siteName = req.body.siteName;
    const url = req.body.url;
    if(siteName.trim() && url.trim()) {
        const qrPng = qr.image(url,{ type: 'png' });
        res.type('html');
        res.write(`<h2>QR CODE pour le site : ${siteName}</h2>`);
        res.write('<div>');
        qrPng.pipe(res);
        res.write('</div>');
    }else{
        res.send("Les champs sont vides!");
    }
})

app.listen(PORT, () => {
    console.log(`Le serveur est démarré sur le port ${PORT}`);
});